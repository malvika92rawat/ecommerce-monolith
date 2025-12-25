const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { product_id, quantity } = req.body;

  db.query(
    "INSERT INTO orders (product_id, quantity) VALUES (?, ?)",
    [product_id, quantity],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Order placed", orderId: result.insertId });
    }
  );
});

module.exports = router;
