import { useQuery, gql } from "@apollo/client";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

const PROGRAM = gql`
  query WORKOUTS($id: ID!) {
    program(where: { id: $id }) {
      workouts(where: { id: $id }) {
        duration
        id
        category
      }
    }
  }
`;

export default function Workout() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, loading } = useQuery(PROGRAM, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program, workouts } = data; // warum meckert er bei dieser blöden Zeile?!? Ich check das nicht... :-/

  return (
    <div className="bg-bgdark text-white h-screen w-screen">
      <div className="flex pt-5 justify-center px-5">
        <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
          <img src="../img/arrowToProgram.svg"></img>
        </button>
        {program.workouts.map((workout, index) => (
          <div key={`program-${index}`}>
            <h3 className="">{workout.name}</h3>
            <NavLink to={`/program/${id}`}>
              <img
                src="../img/arrowToProgram.svg"
                className="top-6 right-6 fixed"
              ></img>
            </NavLink>
            <div className="absolute inset-y-1/2 w-64 inset-x-1/4">
              <h1 className="text-2xl">{workouts.index}</h1>
              <p>
                {workouts.duration} Min. - {workouts.category}
              </p>
            </div>
          </div>
        ))};
      </div>
      <NavLink
        to={`/default-workout/${id}`}
        className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 flex justify-center mx-36 text-black"
      >
        los!
      </NavLink>
    </div>
  );
}
