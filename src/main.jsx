import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";
import { Test } from "./App/test";
import Dash from "./App/Dash";
import Browse from "./App/Browse";
import Profile from "./App/Profile";
import Program from "./App/Program";
import HideProgram from "./App/HideProgram";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
]);

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgv4jsir0fab01ui9wv39pzb/master",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
