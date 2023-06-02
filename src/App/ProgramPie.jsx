import React from "react";
import "../App.css";
import "../index.css";

const workoutPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
    ></circle>
  );
};

// Zeitangabe in der Mitte des Kreises
const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
      color={"#fff"}
    >
      {percentage.toFixed(0)} sec
    </text>
  );
};

// Zeitdarstellung im Kreis
const ProgramPie = ({ percentage, colour }) => {
  const pct = workoutPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate (-90 ${"100 100"})`}>
        <Circle colour="#3A4151" />
        <Circle colour={colour} pct={pct * 3.33} /> // 3.33, weil wir 100% als
        Gesamtwert brauchen
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default ProgramPie;
