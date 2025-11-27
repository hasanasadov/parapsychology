import { parapsychologySteps } from "@/constants/services";
import Link from "next/link";

export default function ParapsychologyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-indigo-50 via-violet-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.25),_transparent_55%)]" />
        <div className="relative mx-auto container !px-4 md:!px-0 !py-16 md:!py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300/80">
            Xidmətlər · Parapsixologiya
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Parapsixologiya və{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 dark:from-indigo-300 dark:via-violet-300 dark:to-pink-300 bg-clip-text text-transparent">
              enerjisel balans
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 dark:text-slate-300">
            Parapsixologiya sessiyalarında fokusumuz – intuisiya, enerji və şüur
            səviyyəsi ilə daha həssas kontakt qurmaq, özünü dərinlikdə hiss
            etməyi öyrənmək və daxili balansı bərpa etməkdir.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-flex text-xs items-center gap-2 text-indigo-700 dark:text-indigo-300 underline-offset-4 hover:underline"
          >
            ← Bütün xidmətlərə qayıt
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto container !px-4 md:!px-0 !py-12 md:!py-16 space-y-10">
        {/* Izah və çərçivə */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr] items-start">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              Parapsixologiya seansında nələr edilir?
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              Bu görüşlərdə məqsəd, sənin enerjini “möcüzə” ilə dəyişmək deyil,
              öz daxili hissiyatını gücləndirməkdir. Sessiyalar zamanı:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Enerji balansı və bədən hissiyatı ilə daha şüurlu kontakt
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Intuisiya, yəni “daxili səs”i daha aydın eşitmə məşqləri
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Keçmiş təcrübələrin yaratdığı enerjisel gərginliklə yumşaq iş
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Meditasiya, vizualizasiya və diqqət fokuslama texnikaları
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-violet-200 dark:border-violet-400/40 bg-violet-50 dark:bg-violet-500/5 p-4 text-xs md:text-sm text-slate-800 dark:text-slate-100">
            <p className="font-medium text-violet-800 dark:text-violet-100">
              Vacib qeyd – tibbi və psixoloji əvəz deyil
            </p>
            <p className="mt-2">
              Parapsixologiya tibbi diaqnoz, psixoterapiya və ya dərman
              müalicəsini əvəz etmir. Ciddi psixi və ya fiziki simptomlarda
              mütləq olaraq mütəxəssis həkim və psixoloq dəstəyi tövsiyə edilir.
            </p>
          </div>
        </div>

        {/* Sessiyanın strukturu */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Parapsixologiya seansı necə keçir?
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3 text-xs md:text-sm">
            {parapsychologySteps.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <p className="font-medium text-slate-900 dark:text-slate-50">
                  {item.title}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kimlər üçün uyğundur */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Kimlər üçün daha uyğundur?
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>
                • Meditasiya, intuisiya və enerjisel mövzularda marağı olanlar
              </li>
              <li>• Özünüdərkini dərinləşdirmək istəyən şəxslər</li>
              <li>• Hisslərini “ağıl”dan çox bədəndə hiss etmək istəyənlər</li>
              <li>• Şüur səviyyəsini və diqqətini genişləndirmək istəyənlər</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Hansı hallarda uyğun deyil?
            </h3>
            <p className="mt-2">
              Ciddi psixi diaqnoz, ağır depressiya, psixoz və ya aktiv asılılıq
              hallarında prioritet – psixiatr və klinik psixoloq tərəfindən
              müalicədir. Bu xidmət belə hallarda əsas deyil, ancaq mütəxəssis
              nəzarəti ilə və əlavə olaraq düşünülə bilər.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
