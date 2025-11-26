"use client";

import React from "react";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { useMenuOpen } from "@/hooks/useMenuOpen";

const ToggleMenuOpen = () => {
  const { isOpen, toggle } = useMenuOpen();

  return (
    <div className="md:hidden">
      <Button
        onClick={toggle}
        variant="ghost"
        className="p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XIcon size={24} />
        ) : (
          <i className="fa-solid fa-bars text-2xl"></i>
        )}
      </Button>
    </div>
  );
};

export default ToggleMenuOpen;
