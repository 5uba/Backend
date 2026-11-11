
import * as studentService from "../services/studentService.js";

export const createStudent = (req, res) => {
    const student = studentService.createStudent(req.body);

    res.status(201).json({
        message: "Student created successfully",
        data: student
    });
};

export const getAllStudents = (req, res) => {
    res.status(200).json({
        data: studentService.getAllStudents()
    });
};

export const updateStudent = (req, res) => {
    const { id, ...data } = req.body;

    const student = studentService.updateStudent(id, data);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student updated successfully",
        data: student
    });
};

export const deleteStudent = (req, res) => {
    const { id } = req.body;

    const student = studentService.deleteStudent(id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student deleted successfully"
    });
};
