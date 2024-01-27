import React from "react";
import SectionWrapper from "../SectionWrapper";
const Intro = () => {
  return (
    <SectionWrapper background={"bg-white"}>
      <div className="w-full h-full flex items-center justify-between px-96">
        <div className="bg-gradient-to-b from-red-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text flex flex-col text-6xl py-8 gap-4">
          <div>
            <h2 className="font-bold">XÃ KIỂNG PHƯỚC</h2>
            <span className=" font-bold">Vùng đất anh hùng</span>
          </div>

          <div>
            <p className="text-2xl  m-2">
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

        <div className="w-[500px] h-[500px] rounded-full bg-red-500"></div>
      </div>
    </SectionWrapper>
  );
};

export default Intro;
