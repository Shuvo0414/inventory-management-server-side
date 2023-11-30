const getSales = require("../../../api/salesCollection/getSales");
const salesCollection = require("../../../api/salesCollection/salesCollection");

const router = require("express").Router();

router.post("/sales", salesCollection);
router.get("/sales", getSales);
module.exports = router;
