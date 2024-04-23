var { graphql, buildSchema } = require("graphql");

// constructing schema using graphql schema language
var schema = buildSchema(`
type Query {
    hello: String
}

`);

// The rootValue provides a resolver function for each API endpoint

var rootValue = {
  hello() {
    return "Hello world, techies";
  },
};

// Graphql query
graphql({
  schema,
  source: "{ hello }",
  rootValue,
}).then((response) => console.log(response));
