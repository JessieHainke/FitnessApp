import React from 'react';
import DefaultLayout from './DefaultLayout';
import IconX from './IconX';
import NavbarExercises from '../Components/NavbarExercises';
import WorkoutArrows from './WorkoutArrows';
import WorkoutFortschritt from '../App/WorkoutFortschritt';
import WorkoutCountdown from '../App/Countdown';
import WorkoutChart from '../App/WorkoutChart';
import { Link } from 'react-router-dom';


export default function DefaultWorkout() {
  return (
    <div className='bg-bgdark text-white h-screen w-full absolute'>
        <Link to="/workout"><IconX /></Link>
        <WorkoutFortschritt />
        <WorkoutArrows />
        <WorkoutChart />
        <WorkoutCountdown />
        <NavbarExercises />
    </div>
  )
}
