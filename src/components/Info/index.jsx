"use client";
/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import "swiper/css/autoplay";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 200);
  return `https://picsum.photos/id/${id}/1920/1080`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={2}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
      }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
  );
};
