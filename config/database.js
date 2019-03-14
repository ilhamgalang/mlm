// set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://ihlam:ihlam123@ds213896.mlab.com:13896/mlm';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
