export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews:[Review!]
}
type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!):Author
}

# mutation
type  Mutation {
    deleteGame(id: ID!): [Game]
    addGame(game: addGameInput!): Game
}
input addGameInput {
    title: String!
    platform: [String!]!
}
`


// data types in graphql
//  int, boolean, float, string, ID

// type Query{}  - in every defination of typeDefs you should hve the type Query used to dfn the entrypoints and specify return types.