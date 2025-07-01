const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: [
      "dairy",
      "fruitsNveg",
      "drinks",
      "cleaning",
      "chocNice",
      "stationary",
    ],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: String,
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
