
import express from "express";

import studentRoutes from "./routes/studentRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
