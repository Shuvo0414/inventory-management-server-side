const {
  logout,
  createAuthCookie,
} = require("../../../api/authentication/controllers");

const router = require("express").Router();

router.post("/jwt", createAuthCookie);
router.post("/logout", logout);

module.exports = router;
