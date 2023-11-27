const { model, Schema } = require("mongoose");

const shopSchema = new Schema({
  shopName: { type: String },
  shopLogo: { type: String },
  shopInfo: { type: String },
  shopArea: { type: String },
  email: { type: String },

  productLimit: { type: Number },
});

const Shop = model("Shop", shopSchema);

module.exports = Shop;
