const { makeExecutableSchema, typeDefs } = require('graphql-tools');
const { gql } = require('apollo-server');
// import { find, filter } from 'lodash';

module.exports = typeDefs;

const typeDefs =`
type Query{
    clients: [clients]!
    client(id: ID!): Client
    properties: [properties]!
    property(id: ID!): Property
    me: User
}
type Property {
    id: ID!
    address: String!
    construction: Boolean!
    name: String!
    propertyPatchSize(size: PatchSize): String
}
type Client {
    id: ID!
    name: String!
    email: String!
}

enum PatchSize{
    SMALL
    LARGE
}

type Mutation{
    clientChanges(clientChanges: [id]!): clientChangesResponse!!
    changeClient(changeClient: [id]!): changeClientResponse
    propertyChanges(propertyChanges: [id]!): propertyChangesResponse!
    changeProperty(changeProperty: [id]!): changePropertyResponse
    login(email: String): String
}

type PropertyChangeResponse {
    success: Boolean!
    message: String
}
type ClientChangeResponse {
    success: Boolean!
    message: String
}
`;


// export const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
// });