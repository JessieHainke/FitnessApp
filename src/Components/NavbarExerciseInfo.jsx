import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NavbarExerciseInfo() {

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/default-workout`;
    navigate(path);
  };

  return (
    <div className='h-full z-10'>
      <div className='bg-bgdark w-full h-screen z-20 '>
        <img src='./img/ExerciseInfoCloseBg.svg' className='top-6 right-6 fixed z-20'></img>
        <img src='./img/ExerciseInfoBg.svg' className='top-20 right-0 fixed z-20'></img>
      </div>
      <div className="fixed bottom-0 w-full h-3/4 m-0 text-white bg-bgmedium z-20 p-4 rounded-t-2xl">
        <h2 className='text-2xl font-bold'>Plank</h2>
        <p className='pb-14'>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.</p>
        <div className='flex justify-center'>
            <button className='bg-bgdark text-white' onClick={routeChange}>okay!</button>
        </div>
      </div>
    </div>
  )
}
