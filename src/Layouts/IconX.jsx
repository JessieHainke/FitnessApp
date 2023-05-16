import React from 'react'
import { NavLink } from 'react-router-dom';
import Program from '../App/Program';

export default function iconX() {

  return (
    <NavLink to="/program"><img src="./img/iconX.svg" className="top-6 right-6 fixed z-20" ></img></NavLink>
  )
}
