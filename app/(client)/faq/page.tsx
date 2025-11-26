import AnimatedButton from "@/components/shared/AnimatedButton";

import React from "react";
import { QuestionsSection } from "../(home)/page";

const FaqPage = () => {
  return (
    <div className="container mx-auto mt-8 text-black bg-white  py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row justify-between md:gap-12 gap-8">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-start gap-5">
        <div className="font-extrabold md:text-[45px] text-[30px]">
          Bizə sualınız var?
        </div>
        <AnimatedButton href="tel:+994774932333">Əlaqə saxlayın</AnimatedButton>
      </div>

      <QuestionsSection theme="light" />
    </div>
  );
};

export default FaqPage;
