import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ExerciseEnd from "../App/ExerciseEnd";
import { NavLink } from "react-router-dom";



export default function ExWithReps({ reps, exercise, name }) {
  return (
    <div>
      <div className="flex justify-center inset-x-1/2 bottom-1/2 absolute">
        <h2 className="flex text-4xl">{reps}x</h2>
      </div>
      <div className="flex absolute inset-x-1/2 text-center bottom-1/4">
        <p className="text-white ">{name}</p>
      </div>
      
    </div>
  );
}
