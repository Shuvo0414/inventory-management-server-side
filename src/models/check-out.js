const { model, Schema } = require("mongoose");

const checkOutSchema = new Schema({
  productName: { type: String },
  productLocation: { type: String },
  productQuantity: { type: Number },
  buyingPrice: { type: Number },
  profitMargin: { type: Number },
  discount: { type: Number },
  productDescription: { type: String },
  image: { type: String },
  shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
  shopName: { type: String },
  userEmail: { type: String },
  sellingPrice: { type: Number },
  addedDate: { type: Date, default: Date.now },
  saleCount: { type: Number, default: 0 },
  email: { type: String },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
});

const CheckOut = model("CheckOut", checkOutSchema);

module.exports = CheckOut;
