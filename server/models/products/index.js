const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define ProductSchema
const ProductSchema = new Schema({
	product_name: String,
	sku: String,
	supplier: String,
	description: String,
	cost_px: Number,
	selling_px: Number,
	stock_on_hand: Number,
	category: String,
	comment: String,
	approved_by: String,
	status: {type: Boolean, default: true},
	createdAt: {type: Date, default: Date.now}
});

//Export ProductSchema
module.exports = mongoose.model('Product', ProductSchema);
