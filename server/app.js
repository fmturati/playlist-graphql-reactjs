const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

// set .env file
require("dotenv").config();

const app = express();

// allow cross-origin requests
app.use(cors());

const port = process.env.PORT || 4000;

// connect to MongoDB
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
