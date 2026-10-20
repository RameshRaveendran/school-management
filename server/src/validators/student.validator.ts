import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().trim().min(1, "Student name is required"),
  age: z.number().int().min(1).max(120),
});

export const updateStudentSchema = studentSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    "At least one field must be provided",
  );

export function validateStudent(data: unknown) {
  return studentSchema.safeParse(data);
}

export function validateStudentUpdate(data: unknown) {
  return updateStudentSchema.safeParse(data);
}