const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
