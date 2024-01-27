import React from "react";
import backgroundImage from "../assets/static/images/z5070957363291_7ebe881967e5d7ed33bb19bbe5878322.jpg";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { FaInfo, FaLeaf, FaLocationDot } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
const Row = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full  flex flex-col md:flex-row items-center py-8 px-8 justify-between gap-4">
      <div
        className={`flex p-2 md:p-6 flex-row md:flex-col items-center justify-start  md:justify-center gap-4 text-xl md:text-4xl md:text-6xl  md:w-[5em] rounded-lg`}
      >
        {icon}
        <span className="text-sm md:text-xl text-slate-900">{title}</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-sm md:text-xl text-slate-900 font-light ">
          {content}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    icon: <FaMapMarkedAlt className="text-orange-400" />,
    title: <span className="text-orange-400">Vị trí địa lý</span>,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
  {
    icon: <FaLeaf className="text-emerald-400" />,
    title: <span className="text-emerald-400">Điều kiện tự nhiên</span>,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad amet architecto praesentium saepe est perspiciatis repudiandae ipsam iure similique? Optio totam praesentium nemo mollitia illum eius aliquam quis beatae ea?",
  },
];

const Hero = () => {
  return (
    <>
      <SectionWrapper
        info={{ id: "about" }}
        style={
          "bg-gradient-to-b from-orange-500  to-orange-400 flex flex-col  py-8  gap-4"
        }
      >
        <h2 className="text-4xl md:text-6xl text-white text-center">
          Giới thiệu
        </h2>
        <div className="flex">
          <div className="w-full h-full flex flex-col gap-12 items-center justify-center">
            <div className="w-full flex justify-center items-center gap-4  px-8">
              <span className="text-xl md:text-2xl  text-orange-400 p-4 rounded-full bg-white shadow-xl">
                <FaLocationDot />
              </span>
              <span className="text-lg bg-white rounded-lg shadow-lg text-gray-600 md:text-2xl px-4 py-2">
                Xã Kiểng Phước, huyện Gò Công Đông, tỉnh Tiền Giang
              </span>
            </div>

            <div className="flex flex-wrap gap-4 px-4 md:px-24">
              {data.map((item, index) => {
                return <Row {...item} key={index}></Row>;
              })}
            </div>
          </div>

          <Image
            src={backgroundImage.src}
            alt="Background Image"
            width={500}
            height={500}
          />
        </div>
      </SectionWrapper>
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={backgroundImage.src}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          // placeholder="blur"
          // blurDataURL="data:image/svg+xml;base64,..."
          className="absolute z-[-1]"
        />
        <div className="top-0  right-0 m-24 rounded-xl font-extrabold text-white p-8 absolute rotate-[10deg] bg-red-500">
          <div className="relative">
            <span className="text-4xl  xl:text-6xl">Xuân Tình Nguyện 2024</span>
            <div className="w-10 h-10 bg-yellow-400 rounded-full absolute left-0"></div>
          </div>
        </div>

        <div className="bottom-0 left-0 m-12 mb-24 mt-0 rounded-xl font-extrabold text-white p-8 absolute rotate-0">
          <div className="relative">
            <span className="text-4xl  xl:text-6xl shadow-xl bg-yellow-400 text-red-600 p-4 rounded-xl">
              Xã Kiểng Phước
            </span>
            <div className="w-10 h-10 bg-emerald-500 rotate-[45deg] absolute left-0 "></div>
            <div className="w-10 h-10 bg-emerald-500 rounded-full absolute left-0 ml-24"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
