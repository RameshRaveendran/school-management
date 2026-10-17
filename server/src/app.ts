import express from "express";

const app = express();

import { validateStudent } from "./validators/student.validator.js";

// middleware
app.use(express.json());

app.post("/api/students", (req, res) => {
  const result = validateStudent(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "Invalid student data",
      details: result.error.issues,
    });
    return;
  }

  res.status(201).json({
    message: "Student data accepted",
    student: result.data,
  });
});

export default app;
