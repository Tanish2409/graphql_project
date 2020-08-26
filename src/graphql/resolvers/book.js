module.exports = {
	Query: {
		async books(_, __, ctx) {
			const { Book } = ctx.models;

			return await Book.find({});
		},

		async book(_, { id }, ctx) {
			const { Book } = ctx.models;

			return await Book.findById(id);
		},
	},

	Book: {
		async authors(book, __, ctx) {
			const { Book } = ctx.models;

			const { authors } = await Book.findById(book._id)
				.populate('authors')
				.exec();

			return authors;
		},

		async publisher(book, __, ctx) {
			const { Book } = ctx.models;

			const { publisher } = await Book.findById(book._id)
				.populate('publisher')
				.exec();

			return publisher;
		},
	},
};
