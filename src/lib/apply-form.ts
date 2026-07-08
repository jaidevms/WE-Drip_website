import { z } from "zod";

export const applyFormSchema = z.object({
  name: z.string().min(1, "Required").max(100),
  email: z.string().email("Enter a valid email"),
  whatsapp: z.string().min(8, "Enter a valid number").max(20),
  social_handle: z.string().min(1, "Required").max(100),
  follower_range: z.enum(["under_50k", "50k_100k", "100k_500k", "500k_plus"], {
    message: "Select your audience size",
  }),
  niche: z.string().min(1, "Required").max(100),
  package_interest: z.enum(
    ["exclusive_drop", "standard", "full_service", "not_sure"],
    { message: "Select a package" }
  ),
  message: z.string().max(2000).optional(),
  content_link: z
    .union([z.literal(""), z.string().url()], { message: "Enter a valid URL" })
    .optional(),
  policy_ack: z.boolean().refine((value) => value === true, {
    message: "Please confirm you've read the policies",
  }),
});

export type ApplyFormValues = z.infer<typeof applyFormSchema>;
