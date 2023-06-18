// import Swiper core and required modules
import { NavLink, useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WorkoutFortschritt from "./WorkoutFortschritt";


// Import Swiper styles
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

const EXERCISES = gql`
  query Exercises($programId: ID!, $workoutId: ID!) {
    program(where: { id: $programId }) {
      id
    }
    workouts(where: { id: $workoutId }) {
      id
      name
      duration
      index
      exercises {
        ... on ExerciseWithDuration {
          id
          duration
          exercise {
            id
            name
            description
            completed
          }
        }
        ... on ExerciseWithReps {
          id
          reps
          exercise {
            id
            name
            description
            completed
          }
        }
      }
    }
  }
`;

export default () => {

  const { programId, workoutId } = useParams();

  const { data, loading } = useQuery(EXERCISES, {
    variables: { programId, workoutId },
  });

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { program } = data;
  const { workouts } = program;
  const { exercises } = data.program.workouts[0];

console.log(program, exercises, workouts);

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
    >
      <div className="flex flex-col items-center">
        <SwiperSlide><button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button></SwiperSlide>
        <SwiperSlide><button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button></SwiperSlide>
        <SwiperSlide><button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button></SwiperSlide>
        <SwiperSlide><button className="bg-gradient-to-br from-orange to-pink rounded-2xl"></button></SwiperSlide>
        
      </div>
      ...
    </Swiper>
  );
};

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
