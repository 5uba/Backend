
const express = require("express");
const app = express();

app.use(express.json());

// TASK 1 - Student Registration API
app.post("/students", (req, res) => {

    const { name, email, course, age } = req.body;

    const student = {
        name: name,
        email: email,
        course: course,
        age: age
    };

    res.status(201).json({
        message: "Student registered successfully",
        student: student
    });

});

// TASK 2 - Student Profile API

const students = [
    { id: 1, name: "Subashini", course: "MERN Stack" },
    { id: 2, name: "Priya", course: "Java" },
    { id: 3, name: "Karthik", course: "Python" }
];

app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({
            message: "Student not found"
        });
    }

});

// SERVER
app.listen(5000, () => {
    console.log("Server running on port 5000");
});


// TASK 3 - Product Filter API

const products = [
    { id: 1, name: "Samsung", category: "mobile", price: 15000 },
    { id: 2, name: "iPhone", category: "mobile", price: 50000 },
    { id: 3, name: "Laptop", category: "electronics", price: 40000 },
    { id: 4, name: "Headphones", category: "electronics", price: 2000 },
    { id: 5, name: "Redmi", category: "mobile", price: 12000 }
];

app.get("/products", (req, res) => {

    const { category, minPrice, maxPrice } = req.query;

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(
            (p) => p.category === category
        );
    }

    if (minPrice) {
        filteredProducts = filteredProducts.filter(
            (p) => p.price >= Number(minPrice)
        );
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(
            (p) => p.price <= Number(maxPrice)
        );
    }

    res.json({
        message: "Filtered products",
        products: filteredProducts
    });

});
