"use client";

import { loginSchema } from "@/lib/validations/auth";

export async function resetPassword(email: string) {
  if (!email) {
    return { success: false, error: "Email is required." };
  }

  try {
    console.log("Sending password reset email to:", email);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send reset link." };
  }
}
