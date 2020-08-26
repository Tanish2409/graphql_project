const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const models = require('./models/models');
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/rootResolver');

mongoose
	.connect(process.env.DB_URI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('DB successfully connected');
	});

const server = new ApolloServer({
	typeDefs,
	resolvers: { ...resolvers },
	context() {
		return { models };
	},
});

server.listen(4000).then(({ url }) => {
	console.log(`server started at ${url}`);
});
