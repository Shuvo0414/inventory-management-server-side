const User = require("../../models/users");

const getUserRoleByManeger = async (req, res) => {
  const email = req.params.email;

  // Check if the user from the token matches the requested email
  if (email !== req.user.email) {
    return res.status(403).send({ message: "forbidden access" });
  }

  const query = { email: email };
  const user = await User.findOne(query);
  let maneger = false;

  if (user) {
    maneger = user?.role === "maneger";
  }

  res.send({ maneger });
};

module.exports = getUserRoleByManeger;
