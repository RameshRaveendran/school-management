import { prisma } from "../lib/prisma.js";

export function createStudent(data: { name: string; age: number }) {
  return prisma.student.create({
    data,
  });
}
