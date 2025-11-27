"use client";
import { CONTACT } from "@/constants/contact";
import Link from "next/link";
import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";

const Hero = () => {
  return (
    <div className="bg-sky-700 text-white text-sm relative dark:bg-blue-950  ">
      <div className="container mx-auto px-10 flex justify-between items-center flex-col md:flex-row gap-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center font-bold md:font-normal">
            <Link
              href="#"
              className="flex items-center gap-1 hover:opacity-70 duration-300"
            >
              <div>
                <i className="fa-solid fa-map-pin"></i>
              </div>
              <div>Bakı, 61b Əliəşrəf Əlizadə</div>
            </Link>
          </div>
          <div className="md:flex gap-4 items-center hidden ">
            <Link
              href="#"
              className="flex items-center gap-1 hover:opacity-70 duration-300"
            >
              <div>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>simurq.parapsixologiyammc@mail.ru</div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>Bizi izləyin :</div>
          <div className="flex items-center gap-2 ml-1">
            <Link
              className="hover:opacity-70 duration-300"
              href={CONTACT.FACEBOOK}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="hover:opacity-70 duration-300"
              href={CONTACT.INSTAGRAM}
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="hover:opacity-70 duration-300"
              href={CONTACT.TIKTOK}
            >
              <i className="fa-brands fa-tiktok"></i>
            </Link>
          </div>
          <div>
            <ToggleThemeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
