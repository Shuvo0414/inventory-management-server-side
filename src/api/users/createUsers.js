const User = require("../../models/users");

const updateUserWithShopInfo = async (req, res) => {
  try {
    const email = req.params.email;
    const userData = {
      name: req.body.name,
      role: req.body.role,
      shopName: req.body.shopName,
      shopLogo: req.body.shopLogo,
      shopId: req.body.shopId,
    };

    const query = { email: email };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // Use the `findOneAndUpdate` method to either create or update the user
    const result = await User.findOneAndUpdate(query, userData, options);

    res.send({ message: "User updated with shop info", user: result });
  } catch (error) {
    console.error("Error updating user with shop info:", error);
    res.status(500).send({ error: "Internal Server Error", user: null });
  }
};

module.exports = { updateUserWithShopInfo };
