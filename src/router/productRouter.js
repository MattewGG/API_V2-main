const express = require("express");

const router = express.Router();

const productControler = require(`../controller/productController.js`);

router.get("/product", productControler.getAllproduct);

module.exports = router;
