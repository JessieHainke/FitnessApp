import React from "react";
import { useQuery, gql } from "@apollo/client";
import { NavLink, useParams, Link } from "react-router-dom";
import WorkoutCountdown from "../App/Countdown";
import WorkoutChart from "../App/WorkoutChart";
import IconX from "../Layouts/IconX";
import Swiper from "../App/Swiper";

export default function ExWithDur() {
  return ( // im Return gibt es hier keine img-Rückgaben - es liegt nicht an den img's selbst, sondern selbst wenn ich ein img direkt hier hineinsetze, geht es nicht
  <div>
      <div>
        <p className="text-white flex justify-center text-2xl pt-10">{}</p>
      </div>
      <WorkoutChart className="items-center " />
      <WorkoutCountdown />
      {/* <NavbarExercises /> */}
  </div>
  );
}
