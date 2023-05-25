import React from 'react'
import { Link } from 'react-router-dom';
import NextExercise from '../App/NextExercise';


export default function WorkoutArrows() {
  return (
    <div className='flex justify-between inset-y-1/2 relative'>
    <Link to="/next-exercise/"><img src="./img/arrowLeft.svg" ></img></Link>
        <img src="./img/arrowRight.svg"></img>
    </div>
  )
}
