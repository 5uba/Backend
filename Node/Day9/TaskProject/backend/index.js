require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas (CRUD database)"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

app.post("/tasks", async (req, res) => {
  const { task } = req.body;

  if (!task || task.trim() === "") {
    return res.status(400).json({ error: "Task field is required." });
  }

  try {
    const newTask = new Task({ task: task.trim() });
    await newTask.save();
    res.status(201).json({ message: "Task saved successfully!", data: newTask });
  } catch (err) {
    res.status(500).json({ error: "Failed to save task: " + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
