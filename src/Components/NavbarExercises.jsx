import React from 'react'

export default function NavbarExercises() {

  const handleClick = () => {
    console.log('test1234');
    <div className="fixed top-0 right-0 w-full h-1/2 bg-bgmedium z-20">
    <button className='bg-bgdark flex justify-center text-white'>okay!</button>
    </div>
  }

  return (
    <div className="bg-bgmedium rounded-t-2xl fixed left-0 w-screen bottom-0">
        <button className='float-right' onClick={handleClick}><img src="./img/info.svg"></img></button>
    </div>
  );
}
