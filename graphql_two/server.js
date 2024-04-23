var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");

// Graphql schema
var schama = buildSchema(`
 type Query{
    hello: String,
 }
`);

// root provision of resolver function for each end point
var root = {
  hell0() {
    return "Hello techie, John M";
  },
};

var app = express();

// creat and use the graphql handler
app.all(
  "/graphql",
  createHandler({
    schema: schama,
    rootValue: root,
  })
);

app.get("/", (_req, res) => {
  res.type("html"), res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(4000);
console.log("Running a graphql api server at http://localhost:4000/graphql");
