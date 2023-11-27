const createShop = require("../../../api/createShop/creatShop");
const getShop = require("../../../api/createShop/getshop");

const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/creatShop", verifyToken, createShop);
router.get("/shop", verifyToken, getShop);

module.exports = router;
