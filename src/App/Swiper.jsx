// import Swiper core and required modules
import { NavLink, useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import WorkoutFortschritt from "./WorkoutFortschritt";
import ExWithReps from "../Components/ExWithReps";

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

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const { data, loading } = useQuery(TOEXERCISES, {
    variables: { programId, workoutId },
  });

  const [activeSlide, setActiveSlide] = useState(0);

  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  /*
  

  const { exercises } = data.program.workouts[0];

  const slides = exercises.map((exercise, index) => {
    const exerciseName = exercise.exercise.name;
    const { duration } = exercise;
    if ("duration" in exercise) {
      return (
        <div key={index}>
          <ExWithDur 
            exerciseName={exerciseName}
            duration={duration}
          />
          <p>{exerciseName}</p>  
        </div>
      )
    }

    if ("reps" in exercise) {
      return (
        <div key={index}>
          <ExWithReps reps={exercise.reps} exerciseName={exerciseName}/>
        </div>
      )
    }

    return <div key={index}>Unbekannte Übung</div>
  });

  const handleNextSlide = () => {
    if (activeSlide === slides.length - 1) {
      return;
    }
    setActiveSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    if (activeSlide === 0) {
      return;
    }
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        {slides.map((_, index) => (
        <span
          key={index}
          className={`dot ${activeSlide === index ? "active" : ""}`}
          onClick={() => setActiveSlide(index)}
        ></span>))}
      </div>
    );
  };

  return (
    <div>


    </div>
  )
  {
    
  const { program } = data;
  const { workouts } = program;
  

console.log(program, exercises, workouts);

  
*/
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
          <Ex />
        </SwiperSlide>
      </div>
      ...
    </Swiper>
  );
}

{
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
}
