const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String, // optional URL
  inStock: { type: Boolean, default: true }
});
module.exports = mongoose.model('Product', ProductSchema);
