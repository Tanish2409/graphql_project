const authorResolver = require('./resolvers/author');
const publisherResolver = require('./resolvers/publisher');
const bookResolver = require('./resolvers/book');
const { mergeResolvers } = require('graphql-tools');

const resolvers = [publisherResolver, authorResolver, bookResolver];

module.exports = mergeResolvers(resolvers);
