const express = require("express");
const cors = require("cors");

const products = require("./routes/products");
const orders = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

app.use("/api/products", products);
app.use("/api/orders", orders);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
