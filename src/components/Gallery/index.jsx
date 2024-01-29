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

import images from "../assets/static/images/places";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image {...image} key={index} alt={`Kieng Phuoc ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
