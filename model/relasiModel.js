const mongoose = require('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

const RelasiSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  relasi: {
	up: {
		type: String,
		trim: true
	},
	down: {
		type: Array,
		trim: true
	}
  }
});

module.exports = mongoose.model('Relasi', RelasiSchema);
