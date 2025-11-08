const mongoose = require('mongoose');
const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, default: 1 },
  // For a simple mock user store:
  userId: { type: String, default: 'guest' }
});
module.exports = mongoose.model('CartItem', CartItemSchema);
