const express = require("express");

const router = express.Router();

const productControler = require(`../controller/productController.js`);

router.get("/product", productControler.getAllproduct);
router.post("/product", productControler.createProduct);
router.put("/product/:id", productControler.updateProduct);
router.delete("/produc/:id", productControler.deleteProduct);
router.get("/product/:id", productControler.getProductById);
module.exports = router;
