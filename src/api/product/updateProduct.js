const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const update = req.body;

  try {
    // Use findOneAndUpdate to update the product
    const result = await Product.findOneAndUpdate(query, update, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateProduct;
