import DefaultLayout from "../Layouts/DefaultLayout";
import { useRef } from "react";

export default function NameInput() {
  var nameInputRef = useRef();
  console.log(nameInputRef);

  function handleClick() {
    console.log(nameInputRef.current.value);
    nameInputRef.current.value = "";
  }

  return (
    <DefaultLayout>
      <p>Schön dass du dabei bist! Wie heißt du?</p>
      <input
        placeholder="Dein Name"
        className="text-black"
        ref={nameInputRef}
      ></input>
      <button className="bg-red-500" onClick={handleClick}>
        TestButton
      </button>
    </DefaultLayout>
  );
}
