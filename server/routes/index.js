var express = require('express');
var router = express.Router();
var base = process.env.PWD;
var products = require(base + '/controllers/products');


router.get('/products', products.getProducts);
router.get('/product/:id', products.getProduct);
router.post('/product/create', products.createProduct);
router.put('/product/:id', products.updateProduct);
router.delete('/product/:id', products.deleteProduct);

/* GET home page. */

module.exports = router;
