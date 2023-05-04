import React from 'react'
import ButtonsOrange from './ButtonsOrange';
import { setState, useState, useEffect } from 'react';

export default function Countdown() {
  let initialState = 30;
  let [countdown, setCountdown] = useState(initialState);

  function handleClick() {
    
    setCountdown((countdown) => countdown - 1);
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

/*
useEffect(() => {
      const id = setInterval(() => {
        setCountdown(c => c - 1);
      }, 30);
    }, []);
    */