const Product = require("../../models/product");

const getProducts = async (req, res) => {
  const email = req.query.email;
  const query = { userEmail: email };
  const result = await Product.find(query);
  res.send(result);
};

module.exports = getProducts;
