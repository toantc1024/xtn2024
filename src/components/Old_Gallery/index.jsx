/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import SectionWrapper from "../SectionWrapper";

import "react-image-gallery/styles/css/image-gallery.css";
import { FaImage } from "react-icons/fa6";

const responsiveOptions = [
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];

const Gallery = () => {
  const images = [
    {
      src: "assets/images/cong-dinh-kieng-phuoc.jpg",
      alt: "Đình Kiểng Phước là một trong những ngôi đình được xây dựng đầu tiên ở vùng đất Gò Công. Kiến trúc đình có 05 tòa lớn nhỏ từ trước ra sau theo chức năng phân biệt, mái lợp ngói âm dương. Có thể nói, kiến trúc nghệ thuật đình Kiểng Phước không chỉ là biểu tượng của làng quê Nam bộ, mà còn là nơi nghệ thuật chạm trổ dân gian vùng Gò Công thăng hoa và tỏa sáng. Những đường nét kiến trúc, các bức chạm khắc trang trí ở đình để lại đến ngày nay còn là những câu chuyện lịch sử qua bao nhiêu thăng trầm của vùng đất Gò Công.",
      title: "Đình Kiểng Phước",
    },
    {
      src: "assets/images/chua-phuoc-quang.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Chùa Phước Quang",
    },
    {
      src: "https://i.pinimg.com/564x/0b/c4/02/0bc4020e721914b9bda4c28061f336d0.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/8e/49/5c/8e495c1e47002a41298ac06188ae2e3a.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/0b/c4/02/0bc4020e721914b9bda4c28061f336d0.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/8f/c1/26/8fc126349aa900c99f3ac8539b19466d.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/da/04/8f/da048fe855c2f894194a3744b607705c.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/9a/58/32/9a58321df62dd9257743dba598133766.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
    {
      src: "https://i.pinimg.com/564x/e9/2f/2f/e92f2f592f843fca041cc6e362091492.jpg",
      alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      title: "Random image from Picsum",
    },
  ];

  const album = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      description: "Random image from Picsum",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      description: "Lorem ipsum dolor sit amet, random image from Picsum",
    },
  ];

  const template = (image) => {
    return (
      <div className="flex border-1 surface-border border-round m-2 text-center">
        <div className="flex justify-center ">
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-lg"
            style={{ height: "300px !important", width: "auto !important" }}
          />
        </div>
        <div className="flex items-center p-6 w-full">
          <div>
            <h3 className="mb-3 text-2xl">{image.title}</h3>
            <div className="mt-0 mb-3 font-light text-justify">{image.alt}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper
      info={{ id: "gallery" }}
      style={
        "relative bg-gradient-to-b from-orange-500  to-orange-400 flex py-8 justify-center gap-4"
      }
    >
      <div className="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
        <h2 className="text-4xl md:text-8xl text-white">Hình ảnh</h2>
        <div className="w-full flex justify-center items-center gap-4  px-8">
          <span className="text-xl md:text-2xl  text-orange-400 p-4 rounded-full bg-white shadow-lg">
            <FaImage />
          </span>
          <span className="text-lg bg-white rounded-lg shadow-lg text-orange-500 md:text-2xl px-4 py-2">
            Danh lam, thắng cảnh
          </span>
        </div>

        <ImageGallery items={album} />
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
