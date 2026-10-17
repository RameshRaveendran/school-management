import { z } from "zod";



export const studentSchema = z.object({
  name: z.string().trim().min(1, "Student name is required"),
  age: z.number().int().min(1).max(120),
});

export function validateStudent(data: unknown) {
  return studentSchema.safeParse(data);
}