import React from 'react'
import NavbarExerciseInfo from './NavbarExerciseInfo';

export default function NavbarExercises() {

  const handleClick = () => {
    console.log('test1234');
    <NavbarExerciseInfo />
  }

  return (
    <div className="bg-bgmedium rounded-t-2xl fixed left-0 w-screen bottom-0">
        <button className='float-right' onClick={handleClick}><img src="./img/info.svg"></img></button>
    </div>
  );
}
