import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { applyFormSchema } from "@/lib/apply-form";

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    console.error(`[apply] Missing required environment variable: ${name}`);
    return null;
  }
  return value;
}

function formatWhatsappNumber(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  if (trimmed.startsWith("+")) return trimmed;
  return `+91 ${trimmed}`;
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? null;
  }

  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    null
  );
}

function buildEmailBody(values: ReturnType<typeof applyFormSchema.parse>) {
  const lines = [
    "New WeDrip Apply Submission",
    "",
    `Full Name: ${values.name}`,
    `Email: ${values.email}`,
    `WhatsApp Number: ${formatWhatsappNumber(values.whatsapp)}`,
    `Instagram or YouTube Handle: ${values.social_handle}`,
    `Follower Band: ${values.follower_range}`,
    `Niche: ${values.niche}`,
    `Package Interest: ${values.package_interest}`,
    `Anything Else: ${values.message?.trim() || "Not provided"}`,
    `Link to Your Content: ${values.content_link?.trim() || "Not provided"}`,
    `Policy Acknowledged: ${values.policy_ack ? "Yes" : "No"}`,
  ];

  return lines.join("\n");
}

async function sendSubmissionEmail(values: ReturnType<typeof applyFormSchema.parse>) {
  const apiKey = getRequiredEnv("RESEND_API_KEY");
  const mailTo = getRequiredEnv("MAIL_TO");
  const mailFrom = getRequiredEnv("MAIL_FROM");
  const replyTo = getRequiredEnv("REPLY_TO");

  if (!apiKey || !mailTo || !mailFrom || !replyTo) {
    return { ok: false as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: mailFrom,
      to: [mailTo],
      reply_to: replyTo,
      subject: `New WeDrip Apply Submission — ${values.name}`,
      text: buildEmailBody(values),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[apply] Email send failed:", errorText);
    return { ok: false as const };
  }

  return { ok: true as const };
}

async function storeLeadSubmission(
  request: NextRequest,
  values: ReturnType<typeof applyFormSchema.parse>
) {
  const supabaseUrl = getRequiredEnv("SUPABASE_URL");
  const serviceRoleKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return false;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("lead_submissions").insert({
    full_name: values.name,
    email: values.email,
    whatsapp_number: formatWhatsappNumber(values.whatsapp),
    instagram_or_youtube: values.social_handle,
    follower_band: values.follower_range,
    niche: values.niche || null,
    package_interest: values.package_interest,
    message: values.message?.trim() || null,
    status: "new",
    source_page: "apply",
    ip_address: getClientIp(request),
    user_agent: request.headers.get("user-agent"),
  });

  if (error) {
    console.error("[apply] Supabase insert failed:", error);
    return false;
  }

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = applyFormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const emailResult = await sendSubmissionEmail(parsed.data);

    if (!emailResult.ok) {
      return NextResponse.json(
        { ok: false, error: "Failed to send submission email." },
        { status: 500 }
      );
    }

    const stored = await storeLeadSubmission(request, parsed.data);

    return NextResponse.json({ ok: true, stored });
  } catch (error) {
    console.error("[apply] Unexpected apply route error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send submission email." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405 }
  );
}
