const salesCollection = require("../../../api/salesCollection/salesCollection");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/sales", verifyToken, salesCollection);

module.exports = router;
