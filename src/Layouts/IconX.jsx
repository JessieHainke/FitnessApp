import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../img/iconX.svg"


export default function IconX() {
  return (
    <button>
      <img src={Icon} className="top-6 right-6 fixed z-20"></img>
    </button>
  );
}
