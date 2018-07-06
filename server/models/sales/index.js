const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define ProductSchema
// const SaleSchema = new Schema({
// 	saleRep: String,
// 	saleAt: {type: Date, default: Date.now}
// });
// 
// var CustomerModel = mongoose.model('CustomerModel', {
//     firstName: String,
//     lastName: String,
//     company: String,
//     connectInfo: {
//         tel: [Number],
//         email: [String],
//         address: {
//             city: String,
//             street: String,
//             houseNumber: String
//         }
//     }
// });


const SaleSchema = new Schema({
    saleRep: String,
    saleAt: {type: Date, default: Date.now},
    product: {
    	name: String,
		quantity: Number,
		price: Number
        }
});

//Export ProductSchema
module.exports = mongoose.model('Sale', SaleSchema);