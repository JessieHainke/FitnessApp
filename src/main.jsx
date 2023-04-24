import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});


import Dash from "./App/dash";
import Nav from "./Components/navbar";
import Browse from "./App/browse";
import Profile from "./App/profile";
import Navbar from "./Components/navbar";

const root = createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <Browse/>
    <Navbar />
  </ApolloProvider>,
);
