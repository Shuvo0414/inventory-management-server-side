const createShop = require("../../../api/createShop/creatShop");
const getAllShop = require("../../../api/createShop/getAllShop");
const getShop = require("../../../api/createShop/getshop");
const updateShop = require("../../../api/createShop/updateshop");

const router = require("express").Router();

router.post("/creatShop", createShop);
router.get("/shop", getShop);
router.patch("/shop/:shopId", updateShop);
router.get("/getAllShops", getAllShop);

module.exports = router;
