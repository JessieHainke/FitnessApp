import React, { useState } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Navigation, Pagination } from "swiper";

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

export default function Ex() {
  const [activeSlide, setActiveSlide] = useState(0);

  const { exercises } = data.program.workouts[0];

  const slides = exercises.map((exercise, index) => {
    const exerciseName = exercise.exercise.name;
    const { duration } = exercise;

    
    if ("duration" in exercise) {
      return (
        <div key={index}>
          <ExWithDur exerciseName={exerciseName} duration={duration} />
          <p>{exerciseName}</p>
        </div>
      );
    }

    if ("reps" in exercise) {
      return (
        <div key={index}>
          <ExWithReps reps={exercise.reps} exerciseName={exerciseName} />
        </div>
      );
    }

    return <div key={index}>Unbekannte Übung</div>;
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
          ></span>
        ))}
      </div>
    );
  };

  return <div>Ex</div>;
}
