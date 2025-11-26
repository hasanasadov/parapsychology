"use client";

import React from "react";
import Link from "next/link";
import { PATHS } from "@/constants/paths";
import { ArrowDown } from "lucide-react";
import { useMenuOpen } from "@/hooks/useMenuOpen";

const HamburgerMenu = () => {
  const { isOpen, setOpen } = useMenuOpen();

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[100] 
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Sliding menu */}
      <div
        className={`fixed top-0 right-0 text-black h-screen w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[10000]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src="/simurq.png" alt="" />
            </div>
            <span className="font-semibold text-lg">Simurq</span>
          </div>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-5 py-6 text-gray-900 text-[20px]">
          <Link
            className="border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3"
            href={PATHS.ABOUT}
            onClick={closeMenu}
          >
            Haqqimizda
          </Link>

          <div className="flex flex-col gap-2 border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3 ">
            <div className="flex items-center gap-1 font-medium ">
              <Link href={PATHS.SERVICES} onClick={closeMenu}>
                Xidmətlər
              </Link>
              <ArrowDown size={14} />
            </div>
            <div className="flex flex-col pl-4 gap-1 text-sm text-gray-700">
              <Link
                className="hover:text-blue-800 duration-300"
                href={PATHS.SERVICE_PSYCHOLOGY}
                onClick={closeMenu}
              >
                Psixologiya
              </Link>
              <Link
                className="hover:text-blue-800 duration-300"
                href={PATHS.SERVICE_PARAPSYCHOLOGY}
                onClick={closeMenu}
              >
                Parapsixologiya
              </Link>
              <Link
                className="hover:text-blue-800 duration-300"
                href={PATHS.SERVICE_HYPNOTHERAPY}
                onClick={closeMenu}
              >
                Hipnoterapiya
              </Link>
            </div>
          </div>

          <Link
            className="border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3"
            href={PATHS.BLOG}
            onClick={closeMenu}
          >
            Meqaleler
          </Link>
          <Link
            className="border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3"
            href={PATHS.MEDIA}
            onClick={closeMenu}
          >
            Media
          </Link>
          <Link
            className="border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3"
            href={PATHS.FAQ}
            onClick={closeMenu}
          >
            FAQ
          </Link>
          <Link
            className="border-b-1 border-black/40 hover:text-blue-800 duration-300 pb-3"
            href={PATHS.CONTACT}
            onClick={closeMenu}
          >
            Əlaqə
          </Link>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
