const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
