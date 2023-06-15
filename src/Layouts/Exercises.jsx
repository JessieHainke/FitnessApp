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

const EXERCISES = gql`
query Exercises($workoutId: ID!, $programId: ID!) {
  program(where: { id: $programId }) {
    id
  }
  workouts(where: { id: $workoutId }) {
    id
    name
    duration
    index
    exercises {
      ... on ExerciseWithDuration {
        id
        exercise {
          id
        }
      }
      ... on ExerciseWithReps {
        id
        exercise {
          id
        }
      }
    }
  }
}
`;


export default function DefaultWorkout() {
  const { programId, workoutId } = useParams();

  const { data, loading } = useQuery(EXERCISES, {
    variables: { programId, workoutId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program } = data;
  const { workouts } = program;
  const { exercise } = workouts;
  

console.log(exercise);

  return (
    <div className="bg-bgdark text-white h-screen w-full flex flex-col">
      <NavLink to={`/workout-end`}>
        <IconX />
      </NavLink>
      <div>
        <p className="text-white flex justify-center text-2xl pt-10">{}</p>
      </div>
      <WorkoutChart className="items-center " />
      <WorkoutCountdown />
      <NavbarExercises />
      <Swiper />
    </div>
  );
}
