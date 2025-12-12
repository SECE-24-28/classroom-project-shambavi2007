const express = require("express");
const app = express();
const port = 3000;
const productRoutes = require("./src/routes/productRoutes");

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API. Use /products to see products." });
});

app.listen(port, () => {
  console.log(`App2 listening at http://localhost:${port}`);
});

module.exports = app;