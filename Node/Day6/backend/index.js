import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoute from './routes/dataRoutes.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/data",dataRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server successfully connected http://localhost:${PORT}`);
});

// http://localhost:5000/api/data