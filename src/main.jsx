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
import Browse2 from "./App/Browse2";
import NameInput from "./App/NameInput";
import WorkoutInfos from "./App/WorkoutInfos";
import ButtonsOrange from "./App/ButtonsOrange";

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
    path: "/browse2",
    element: <Browse2 />,
  },
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/nameInput",
    element: <NameInput />,
  },
  {
    path: "/workoutInfos",
    element: <WorkoutInfos />,
  },
  {
    path: "/buttonsOrange",
    element: <ButtonsOrange />,
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
