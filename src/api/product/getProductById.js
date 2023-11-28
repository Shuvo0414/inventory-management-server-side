const Product = require("../../models/product");
const { ObjectId } = require("mongodb");
// Get a single product by _id
const getProductById = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await Product.findOne(query);
  res.send(result);
};
module.exports = getProductById;
