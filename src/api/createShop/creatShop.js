const Shop = require("../../models/shop");

const createShop = async (req, res) => {
  console.log(req.body);
  try {
    // Check if the user has already created a shop
    const existingShop = await Shop.findOne({ email: req.user.email });
    if (existingShop) {
      return res.status(400).json({ error: "User can create only one shop" });
    }

    // Create a new shop
    const newShopData = {
      shopName: req.body.shopName,
      shopLogo: req.body.shopLogo,
      shopInfo: req.body.shopInfo,
      shopArea: req.body.shopLocation,
      email: req.user.email,

      productLimit: req.body.productLimit,
    };

    const newShop = new Shop(newShopData);
    await newShop.save();

    // Send a success response
    res
      .status(201)
      .json({ message: "Shop created successfully", shop: newShop });
  } catch (error) {
    console.error("Error creating shop:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createShop;
