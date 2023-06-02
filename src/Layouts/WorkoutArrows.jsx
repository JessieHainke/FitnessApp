import React from "react";
import { Link } from "react-router-dom";

export default function WorkoutArrows() {
  return (
    <div className="flex justify-between inset-y-1/2 relative">
      <Link>
        <img src="../img/arrowLeft.svg"></img>
      </Link>
      <Link>
        <img src="../img/arrowRight.svg"></img>
      </Link>
    </div>
  );
}
