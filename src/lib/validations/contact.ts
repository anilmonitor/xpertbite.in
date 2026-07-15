import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits").optional().or(z.literal("")),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["Video Call", "Voice Call"]),
  date: z.string().min(1, "Date selection is required"),
  time: z.string().min(1, "Preferred time slot is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
});

export type BookingFormInput = z.infer<typeof bookingFormSchema>;

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  category: z.string().min(1, "Please select a project category"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
});

export type QuoteFormInput = z.infer<typeof quoteFormSchema>;

export const subscriberSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type SubscriberInput = z.infer<typeof subscriberSchema>;
