const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Publisher', PublisherSchema);
