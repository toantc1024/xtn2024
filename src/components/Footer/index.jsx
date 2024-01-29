import React from "react";
import { FaFacebookF } from "react-icons/fa6";

const social_media = [
  {
    icon: (
      <div className="">
        <FaFacebookF className=" w-10 h-10  p-2 bg-blue-600  rounded-full" />
      </div>
    ),
    link: "https://www.facebook.com/DoanHoiITUTE/",
  },
];

const Footer = () => {
  return (
    <div class="text-center py-8  flex gap-2 flex-col bg-orange-400">
      <a
        href="#"
        class="text-white flex flex-col gap-2  px-8 items-center justify-center mb-5 text-2xl font-semibold "
      >
        <img
          src="https://itute.vercel.app/assets/img/LogoDH.png"
          class="h-12 mr-3 sm:h-9"
          alt="XTN Logo"
        />
        Xuân Tình Nguyện 2024
      </a>

      <span class="block text-sm text-center text-white dark:text-gray-400">
        © Đoàn Hội Khoa Công Nghệ Thông Tin
        <br />
        <a
          href="https://hcmute.edu.vn/"
          class="text-orange-700 text-sm hover:underline dark:text-purple-500"
        >
          Trường Đại Học Sư Phạm và Kỹ Thuật TP. HCM
        </a>
      </span>

      <ul class="flex justify-center mt-5 space-x-5">
        {social_media.map(({ icon, link }) => {
          return (
            <li>
              <a
                target="_blank"
                href={link}
                class="text-white hover:text-gray-300 transition-colors duration-200"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
