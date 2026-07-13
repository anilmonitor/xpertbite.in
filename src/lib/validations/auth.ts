import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid business email address"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  roleId: z.string().min(1, "Please select a user role"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
