const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  priceSnapshot: { type: Number, required: true },
  variant: {
    color: { type: String },
    size: { type: String }
  }
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [orderItemSchema],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"], 
    default: "pending" 
  },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  shippingAddress: {
    label: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
