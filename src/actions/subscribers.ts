"use client";

import { subscriberSchema } from "@/lib/validations/contact";

export async function subscribeNewsletter(email: string) {
  const result = subscriberSchema.safeParse({ email });
  if (!result.success) {
    return { success: false, error: "Invalid email format." };
  }

  try {
    // In production database mode:
    // await prisma.subscriber.create({ data: { email: result.data.email } });
    console.log("Adding newsletter subscriber to DB:", result.data.email);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to subscribe." };
  }
}
