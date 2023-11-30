const getSales = require("../../../api/salesCollection/getSales");
const salesCollection = require("../../../api/salesCollection/salesCollection");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/sales", verifyToken, salesCollection);
router.get("/sales", verifyToken, getSales);
module.exports = router;
