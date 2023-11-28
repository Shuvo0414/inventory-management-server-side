const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  role: { type: String },
  shopName: { type: String },
  shopLogo: { type: String },
  shopId: { type: String },
});

const User = model("User", userSchema);

module.exports = User;
