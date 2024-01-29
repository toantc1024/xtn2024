import React from "react";
import { FaImage, FaLocationDot, FaQuoteLeft } from "react-icons/fa6";
import SectionWrapper from "../SectionWrapper";
import { MdOutlineHistoryEdu } from "react-icons/md";
import imgg from "../assets/static/images/36_big.jpg";
import Image from "next/image";
import ImageCard from "./ImageCard";

const info_data = [
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    image: "https://i.imgur.com/5yeBVeM.jpeg",
    title: "Địa lý",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
];

const History = () => {
  return (
    <SectionWrapper
      info={{ id: "gallery" }}
      style={
        "relative bg-gradient-to-b from-orange-500 to-red-500  flex py-8 justify-center gap-4"
      }
    >
      <div className="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
        <h2 className="text-5xl md:text-8xl pb-3 text-center text-white">
          Hình ảnh
        </h2>
        <div className="w-full flex justify-center items-center gap-4  px-8">
          <span className="text-5xl md:text-5xl flex items-center justify-center text-orange-400 p-4 rounded-full bg-white shadow-lg shadow-orange-200 border-[1px] border-orange-200">
            <FaImage />
          </span>
          <span className="text-lg rounded-lg shadow-lg bg-white text-orange-500  md:text-3xl px-4 py-2 ">
            của một vùng đất anh hùng
          </span>
        </div>
        <div className="grid gap-4 grid-cols-1 max-h-screen overflow-auto overflow-x-hidden md:overflow-hidden md:px-4 md:grid-cols-4">
          {info_data.map((item, index) => {
            return <ImageCard key={index} {...item} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default History;
