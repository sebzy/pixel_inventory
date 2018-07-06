var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var base = process.env.PWD;
var products = require(base + '/controllers/products');
var users = require(base + '/controllers/users');
var profile = require(base + '/controllers/users/profile');
var sales = require(base + '/controllers/sales');

// User Routes
router.get('/user/profile', auth, profile.profileRead);

router.post('/user/register', users.registerUser);
router.post('/user/login', users.loginUser);


// Product routes
router.get('/products', products.getProducts);
router.get('/product/:id', products.getProduct);
router.post('/product/create', products.createProduct);
router.put('/product/:id', products.updateProduct);
router.delete('/product/:id', products.deleteProduct);

// Sale routes
router.get('/sales', sales.getSales);
router.get('/sale/:id', sales.getSale);
router.post('/sale/create', sales.createSale);
router.delete('/sale/:id', sales.deleteSale);

/* GET home page. */

module.exports = router;
