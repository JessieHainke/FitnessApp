import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../Layouts/DefaultLayout";
import HideProgram from "./HideProgram";


const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
      difficulty
    }
  }
`;

export default function Program() {
  const { data } = useQuery(PROGRAMS);

  return (
    <div className={'inset-0 bg-bgdark text-white  h-screen leading-tight'}>
      <div className="bg-gradient-to-br from-orange to-pink pt-16  px-4 py-3 shadow-white text-center z-10">
        <img src="./img/iconX.svg" className="top-6 right-6 fixed"></img>
        <h1 className="text-4xl font-bold py-4 text-white pt-36 pb-24 pl-3 pr-3">
          {/*{data.programs[0].name}*/}Titel des Programms
        </h1>
        <div className="flex justify-between pl-6 pr-6">
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">{/*{data.programs[0].focus}*/}KRAFT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">{/*{data.programs[0].difficulty}*/}LEICHT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg" className="w-6"></img>
            <p className="text-xs pt-1 font-thin text-white">{/*{data.programs[0].duration}*/}6 WOCHEN</p>
          </div>
        </div>
      </div>
      <div className="bg-bgmedium text-white p-4">
        <p className="">
          Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
          Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
          Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
          Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt
          sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in
          dem einem gebratene Satzteile in den Mund fliegen.
        </p>
      </div>
      <button className="rounded-full bg-gradient-to-br from-orange to-pink text-bgdark fixed w-28 h-12 inset-x-1/3">jetzt starten</button>
      <div className="bg-bgdark px-6 py-14">
        <h3 className="pt-0 pb-8 font-bold">So ist das Programm aufgeteilt:</h3>
        <div className="flex flex-row justify-between ">
          <img src="./img/diagramm.svg" className="w-1/3"></img>
          <ul className="list-disc text-sm">
            <li>Krafttraining</li>
            <li>Koordination</li>
            <li>Cardio</li>
            <li>Beweglichkeit</li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly pt-16 pb-14">
          <div className="flex justify-between ">
            <h3 className="font-bold pb-6">21 Tage</h3>
            <p className="text-xs">Alle anzeigen</p>
          </div>
          <div className="flex flex-col gap-3.5 ">
            <div className="rounded-2xl bg-bgmedium w-full flex">
              <img src="./img/Rectangle1.svg"></img>
              <div className="p-4">
                <h3 className="font-bold pb-4">Tag 1</h3>
                <p className="text-xs">26 Min. -</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
            <div className="rounded-2xl bg-bgmedium w-full flex">
              <img src="./img/Rectangle2.svg"></img>
              <div className="p-4">
                <h3 className="font-bold pb-4">Tag 2</h3>
                <p className="text-xs">26 Min. -</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
            <div className="rounded-2xl bg-bgmedium w-full flex">
              <img src="./img/Rectangle3.svg"></img>
              <div className="p-4">
                <h3 className="font-bold pb-4">Tag 3</h3>
                <p className="text-xs">26 Min. -</p>
                <p className="text-xs">Beweglichkeit</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

/*

export default function Dash() {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>Loading...</div>
  } 
  return (
      <DefaultLayout>
        <h1 className="text-4xl font-bold py-4">Hi XY! </h1>
        <img
          src="./img/fitness-image.svg"
          className="px-14 py-4 mx-0 flex justify-center"
        ></img>
        <div>
          <div className="flex py-4 gap-16">
            <h2 className="text-2xl font-bold">Dein Workout heute</h2>
            <p className="font-normal text-xs float-right pt-2">Trainingsplan</p>
          </div>
          <div className="bg-bgmedium pt-16 rounded-2xl px-4 pb-3 shadow-white">
            <h3 className="text-lg font-bold">Tag 2</h3>
            <h2 className="text-2xl font-bold">{data.programs[0].name}</h2>
            <div className="flex row gap-3">
              <p className="font-normal text-xs">{data.programs[0].duration}</p>
              <p className="font-normal text-xs">-</p>
              <p className="font-normal text-xs">{data.programs[0].focus}</p>
            </div>
            
          </div>
        </div>
      </DefaultLayout>
    );

  }*/