module.exports = {
	Query: {
		async publishers(_, __, ctx) {
			const { Publisher } = ctx.models;

			return await Publisher.find({});
		},

		async publisher(_, { id }, ctx) {
			const { Publisher } = ctx.models;

			return await Publisher.findById(id);
		},
	},

	Publisher: {
		async books(publisher, __, ctx) {
			const { Publisher } = ctx.models;

			const { books } = await Publisher.findById(publisher._id)
				.populate('books')
				.exec();

			return books;
		},
	},
};
