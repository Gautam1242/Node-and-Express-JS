const express = require("express");
const { getProducts, addProducts, updateProducts, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getProducts);

router.post("/products",addProducts);

router.put("/products/:id",updateProducts);

router.delete("/products/:id",deleteProduct);

module.exports = router;
