var base = process.env.PWD;
var Product = require(base + '/models/products');

//Create product endpoint
var createProduct = (req, res) => {
	var products = new Product(req.body);

	products.save((err, product) => {
		if(err) { res.send(500, err); }
		res.status(200).json(product);
	});
};

// Read product Endpoint
var getProducts = (req, res) => {
	Product.find((err, products) => {
		if(err) {res.send(500, err); }
		res.status(200).json(products);
	});
};

// Get a single product by id
var getProduct = (req,res) => {
	Product.findById(req.params.id, 
		(err, product) => {
			if(err) {res.send(500, err); }
			res.status(200).json(product);
		});
};

// Update a single product by id
var updateProduct = (req,res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) { res.send(500,err); }

		if(req.body.name) {product.name = req.body.name; }
		if(req.body.description) {product.description = req.body.description; }
		if(req.body.category) {product.category = req.body.category; }
		if(req.body.unitcost) {product.unitcost = req.body.unitcost; }
		if(req.body.price) {product.price = req.body.price; }
		if(req.body.numberavailable) {product.numberavailable = req.body.numberavailable; }

		product.save( (err, post) => {
			if(err) { res.send(500, err); }
			res.status(200).json(product);
		});
	});
};

// Delete a product by id
var deleteProduct = (req, res) =>{
	Product.findByIdAndRemove(req.params.id, (err, product) =>{
		if(err) {res.send(500, err); }
		res.status(200).send("Successfully deleted");
	});
};


//export endpoint modules
module.exports = {
	createProduct,
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct
}