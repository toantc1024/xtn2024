import React from "react";
import backgroundImage from "../assets/static/images/z5070957363291_7ebe881967e5d7ed33bb19bbe5878322.jpg";
const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="top-0  right-0 m-24 rounded-xl font-extrabold text-white p-8 absolute rotate-[10deg] bg-red-500">
        <div className="relative">
          <span className="text-4xl  xl:text-8xl">Đi Xuân thoyy</span>
          <div className="w-10 h-10 bg-yellow-400 rounded-full absolute left-0"></div>
        </div>
      </div>

      <div className="bottom-0 left-0 m-12 mb-24 mt-0 rounded-xl font-extrabold text-white p-8 absolute rotate-0">
        <div className="relative">
          <span className="text-4xl  xl:text-8xl shadow-xl bg-yellow-400 text-red-600 p-4 rounded-xl">Xã Kiểng Phước</span>
          <div className="w-10 h-10 bg-emerald-500 rotate-[45deg] absolute left-0 "></div>
          <div className="w-10 h-10 bg-emerald-500 rounded-full absolute left-0 ml-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
