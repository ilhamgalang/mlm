const userModel = require('../model/userModel');
const relasiModel = require('../model/relasiModel');

exports.create = function(req, res, next) {
  userModel.create({
    username: req.body.username,
	password: req.body.password
  }, function(err, result) {
    if (err) {
      next(err);
    }
  });
  relasiModel.create({
	  username: req.body.username,
	  relasi: {
		up: req.body.refId,
		down: []
	  }
  }, function(err, result) {
	if (err) {
      next(err);
    } else {
	}
  });	  
  res.json({
	status: "success",
	message: "Register successfully!",
	data: null
  });
}
