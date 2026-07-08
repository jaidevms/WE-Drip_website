"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Magnetic } from "@/components/Magnetic";
import { applyFormSchema, type ApplyFormValues } from "@/lib/apply-form";
import { cn } from "@/lib/utils";

const PACKAGE_PARAM_MAP: Record<string, ApplyFormValues["package_interest"]> = {
  "exclusive-drop": "exclusive_drop",
  standard: "standard",
  "full-service": "full_service",
};

const FOLLOWER_OPTIONS = [
  { value: "under_50k", label: "Under 50K" },
  { value: "50k_100k", label: "50K – 100K" },
  { value: "100k_500k", label: "100K – 500K" },
  { value: "500k_plus", label: "500K+" },
] as const;

const PACKAGE_OPTIONS = [
  { value: "exclusive_drop", label: "Exclusive Drop" },
  { value: "standard", label: "Standard" },
  { value: "full_service", label: "Full Service" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

const fieldClassName =
  "h-auto rounded-[4px] border-2 border-brand-gray-line bg-transparent px-4 py-4 text-base text-brand-black placeholder:text-brand-gray-text/60 focus-visible:border-brand-black focus-visible:ring-0 transition-colors";

const labelClassName =
  "font-mono text-[11px] uppercase tracking-wide text-brand-gray-text";

type ApplyFormProps = {
  onSubmitSuccess: () => void;
};

export function ApplyForm({ onSubmitSuccess }: ApplyFormProps) {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBeamHovered, setIsBeamHovered] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const packageParam = searchParams.get("package");
  const prefilledPackage = packageParam
    ? PACKAGE_PARAM_MAP[packageParam]
    : undefined;

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      social_handle: "",
      follower_range: undefined,
      niche: "",
      package_interest: prefilledPackage,
      message: "",
      content_link: "",
      policy_ack: false,
    },
  });

  async function onSubmit(values: ApplyFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setSubmitError(result.error ?? "Failed to submit your application.");
        return;
      }

      onSubmitSuccess();
    } catch {
      setSubmitError("Failed to submit your application.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <BlurFade delay={0 * 0.04}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={1 * 0.04}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Email <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={2 * 0.04}>
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  WhatsApp Number <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <div className="flex">
                    <span
                      aria-hidden="true"
                      className="flex shrink-0 items-center justify-center rounded-l-[4px] border-2 border-r-0 border-brand-gray-line bg-brand-gray-line/20 px-4 font-mono text-base text-brand-gray-text"
                    >
                      +91
                    </span>
                    <Input
                      type="tel"
                      placeholder="Your number"
                      className={cn(fieldClassName, "rounded-l-none")}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={3 * 0.04}>
          <FormField
            control={form.control}
            name="social_handle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Instagram or YouTube Handle{" "}
                  <span className="text-brand-gray-text/60">(any one)</span>{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="@yourhandle or channel name"
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={4 * 0.04}>
          <FormField
            control={form.control}
            name="follower_range"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Follower Count <span className="text-destructive">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        fieldClassName,
                        "w-full justify-between data-placeholder:text-brand-gray-text/60"
                      )}
                    >
                      <SelectValue placeholder="Select your audience size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {FOLLOWER_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={5 * 0.04}>
          <FormField
            control={form.control}
            name="niche"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Niche <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Fitness, Tamil comedy, gaming, etc."
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={6 * 0.04}>
          <FormField
            control={form.control}
            name="package_interest"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Package Interest <span className="text-destructive">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        fieldClassName,
                        "w-full justify-between data-placeholder:text-brand-gray-text/60"
                      )}
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PACKAGE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={7 * 0.04}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>Anything Else</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Tell us anything that helps us tailor our reply..."
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={8 * 0.04}>
          <FormField
            control={form.control}
            name="content_link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClassName}>
                  Link to Your Content{" "}
                  <span className="text-brand-gray-text/60">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="youtube.com/yourchannel or instagram.com/yourhandle"
                    className={fieldClassName}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={9 * 0.04}>
          <FormField
            control={form.control}
            name="policy_ack"
            render={({ field }) => (
              <FormItem className="mt-2 space-y-0">
                <div className="flex flex-row items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5 rounded-[2px] border-brand-gray-line data-checked:border-brand-black data-checked:bg-brand-black"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-snug text-brand-gray-text">
                    I&apos;ve read the timeline (28 days), revision policy (3
                    free rounds), and Full Service profit-share terms (20%).{" "}
                    <span className="text-destructive">*</span>
                  </FormLabel>
                </div>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
        </BlurFade>

        <BlurFade delay={10 * 0.04}>
          <div className="relative mt-2">
            {submitError ? (
              <p className="mb-4 font-mono text-xs uppercase tracking-wide text-destructive">
                {submitError}
              </p>
            ) : null}
            <Magnetic>
              <Button
                type="submit"
                disabled={!form.formState.isValid || isSubmitting}
                onMouseEnter={() => setIsBeamHovered(true)}
                onMouseLeave={() => setIsBeamHovered(false)}
                className={cn(
                  "h-auto w-full justify-center gap-2 rounded-[4px] px-8 py-5 text-base font-bold uppercase tracking-wide transition-colors",
                  "bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black",
                  "disabled:bg-brand-gray-line disabled:text-brand-gray-text disabled:opacity-100 disabled:hover:bg-brand-gray-line"
                )}
              >
                {isSubmitting ? "Submitting…" : "Submit Application"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            {isBeamHovered && form.formState.isValid && !isSubmitting && (
              <BorderBeam size={80} duration={3} colorFrom="#fed400" colorTo="#0a0a0a" />
            )}
          </div>
        </BlurFade>
      </form>
    </Form>
  );
}
