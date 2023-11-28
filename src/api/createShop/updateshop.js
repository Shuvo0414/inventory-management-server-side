const Shop = require("../../models/shop");

const updateShop = async (req, res) => {
  const { shopId } = req.params;
  const { productLimit } = req.body;

  try {
    // Find the shop by ID
    const shop = await Shop.findById(shopId);

    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    // Update the productLimit
    shop.productLimit = productLimit;

    // Save the updated shop
    const updatedShop = await shop.save();

    res.status(200).json(updatedShop);
  } catch (error) {
    console.error("Error updating shop:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateShop;
