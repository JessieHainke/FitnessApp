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
    <DefaultLayout className={'inset-0'}>
      <div className="bg-gradient-to-br from-orange to-pink pt-16  px-4 py-3 shadow-white text-center h-full">
        <img src="./img/iconX.svg" className="top-0 right-3"></img>
        <h1 className="text-4xl font-bold py-4 text-white pt-36 pb-24">
          {data.programs[0].name}
        </h1>
        <div className="flex justify-between pl-6 pr-6">
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">{data.programs[0].focus}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">{data.programs[0].difficulty}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="./img/Ellipse 1.svg" className="w-6"></img>
            <p className="text-xs pt-1 font-thin text-white">{data.programs[0].duration}</p>
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
    </DefaultLayout>
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