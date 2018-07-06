const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

//Define UserSchema
const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true	
	},

	name: {
		type: String,
		required: true
	},

	hash: String, // The hash is created by combining the password provided by the user and the salt
	salt: String // salt is a string of characters unique to each user

});

// setPassword method on schema that accepts a password parameter.

UserSchema.methods.setPassword = (password) => {
	this.salt = crypto.randomBytes(16).toString('hex'); // crypto.randomBytes to set the salt
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex'); // crypto.pbkdf2Sync to set the hash
};

//validPassword method

UserSchema.methods.validPassword = (password) => {
	let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
	return this.hash === hash;
};

//generating a JSON web Tocken (JWT)

UserSchema.methods.generateJwt = () => {
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this._id,
		email: this.email,
		name: this.name,
		exp: parseInt(expiry.getTime() / 1000),
	}, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

//Export UserSchema
module.exports = mongoose.model('User', UserSchema);