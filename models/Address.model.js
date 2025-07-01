const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  state: String,
  pincode: String,
  phone: String,
});

module.exports = mongoose.model("Address", addressSchema);
