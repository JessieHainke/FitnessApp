import { useQuery, gql } from "@apollo/client";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import "./browse.css";
import ButtonsOrange from "./ButtonsOrange";
import IconX from "../Layouts/IconX";
import Workout from "./Workout";

const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      workouts {
        category
      }
      image {
        url
      }
    }
  }
`;


export default function Program() {

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/browse`;
    navigate(path);
  };

  const { id } = useParams();

  const { data, loading, error } = useQuery(PROGRAM, {
    variables: { id },
  });

  const  programs  = data;
 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>Something went wrong...</h2>;
  }
  
  const { program } = data;

  console.log (program);
  console.log (programs);
  
  const backgroundColors = ['bg-gradient-to-br from-orange to-pink  pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center',
  'bg-gradient-to-br from-greenblue to-seablue pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center',
  "bg-gradient-to-br from-cyan to-yellowgreen pt-16 rounded-2xl px-4 py-3 shadow-white h-48 text-center"
];

  return (
    
    <div className={"inset-0 bg-bgdark text-white h-screen leading-tight"}>
      <div className="bg-gradient-to-br from-orange to-pink pt-16 px-4 py-3 shadow-white text-center z-10">
      <button onClick={routeChange} src="..img/iconX.svg"><IconX /></button>
        <h1 className="text-4xl font-bold py-4 text-white pt-36 pb-24 pl-3 pr-3">
          {data.program.name}
        </h1>
        <div className="flex justify-between pl-6 pr-6">
          <div className="flex flex-col justify-center items-center">
            <img src="../img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">
              {data.program.focus}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="../img/Ellipse 1.svg"></img>
            <p className="text-xs pt-1 font-thin text-white">
              {data.program.difficulty}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="../img/Ellipse 1.svg" className="w-6"></img>
            <p className="text-xs pt-1 font-thin text-white">
              {data.program.duration} WOCHEN
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bgmedium text-white p-4">
        <p className="">
          {data.program.description}
        </p>
      </div>
      
     {/* {programs.map((workout, index) => (
          <Link 
            to={`/workout/${workout.id}`}
            key={`workout-${index}`}
            className={`${backgroundColors[index % backgroundColors.length]}`
              }>
              <h2 className="text-2xl font-bold">{workout.name}</h2>
            </Link>
        ))};*/}
      <div className="bg-bgdark px-6 py-14">
        <h3 className="pt-0 pb-8 font-bold">So ist das Programm aufgeteilt:</h3>
        <div className="flex flex-row justify-between ">
          <img src="../img/diagramm.svg" className="w-1/3"></img>
          <ul className="list-disc text-sm">
            <li color="orange">Krafttraining</li>
            <li color="pink">Koordination</li>
            <li color="green">Cardio</li>
            <li color="yellow">Beweglichkeit</li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly pt-16 pb-14">
          <div className="flex justify-between ">
            <h3 className="font-bold pb-6">21 Tage</h3>
            <button className="text-xs bg-bgdark">
              Alle anzeigen
            </button>
          </div>
          <div className="flex flex-col gap-3.5 ">
            <div className="rounded-2xl bg-bgmedium w-full flex">
              <img src="../img/Rectangle1.svg"></img>
              <NavLink to={`/workout/${id}`} className="p-4">
                <h3 className="font-bold pb-4">Tag 1</h3>
                <p className="text-xs">26 Min. -</p>
                <p className="text-xs">Beweglichkeit</p>
              </NavLink>
            </div>
              <NavLink to={`/workout/${id}`} className="rounded-2xl bg-bgmedium w-full flex">
                <img src="../img/Rectangle2.svg"></img>
                <div className="p-4">
                  <h3 className="font-bold pb-4">Tag 2</h3>
                  <p className="text-xs">26 Min. -</p>
                  <p className="text-xs">Beweglichkeit</p>
                </div>
              </NavLink>
              <NavLink to={`/workout/${id}`} className="rounded-2xl bg-bgmedium w-full flex">
                <img src="../img/Rectangle3.svg"></img>
                <div className="p-4">
                  <h3 className="font-bold pb-4">Tag 3</h3>
                  <p className="text-xs">26 Min. -</p>
                  <p className="text-xs">Beweglichkeit</p>
                </div>
              </NavLink>
            </div>
            
        </div>
      </div>
    </div>
  );
}
