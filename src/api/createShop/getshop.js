const Shop = require("../../models/shop");

const getShop = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await Shop.find(query);
    res.send(result);
  } catch (error) {
    console.error("Error in getShop:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = getShop;
