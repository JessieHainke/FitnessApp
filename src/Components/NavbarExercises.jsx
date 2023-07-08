import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarExerciseInfo from "./NavbarExerciseInfo";
import Info from "../img/info.svg";

export default function NavbarExercises({ description, name }) {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/navbarExerciseInfo`;
    navigate(path);
  };

  return (
    <div className="bg-bgmedium rounded-t-2xl z-10 right-10 fixed h-14 w-screen bottom-0">
      <NavbarExerciseInfo description={"Test Description"} name={"test name"}/>
      <button className="right-5" onClick={routeChange}>
        <img src={Info} className="right-5"></img>
      </button>
    </div>
  );
}
