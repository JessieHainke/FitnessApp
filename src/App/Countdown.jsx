import React from 'react'
import ButtonsOrange from './ButtonsOrange';
import { setState, useState, useEffect } from 'react';

export default function Countdown() {
  let startValue = 10;
  const [countdown, setCountdown] = useState(startValue);

    const clickHandler = () => {
      setInterval(() => {
        if (startValue > 0) {
        setCountdown(startValue = startValue - 1);}
      }, 1000);

    };

    return (
      <div>
          <h1>{countdown} Sekunden</h1>
          <button onClick={clickHandler}>Start</button>
          {console.log(countdown)}
      </div>
      
    )
  
    }

    
  









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