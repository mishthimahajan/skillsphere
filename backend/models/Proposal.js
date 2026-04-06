const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  gigId: String,
  freelancerId: String,

  bidAmount: Number,
  description: String,
  time: String,

  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },

}, { timestamps: true });

module.exports = mongoose.model("Proposal", proposalSchema);