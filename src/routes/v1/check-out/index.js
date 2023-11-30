const chekOut = require("../../../api/check-out/check-out");
const deleteCart = require("../../../api/check-out/deleteCart");
const getCheckOutProduct = require("../../../api/check-out/getCheckOutProduct");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/checkout", verifyToken, chekOut);
router.get("/checkout", verifyToken, getCheckOutProduct);
router.delete("/checkout/:id", verifyToken, deleteCart);

module.exports = router;
