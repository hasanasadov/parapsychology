// components/shared/Navbar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { PATHS } from "@/constants/paths";
import { ArrowDown } from "lucide-react";
import ToggleMenuOpen from "./ToggleMenuOpen";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="md:bg-white bg-blue-950 px-10 sticky top-0 z-[100] shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:py-1">
          <Link href={PATHS.HOME}>
            <div className="w-12 h-12 md:w-20 md:h-20 scale-125">
              <img className="hidden md:block" src="/logo.png" alt="Logo" />
              <img
                className="md:hidden block"
                src="/w_logo.png"
                alt="White Logo"
              />
            </div>
          </Link>

          <NavbarRight className="text-[17px]" />
          <ToggleMenuOpen />
        </div>
      </div>
      <HamburgerMenu />
    </div>
  );
};

const NavbarRight = ({ className }: { className?: string }) => {
  return (
    <div className={`hidden gap-5 md:flex text-black ${className}`}>
      <Link className="hover:text-blue-800 duration-300" href={PATHS.ABOUT}>
        Haqqimizda
      </Link>

      <div className="hover:text-blue-800 duration-300 relative group">
        <Link href={PATHS.SERVICES}>Xidmətlər</Link>
        <ArrowDown className="inline-block ml-1 mb-1" size={12} />
        <div className="absolute top-6 left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Link
            className="block px-4 py-2 hover:bg-gray-100"
            href={PATHS.SERVICE_PSYCHOLOGY}
          >
            Psixologiya
          </Link>
          <Link
            className="block px-4 py-2 hover:bg-gray-100"
            href={PATHS.SERVICE_PARAPSYCHOLOGY}
          >
            Parapsixologiya
          </Link>
          <Link
            className="block px-4 py-2 hover:bg-gray-100"
            href={PATHS.SERVICE_HYPNOTHERAPY}
          >
            Hipnoterapiya
          </Link>
        </div>
      </div>

      <Link className="hover:text-blue-800 duration-300" href={PATHS.BLOG}>
        Meqaleler
      </Link>
      <Link className="hover:text-blue-800 duration-300" href={PATHS.MEDIA}>
        Media
      </Link>
      <Link className="hover:text-blue-800 duration-300" href={PATHS.FAQ}>
        FAQ
      </Link>
      <Link className="hover:text-blue-800 duration-300" href={PATHS.CONTACT}>
        Əlaqə
      </Link>
    </div>
  );
};

export default Navbar;
