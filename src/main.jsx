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


import NameInput from "./App/NameInput";
import WorkoutInfos from "./App/WorkoutInfos";
import ButtonsOrange from "./App/ButtonsOrange";
import DefaultWorkout from "./Layouts/DefaultWorkout";
import NavbarExercises from "./Components/NavbarExercises";
import WorkoutArrows from "./Layouts/WorkoutArrows";
import Workout from "./App/Workout";
import NavbarExerciseInfo from "./Components/NavbarExerciseInfo";


import "./App/browse.css";


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
  {
    path: "/default-workout",
    element: <DefaultWorkout />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
  {
    path: "/navbarExercises",
    element: <NavbarExercises />,
  },
  {
    path: "/navbarExerciseInfo",
    element: <NavbarExerciseInfo />,
  },
  {
    path: "*",
    element: <div>Error</div>,
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
