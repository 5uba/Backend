// index.js
// Main entry point for the CRUD API

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import the Student model
const Student = require("./models/Student");

const app = express();

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());           // Allow cross-origin requests
app.use(express.json());   // Parse incoming JSON request bodies

// ─── Test Route ───────────────────────────────────────────────
// GET /  → confirms the API is running
app.get("/", (req, res) => {
  res.send("CRUD API is Working!");
});

// ─── CREATE ───────────────────────────────────────────────────
// POST /students  → Add a new student
app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Student created successfully",
      student: student,
    });
  } catch (error) {
    // Handle duplicate email error (MongoDB error code 11000)
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        details: error.message,
      });
    }
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

// ─── READ ALL ─────────────────────────────────────────────────
// GET /students  → Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      message: "Students fetched successfully",
      count: students.length,
      students: students,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

// ─── READ SINGLE ──────────────────────────────────────────────
// GET /students/:id  → Get one student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    // If no student found with that ID
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student fetched successfully",
      student: student,
    });
  } catch (error) {
    // Handle invalid MongoDB ObjectId format
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid Student ID format" });
    }
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

// ─── UPDATE ───────────────────────────────────────────────────
// PUT /students/:id  → Update a student by ID
app.put("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // new: return updated doc, runValidators: run schema rules
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student: student,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists. Please use a different email.",
      });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        details: error.message,
      });
    }
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid Student ID format" });
    }
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

// ─── DELETE ───────────────────────────────────────────────────
// DELETE /students/:id  → Delete a student by ID
app.delete("/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid Student ID format" });
    }
    res.status(500).json({ message: "Server Error", details: error.message });
  }
});

// ─── MongoDB Connection & Server Start ────────────────────────
// Connect to MongoDB first, then start the server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000, // Fail fast with a clear error (10 sec)
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    // Start the server ONLY after DB is connected
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:");
    console.error(error.message);
    process.exit(1); // Exit process if DB connection fails
  });
