"use client";

import CountUp from "@/components/gsap/CountUp";
import AnimatedButton from "@/components/shared/AnimatedButton";
import { questions } from "@/constants/faq";
import { CheckCircle2Icon, HospitalIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogCardProps } from "@/types";
import { BLOGS } from "@/constants/blogs";

export default function Page() {
  return (
    <div className="w-full">
      <div className="relative bg-blue-50 overflow-hidden min-h-screen pt-10">
        <MainPageContent />
        <MainPageBG />
      </div>
      <AboutSection />
      <RequestsSection />
      <FAQSection />
      <BlogsSection />
    </div>
  );
}

const MainPageContent = () => {
  return (
    <div className="container mx-auto text-black md:!py-18 py-10 !px-4 md:!px-0  w-full  relative z-50">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] font-bold">
          | S a ğ l a m l ı ğ ı n ı z , S a r s ı l m a z {"  "} Ö h d ə l i y i
          m i z
        </div>
        <div className="font-extrabold md:text-[65px] text-[30px]">
          Parapsixologiya ilə sirrli dünyalarda
        </div>
        <div className="">
          Sirrli dünya ilə tanış olun, beyin gücünüzü inkişaf etdirin və sirrli
          aləmlərin içində öz potensialınızın genişliyini kəşf edin!
        </div>
        <AnimatedButton href="/about">Ətraflı</AnimatedButton>
      </div>
    </div>
  );
};

const MainPageBG = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className=" absolute top-0 left-0 w-[200vw] h-full bg-blue-50 z-[10] -rotate-[60deg] -translate-x-[40%] -translate-y-4 hidden md:block "></div>
        <div className="absolute top-0 left-0 z-[10]">
          <img src="/h2-shape3.png" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            className="z-[10] absolute bottom-0 right-0"
            src="/h2-shape2.png"
            alt=""
          />
          <div className="z-[-10] hidden md:block">
            <img className=" translate-x-1/3" src="/para1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className=" h-[90vh] z-[10] overflow-hidden md:hidden block  relative">
          <img className="h-full object-cover " src="/para1.jpg" alt="" />
          <img
            className=" absolute bottom-0 right-0"
            src="/h2-shape2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="container mx-auto text-black bg-white py-10 mt-8 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-center gap-16">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
        <div className="relative">
          <img className=" z-[10]" src="/para3.jpg" alt="" />
          <img
            className="absolute  z-[10] -bottom-1/4 left-0 w-1/2 h-1/2 border-4 border-white"
            src="/para5.jpg"
            alt=""
          />
          <div className="z-[-1] w-40 h-20 bg-sky-700 absolute bottom-[-50px] md:left-1/2 left-1/3 "></div>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] font-extrabold">
          | H a q q ı m ı z d a
        </div>
        <div className="font-extrabold md:text-[45px] text-[30px]">
          &ldquo;Simurq Parapsixologiya&ldquo; MMC
        </div>
        <div className="text-black/40 my-1">
          Əhməd bəy tərəfindən Təssis edilmiş MMC-nin və Mərkəzin yeganə amalı,
          vətəndaşlarımızın Metafiziki, Spiritualistik, Parapsixoloji,
          Ruhi-Psixoloji və Fizioloji-Anatomik xəstəliklərinin müxtəlif, özünə
          məxsus metod və terapiya növlərini istifadə etməklə müalicə işlərini
          aparmaqdır.
        </div>
        <div>
          <div className="font-bold pb-1 border-b-2 border-blue-800 w-fit">
            Xidmeti bolmeler
          </div>
          <div className="flex flex-col gap-2 mt-6 mb-3 justify-start items-start">
            <div className="flex gap-2 items-center justify-start">
              <div>
                <CheckCircle2Icon className="text-blue-600" />
              </div>
              <h1>12 adda Parapsixoloji xidmətləri</h1>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <div>
                <CheckCircle2Icon className="text-blue-600" />
              </div>
              <h1>8 adda Psixoloji xidmətləri</h1>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <div>
                <CheckCircle2Icon className="text-blue-600" />
              </div>
              <h1>12 adda Hipnoterapiya xidmətləri</h1>
            </div>
          </div>
        </div>
        <AnimatedButton href="/about">Ətraflı</AnimatedButton>
      </div>
    </div>
  );
};

