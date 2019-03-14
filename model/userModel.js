const mongoose = require('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  password: {
  	type: String,
  	trim: true,
  	required: true
  },
  refId: {
  	type: String,
  	trim: true,
  	required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
