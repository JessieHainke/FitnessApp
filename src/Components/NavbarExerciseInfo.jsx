import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function NavbarExerciseInfo({ description, name, onClose }) {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/default-workout/${id}`;
    navigate(path);
  };

  return (
    <div className="h-full z-10">
      <div className="bg-bgdark w-full h-screen z-20 ">
        <img
          src="../img/ExerciseInfoCloseBg.svg"
          className="top-6 right-6 fixed z-20"
        ></img>
        <img
          src="../img/ExerciseInfoBg.svg"
          className="top-20 right-0 fixed z-20"
        ></img>
      </div>
      <div className="fixed bottom-0 w-full h-3/4 m-0 text-white bg-bgmedium z-20 p-4 rounded-t-2xl">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="pb-14">{description}</p>
        <div className="flex justify-center">
          <button className="bg-bgdark text-white" onClick={onClose}>
            okay!
          </button>
        </div>
      </div>
    </div>
  );
}
