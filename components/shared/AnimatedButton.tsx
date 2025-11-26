import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AnimatedButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <Button
        className="flex gap-3 items-center text-white group !px-8 !py-6 relative overflow-hidden"
        variant="animated"
      >
        <div>{children}</div>

        <div className="transition-transform group-hover:rotate-180 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center duration-500">
          <i className="fa-solid fa-angles-right "></i>
        </div>

        <div
          className="
          absolute top-0 right-0 h-full w-[8px]
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          transition-all duration-200
          rotate-180
          bg-white
          [clip-path:polygon(0%_0%,100%_50%,0%_100%)]
        "
        />
      </Button>
    </Link>
  );
};

export default AnimatedButton;
