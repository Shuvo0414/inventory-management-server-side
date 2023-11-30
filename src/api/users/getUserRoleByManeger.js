const User = require("../../models/users");

const getUserRoleByManeger = async (req, res) => {
  const email = req.params.email;

  const query = { email: email };
  const user = await User.findOne(query);
  let maneger = false;

  if (user) {
    maneger = user?.role === "maneger";
  }

  res.send({ maneger });
};

module.exports = getUserRoleByManeger;
