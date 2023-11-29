const CheckOut = require("../../models/check-out");

const chekOut = async (req, res) => {
  try {
    const newProduct = new CheckOut(req.body);
    const savedProduct = await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = chekOut;
