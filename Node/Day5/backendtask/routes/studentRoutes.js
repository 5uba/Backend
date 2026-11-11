
import express from "express";

import {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getAllStudents);
router.put("/", updateStudent);
router.delete("/", deleteStudent);

export default router;
