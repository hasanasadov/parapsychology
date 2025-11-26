const AboutSection = () => {
  return (
    <div className="container mx-auto mt-10 text-black bg-white py-10 !px-4 md:!px-0  w-full  relative z-50 flex flex-col lg:flex-row items-center justify-center gap-16">
      <div className="md:w-1/2  w-full flex flex-col items-start justify-start gap-5">
        <div className="text-[#0857de] font-bold">| Simurq Parapsixologiya</div>
        <div className="font-extrabold md:text-[45px] text-[30px]">
          Simurq Parapsixologiya Psixologiya Mərkəzi
        </div>
        <div className="text-black/40 my-1">
          &ldquo;Simurq Parapsixologiya&ldquo; MMC, &ldquo;Simurq
          Parapsixologiya Psixologiya Mərkəzi&ldquo; 11.01.2022-ci ildə təssis
          edilmişdir. MMC-nin və Mərkəzin təsisçisi və rəhbəri 3 Ali təhsilli,
          Parapsixoloq-Bioterapevt-Hipnoterapist-Kosmoenergetik Əhməd
          Əhmədovdur. Əhməd bəy bir çox yerli və xarici təlimlərin iştirakçısı,
          təlimçisidir və mükafatçısıdır. Əhməd bəy ailəlidir. 2 övladı var.
          Əhməd bəy tərəfindən Təssis edilmiş MMC-nin və Mərkəzin yeganə amalı,
          vətəndaşlarımızın Metafiziki, Spiritualistik, Parapsixoloji,
          Ruhi-Psixoloji və Fizioloji-Anatomik xəstəliklərinin müxtəlif, özünə
          məxsus metod və terapiya növlərini istifadə etməklə müalicə işlərini
          aparmaqdır. Mərkəzimizə bu vaxta qədər 8700-dən çox vətəndaş müraciət
          edərək xidmətlərimizdən yararlanıb, həyatlarına yeni bir səhifə açıb
          öz həyat yollarını yenidən şəkilləndirmişlər. Mərkəzimiz Əhməd bəyin
          başçılığı altında 3835-dən çox parapsixoloji vəziyyətin, 3200-dən çox
          psixoloji vəziyyətin, 350-dən çox boşanmanın, 165-dən çox Ağ ölümün
          (Narkotik aslılığın) və yüzlərlə digər Asılılıq və fiziki-anatomik
          xəstəliklərin müalicəsini peşəkarcasına yerinə yetirmişdir. Bizim bu
          ailəmiz və komandamız daim öz peşəkarlığı ilə vətəndaşlarımızın
          xidmətindədir.
        </div>
      </div>
      <div className="w-full hidden md:flex md:w-1/2  flex-col items-start justify-start">
        <div className="relative">
          <img className=" z-[10]" src="/simurq.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
