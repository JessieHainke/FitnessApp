// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

export default () => {
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
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
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
