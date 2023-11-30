const createShop = require("../../../api/createShop/creatShop");
const getAllShop = require("../../../api/createShop/getAllShop");
const getShop = require("../../../api/createShop/getshop");
const updateShop = require("../../../api/createShop/updateshop");
const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.post("/creatShop", verifyToken, createShop);
router.get("/shop", verifyToken, getShop);
router.patch("/shop/:shopId", verifyToken, updateShop);
router.get("/getAllShops", verifyToken, getAllShop);

module.exports = router;
