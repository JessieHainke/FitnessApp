import React from 'react'
import DefaultLayout from '../Layouts/DefaultLayout';
import IconX from '../Layouts/IconX';
import { useNavigate } from 'react-router-dom';

export default function ExerciseEnd() {

    const navigate = useNavigate();
    const routeChange = () => {
        const path = `/workout-end`;
        navigate(path);
      };

  return (
    <DefaultLayout className="h-screen">
        <button onClick={routeChange}><IconX /></button>
        <div className='h-screen flex flex-col items-center relative top-1/4'>
            <h1 className='text-2xl'>Glückwunsch!</h1>
            <h3 className='text-base'>Du hast 3 Tage am Stück trainiert!</h3>
            <p className='text-sm pb-6'>Wie war das Workout?</p>
            <div className='flex flex-row justify-evenly space-x-3 py-5'>
                <button className='bg-bgmedium rounded-xl' onClick={routeChange}>zu leicht</button>
                <button className='bg-bgmedium rounded-xl' onClick={routeChange}>genau richtig</button>
                <button className='bg-bgmedium rounded-xl' onClick={routeChange}>zu schwer</button>
            </div>
            <p className='text-bgmedium' onClick={routeChange}>Bewertung überspringen</p>
        </div>
        
        
    </DefaultLayout>
  )
}

