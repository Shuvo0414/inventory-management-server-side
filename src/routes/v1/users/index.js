const { updateUserWithShopInfo } = require("../../../api/users/createUsers");
const getUserRoleByAdmin = require("../../../api/users/getUserRoleByAdmin");
const getUserRoleByManeger = require("../../../api/users/getUserRoleByManeger");

const verifyToken = require("../../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/users/:email", updateUserWithShopInfo);
router.get("/users/admin/:email", verifyToken, getUserRoleByAdmin);
router.get("/users/maneger/:email", verifyToken, getUserRoleByManeger);
module.exports = router;
