import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import Program from "./Program";
import { render } from 'react-dom';
import { useEffect } from "react";
import { useState, useRef } from 'react';

export default function Browse2() {
    return (
            <DefaultLayout>
              
              <h2 className="text-2xl font-bold" >Browse</h2>
              <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center">
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
              
            </DefaultLayout>
          );

    }
