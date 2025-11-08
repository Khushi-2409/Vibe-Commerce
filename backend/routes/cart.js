const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// 🟢 POST /api/cart - Add to cart
router.post('/', async (req, res) => {
  try {
    const { productId, qty = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: 'productId required' });

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Find or create cart item for guest user
    let item = await CartItem.findOne({ product: productId, userId: 'guest' });
    if (item) {
      item.qty += qty;
      await item.save();
    } else {
      item = new CartItem({ product: productId, qty, userId: 'guest' });
      await item.save();
    }

    // Return all populated items
    const items = await CartItem.find({ userId: 'guest' }).populate('product');
    const total = items.reduce((acc, it) => acc + ((it.product?.price || 0) * it.qty), 0);

    res.json({ items, total });
  } catch (err) {
    console.error('POST /api/cart error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🟢 GET /api/cart - Fetch cart
router.get('/', async (req, res) => {
  try {
    const items = await CartItem.find({ userId: 'guest' }).populate('product');
    const total = items.reduce((acc, it) => acc + ((it.product?.price || 0) * it.qty), 0);
    res.json({ items, total });
  } catch (err) {
    console.error('GET /api/cart error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🟢 PUT /api/cart/:id - Update quantity
router.put('/:id', async (req, res) => {
  try {
    const { qty } = req.body;
    if (qty <= 0) return res.status(400).json({ message: 'Quantity must be positive' });

    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    item.qty = qty;
    await item.save();

    const items = await CartItem.find({ userId: 'guest' }).populate('product');
    const total = items.reduce((acc, it) => acc + ((it.product?.price || 0) * it.qty), 0);

    res.json({ items, total });
  } catch (err) {
    console.error('PUT /api/cart/:id error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🟢 DELETE /api/cart/:id - Remove item
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    const items = await CartItem.find({ userId: 'guest' }).populate('product');
    const total = items.reduce((acc, it) => acc + ((it.product?.price || 0) * it.qty), 0);

    res.json({ items, total });
  } catch (err) {
    console.error('DELETE /api/cart/:id error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
