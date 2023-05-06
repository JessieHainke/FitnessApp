import React from 'react';
import DefaultLayout from './DefaultLayout';
import IconX from './IconX';
import NavbarExercises from '../Components/NavbarExercises';
import WorkoutArrows from './WorkoutArrows';
import WorkoutFortschritt from '../App/WorkoutFortschritt';
import WorkoutCountdown from '../App/Countdown';
import WorkoutChart from '../App/WorkoutChart';


export default function DefaultWorkout() {
  return (
    <div className='bg-bgdark text-white h-screen p-6'>
        <IconX />
        <WorkoutFortschritt />
        <WorkoutArrows />
       
        <WorkoutCountdown />
        <NavbarExercises />
    </div>
  )
}
