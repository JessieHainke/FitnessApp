import { useState, useRef } from 'react';
import Browse from './Browse';
import Program from './Program';


export default function HideProgram() {
    const [show, setShow] = useState(true);
    const ref = useRef(null);
    console.log('blabla');

    return (
      <DefaultLayout>
      
      <h2 className="text-2xl font-bold" >Browse</h2>
      <button className="bg-gradient-to-br from-orange to-pink pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center" 
        onClick={() => {
          setShow(!show);
        }}>
        <h2 className="text-2xl font-bold">Titel des Programms</h2>
      </button>
        {show && <Browse ref={ref}/>}
      </DefaultLayout>
    );

    }