import React from "react";
import { useQuery, gql } from "@apollo/client";
import ButtonsOrange from "./ButtonsOrange";
import { setState, useState, useEffect } from "react";
import Pie from "./WorkoutPie.jsx";
import "./chartStyle.css";
import "../index.css";

import Workout from "./Workout";
import { NavLink } from "react-router-dom";
//import ExerciseEnd from "../exercise-end.jsx";

const EXERCISE = gql`
  query exercises {
    exercise(where: { id: "" }) {
      name
    }
  }
`;

export default function Countdown() {
  let startValue = 30;
  const [countdown, setCountdown] = useState(startValue);

  const [random, setRandom] = useState({
    percentage: 0,
    colour: "orange", // zeigt Farbverlauf bisher nicht an
  });

  const clickHandler = () => {
    setInterval(() => {
      if (startValue > 0) {
        setCountdown((startValue = startValue - 1))
         /* if (startValue < 1 && startValue > -1) {
        window.open(<ExerciseEnd />);
      }*/};
    }, 1000);
  };

  const { data, loading } = useQuery(EXERCISE, {
    // variables: { exercise },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program } = data;

  return (
    <div className="WorkoutChart">
      {/*<h1>{countdown} Sekunden</h1>*/}

      {console.log(countdown)}
      <div>
        <button onClick={clickHandler}>
          <Pie percentage={countdown} colour={random.colour}>
            Start
          </Pie>
        </button>
        {/*  <h1 className='text-2xl'>{exercises.exercise}</h1>*/}
      </div>
    </div>
  );
}

// 360 => 12 * 30

/* setInterval(() => {
      let x = 10;
      let t = x - 1;
      console.log(t);
    }, 3000)
    
      

  

    function count(countdown, minus) {
        countdown = countdown - minus;
    }
    
    //setCountdown((countdown) => countdown - 1);
    console.log(countdown);
  }


  return (
    <div>
        <h1>{ countdown } Sekunden</h1>
        <button onClick={ handleClick }>Start</button>
        {console.log(countdown)}
    </div>
  )
}
*/
