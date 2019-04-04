const { apolloServer } = require("apollo-server");
const typeDefs = require('./schema')

const server = new apolloServer({ 
    typeDefs,
    resolver
 });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})