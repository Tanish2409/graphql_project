module.exports = {
	Query: {
		async books(_, __, ctx) {
			const { Book } = ctx.models;

			return await Book.find({});
		},

		async book(_, { id }, ctx) {
			const { Book } = ctx.models;

			const book = await Book.findById(id);

			return book;
		},
	},

	Mutation: {
		async book(_, { input }, ctx) {
			const { Book } = ctx.models;

			const book = new Book({
				name: input.name,
				publisher: input.publisher,
				authors: input.authors,
			});

			await book.save();

			return await book;
		},

		async updateBook(_, { input }, ctx) {
			const { Book } = ctx.models;

			const book = await Book.findByIdAndUpdate(
				input.id,
				{
					$set: {
						name: input.name,
						publisher: input.publisher,
						authors: input.authors,
					},
				},
				{ new: true, omitUndefined: true }
			);

			return book;
		},

		async deleteBook(_, { id }, ctx) {
			const { Book } = ctx.models;

			return await Book.findByIdAndDelete(id);
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
