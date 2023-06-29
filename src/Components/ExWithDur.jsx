import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink, useParams, Link } from "react-router-dom";
import WorkoutCountdown from "../App/Countdown";
import WorkoutChart from "../App/WorkoutChart";
import IconX from "../Layouts/IconX";
import Swiper from "../App/Swiper";
import NavbarExercises from "../Components/NavbarExercises"

export default function ExWithDur( { dur, name } ) {
  return ( 
  <div>
      <div className="">
        <p className="text-white flex justify-center text-xl pt-10">{dur}</p>
      </div>
      <WorkoutChart className="items-center " />
      <div>{name}</div>
      <WorkoutCountdown />
  </div>
  );
}
