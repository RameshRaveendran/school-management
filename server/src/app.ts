import express from "express";

const app = express();

import { validateStudent } from "./validators/student.validator.js";

// middleware
app.use(express.json());

app.post("/api/students", (req, res) => {
  const { name, age } = req.body ?? {};

  const error = validateStudent(name, age);

  if (error) {
    res.status(400).json({ error });
    return;
  }

  res.status(201).json({
    message: "Student data accepted",
    student: {
      name: (name as string).trim(),
      age: age as number,
    },
  });
});

export default app;
