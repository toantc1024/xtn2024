"use client";
import React from "react";
import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section class="pb-24 " id="contact">
      <div
        id="map"
        class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17872.648223596036!2d106.739602805046!3d10.390741722205606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317545aa5c6fbc61%3A0xf030868c14ef9c7a!2zS2nhu4NuZyBQaMaw4bubYywgR8OyIEPDtG5nIMSQw7RuZyBEaXN0cmljdCwgVGllbiBHaWFuZywgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1706490985082!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/*     

      <style jsx>{`
        .video-background {
          position: relative;
          background-size: cover;
          overflow: hidden;
        }

        .video-background video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style> */}
      <div class="container px-6 md:px-12 ">
        <div class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div class="flex flex-wrap items-center justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div class="flex flex-wrap">
                {[
                  {
                    title: "Điện thoại",
                    description: "UBND xã Kiểng Phước",
                    content: "0273.3847248",
                    icon: <FaPhone />,
                  },
                  {
                    title: "Email",
                    description: "Thư điện tử",
                    content: "gcd.kphuoc.gov.vn",
                    icon: <MdEmail />,
                  },
                  {
                    title: "Địa chỉ",
                    description: "UBND xã Kiểng Phước",
                    content: "9PRV+6HH, Ấp Chợ, Gò Công Đông, Tiền Giang",
                    icon: <FaLocationDot />,
                  },
                  {
                    title: "Thời gian làm việc",
                    description: "7:00 - 17:00",
                    content: "Thứ 2 - Thứ 6",
                    icon: <FaClock />,
                  },
                ].map(({ title, description, content, icon }, index) => {
                  return (
                    <div
                      key={index}
                      class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                    >
                      <div class="flex items-start">
                        <div class="shrink-0">
                          <div class="inline-block rounded-md bg-orange-200 p-4 text-primary">
                            {icon}
                          </div>
                        </div>
                        <div class="ml-6 grow ">
                          <p class="mb-2 font-bold ">{title}</p>
                          <p class="text-sm text-neutral-500">{content}</p>
                          <p class="text-sm text-neutral-500">{description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
