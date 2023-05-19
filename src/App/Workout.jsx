import { useQuery, gql } from "@apollo/client";

import React from 'react';
import Program from './Program';
import ButtonsOrange from "./ButtonsOrange";
import { Link, NavLink } from "react-router-dom";
import index from "./Browse";
import Browse from "./Browse";

    const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
      difficulty
    }
  }`;
  
export default function Workout() {


  const { data, loading } = useQuery(PROGRAMS);
 
  if (loading) {
    return <div>Loading...</div>
  } 
  console.log(index);
    return (
    <div className='bg-bgdark text-white h-screen w-screen'>
      <div className="flex pt-5 justify-center px-5">
      {programs.map((program, index) => (<NavLink to="/default-workout" key={`program-${index}`}><h3 className="">{program.name}</h3></NavLink>))}
        <Link to="/program"><img src="./img/arrowToProgram.svg" className="top-6 right-6 fixed" /></Link>
      </div>
        
        <div className="absolute inset-y-1/2 w-64 inset-x-1/4">
            <h1 className="text-2xl">Tag 1</h1>
            <p>26 Min. - Kraft und Koordination</p>
        </div>
        <Link to="/default-workout" className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 flex justify-center mx-36 text-black">los!</Link>
    </div>
  )
}


{programs.map((program, index) => (
  <NavLink 
    to="/workout" 
    key={`program-${index}`}
    className={`${backgroundColors[index % backgroundColors.length]}`
      }>
     
      <h2 className="text-2xl font-bold">{program.name}</h2>
  </NavLink>
))}
