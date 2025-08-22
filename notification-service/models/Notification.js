const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ["info", "success", "warning", "error"], default: "info" },
  isRead: { type: Boolean, default: false },
  channel: { type: String, enum: ["email", "sms", "push"], default: "push" }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
