module.exports = {
	Query: {
		async authors(_, __, ctx) {
			const { Author } = ctx.models;
			return await Author.find({});
		},

		async author(_, { id }, ctx) {
			const { Author } = ctx.models;

			const authorId = id;

			return await Author.findById(authorId);
		},
	},

	Mutation: {
		async author(_, { input }, ctx) {
			const { Author } = ctx.models;

			const author = new Author({ name: input.name });

			await author.save();

			return author;
		},
	},

	Author: {
		async books(author, __, ctx) {
			const { Author } = ctx.models;

			const { books } = await Author.findById(author._id)
				.populate('books')
				.exec();

			return books;
		},
	},
};
