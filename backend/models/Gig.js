const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  createdBy: String,

  isApproved: {
    type: Boolean,
    default: false,
  },

}, { timestamps: true });

module.exports = mongoose.model("Gig", gigSchema);