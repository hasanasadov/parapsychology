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
    <div className="sticky top-0 z-[100] backdrop-blur-sm px-4 shadow-sm bg-blue-950/70 md:bg-white/70 md:text-slate-900 text-slate-50 dark:bg-slate-950/80 dark:md:bg-slate-900/80 dark:text-slate-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href={PATHS.HOME}>
            <div className="w-12 h-12 md:w-20 md:h-20">
              {/* Rəngli logo – daha çox light üçün uyğundur */}
              <img className="hidden md:block" src="/logo.png" alt="Logo" />
              {/* Mobil / dark məkanda da yaxşı görünən ağ logo */}
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
    <div
      className={`hidden gap-5 md:flex text-slate-900 dark:text-slate-50 ${className}`}
    >
      <Link
        className="hover:text-blue-800 dark:hover:text-sky-300 duration-300"
        href={PATHS.ABOUT}
      >
        Haqqimizda
      </Link>

      <div className="relative group hover:text-blue-800 dark:hover:text-sky-300 duration-300">
        <Link href={PATHS.SERVICES}>Xidmətlər</Link>
        <ArrowDown className="inline-block ml-1 mb-1" size={12} />
        <div className="absolute top-6 left-0 mt-2 w-48 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <Link
            className="block px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800"
            href={PATHS.SERVICE_PSYCHOLOGY}
          >
            Psixologiya
          </Link>
          <Link
            className="block px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800"
            href={PATHS.SERVICE_PARAPSYCHOLOGY}
          >
            Parapsixologiya
          </Link>
          <Link
            className="block px-4 py-2 text-slate-800 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-slate-800"
            href={PATHS.SERVICE_HYPNOTHERAPY}
          >
            Hipnoterapiya
          </Link>
        </div>
      </div>

      <Link
        className="hover:text-blue-800 dark:hover:text-sky-300 duration-300"
        href={PATHS.BLOG}
      >
        Meqaleler
      </Link>
      <Link
        className="hover:text-blue-800 dark:hover:text-sky-300 duration-300"
        href={PATHS.MEDIA}
      >
        Media
      </Link>
      <Link
        className="hover:text-blue-800 dark:hover:text-sky-300 duration-300"
        href={PATHS.FAQ}
      >
        FAQ
      </Link>
      <Link
        className="hover:text-blue-800 dark:hover:text-sky-300 duration-300"
        href={PATHS.CONTACT}
      >
        Əlaqə
      </Link>
    </div>
  );
};

export default Navbar;
