import React from "react";

export function Test() {
  function HomeButton() {
    console.log("funktioniert!");
  }

  return <button onClick={HomeButton}>test</button>;
}
