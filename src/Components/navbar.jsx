import React from "react";

export default function navbar() {
  return (
    <div className="flex justify-between z-10 bg-black px-8 py-2 rounded-full sticky fixed bottom-0 left-0 right-0">
      <img src="./img/home_dark.svg"></img>
      <img src="./img/workouts_dark.svg"></img>
      <img src="./img/profile_dark.svg"></img>
    </div>
  )
}
