import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarExerciseInfo from "./NavbarExerciseInfo";

export default function NavbarExercises() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/navbarExerciseInfo`;
    navigate(path);
  };

  return (
    <div className="bg-bgmedium rounded-t-2xl z-10 fixed left-0 w-screen bottom-0">
      <button className="float-right" onClick={routeChange}>
        <img src="./img/info.svg"></img>
      </button>
    </div>
  );
}
