import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Test } from "./App/test";
import Dash from "./App/dash";
import Browse from "./App/browse";
import Profile from "./App/profile";
import Navbar from "./Components/navbar";



ReactDOM.render(
  <React.StrictMode>
    <Dash />
    <Navbar />
  </React.StrictMode>,
  document.getElementById("root")
);



/* ------------- ursprüngliches, verändertes Routing? ------------ */

/*const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Dash />
    <Navbar />

  </React.StrictMode>
);
*/


/* ----------- von mir im Netz gefundenes Routing, quasi identisch, nur komplizierter? ---------- */

/*
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/


/* ---------------- komplizierte Verbindung zu Hygraph - Verbindung zum Router? ----- */
/*
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clgv4jsir0fab01ui9wv39pzb/master',
  cache: new InMemoryCache(),
});





const root = createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <Dash />
    <Navbar />
  </ApolloProvider>,
);
*/