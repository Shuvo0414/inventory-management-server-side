const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await Product.deleteOne(query);
  res.send(result);
};

module.exports = deleteProduct;
