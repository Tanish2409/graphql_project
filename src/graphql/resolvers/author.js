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

		async updateAuthor(_, { input }, ctx) {
			const { Author } = ctx.models;

			const author = await Author.findByIdAndUpdate(
				input.id,
				{ $set: { name: input.name } },
				{ new: true, ommitUndefined: true }
			);

			return author;
		},

		async deleteAuthor(_, { id }, ctx) {
			const { Author } = ctx.models;
			const { Book } = ctx.models;

			console.log('hey');

			await Book.updateMany({}, { $pull: { authors: id } });

			return await Author.findByIdAndDelete(id);
		},
	},

	Author: {
		async books(author, __, ctx) {
			const { Book } = ctx.models;

			return await Book.find({ authors: author.id });
		},
	},
};
