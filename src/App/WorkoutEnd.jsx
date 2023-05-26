import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function WorkoutEnd() {

    const navigate = useNavigate();
    const routeToDash = () => {
        const path = `/browse`;
        navigate(path);
      };

    

  return (
    <div className='h-screen w-screen bg-bgdark'>
        <div className='bg-bgmedium rounded-xl m-6 h-60 text-white font-bold text-xl flex flex-col items-center justify-center absolute top-1/3 p-12'>
            <div className='flex items-center'>Möchtest du das Workout wirklich beenden?</div>
            <div className='flex flex-row'>
                <button className='text-sm' onClick={() => navigate(-1)}>Nein, weitermachen</button>
                <button className='rounded-xl text-sm bg-bgdark' onClick={routeToDash}>ja, beenden</button>
            </div>
        </div>
    </div>
    )
}
