require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'Apple iPhone 15 Pro',
    price: 129999,
    description: '6.1-inch Super Retina XDR display, A17 Pro chip, 256GB storage.',
    image: 'http://localhost:5000/img/Iphone-15-Pro.jpg'
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    price: 119999,
    description: '200MP quad camera, Snapdragon 8 Gen 3, 12GB RAM, 256GB storage.',
    image: 'http://localhost:5000/img/Samsung-galaxy-s24-ultra.jpg'
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 29999,
    description: 'Industry-leading noise cancellation, 30hr battery, fast charging.',
    image: 'http://localhost:5000/img/Sony WH-1000XM5 Headphones.avif'
  },
  {
    name: 'Apple MacBook Air M2',
    price: 114999,
    description: '13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD, macOS Sonoma.',
    image: 'http://localhost:5000/img/Apple MacBook Air M2.jpg'
  },
  {
    name: 'Dell XPS 13 Laptop',
    price: 99999,
    description: 'Intel i7 13th Gen, 16GB RAM, 512GB SSD, InfinityEdge display.',
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Apple Watch Series 9',
    price: 41999,
    description: 'Always-on Retina display, health tracking, 18hr battery life.',
    image: 'http://localhost:5000/img/Apple Watch Series 9.jpg'
  },
  {
    name: 'Logitech MX Master 3S Mouse',
    price: 9999,
    description: 'Ergonomic design, MagSpeed scroll, USB-C fast charging.',
    image: 'http://localhost:5000/img/Logitech MX Master 3S Mouse.jpg'
  },
  {
    name: 'ASUS ROG Strix Gaming Laptop',
    price: 149999,
    description: 'RTX 4070 GPU, Ryzen 9 7945HX, 16GB RAM, 1TB SSD, 240Hz display.',
    image: 'http://localhost:5000/img/ASUS ROG Strix Gaming Laptop.jpg'
  },
  {
    name: 'Anker PowerCore 20000mAh',
    price: 4999,
    description: 'Fast-charging power bank with USB-C PD and dual outputs.',
    image: 'http://localhost:5000/img/Anker PowerCore 20000mAh.jpg'
  },
  {
    name: 'Apple AirPods Pro (2nd Gen)',
    price: 26999,
    description: 'Active noise cancellation, adaptive transparency, MagSafe case.',
    image: 'http://localhost:5000/img/Apple AirPods Pro (2nd Gen).webp'
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('✅ Seeded electronic products successfully');
  mongoose.disconnect();
})
.catch(err => {
  console.error('❌ Seed error:', err);
});
