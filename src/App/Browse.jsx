import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";
import { render } from 'react-dom';
import { useEffect } from "react";

export default function Browse() {
  
  function Programs( {className, children} ) {
  {/*function Title( {className, children}) {
              <h2 className="text-2xl font-bold">${className}test</h2>
              
              return (
                <Title className={`bg-red ${children}`}/>
              
                <div className={`bg-gradient-to-br  pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center ${className}`}>
                    {children}
                    <Title />
                </div>)
            }
        } */}
        
  }

  function TitelDesProgramms() {
    const [showOverlay, setShowOverlay] = React.useState(null);
    
    const handleButtonClick = () => {
      setShowOverlay(<Program />);
    };

    return (
      <>
      {showOverlay}
      <button
      className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center"
      onClick={handleButtonClick}>  
      </button>
      </>
    );
  }
 
  const titel = console.log('abc');
  const setTitel = () => {
    console.log('def');
    return (
      showOverlay('testTitel')
    )

  };

  return (
    <DefaultLayout>
      
      <h2 className="text-2xl font-bold" >Browse</h2>
      <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center" value={titel} onClick={() => showOverlay(<Program />)}>
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </button>
      <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">100 Push-Ups Challenge</h2>
      </div>
      <div className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </div>
      <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Stretch and Relax</h2>
      </div>
      <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </div>
      <div>
      {/*<Programs className="bg-gradient-to-br from-orange to-pink ${className}" />
      <Programs className="bg-gradient-to-br from-cyan to-yellowgreen ${className} {`<Title />`}" />*/}
      </div>
      
    </DefaultLayout>
  );

}


export function clickHandler() {
  console.log("test");
  return (
  <Program />
  )
}

