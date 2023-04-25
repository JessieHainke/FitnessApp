import React from "react";




export default function navbar() {

  function BrowseButton() {
    console.log('führt zu browse-Seite')
  }

  function HomeButton() {
    console.log('führt zu Home-Seite')
  }

  function ProfileButton() {
    console.log('führt zu profile-Seite')
  }

  return (

      <div className="flex justify-between z-10 bg-black px-8 py-2 rounded-full sticky fixed bottom-0 left-0 right-0">
      <button onClick={HomeButton}><img src="./img/home_dark.svg"></img></button>
      <button onClick={BrowseButton}><img src="./img/workouts_dark.svg"></img></button>
      <button onClick={ProfileButton}><img src="./img/profile_dark.svg"></img></button>
    </div>
    
  )
}

