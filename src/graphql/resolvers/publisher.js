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

	Mutation: {
		async publisher(_, { input }, ctx) {
			const { Publisher } = ctx.models;

			const publisher = new Publisher({ name: input.name });

			await publisher.save();

			return publisher;
		},

		async updatePublisher(_, { input }, ctx) {
			const { Publisher } = ctx.models;

			return await Publisher.findByIdAndUpdate(
				input.id,
				{ $set: { name: input.name } },
				{ new: true, omitUndefined: true }
			);
		},

		async deletePublisher(_, { id }, ctx) {
			const { Publisher } = ctx.models;
			const { Book } = ctx.models;

			await Book.updateMany({ publisher: id }, { publisher: null });

			return await Publisher.findByIdAndDelete(id);
		},
	},

	Publisher: {
		async books(publisher, __, ctx) {
			const { Book } = ctx.models;

			return await Book.find({ publisher: publisher.id });
		},
	},
};
