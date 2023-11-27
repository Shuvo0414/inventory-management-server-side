const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  role: { type: String }, // Default value set to 'user'
  shopName: { type: String }, // New field for shop name
  shopLogo: { type: String }, // New field for shop logo
  shopId: { type: String }, // New field for shop ID
});

const User = model("User", userSchema);

module.exports = User;
