const userModel = require('../model/userModel');

exports.create = function(req, res, next) {
  userModel.create({
    username: req.body.username,
	password: req.body.password,
    refId: req.body.refId
  }, function(err, result) {
    if (err) {
      next(err);
    } else {
      res.json({
        status: "success",
        message: "Register successfully!",
        data: null
      });
    }
  });
}
