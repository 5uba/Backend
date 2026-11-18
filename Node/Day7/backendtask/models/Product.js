const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 1
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    brand: {
        type: String
    }
});

module.exports = mongoose.model("Product", productSchema);