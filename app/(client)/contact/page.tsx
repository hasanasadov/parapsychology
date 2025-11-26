"use client";

import { CONTACT } from "@/constants/contact";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="container mx-auto text-black bg-white py-10 mt-8 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row  gap-16">
      <div className="md:w-1/3 text-center md:text-start w-full flex flex-col md:items-start md:justify-start items-center justify-center gap-5">
        <div className="text-[#0857de] font-extrabold text-center md:text-start">
          | Bizimlə əlaqə
        </div>
        <div className="font-extrabold md:text-[45px] text-[30px] text-center md:text-start">
          Sualınız var?
        </div>
        <div className="text-black/40 my-1 text-center md:text-start">
          Sualınızı tez bir zamanda cavabalandırmaq üçün əlimzdən gələni
          etdiyimizə əmin ola bilərsiniz.
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 ml-1">
            <Link
              className="hover:bg-blue-500 w-10 h-10 flex items-center justify-center text-blue-500 hover:text-sky-50 rounded-[5px] bg-sky-50 duration-300"
              href={CONTACT.FACEBOOK}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="hover:bg-blue-500 w-10 h-10 flex items-center justify-center text-blue-500 hover:text-sky-50 rounded-[5px] bg-sky-50 duration-300"
              href={CONTACT.INSTAGRAM}
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              className="hover:bg-blue-500 w-10 h-10 flex items-center justify-center text-blue-500 hover:text-sky-50 rounded-[5px] bg-sky-50 duration-300"
              href={CONTACT.TIKTOK}
            >
              <i className="fa-brands fa-tiktok"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-full">
        <FormSection />
      </div>
    </div>
  );
};

import { useForm } from "react-hook-form";
import {
  Folder,
  LetterText,
  MailIcon,
  PhoneIcon,
  User2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormData } from "@/types";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    // burda API çağırıb göndərə bilərsən
    reset();
  };

  const fieldContainer =
    "p-7 bg-sky-50 flex items-center gap-3 rounded-[5px] border border-transparent focus-within:border-blue-400 transition";
  const inputStyle =
    "w-full bg-transparent focus:outline-none placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <div className={fieldContainer}>
            <User2Icon className="text-blue-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Ad"
              className={inputStyle}
              {...register("name", { required: "Ad tələb olunur." })}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Mail */}
        <div className="flex flex-col gap-1">
          <div className={fieldContainer}>
            <MailIcon className="text-blue-500 w-6 h-6" />
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
              {...register("email", {
                required: "Email tələb olunur.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Etibarlı email daxil edin.",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <div className={fieldContainer}>
            <PhoneIcon className="text-blue-500 w-6 h-6" />
            <input
              type="tel"
              placeholder="Telefon"
              className={inputStyle}
              {...register("phone", {
                required: "Telefon tələb olunur.",
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: "Telefon formatı yanlışdır.",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1">
          <div className={fieldContainer}>
            <Folder className="text-blue-500 w-6 h-6" />
            <input
              type="text"
              placeholder="Mövzu "
              className={inputStyle}
              {...register("subject")}
            />
          </div>
          {errors.subject && (
            <p className="text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <div className={`${fieldContainer} items-start`}>
          <LetterText className="text-blue-500 w-6 h-6 " />
          <textarea
            placeholder="Mesaj"
            className={`${inputStyle} h-32 resize-none`}
            {...register("message", { required: "Mesaj tələb olunur." })}
          />
        </div>
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        variant={"animated"}
        type="submit"
        className="w-full px-10 py-7 text-white"
      >
        Göndər
      </Button>
    </form>
  );
};

export default ContactPage;
