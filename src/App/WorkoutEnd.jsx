import React from 'react'

export default function WorkoutEnd() {
  return (
    <div className='bg-bgmedium rounded-xl m-6 h-60 text-white font-bold text-xl flex flex-col items-center justify-center absolute top-1/3 p-12'>
        <div className='flex items-center'>Möchtest du das Workout wirklich beenden?</div>
        <div className='flex flex-row'>
            <button className='text-sm'>Nein, weitermachen</button>
            <button className='rounded-xl text-sm bg-bgdark'>ja, beenden</button>
        </div>
    </div>
    )
}
