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
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <div className="relative bg-blue-50 dark:bg-blue-950 overflow-hidden min-h-screen pt-10">
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
    <div className="container mx-auto !text-black dark:!text-white md:!py-18 py-10 !px-4 md:!px-0  w-full  relative z-50">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] dark:text-sky-400 font-bold">
          | S a ğ l a m l ı ğ ı n ı z , S a r s ı l m a z {"  "} Ö h d ə l i y i
          m i z
        </div>
        <div className="font-extrabold md:text-[65px] text-[30px] dark:text-slate-200">
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
        <div className=" absolute top-0 left-0 w-[200vw] h-full bg-blue-50 dark:!bg-blue-950 z-[10] -rotate-[60deg] -translate-x-[40%] -translate-y-4 hidden md:block "></div>
        <div className="absolute top-0 left-0 z-[10] dark:opacity-40">
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
    <div className="container mx-auto py-10 !pt-8 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-center gap-16">
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
        <div className="text-[#0857de] dark:text-sky-400 font-extrabold">
          | H a q q ı m ı z d a
        </div>
        <div className="font-extrabold md:text-[45px] text-[30px]">
          &ldquo;Simurq Parapsixologiya&ldquo; MMC
        </div>
        <div className="text-black/40 dark:text-white/80 my-1">
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
    <div className="container mx-auto mt-16  py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-center gap-16">
      <div className="md:w-1/2   w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] dark:text-sky-400 font-extrabold">
          | M ü r a c i ə t l ə r
        </div>
        <div className="font-extrabold md:text-[45px] text-[30px]">
          Gələcək yolunuzun düzgün seçimi
        </div>
        <div className="text-black/40 dark:text-white/80 my-1">
          Mərkəzimizə bu vaxta qədər 8700-dən çox vətəndaş müraciət edərək
          xidmətlərimizdən yararlanıb, həyatlarına yeni bir səhifə açıb öz həyat
          yollarını yenidən şəkilləndirmişlər.
        </div>
        <div className="gap-6 grid w-full grid-cols-2 grid-rows-2 mt-6 mb-3 ">
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20  hover:border-[#0857de] dark:border-sky-400  duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-[#0857de] dark:text-sky-400 " />
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
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20  hover:border-[#0857de] dark:border-sky-400  duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-[#0857de] dark:text-sky-400 " />
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
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20  hover:border-[#0857de] dark:border-sky-400  duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-[#0857de] dark:text-sky-400 " />
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
          <div className="flex flex-col gap-3 items-center justify-center border border-black/20  hover:border-[#0857de] dark:border-sky-400  duration-300 p-6 ">
            <div>
              <HospitalIcon className="text-[#0857de] dark:text-sky-400 " />
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
    <div className="container mx-auto mt-16  py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-between gap-16">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] dark:text-sky-400 font-extrabold">
          | F A Q
        </div>
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
  theme?: "light" | "dark";
  count?: number;
}) => {
  // Global dark mode varsa Tailwind class-larından oxunacaq
  const globalDark =
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false;

  // Theme prioriteti: prop > global dark mode
  const isDark = theme === "dark" || (!theme && globalDark);

  return (
    <div className="flex flex-col gap-3 mb-3 w-full">
      {questions.slice(0, count).map((item, idx) => (
        <Accordion
          key={idx}
          type="single"
          collapsible
          className={`rounded-[5px] text-md transition-all ${
            isDark
              ? "text-slate-50 bg-slate-900 border border-slate-700"
              : "text-slate-900 bg-white border border-slate-200"
          }`}
        >
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger
              className={`!font-bold px-6 py-3  ${
                isDark
                  ? "text-slate-50 hover:text-sky-300"
                  : "text-slate-900 border-b border-slate-200  border-b-0 hover:text-sky-700"
              }`}
            >
              {item.question}
            </AccordionTrigger>

            <AccordionContent
              className={`px-6 text-sm leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
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
    <section
      className={`container mx-auto mt-16 w-full relative z-50 py-10 !px-4 md:!px-0 ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-400">
          | B l o q |
        </p>
        <h2 className="font-extrabold md:text-[40px] text-[26px] text-center text-slate-900 dark:text-slate-50">
          Sizin üçün faydalı ola biləcək bloqlar
        </h2>
        <p className="max-w-2xl text-center text-sm md:text-base text-slate-600 dark:text-slate-400">
          Psixologiya, parapsixologiya və şüuraltı proseslər haqqında düşünməyə,
          hiss etməyə və özünü daha dərindən tanımağa kömək edən yazılar.
        </p>
      </div>

      <div className="grid gap-6 my-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

// Əgər artıq haradasa təyin etməmisənsə:
type BlogCardProps = {
  imageUrl: string;
  className?: string;
  authorName: string;
  title: string;
  excerpt: string;
  detailsLabel?: string;
  href?: string;
  onDetailsClick?: () => void;
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
  const Wrapper: React.ElementType = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  const Details = (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 dark:text-sky-300 group-hover:text-sky-700 dark:group-hover:text-sky-200 transition-colors">
      {detailsLabel}
      <span
        aria-hidden
        className="translate-y-[1px] group-hover:translate-x-0.5 transition-transform"
      >
        ➜
      </span>
    </span>
  );

  const handleClick = () => {
    if (!href && onDetailsClick) onDetailsClick();
  };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block ${className ?? ""}`}
      onClick={handleClick}
    >
      {/* Gradient border + card */}
      <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200/80 via-slate-100/80 to-slate-200/80 dark:from-slate-800/80 dark:via-slate-900/90 dark:to-slate-800/80 p-[1px] shadow-sm hover:shadow-lg hover:shadow-sky-900/40 transition-shadow">
        <div className="flex h-full flex-col rounded-[1rem] bg-white dark:bg-slate-950">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-t-[1rem]">
            <img
              src={imageUrl}
              alt={title}
              className="w-full aspect-[4/3] object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-slate-900 dark:text-slate-50">
            {/* Author */}
            <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-base">👤</span>
                {authorName}
              </span>
              <span className="rounded-full border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[10px] tracking-[0.18em]">
                Bloq
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-base md:text-lg font-semibold leading-snug line-clamp-2 text-slate-900 dark:text-slate-50 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3 md:line-clamp-4">
              {excerpt}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Təxminən 5–7 dəqiqəlik oxu
              </span>
              {href ? (
                Details
              ) : (
                <button
                  type="button"
                  onClick={onDetailsClick}
                  className="focus:outline-none"
                >
                  {Details}
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};
