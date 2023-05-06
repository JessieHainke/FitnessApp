import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import ButtonsOrange from './ButtonsOrange'
import { NavLink } from 'react-router-dom'
import DefaultWorkout from '../Layouts/DefaultWorkout'

export default function WorkoutInfos() {
  return (
    <DefaultLayout>
        <div className='flex justify-center'>
            <p className=''>Titel des Programms</p>
            <NavLink className='t-0' to="/program"><img src="./img/arrowButton.svg"></img></NavLink>
        </div>
        <div>
            <h1>Tag 1</h1>
            <p className='text-sm'>26 Min. - Kraft und Koordination</p>
        </div>
        <ButtonsOrange><NavLink to="/DefaultWorkout">los!</NavLink></ButtonsOrange>
        
    </DefaultLayout>
  )
}
