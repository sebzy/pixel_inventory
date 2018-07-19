const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define ProductSchema
const ProductSchema = new Schema({
	name: String,
	sku: String,
	supplier: String,
	description: String,
	createdAt: {type: Date, default: Date.now},
	category: String,
	status: {type: Boolean, default: true},
	sellingPrice: Number,
	costPrice: Number,
	stockAtHand: Number,
	comment: String,
	approvedBy: String
});

//Export ProductSchema
module.exports = mongoose.model('Product', ProductSchema);