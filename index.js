const express = require('express');
const path = require('path');
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3030;
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

if (isProduction) {
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`http server running ${PORT}`);
});
