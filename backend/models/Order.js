const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: Number
  }],
  total: Number,
  customer: {
    name: String,
    email: String
  },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
