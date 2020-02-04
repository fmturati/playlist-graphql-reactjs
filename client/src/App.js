import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//apollo
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
