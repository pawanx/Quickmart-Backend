const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: Array, // cart items
  address: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
