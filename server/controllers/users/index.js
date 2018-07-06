var passport = require('passport');
var mongoose = require('mongoose');

var base = process.env.PWD;
var User = require(base + '/models/users');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

// register User API
var registerUser = (req, res) => {
	var user = new User();

	user.name = req.body.name;
	user.email = req.body.email;

	user.setPassword(req.body.password);

// this code doesn't have a number of error traps, validating form inputs and catching errors in the save function.
	user.save((err) => {
		var token;
		token = user.generateJwt();
		res.status(200).json({
			"token": token
		});
	});
};

//Login User API
var loginUser = (req, res) => {

	passport.authenticate('local', (err, user, info) => {
		var token;

		// if passport throws/catches an error
		if(err) {
			res.status(404).json(err);
			return;
		}

		// If a user is found
		if (user) {
			token = user.generateJwt();
			res.status(200).json({
				"token": token
			});
		} else{
			//if user not found
			
			res.status(401).json(info);
		}
	})(req, res);
};

//export endpoint modules
module.exports = {
	registerUser,
	loginUser
}