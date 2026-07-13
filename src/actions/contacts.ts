"use client";

import { contactFormSchema, bookingFormSchema, quoteFormSchema } from "@/lib/validations/contact";
import { toast } from "sonner";

// Since actions run on client and/or server, we provide a clean, type-safe client action fallback
// that will be updated to direct database writes when prisma migrates.
// This allows Phase 1 & 2 to run seamlessly out of the box with zero runtime errors.

export async function submitContactForm(data: any) {
  const result = contactFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }
  
  try {
    // In production database mode:
    // await prisma.contact.create({ data: result.data });
    console.log("Saving contact message to DB:", result.data);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to submit message." };
  }
}

export async function submitBookingForm(data: any) {
  const result = bookingFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    // In production database mode:
    // await prisma.booking.create({ data: result.data });
    console.log("Saving booking details to DB:", result.data);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to book meeting." };
  }
}

export async function submitQuoteForm(data: any) {
  const result = quoteFormSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  try {
    // In production database mode:
    // await prisma.quote.create({ data: result.data });
    console.log("Saving quote request to DB:", result.data);
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to submit quote request." };
  }
}
