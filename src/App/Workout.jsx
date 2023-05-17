import { useQuery, gql } from "@apollo/client";

import React from 'react';
import Program from './Program';
import ButtonsOrange from "./ButtonsOrange";
import { Link } from "react-router-dom";

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
  
    return (
    <div className='bg-bgdark text-white h-screen w-screen'>
      <div className="flex pt-5 justify-center px-5">
        <h3 className="">{data.programs[1].name}</h3>
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
