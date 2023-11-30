const chekOut = require("../../../api/check-out/check-out");
const deleteCart = require("../../../api/check-out/deleteCart");
const getCheckOutProduct = require("../../../api/check-out/getCheckOutProduct");

const router = require("express").Router();

router.post("/checkout", chekOut);
router.get("/checkout", getCheckOutProduct);
router.delete("/checkout/:id", deleteCart);

module.exports = router;
