import React from 'react'
import ButtonsOrange from './ButtonsOrange';
import { setState, useState, useEffect } from 'react';


export default function Countdown() {
  let startValue = 30;
  const [countdown, setCountdown] = useState(startValue);

    const clickHandler = () => {
      setInterval(() => {
        if (startValue > 0) {
        setCountdown(startValue = startValue - 1);}
      }, 1000);

    };

    const [random, setRandom] = useState({
      percentage: 0,
      colour: "hsl(0, 0%, 0%)",
    });
  
    const generateChartPart = () => {
      const rand = countdown;
      setRandom({
        percentage: rand(100),
        colour:`green`, // Problem hier: zeigt die richtige Farbe (Farbverlauf) nicht an
      });
    };

    return (
      <div>
          <h1>{countdown} Sekunden</h1>
          <button onClick={clickHandler}>Start</button>
          <div className='w-40 h-40 rounded-full bg-gradient-to-br from-orange to-pink flex self-center inset-y-1/2 inset-x-1/2 p-0 m-0'></div>
          {console.log(countdown)}
          <div className="WorkoutChart">
      <button onClick={generateChartPart}>test</button>
      <Pie percentage={countdown} colour={random.colour} />
      <Pie percentage={5} colour="blue" />
    </div>
      </div>
      
      
    )
  
    }


   
    import Pie from "./WorkoutPie.jsx";
    import "./chartStyle.css";
    import "../index.css";
   
    







  

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