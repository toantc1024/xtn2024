"use client";
import React, { useEffect, useRef, useState } from "react";

// Script to scroll to an element (by Id) and smooth for me
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navbar = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  // add more refs for other sections

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            document
              .querySelector(`.nav__menu a[href="#${id}"]`)
              .classList.add("active");
          } else {
            document
              .querySelector(`.nav__menu a[href="#${id}"]`)
              .classList.remove("active");
          }
        });
      },
      { threshold: 0.7 } // adjust this value for when to trigger the change
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    // observe other sections

    return () => {
      observer.disconnect();
    };
  }, []);

  const hrefLinks = [
    {
      href: "#hero",
      label: "Xin chào",
    },
    {
      href: "#info",
      label: "Thông tin",
    },
    {
      href: "#history",
      label: "Lịch sử",
    },
    {
      href: "#gallery",
      label: "Hình ảnh",
    },
    {
      href: "#contact",
      label: "Liên hệ",
    },
  ];

  useEffect(() => {
    function navbarlinksActive() {
      Object.entries(document.getElementsByClassName("nav_link")).map(
        (item) => {
          let navbarlink = item[1];
          if (!navbarlink.href) return;
          let section = document.querySelector(navbarlink.getAttribute("href"));
          if (!section) return;
          let position = window.scrollY + 200;

          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add("active");
          } else {
            navbarlink.classList.remove("active");
          }
        }
      );
    }

    document.addEventListener("scroll", navbarlinksActive);
  }, []);

  function view(id) {
    var node = document.querySelector(id);
    var yourHeight = document.querySelector(".nav__menu").offsetHeight;

    // scroll to your element
    // node.scrollIntoView(true);

    // now account for fixed header
    var scrolledY = window.scrollY;

    if (scrolledY) {
      window.scroll(0, scrolledY - yourHeight);
    }
  }

  return (
    <div
      className={`bg-orange-500 p-2  md:py-4 md:px-8 flex justify-between w-full  fixed z-[9999] shadow-sm nav__menu`}
    >
      <div className="p-4 font-extrabold text-sm md:text-4xl text-white ">
        Xã Kiểng Phước
      </div>

      <div className="text-sm md:text-2xl text-white  hidden xl:flex gap-2 justify-between">
        <ul className="flex gap-4 items-center ">
          {hrefLinks.map((link) => (
            <li key={link.href}>
              <a
                className="nav_link"
                onClick={() => view(link.href)}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
