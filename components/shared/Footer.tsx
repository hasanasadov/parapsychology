import { PATHS } from "@/constants/paths";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="dark:bg-blue-950 dark:text-white bg-blue-900 text-white text-sm ">
      <div className="container mx-auto px-10 md:px-0 flex justify-between items-center flex-col md:flex-row gap-3">
        <div className="flex items-center hover:opacity-70 duration-300 cursor-pointer">
          <div>© Parapsychology.az 2023 | All Rights Reserved</div>
        </div>
        <div className="md:flex hidden items-center gap-4 ">
          <div className="flex items-center gap-2">
            <Link
              className="hover:opacity-70 duration-300"
              href={PATHS.SERVICE_PARAPSYCHOLOGY}
            >
              Simurq Parapsixologiya
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="hover:opacity-70 duration-300"
              href={PATHS.CONTACT}
            >
              Əlaqə
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
