const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().limit(20);

    const host = `${req.protocol}://${req.get("host")}`;
    const updated = products.map((p) => ({
      ...p._doc,
      image: p.image.startsWith("/img") ? `${host}${p.image}` : p.image,
    }));

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
