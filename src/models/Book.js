const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	publisher: {
		type: mongoose.Schema.ObjectId,
		ref: 'Publisher',
		requried: true,
	},
	authors: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Author',
			required: true,
		},
	],
});

module.exports = mongoose.model('Book', BookSchema);
