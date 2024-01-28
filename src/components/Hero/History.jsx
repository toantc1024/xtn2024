import React from "react";
import { FaLocationDot, FaQuoteLeft } from "react-icons/fa6";
import SectionWrapper from "../SectionWrapper";
import { MdOutlineHistoryEdu } from "react-icons/md";
import imgg from "../assets/static/images/36_big.jpg";
import Image from "next/image";
const Section = ({ image, title, content, date, direction, icon }) => {
  return (
    <div>
      <div class="flex flex-col items-center">
        <div
          class={`flex items-center ${
            direction === "left" ? "justify-end" : "justify-start"
          } w-full mx-auto`}
        >
          <div
            class={`w-full lg:w-1/2 ${
              direction === "left" ? "lg:pl-8" : "lg:pr-8"
            }`}
          >
            <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
              {direction === "right" ? (
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                  <div class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900"></div>
                </div>
              ) : (
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                  <div class="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg"></div>
                </div>
              )}

              <div class="relative z-20 ">
                <div class="flex flex-wrap items-center">
                  <div class="p-4 md:w-1/4 ">
                    {date
                      ?.split(" ")
                      .map((item, index) =>
                        index % 2 == 0 ? (
                          <span class="text-lg text-gray-700 dark:text-gray-400">
                            {item}
                          </span>
                        ) : (
                          <p class="text-2xl font-bold text-gray-700 dark:text-gray-400 text-bold">
                            {item}
                          </p>
                        )
                      )}
                  </div>
                  <div class="flex-1 p-4 pr-4 border-l  border-gray-300 dark:border-gray-700">
                    <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      {title}
                    </p>
                    <p class="text-gray-700 dark:text-gray-500">{content}</p>
                  </div>
                  <div className="w-full max-h-[250px] flex bg-red-400 py-4">
                    <Image
                      src={image}
                      alt="s"
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-orange-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[3px]">
          {icon}
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    image: imgg,
    title: "Đất nước Việt Nam",
    icon: <FaLocationDot />,
    content:
      "Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, là một quốc gia nằm ở phía đông bán đảo Đông Dương thuộc khu vực Đông Nam Á.",
    date: "2 tháng 9 1945",
  },
  {
    image: imgg,
    title: "Đất nước Việt Nam",
    icon: <FaLocationDot />,
    content:
      "Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, là một quốc gia nằm ở phía đông bán đảo Đông Dương thuộc khu vực Đông Nam Á.",
    date: "2/9 1945",
  },
];

const History = () => {
  return (
    <SectionWrapper
      info={{ id: "history" }}
      style={"relative bg-white  flex py-8 justify-center gap-4"}
    >
      <div className="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
        <h2 className="text-5xl md:text-8xl pb-3 text-center bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text">
          Lịch sử
        </h2>
        <div className="w-full flex justify-center items-center gap-4  px-8">
          <span className="text-5xl md:text-5xl flex items-center justify-center text-orange-400 p-4 rounded-full bg-white shadow-lg shadow-orange-200 border-[1px] border-orange-200">
            <MdOutlineHistoryEdu />
          </span>
          <span className="text-lg rounded-lg shadow-lg shadow-orange-200 bg-orange-400 text-white  md:text-3xl px-4 py-2 ">
            của một vùng đất anh hùng
          </span>
        </div>

        <section class="py-16lg:py-20 ">
          <div class="flex flex-col justify-center ">
            <div class="w-full px-4 mx-auto  ">
              <div class="relative">
                <div class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-orange-200 dark:bg-gray-700 lg:block left-1/2"></div>
                <div class="space-y-2 lg:space-y-4"></div>
                {data.map((item, index) => {
                  return (
                    <Section
                      key={index}
                      {...item}
                      direction={index % 2 == 0 ? "right" : "left"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default History;
