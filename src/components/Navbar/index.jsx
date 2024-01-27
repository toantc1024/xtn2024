"use client";
import React from "react";

// Script to scroll to an element (by Id) and smooth for me
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navbar = () => {
  return (
    <div className="bg-red-500 p-2  md:py-4 md:px-8 flex justify-between">
      <div className="p-4 font-extrabold text-sm md:text-4xl text-yellow-400 ">
        Xã Kiểng Phước
      </div>

      <div className="text-sm md:text-2xl font-bold text-yellow-400 flex gap-2 justify-between">
        <ul className="flex gap-4 items-center">
          <li>
            <a onClick={() => scrollToSection("about")} href="#about">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="#">Albumn</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
