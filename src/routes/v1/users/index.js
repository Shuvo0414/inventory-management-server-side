const { updateUserWithShopInfo } = require("../../../api/users/createUsers");

const router = require("express").Router();

router.put("/users/:email", updateUserWithShopInfo);

module.exports = router;
