import express from "express";

const app = express();

// middleware
app.use(express.json());

app.post("/api/students", (req, res) => {
  const { name, age } = req.body ?? {};

  if (typeof name !== "string" || name.trim() === "") {
    res.status(400).json({
      error: "Student name is required",
    });
    return;
  }

  if (typeof age !== "number" || age < 1 || age > 120) {
    res.status(400).json({
      error: "Age must be a valid number",
    });
    return;
  }

  res.status(201).json({
    message: "Student data accepted",
    student: { name: name.trim(), age },
  });
});



export default app;
