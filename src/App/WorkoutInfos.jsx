import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout'
import ButtonsOrange from './ButtonsOrange'

export default function WorkoutInfos() {
  return (
    <DefaultLayout>
        <div className='flex justify-center'>
            <p className=''>Titel des Programms</p>
            <button className='t-0'><img src="./img/arrowButton.svg"></img></button>
        </div>
        <div>
            <h1>Tag 1</h1>
            <p className='text-sm'>26 Min. - Kraft und Koordination</p>
        </div>
        <ButtonsOrange></ButtonsOrange>
        
    </DefaultLayout>
  )
}
