import React, { useState } from 'react';
import Pie from "./WorkoutPie.jsx";
import "./chartStyle.css";
import "../index.css";
import Countdown from './Countdown.jsx';


export default function WorkoutChart() {
  const [random, setRandom] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)",
  });

  const generateChartPart = () => {
    const rand = (n) => Math.random() * n;
    setRandom({
      percentage: rand(100),
      colour:`green`, // Problem hier: zeigt die richtige Farbe (Farbverlauf) nicht an
    });
  };
    
  return (
    <div className="WorkoutChart">
      <button onClick={generateChartPart}>test</button>
      <Pie percentage={random.percentage} colour={random.colour} />
      <Pie percentage={5} colour="blue" />
    </div>
  );
}
