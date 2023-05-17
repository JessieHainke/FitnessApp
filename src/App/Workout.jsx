import { useQuery, gql } from "@apollo/client";

import React from 'react';
import Program from './Program';
import ButtonsOrange from "./ButtonsOrange";

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
        <h3 className="flex justify-center">{data.programs[1].name}</h3>
        <div className="absolute inset-y-1/2 w-64 inset-x-1/4">
            <h1 className="text-2xl">Tag 1</h1>
            <p>26 Min. - Kraft und Koordination</p>
        </div>
        <ButtonsOrange>los!</ButtonsOrange>
    </div>
  )
}
