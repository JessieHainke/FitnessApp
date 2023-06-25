import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ExerciseEnd from "../App/ExerciseEnd";
import { NavLink } from "react-router-dom";

const EXWITHREPS = gql`
  query ExWithReps($programId: ID!, $workoutId: ID!) {
    program(where: { id: $programId }) {
      id
      workouts(where: { id: $workoutId }) {
        exercises {
          ... on ExerciseWithDuration {
            id
            exercise {
              description
              id
              name
              completed
              type
            }
          }
          ... on ExerciseWithReps {
            id
            exercise {
              name
              id
              description
              completed
              type
            }
            reps
          }
        }
      }
    }
  }
`;

export default function ExWithReps({ reps, exercise, name }) {
  return (
    <div>
      <div className="flex justify-center inset-x-1/2 bottom-1/2 absolute">
        <h2 className="flex text-4xl">{reps}x</h2>
      </div>
      <div className="flex absolute inset-x-1/2 text-center bottom-1/4">
        <p className="text-white ">{name}test</p>
      </div>
      
    </div>
  );
}
