// import Swiper core and required modules
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import ExWithReps from "../Components/ExWithReps";
import ExWithDur from "../Components/ExWithDur";
import IconX from "../Layouts/IconX";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

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

  const { data, loading } = useQuery(TOEXERCISES, {
    variables: { programId, workoutId },
  });

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { exercises } = data.program.workouts[0];

  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {exercises.map((exercise, index) => (
          <SwiperSlide key={`swiperSlide-${index}`}>
            {exercise.exercise.type === "reps" ? (
              <ExWithReps
                reps={exercise.reps}
                name={exercise.exercise.name}
                description={exercise.exercise.description}
              />
            ) : (
              <ExWithDur />
            )}
            <IconX />
            <NavLink to={`/exercise-end/`} className="rounded-full bg-gradient-to-br from-orange to-pink px-12 py-2 flex fixed bottom-20 justify-center mx-28 text-black">
              geschafft!
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
