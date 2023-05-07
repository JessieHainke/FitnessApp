import React, { useState } from 'react';
import Pie from "./WorkoutPie.jsx";
import "./chartStyle.css";
import "../index.css";



export default function WorkoutChart() {
  const [random, setRandom] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)",
  });

}
