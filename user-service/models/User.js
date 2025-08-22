const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  label: { type: String },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  country: { type: String }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  addresses: [addressSchema],
  preferences: {
    language: { type: String, default: "en" },
    currency: { type: String, default: "USD" }
  },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
