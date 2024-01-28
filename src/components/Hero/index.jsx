import React from "react";
import backgroundImage from "../assets/static/images/z5070957363291_7ebe881967e5d7ed33bb19bbe5878322.jpg";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { FaInfo, FaLeaf, FaLocationDot } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import History from "./History";
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
        info={{ id: "info" }}
        style={
          "relative bg-gradient-to-b from-orange-500  to-orange-400 flex py-8 justify-center gap-4"
        }
      >
        <div
          className="w-full h-full mt-24 md:mt-48 bg-[rgba(255,255,255,.1)] border-[1px] border-[rgba(255,255,255,.4)] absolute top-0 left-0 z-[0]"
          style={{ borderRadius: "2.5em" }}
        ></div>
        <div className="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
          <h2 className="text-4xl md:text-8xl text-white">Thông tin</h2>

          <div className="w-full flex justify-center items-center gap-4  px-8">
            <span className="text-xl md:text-2xl  text-orange-400 p-4 rounded-full bg-white shadow-lg">
              <FaLocationDot />
            </span>
            <span className="text-lg bg-white rounded-lg shadow-lg text-orange-500 md:text-2xl px-4 py-2">
              Xã Kiểng Phước, huyện Gò Công Đông, tỉnh Tiền Giang
            </span>
          </div>

          <div className="flex flex-wrap gap-4 px-4 md:px-24">
            {data.map((item, index) => {
              return <Row {...item} key={index}></Row>;
            })}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="w-80 bg-white p-3">
              <img
                class="h-52 w-full object-cover"
                src="https://i.imgur.com/5yeBVeM.jpeg"
              />
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                      />
                    </svg>
                    1
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>
                    24
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-80 bg-white p-3">
              <img
                class="h-52 w-full object-cover"
                src="https://i.imgur.com/fjXFX93.jpeg"
              />
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                      />
                    </svg>
                    1
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>
                    24
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-80 bg-white p-3">
              <img
                class="h-52 w-full object-cover"
                src="https://i.imgur.com/ISpNf4j.jpeg"
              />
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                      />
                    </svg>
                    1
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>
                    24
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-80 bg-white p-3">
              <img
                class="h-52 w-full object-cover"
                src="https://i.imgur.com/DBpznrn.jpeg"
              />
              <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                      />
                    </svg>
                    1
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                      />
                    </svg>
                    24
                  </a>
                </li>
                <li class="mr-2">
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 hover:text-gray-600">
                    <svg
                      class="mr-0.5"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      />
                    </svg>
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div
          className="relative z-[0]"
          style={{
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
              <span className="text-4xl  xl:text-6xl">
                Xuân Tình Nguyện 2024
              </span>
              <div className="w-10 h-10 bg-yellow-400 rounded-full absolute left-0"></div>
            </div>
          </div>

          <div className="bottom-0 left-0 m-12 mb-24 mt-0 rounded-xl font-extrabold text-white p-8 absolute rotate-0">
            <div className="relative">
              <span className="text-4xl  xl:text-6xl shadow-xl bg-yellow-400 text-red-600 p-4 rounded-xl">
                Xã Kiểng Phước
              </span>
              <div className="w-10 h-10 bg-emerald-500 rotate-[45deg] absolute left-0 "></div>
              <div className="w-10 h-10 bg-emerald-500 rounded-full absolute left-0 ml-12"></div>
            </div>
          </div>
        </div> */}
      </SectionWrapper>
      <History />
    </>
  );
};

export default Hero;
