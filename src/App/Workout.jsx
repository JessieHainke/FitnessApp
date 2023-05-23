import { useQuery, gql } from "@apollo/client";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";


const PROGRAM = gql`
  query Program($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      description
      focus
      duration
      difficulty
      image {
        url
      }
      workouts {
        id
        duration
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
    return <div>Loading...</div>
  } 

  const { program } = data; // warum meckert er bei dieser blöden Zeile?!? Ich check das nicht... :-/
    return (
    <div className='bg-bgdark text-white h-screen w-screen'>
      <div className="flex pt-5 justify-center px-5">
      <button onClick={() => navigate(-1)} className="fixed top-5 right-5">
        <img src="./img/arrowToProgram.svg"></img>
      </button>
     {/*} {programs.workouts.map((program, index) => (<Link to="/default-workout"><h3 className="">{program.name}</h3></Link>))}
        <Link to="/default-workout/"><img src="./img/arrowToProgram.svg" className="top-6 right-6 fixed" /></Link> */}
    </div>
        
        <div className="absolute inset-y-1/2 w-64 inset-x-1/4">
            <h1 className="text-2xl">{program.name}</h1>
            <p>{program.duration} Min. - Kraft und Koordination</p>
        </div>
        <Link to={"/default-workout"} className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 flex justify-center mx-36 text-black">los!</Link>
    </div>
  )
}
/*

{programs.map((program, index) => (
  <NavLink 
    to="/workout" 
    key={`program-${index}`}
    className={`${backgroundColors[index % backgroundColors.length]}`
      }>
     
      <h2 className="text-2xl font-bold">{program.name}</h2>
  </NavLink>
))}
*/