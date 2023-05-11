import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../Layouts/DefaultLayout";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;


export default function Dash() {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <div>Loading...</div>
  } 
  return (
      <DefaultLayout className={"h-screen"}>
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

  }