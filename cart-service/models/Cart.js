const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true, default: 1 },
  variant: {
    color: { type: String },
    size: { type: String }
  },
  priceSnapshot: { type: Number, required: true }
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  items: [cartItemSchema]
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
