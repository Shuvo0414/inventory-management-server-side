const deleteProduct = require("../../../api/product/deleteProduct");
const getProductById = require("../../../api/product/getProductById");
const getProducts = require("../../../api/product/getProducts");
const products = require("../../../api/product/product");
const updateProduct = require("../../../api/product/updateProduct");

const router = require("express").Router();

router.post("/products", products);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
module.exports = router;
