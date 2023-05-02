import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";
import { render } from 'react-dom';
import { useEffect } from "react";
import { useState, useRef } from 'react';
import { useQuery, gql } from "@apollo/client";


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


export default function Browse2() {
const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>Loading...</div>
  } 
    return (
            <DefaultLayout>
              
              <h2 className="text-2xl font-bold" >Browse</h2>
              <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">Titel des Programms</h2>
              </button>
              <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[0].name}</h2>
              </div>
              <div className="bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[1].name}</h2>
              </div>
              <div className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[0].name}</h2>
              </div>
              <div className="bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
                <h2 className="text-2xl font-bold">{data.programs[1].name}</h2>
              </div>
              
            </DefaultLayout>
          );

    }
