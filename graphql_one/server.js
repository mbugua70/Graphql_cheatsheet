// used to setup the server and configre it

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import {typeDefs} from './SchemaQl/schema.js'
import { resolvers } from './resolver/resolver.js'


// server setup
// it takes in two arguements
const server = new ApolloServer({
  // typedefinition - types description of our data types and kind of relationship they have with other data types.
  // typeDefs
  typeDefs,
  // resolvers - are basically functions that lead to how we respond to query for differnt data in the graphql
  // resolvers / handle query.
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at: ${url}`)


// NOTES::
//  Schema - discribe the shape of the graph and the data on it.
