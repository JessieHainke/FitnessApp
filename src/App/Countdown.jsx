import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useSwiperSlide } from "swiper/react";
import ButtonsOrange from "./ButtonsOrange";
import { setState, useState, useEffect } from "react";
import Pie from "./WorkoutPie.jsx";
import useTimer from "../Hooks/useTimer";
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
  const exerciseTimer = useTimer(30);

  const [random, setRandom] = useState({
    percentage: 0,
    colour: "orange", // zeigt Farbverlauf bisher nicht an
  });

  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    console.log(swiperSlide.isActive);
    if (swiperSlide.isActive) {
      // Timer Start
    } else {
      exerciseTimer.stop();
      exerciseTimer.reset();
    }
  }, [swiperSlide]);

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

      <div>
        <button onClick={exerciseTimer.start}>
          <Pie percentage={exerciseTimer.currentValue} colour={random.colour}>
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
