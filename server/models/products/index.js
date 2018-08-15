const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define ProductSchema
const ProductSchema = new Schema({
	productName: String,
	sku: String,
	supplier: String,
	description: String,
	costPx: Number,
	sellingPx: Number,
	stockOnHand: Number,
	category: String,
	comment: String,
	approvedBy: String,
	status: {type: Boolean, default: true},
	createdAt: {type: Date, default: Date.now}
});

//Export ProductSchema
module.exports = mongoose.model('Product', ProductSchema);
