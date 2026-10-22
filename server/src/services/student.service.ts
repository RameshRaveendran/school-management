import { prisma } from "../lib/prisma.js";

export function createStudent(data: { name: string; age: number }) {
  return prisma.student.create({
    data,
  });
}

export function getAllStudents() {
  return prisma.student.findMany();
}

export function getStudentById(id: number) {
  return prisma.student.findUnique({
    where: { id },
  });
}