const RequestsSection = () => {
  return (
    <div className="container mx-auto mt-16 text-black bg-white  py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-center gap-16">
      <div className="md:w-1/2   w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] font-extrabold">
          | M ü r a c i ə t l ə r
        </div>
        <div className="font-extrabold md:text-[45px] text-[30px]">
          Gələcək yolunuzun düzgün seçimi
        </div>
        <div className="text-black/40 my-1">
          Mərkəzimizə bu vaxta qədər 8700-dən çox vətəndaş müraciət edərək
          xidmətlərimizdən yararlanıb, həyatlarına yeni bir səhifə açıb öz həyat
          yollarını yenidən şəkilləndirmişlər.
        </div>
        <div className="gap-6 grid w-full grid-cols-2 grid-rows-2 mt-6 mb-3 ">
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20 hover:border-blue-700 duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-blue-600" />
            </div>
            <h1>
              <CountUp
                from={0}
                to={3835}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h1>
            <h1>Parapsixoloji vəziyyət</h1>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20 hover:border-blue-700 duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-blue-600" />
            </div>
            <h1>
              <CountUp
                from={0}
                to={3200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h1>
            <h1>Psixoloji vəziyyət</h1>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20 hover:border-blue-700 duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-blue-600" />
            </div>
            <h1>
              <CountUp
                from={0}
                to={165}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h1>
            <h1>Narkotik aslılıq vəziyyət</h1>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20 hover:border-blue-700 duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-blue-600" />
            </div>
            <h1>
              <CountUp
                from={0}
                to={350}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </h1>
            <h1>Boşanma vəziyyəti</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-16">
        <div className="relative">
          <img className=" z-[10]" src="/para2.jpg" alt="" />
          <img
            className="absolute object-cover  z-[10] -bottom-1/4 right-0 w-1/3 h-1/2 border-4 border-white"
            src="/para10.jpg"
            alt=""
          />
          <div className="z-[-1] w-40 h-20 bg-sky-700 absolute bottom-[-50px] md:right-1/3 right-1/4 "></div>
        </div>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  return (
    <div className="container mx-auto mt-16 text-black bg-white  py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] font-extrabold">| F A Q</div>
        <div className="font-extrabold md:text-[45px] text-[30px] ">
          Ən çox verilən suallar
        </div>

        <QuestionsSection theme="dark" count={4} />
      </div>

      <div className="w-full md:w-1/3 hidden md:block ">
        <div className="relative">
          <img className=" z-[10]" src="/faq.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export const QuestionsSection = ({
  theme,
  count = questions.length,
}: {
  theme: string;
  count?: number;
}) => {
  const isDark = theme === "dark";
  console.log("questions count:", count);
  console.log(questions.slice(0, count));
  return (
    <div className="flex flex-col gap-3 -6 mb-3 w-full ">
      {questions.slice(0, count).map((item, idx) => (
        <Accordion
          className={`rounded-[5px] ${
            isDark ? "text-white bg-blue-950 px-6 py-3" : "text-black bg-white"
          }  text-md `}
          key={idx}
          type="single"
          collapsible
        >
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger
              className={`!font-bold ${
                isDark ? "" : "!text-black border border-black/10 px-6 mb-2"
              } `}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className={`
                    ${isDark ? "" : "!bg-white  px-6 text-black/70 mt-1  "}
                  `}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export const BlogsSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={`container mx-auto mt-16 text-black bg-white  py-10 !px-4 md:!px-0  w-full  relative z-50 ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <div className="text-[#0857de] font-extrabold space">| B l o q |</div>
        <div className="font-extrabold md:text-[45px] text-[30px] text-center">
          Sizin üçün faydalı ola biləcək bloqlar
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-8">
        {BLOGS.map((blog) => (
          <BlogCard
            key={blog.id}
            imageUrl={blog.imageUrl}
            authorName={blog.authorName}
            title={blog.title}
            excerpt={blog.excerpt}
            href={blog.href}
          />
        ))}
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  className,
  authorName,
  title,
  excerpt,
  detailsLabel = "Oxu",
  href,
  onDetailsClick,
}) => {
  const Details = (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700">
      {detailsLabel}
      <span aria-hidden>➜</span>
    </span>
  );

  return (
    <article
      className={`flex ${className} flex-col overflow-hidden rounded-[5px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md`}
    >
      {/* Image */}
      <div className="w-full overflow-hidden">
        <img src={imageUrl} alt={title} className="h-60 w-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5 text-slate-900">
        {/* Author */}
        <div className="mb-3 flex items-center text-xs text-slate-500">
          <span className="mr-2 text-base">👤</span>
          <span className="uppercase tracking-[0.14em] text-slate-500">
            {authorName}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-lg font-semibold leading-snug text-slate-900">
          {title}
        </h3>

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-slate-100" />

        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-5">
          {excerpt}
        </p>

        {/* Details button / link */}
        <div className="mt-5">
          {href ? (
            <a href={href}>{Details}</a>
          ) : (
            <button type="button" onClick={onDetailsClick}>
              {Details}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
