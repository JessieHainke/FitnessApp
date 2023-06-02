import React from 'react';
import { Swiper } from 'swiper/swiper-bundle';
import '../App/swiper.css';

import { WorkoutArrows } from '../Layouts/WorkoutArrows.jsx'

import { data } from 'autoprefixer';


export default function Swiper('.swiper', {
    direction: 'horizontal';
    loop: true

    // configure Swiper to use modules
    modules: [Navigation, Pagination]
  }
) {
  return (
    <div className='swiper'>
        <div className='swiper-wrapper'>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
        </div>
        <WorkoutArrows />
    </div>
  )
}
