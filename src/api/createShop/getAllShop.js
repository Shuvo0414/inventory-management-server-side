const Shop = require("../../models/shop");

const getAllShop = async (req, res) => {
  console.log(req);
  const result = await Shop.find();
  res.send(result);
};

module.exports = getAllShop;
