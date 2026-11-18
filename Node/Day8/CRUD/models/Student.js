

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    age: {
      type: Number,
      min: [18, "Age must be at least 18"],
    },
    course: {
      type: String,
      default: "MERN",
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
