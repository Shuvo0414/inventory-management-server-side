const SalesCollection = require("../../models/salesCollection");

const salesCollection = async (req, res) => {
  try {
    const newProduct = new SalesCollection(req.body);
    const savedProduct = await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = salesCollection;
