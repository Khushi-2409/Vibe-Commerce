const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Order = require('../models/Order');
const Product = require('../models/Product');

// POST /api/checkout  { cartItems: [{ product, qty }], customer: { name, email } }
router.post('/', async (req, res) => {
  try {
    const { cartItems, customer } = req.body;
    if (!cartItems || !Array.isArray(cartItems)) return res.status(400).json({ message: 'cartItems required' });

    // compute total
    let total = 0;
    const items = [];
    for (const ci of cartItems) {
      const p = await Product.findById(ci.product);
      if (!p) continue;
      items.push({ product: p._id, qty: ci.qty });
      total += p.price * ci.qty;
    }

    // create order
    const order = new Order({
      items,
      total,
      customer: { name: customer?.name || 'Guest', email: customer?.email || '' }
    });
    await order.save();

    // optionally clear guest cart
    await CartItem.deleteMany({ userId: 'guest' });

    res.json({
      receipt: {
        orderId: order._id,
        total,
        createdAt: order.createdAt,
        customer: order.customer,
        items: items.map(i => ({ product: i.product, qty: i.qty }))
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
