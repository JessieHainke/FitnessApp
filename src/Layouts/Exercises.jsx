import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink, useParams, Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import NavbarExercises from "../Components/NavbarExercises";
import WorkoutArrows from "./WorkoutArrows";
import WorkoutFortschritt from "../App/WorkoutFortschritt";
import WorkoutCountdown from "../App/Countdown";
import WorkoutChart from "../App/WorkoutChart";
import IconX from "./IconX";
import Swiper from "../App/Swiper";

{
  /*const EXERCISES = gql`
  query Exercises($programId: ID!, $workoutId: ID!) {
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
          duration
          exercise {
            id
            name
            description
            completed
          }
        }
        ... on ExerciseWithReps {
          id
          reps
          exercise {
            id
            name
            description
            completed
          }
        }
      }
    }
  }
`;*/
}

export default function Exercises() {
  {
    /* const { programId, workoutId } = useParams();

  const { data, loading } = useQuery(EXERCISES, {
    variables: { programId, workoutId },
  });

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program } = data;
  const { workouts } = program;
  const { exercises } = data.program.workouts[0];

console.log(program, exercises, workouts);*/
  }

  return ( // im Return gibt es hier keine img-Rückgaben - es liegt nicht an den img's selbst, sondern selbst wenn ich ein img direkt hier hineinsetze, geht es nicht
    <div className="bg-bgdark text-white h-screen w-full flex flex-col">
      <NavLink to={`/workout-end`}>
        <IconX />
      </NavLink>
      <div>
        <p className="text-white flex justify-center text-2xl pt-10">{}</p>
      </div>
      <WorkoutChart className="items-center " />
      <WorkoutCountdown />
      {/* <NavbarExercises /> */}
      <Swiper />
    </div>
  );
}
