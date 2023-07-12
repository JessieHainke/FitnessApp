// import Swiper core and required modules
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ExWithReps from "../Components/ExWithReps";
import ExWithDur from "../Components/ExWithDur";
import IconX from "../Layouts/IconX";
import Info from "../img/info.svg";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";
import NavbarExerciseInfo from "../Components/NavbarExerciseInfo";

const TOEXERCISES = gql`
  query TOEXERCISES($programId: ID!, $workoutId: ID!) {
    program(where: { id: $programId }) {
      id
      workouts(where: { id: $workoutId }) {
        exercises {
          ... on ExerciseWithDuration {
            id
            exercise {
              description
              id
              name
              completed
              type
            }
          }
          ... on ExerciseWithReps {
            id
            exercise {
              name
              id
              description
              completed
              type
            }
            reps
          }
        }
      }
    }
  }
`;

export default function Swipe() {
  const { programId, workoutId } = useParams();
  const [infoOpen, setInfoOpen] = useState(false);

  const { data, loading } = useQuery(TOEXERCISES, {
    variables: { programId, workoutId },
  });

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/browse`;
    navigate(path);
  };

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { exercises } = data.program.workouts[0];

 {/* const [timerPaused, setTimerPaused] = useState(false);

  const handlePauseResume = () => {
    setTimerPaused((prev) => !prev);
  }; */}

  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => {
          setInfoOpen(false);
          //handlePauseResume();
        }}
      >
        {exercises.map((exercise, index) => (
          <SwiperSlide key={`swiperSlide-${index}`}>
            <button className="right-5 top-5 absolute" onClick={routeChange}>
              <IconX />
            </button>

            {exercise.exercise.type === "reps" ? (
              <ExWithReps
                reps={exercise.reps}
                name={exercise.exercise.name}
                description={exercise.exercise.description}
              />
            ) : (
              <ExWithDur />
            )}

            <NavLink
              to={`/exercise-end/`}
              className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 flex fixed bottom-20 justify-center mx-28 text-black"
            >
              geschafft!
            </NavLink>
            <div className="bg-bgmedium rounded-t-2xl fixed left-0 h-14 w-screen bottom-0">
              <button onClick={() => setInfoOpen((prevValue) => !prevValue)}>
                <img src={Info} />
              </button>
            </div>
            {infoOpen && (
              <NavbarExerciseInfo
                description={exercise.exercise.description}
                name={exercise.exercise.name}
                onClose={() => setInfoOpen(false)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
