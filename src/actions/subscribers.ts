"use server";

import { subscriberSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/prisma";

export async function subscribeNewsletter(email: string) {
  const result = subscriberSchema.safeParse({ email });
  if (!result.success) {
    return { success: false, error: "Invalid email format." };
  }

  try {
    const subscriber = await prisma.subscriber.create({
      data: {
        email: result.data.email,
      },
    });
    console.log("Adding newsletter subscriber to DB:", subscriber);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to subscribe newsletter:", error);
    // Handle unique constraint check
    if (error.code === "P2002") {
      return { success: false, error: "This email is already subscribed." };
    }
    return { success: false, error: "Failed to subscribe." };
  }
}
