
import * as productService from "../services/productService.js";

export const createProduct = (req, res) => {
    const product = productService.createProduct(req.body);

    res.status(201).json({
        message: "Product created successfully",
        data: product
    });
};

export const getAllProducts = (req, res) => {
    res.status(200).json({
        data: productService.getAllProducts()
    });
};

export const updateProduct = (req, res) => {
    const { id, ...data } = req.body;

    const product = productService.updateProduct(id, data);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json({
        message: "Product updated successfully",
        data: product
    });
};

export const deleteProduct = (req, res) => {
    const { id } = req.body;

    const product = productService.deleteProduct(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json({
        message: "Product deleted successfully"
    });
};
