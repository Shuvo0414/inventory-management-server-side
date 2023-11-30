const deleteProduct = require("../../../api/product/deleteProduct");
const getProductById = require("../../../api/product/getProductById");
const getProducts = require("../../../api/product/getProducts");
const products = require("../../../api/product/product");
const updateProduct = require("../../../api/product/updateProduct");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/products", verifyToken, products);

router.get("/products", verifyToken, getProducts);
router.get("/products/:id", verifyToken, getProductById);

router.delete("/products/:id", verifyToken, deleteProduct);
router.put("/products/:id", verifyToken, updateProduct);
module.exports = router;
