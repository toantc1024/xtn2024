import React from "react";
import SectionWrapper from "../SectionWrapper";
import { FaInfo, FaLeaf, FaLocationDot } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import History from "./History";
import Contact from "./Contact";
import Gallery from "./Gallery";
const Row = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full  flex flex-col md:flex-row items-center py-8 px-8 justify-cetner  gap-4">
      <div
        className={`flex p-2 md:p-6 flex-row md:flex-col items-center justify-start  md:justify-center gap-4 text-xl md:text-4xl md:text-6xl md:w-[5em] rounded-lg`}
      >
        {icon}
        <span className="text-sm md:text-xl text-slate-900">{title}</span>
      </div>
      <div className="flex flex-col gap-4  w-full">
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
      "Kiểng Phước là một xã thuộc huyện Gò Công Đông, tỉnh Tiền Giang, Việt Nam. Xã có diện tích 40,39 km², dân số năm 2010 là 15.384 người, mật độ dân số đạt 381 người/km². ",
  },
  {
    icon: <FaLeaf className="text-emerald-400" />,
    title: <span className="text-emerald-400">Điều kiện tự nhiên</span>,
    content:
      "Một nơi có đất đai tươi tốt, màu mỡ, không khí trong lành. Điều kiện tốt cho trồng các loại cây theo mùa.",
  },
];

const Hero = () => {
  return (
    <>
      <SectionWrapper
        info={{ id: "info" }}
        style={
          "relative bg-gradient-to-b from-orange-500  to-orange-400 flex py-8 justify-center gap-4"
        }
      >
        <div classNae="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
          <h2 className="text-4xl md:text-8xl text-white">Thông tin</h2>

          <div className="w-full flex justify-center items-center gap-4  px-8">
            <span className="text-xl md:text-2xl  text-orange-400 p-4 rounded-full bg-white shadow-lg">
              <FaLocationDot />
            </span>
            <span className="text-lg bg-white rounded-lg shadow-lg text-orange-500 md:text-2xl px-4 py-2">
              Xã Kiểng Phước, huyện Gò Công Đông, tỉnh Tiền Giang
            </span>
          </div>

          <div className="flex flex-wrap  gap-4 px-4 md:px-24">
            {data.map((item, index) => {
              return <Row {...item} key={index}></Row>;
            })}
          </div>

          <div className="px-12 w-full flex flex-col md:flex-row gap-12">
            {[
              {
                key: "Ấp",
                value: "12",
              },
              {
                key: "diện tích héc ta",
                value: " 4.038,74",
              },
              {
                key: "người dân (năm 2010)",
                value: "15.384",
              },
            ].map(({ key, value, unit }, index) => {
              return (
                <div
                  key={index}
                  className="flex font-light justify-center items-center gap-2 text-2xl md:text-4xl py-8 px-4 flex-col w-full text-white bg-[rgba(255,255,255,.4)] border-[1px] border-[rgba(255,255,255,.7)] rounded-2xl hover:bg-white hover:text-orange-600"
                >
                  <p className="flex gap-1 font-bold ">{value}</p>
                  <h2>{key}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <History />
      <Gallery />
      <Contact />
    </>
  );
};

export default Hero;
