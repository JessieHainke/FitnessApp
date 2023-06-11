import React from "react";
import DefaultLayout from "./DefaultLayout";
import IconX from "./IconX";
import NavbarExercises from "../Components/NavbarExercises";
import WorkoutArrows from "./WorkoutArrows";
import WorkoutFortschritt from "../App/WorkoutFortschritt";
import WorkoutCountdown from "../App/Countdown";
import WorkoutChart from "../App/WorkoutChart";
import { Link } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Swiper from "../App/Swiper";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      workouts {
        category
      }
      image {
        url
      }
    }
  }
`;

export default function DefaultWorkout() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { id },
  });

  const programs = data;

  return (
    <div className="bg-bgdark text-white h-screen w-full flex flex-col">
      <NavLink to={`/workout-end`}>
        <IconX />
      </NavLink>
      <WorkoutFortschritt />
      <Swiper />
      <WorkoutChart className="items-center " />
      <WorkoutCountdown />
      <NavbarExercises />
    </div>
  );
}
