import React from "react";
import NavbarExerciseInfo from "./NavbarExerciseInfo";
import { useNavigate } from "react-router-dom";

export default function NavbarExercises() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/navbarExerciseInfo`;
    navigate(path);
  };

  return (
    <div className="bg-bgmedium rounded-t-2xl fixed left-0 w-screen bottom-0">
      <button className="float-right" onClick={routeChange}>
        <img src="../img/info.svg"></img>
      </button>
    </div>
  );
}
