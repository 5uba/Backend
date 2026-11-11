
let products = [];

export const createProduct = (data) => {
    const product = {
        id: Date.now(),
        ...data
    };

    products.push(product);
    return product;
};

export const getAllProducts = () => {
    return products;
};

export const updateProduct = (id, data) => {
    const index = products.findIndex(
        (product) => product.id == id
    );

    if (index === -1) return null;

    products[index] = {
        ...products[index],
        ...data,
        id: products[index].id
    };

    return products[index];
};

export const deleteProduct = (id) => {
    const index = products.findIndex(
        (product) => product.id == id
    );

    if (index === -1) return null;

    return products.splice(index, 1);
};
