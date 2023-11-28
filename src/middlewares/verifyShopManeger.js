const User = require("../models/users");

const verifyManeger = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const user = await User.findOne(query);
  const isManeger = user?.role === "maneger";
  if (!isManeger) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyManeger;
