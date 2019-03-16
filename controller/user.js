const userModel = require('../model/userModel');
const relasiModel = require('../model/relasiModel');

exports.create = function (req, res, next) {
  userModel.create({
    username: req.body.username,
    password: req.body.password
  }, function (err, result) {
    if (err) {
      next(err);
    } else {
      res.json({
        isSuccess: true,
        message: "Register successfully!",
        data: null
      });    
    }
  });
  relasiModel.create({
    username: req.body.username,
    relasi: {
      up: req.body.refId,
      down: []
    }
  }, function (err, result) {
    if (err) {
      next(err);
    }
  });
}

exports.login = function (req, res, next) {
  let dataUser;
  userModel.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, result) {
    if (err) {
      next(err);
    } else {
      if (!result) {
        res.json({
          isSuccess: false,
          data: result,
          message: 'Username or Password incorrect!!!'
        });    
      } else {
        res.json({
          isSuccess: true,
          data: result
        });    
      }
    }
  });
}
