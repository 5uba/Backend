const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        enum: ["IT", "HR", "Sales"]
    },
    salary: {
        type: Number,
        min: 10000
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Employee", employeeSchema);