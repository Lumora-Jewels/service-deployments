const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  color: { type: String },
  size: { type: String },
  material: { type: String }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  SKU: { type: String, unique: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  stock: { type: Number, required: true },
  variants: [variantSchema],
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  images: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
