const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  jobId: String,
  clientId: String,
  freelancerId: String,

  amount: Number,

  status: {
    type: String,
    enum: ["pending", "escrow", "released"],
    default: "pending",
  },

  razorpay_order_id: String,
  razorpay_payment_id: String,

}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);