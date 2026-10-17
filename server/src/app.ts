import express from "express";

const app = express();


app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "School Management API is running",
  });
});

export default app;