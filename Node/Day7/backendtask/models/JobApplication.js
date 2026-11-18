const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
    applicantName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["Applied", "Shortlisted", "Rejected"],
        default: "Applied"
    }
});

module.exports = mongoose.model("JobApplication", jobApplicationSchema);