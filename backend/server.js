require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const CartItem = require('./models/CartItem');

// Clear cart items every time the server restarts
CartItem.deleteMany({})
  .then(() => console.log('🧹 Cleared old cart items'))
  .catch(err => console.error('Error clearing cart:', err));


const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const checkoutRoute = require('./routes/checkout');

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("✅ API is running");
});


const path = require("path");
app.use('/img', express.static('public/img'));



// routes
app.use('/api/products', productsRoute);
app.use('/api/cart', cartRoute);
app.use('/api/checkout', checkoutRoute);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
