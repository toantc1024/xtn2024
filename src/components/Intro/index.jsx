import React from "react";
import SectionWrapper from "../SectionWrapper";
import BG from "../assets/static/images/36_big.jpg";
import Image from "next/image";
const Intro = () => {
  return (
    <SectionWrapper
      style={"flex items-center justify-center bg-white"}
      info={{ id: "hero" }}
    >
      <div className="w-full h-full flex items-center flex-col xl:flex-row  justify-center gap-12">
        <div className="bg-gradient-to-b from-red-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text flex flex-col text-4xl md:text-6xl py-8 gap-10 text-center">
          <div>
            <h2 className="font-bold">XÃ KIỂNG PHƯỚC</h2>
            <span className=" font-bold">Vùng đất anh hùng</span>
          </div>

          <div>
            <p className="text-xl md:text-2xl  m-2">
              Quê tôi ở tận miền tây
              <br />
              Mênh mông đồng lúa cò bay đầy trời
              <br />
              Đất lành chim đậu khắp nơi
              <br />
              Mời anh mời chị đến chơi quê nhà.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center rounded-full ">
          <div className="absolute"></div>
          <div
            className="flex h-[10em] w-[10em] md:w-[500px] md:h-[500px] " //👈 here is Tailwind
            style={{
              position: "relative",
            }}
          >
            <Image
              src={BG}
              alt="image"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "100%", //👈 and here you can select border radius
              }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Intro;
