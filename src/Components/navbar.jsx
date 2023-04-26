import React from "react";




export default function navbar() {
  /*const [activeScreen, setActiveScreen] = useState('Dash');*/

  function HomeButton() {
    console.log('führt zu Home-Seite');
    /*setActiveScreen('Dash');*/
  }
  
  function BrowseButton() {
    console.log('führt zu browse-Seite');
    /*setActiveScreen('Browse');*/
  }

  function ProfileButton() {
    console.log('führt zu profile-Seite');
    /*setActiveScreen('Profile');*/
  };
/*
  function renderScreen() {
    switch (activeScreen) {
      case 'Dash':
        return <Dash />;
      case 'Browse':
        return <Browse />;
      case 'Profile':
        return <Profile />;
      default:
        return <Dash />;
    }
  };
*/
  return (

      <div className="flex justify-between z-10 bg-black px-8 py-2 rounded-full sticky fixed bottom-0 left-0 right-0">
      <button onClick={HomeButton}><img src="./img/home_dark.svg"></img></button>
      <button onClick={BrowseButton}><img src="./img/workouts_dark.svg"></img></button>
      <button onClick={ProfileButton}><img src="./img/profile_dark.svg"></img></button>
    </div>
    
  )
}

