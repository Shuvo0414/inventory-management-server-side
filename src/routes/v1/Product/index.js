const products = require("../../../api/product/product");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/products", verifyToken, products);

module.exports = router;
