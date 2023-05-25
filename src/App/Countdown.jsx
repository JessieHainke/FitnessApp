import React from 'react'
import ButtonsOrange from './ButtonsOrange';
import { setState, useState, useEffect } from 'react';
import Pie from "./WorkoutPie.jsx";
import "./chartStyle.css";
import "../index.css";


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
        setCountdown(startValue = startValue - 1);}
      }, 1000);
    };


    return (
      <div className="WorkoutChart">
          {/*<h1>{countdown} Sekunden</h1>*/}
          
          
          {console.log(countdown)}
          <div >
      <button onClick={clickHandler} ><Pie percentage={countdown} colour={random.colour}>Start</Pie></button>
      <h1 className='text-2xl'>Plank</h1>
    </div>
      </div>
      
      
    )
  
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