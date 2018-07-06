// var mongoose = require('mongoose');
var base = process.env.PWD;
var User = require(base + '/models/users');


var profileRead = (req, res) => {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
      User
        .findById(req.payload._id)
        .exec(function(err, user) {
          res.status(200).json(user);
        });
  }

};

//export endpoint modules
module.exports = {
  profileRead
}