const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	books: [
		{
			type: mongoose.Schema.ObjectId,
			ref: 'Book',
			required: true,
		},
	],
});

module.exports = mongoose.model('Author', AuthorSchema);
