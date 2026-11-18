const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const Student = require("./models/Student");

const Employee = require("./models/Employee");

const Product = require("./models/Product");

const Course = require("./models/Course");

const JobApplication = require("./models/JobApplication");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


// TASK 1 - STUDENT MANAGEMENT

app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

app.post("/students/many", async (req, res) => {
    const students = await Student.insertMany(req.body);
    res.json(students);
});

app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/students/one", async (req, res) => {
    const student = await Student.findOne({ course: "MERN" });
    res.json(student);
});

app.get("/students/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// TASK 2 - EMPLOYEE MANAGEMENT

app.post("/employees", async (req, res) => {
    const employee = await Employee.create(req.body);
    res.json(employee);
});

app.post("/employees/many", async (req, res) => {
    const employees = await Employee.insertMany(req.body);
    res.json(employees);
});

app.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.get("/employees/it", async (req, res) => {
    const employees = await Employee.find({ department: "IT" });
    res.json(employees);
});

app.get("/employees/email/:email", async (req, res) => {
    const employee = await Employee.findOne({
        email: req.params.email
    });
    res.json(employee);
});


// TASK 3 - PRODUCT MANAGEMENT

app.post("/products", async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

app.post("/products/many", async (req, res) => {
    const products = await Product.insertMany(req.body);
    res.json(products);
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.get("/products/expensive", async (req, res) => {
    const products = await Product.find({
        price: { $gt: 1000 }
    });
    res.json(products);
});

app.get("/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// TASK 4 - COURSE MANAGEMENT

app.post("/courses", async (req, res) => {
    const course = await Course.create(req.body);
    res.json(course);
});

app.post("/courses/many", async (req, res) => {
    const courses = await Course.insertMany(req.body);
    res.json(courses);
});

app.get("/courses", async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.get("/courses/online", async (req, res) => {
    const courses = await Course.find({ mode: "Online" });
    res.json(courses);
});

app.get("/courses/one", async (req, res) => {
    const course = await Course.findOne({ mode: "Online" });
    res.json(course);
});

// TASK 5 - JOB APPLICATION MANAGEMENT

app.post("/applications", async (req, res) => {
    const application = await JobApplication.create(req.body);
    res.json(application);
});

app.post("/applications/many", async (req, res) => {
    const applications = await JobApplication.insertMany(req.body);
    res.json(applications);
});

app.get("/applications", async (req, res) => {
    const applications = await JobApplication.find();
    res.json(applications);
});

app.get("/applications/shortlisted", async (req, res) => {
    const applications = await JobApplication.find({
        status: "Shortlisted"
    });
    res.json(applications);
});

app.get("/applications/fresher", async (req, res) => {
    const applications = await JobApplication.find({
        experience: 0
    });
    res.json(applications);
});

app.get("/applications/:id", async (req, res) => {
    const application = await JobApplication.findById(req.params.id);
    res.json(application);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});