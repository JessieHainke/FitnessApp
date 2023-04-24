import React from "react";

export default function dash() {
  return (
    <div className="bg-bgdark text-white px-6 py-14">
      <h1 className="text-4xl font-bold py-4">Hi XY!</h1>
      <img src="./img/fitness-image.jpg" className="px-14 py-4 mx-0 flex justify-center"></img>
      <div>
        <div className="flex py-4 gap-16">
          <h2 className="text-2xl font-bold">Dein Workout heute</h2>
          <p className="font-normal text-xs float-right pt-2">Trainingsplan</p>
        </div>
        <div className="bg-bgmedium pt-16 rounded-2xl px-4 pb-3 shadow-white">
          <h3 className="text-lg font-bold">Tag 2</h3>
          <h2 className="text-2xl font-bold">Titel des Programms</h2>
          <p className="font-normal text-xs">26 Min. - Beweglichkeit</p>
        </div>
      </div>
    </div>
  );
}
