var base = process.env.PWD;
var Sale = require(base + '/models/sales');

//Create sale endpoint
var createSale = (req, res) => {
	var sale = new Sale(req.body);

	sale.save((err, product) => {
		if(err) { res.send(500, err); }
		res.status(200).json(sale);
	});
};

// Read sales Endpoint
var getSales = (req, res) => {
	Sale.find((err, sales) => {
		if(err) {res.send(500, err); }
		res.status(200).json(sales);
	});
};

// Get a single sale by id
var getSale = (req,res) => {
	Sale.findById(req.params.id, 
		(err, sale) => {
			if(err) {res.send(500, err); }
			res.status(200).json(sale);
		});
};

// Update a single sale by id

// Delete a sale by id
var deleteSale = (req, res) =>{
	Sale.findByIdAndRemove(req.params.id, (err, sale) =>{
		if(err) {res.send(500, err); }
		res.status(200).send("Successfully deleted sale");
	});
};


//export endpoint modules
module.exports = {
	createSale,
	getSales,
	getSale,
	deleteSale
}