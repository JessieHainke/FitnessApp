import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";
import { render } from 'react-dom';
import { useEffect } from "react";
import { useState, useRef } from 'react';
import { useQuery, gql } from "@apollo/client";
import { NavLink } from "react-router-dom";


const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;


export default function Browse () {
const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>Loading...</div>
  } 
    return (
            <DefaultLayout className={"flex flex-col p-2 m-2 h-full space-y-4"}>
              <h2 className="text-2xl font-bold" >Browse</h2>
              <NavLink to="/program" className="bg-gradient-to-br from-orange to-pink  shadow-white pt-16 rounded-2xl px-4 py-3 text-center h-48">
                <h2 className="text-2xl font-bold">{data.programs[0].name}</h2>
              </NavLink>
              <NavLink to="/program" className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[1].name}</h2>
              </NavLink>
              <NavLink to="/program" className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[2].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[3].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[4].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[5].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[6].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[7].name}</h2>
              </NavLink>
              <NavLink to="/program"  className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[8].name}</h2>
              </NavLink>
              
            </DefaultLayout>
          );

    }





/*

import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import { render } from 'react-dom';
import { useEffect } from "react";
import { useState, useRef } from 'react';
import Program from "./Program";

export default function Browse() {
    const [show, setShow] = useState(true);
    const ref = useRef(null);


    return (
      <DefaultLayout>
      
      <h2 className="text-2xl font-bold" >Browse</h2>
      <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center" 
        onClick={() => {
          setShow(!show);
        }}>
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </button>
        {show && <Program ref={ref}/>}
      </DefaultLayout>
    );

    }
*/

