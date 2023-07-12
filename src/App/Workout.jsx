import { useQuery, gql } from "@apollo/client";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";


const PROGRAM = gql`
  query program($workoutId: ID!, $programId: ID!) {
    program(where: { id: $programId }) {
      id
      workouts(where: { id: $workoutId }) {
        id
        name
        duration
        category
      }
    }
  }
`;

export default function Workout() {
  const navigate = useNavigate();
  const { programId, workoutId } = useParams();

  const { data, loading } = useQuery(PROGRAM, {
    variables: { programId, workoutId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program } = data;
  const { workouts } = program;
  console.log(workouts, program);

  return (
    <div className="bg-bgdark text-white h-screen w-screen">
      <div className="flex pt-5 justify-center px-5">
        {workouts.map((workout, index) => (
          <div key={`program-${index}`}>
            <h3 className="">{workout.name}</h3>
            <NavLink to={`/program/${programId}`}>
              <img
                src="/img/arrowToProgram.svg"
                className="top-6 right-6 fixed"
              ></img>
            </NavLink>
            <div className="flex justify-center flex-col absolute inset-y-1/2 ">
              <h1 className="text-4xl text-center font-bold">Tag {index + 1}</h1>
              <p className="text-xs text-center leading-10">
                {workout.duration} Min. - {workout.category}
              </p>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="flex justify-center content-between flex-wrap">
        <NavLink
          to={`/exercises/${programId}/workout/${workoutId}`}
          className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 bottom-10 absolute items-center flex justify-center mx-36 text-black"
        >
          los!
        </NavLink>
      </div>
    </div>
  );
}
