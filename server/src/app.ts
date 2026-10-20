import express from "express";
import {
  validateStudent,
  validateStudentUpdate,
} from "./validators/student.validator.js";
import { prisma } from "./lib/prisma.js";

const app = express();

app.use(express.json());

// get all students
app.get("/api/students", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();

    res.status(200).json({
      count: students.length,
      students,
    });
  } catch (error) {
    next(error);
  }
});

//get students by ID
app.get("/api/students/:id", async (req, res, next) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: "Student ID must be a positive Number",
    });
    return;
  }

  try {
    const student = await prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      res.status(404).json({
        error: "No Students found in the given ID number!",
      });
      return;
    }

    res.status(200).json({ student });
  } catch (error) {
    next(error);
  }
});

//get students by name

//post method for save the students
app.post("/api/students", async (req, res, next) => {
  const result = validateStudent(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid student data",
      details: result.error.issues,
    });
    return;
  }

  try {
    const student = await prisma.student.create({
      data: result.data,
    });

    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    next(error);
  }
});

export default app;
