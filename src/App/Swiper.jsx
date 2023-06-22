// import Swiper core and required modules
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ExWithReps from "../Components/ExWithReps";
import ExWithDur from "../Components/ExWithDur";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

import Ex from "../Components/Ex";

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
            }
          }
          ... on ExerciseWithReps {
            id
            exercise {
              name
              id
              description
              completed
            }
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

  const slides = exercises.map((exercise, index) => {
    const exerciseName = exercise.exercise.name;
    const { duration, reps } = exercise;

    if (duration in exercise) {
      return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          width={screen}
          key={index + 1}
          
        >
          <div className="flex flex-col items-center">
            <SwiperSlide>
              <button className="bg-gradient-to-br from-orange to-pink rounded-2xl">
                {" "}
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <ExWithDur />
            </SwiperSlide>
          </div>
          ...
        </Swiper>
      );
    }

    if (reps in exercise) {
      return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          width={screen}
          key={index + 1}
        >
          <div className="flex flex-col items-center">
            <SwiperSlide>
              <button className="bg-gradient-to-br from-orange to-pink rounded-2xl">
                {" "}
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button>
            </SwiperSlide>
            <SwiperSlide>
              <ExWithReps />
            </SwiperSlide>
          </div>
          ...
        </Swiper>
      );
    }
  });
}

/*
export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination {{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};


export default function Swiper('.swiper', {
    direction: 'horizontal';
    loop: true

    // configure Swiper to use modules
    modules: [Navigation, Pagination]
  }
) {
  return (
    <div className='swiper'>
        <div className='swiper-wrapper'>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
            <div className='swiper-slide'>{data.program.workout.exercise[0]}</div>
        </div>
        <WorkoutArrows />
    </div>
  )
}
*/

