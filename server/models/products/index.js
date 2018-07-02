const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define ProductSchema
const ProductSchema = new Schema({
	name: String,
	description: String,
	createdAt: {type: Date, default: Date.now},
	category: String,
	status: {type: Boolean, default: true},
	unitcost: Number,
	price: Number,
	numberavailable: Number
});

//Export ProductSchema
module.exports = mongoose.model('Product', ProductSchema);