const { updateUserWithShopInfo } = require("../../../api/users/createUsers");
const getUserRoleByAdmin = require("../../../api/users/getUserRoleByAdmin");
const getUserRoleByManeger = require("../../../api/users/getUserRoleByManeger");

const router = require("express").Router();

router.put("/users/:email", updateUserWithShopInfo);
router.get("/users/admin/:email", getUserRoleByAdmin);
router.get("/users/maneger/:email", getUserRoleByManeger);
module.exports = router;
