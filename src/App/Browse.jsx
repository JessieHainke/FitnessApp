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


