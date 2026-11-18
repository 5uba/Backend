const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    trainerName: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        min: 1
    },
    fees: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        enum: ["Online", "Offline"]
    }
});

module.exports = mongoose.model("Course", courseSchema);