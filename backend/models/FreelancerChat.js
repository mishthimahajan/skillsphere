const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  room: String,
  sender: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("FreelancerChat", chatSchema);