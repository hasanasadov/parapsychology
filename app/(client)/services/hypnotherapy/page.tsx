import { hypnotherapySteps } from "@/constants/services";
import Link from "next/link";

export default function HypnotherapyPage() {
  return (
    <main className="min-h-screen   bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden  border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-teal-50 via-cyan-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.28),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),_transparent_55%)]" />
        <div className="relative mx-auto container !px-4 md:!px-0 !py-16 md:!py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-teal-600 dark:text-teal-300/80">
            Xidmətlər · Hipnoterapiya
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Hipnoterapiya ilə şüuraltı{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 dark:from-teal-300 dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent">
              proqramların dəyişdirilməsi
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 dark:text-slate-300">
            Hipnoterapiya – səni tam yatızdırmaq deyil, diqqətini içə doğru
            yönəldərək şüuraltı inanclarla daha dərin səviyyədə işləmək
            imkanıdır. Sən prosesi nəzarətdə saxlayırsan, biz isə səni ehtiyatla
            yönləndiririk.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-flex text-xs items-center gap-2 text-teal-700 dark:text-teal-300 underline-offset-4 hover:underline"
          >
            ← Bütün xidmətlərə qayıt
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto  container !px-4 md:!px-0 !py-12 md:!py-16 space-y-10">
        {/* Nə üçün istifadə olunur */}
        <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              Hipnoterapiya nə üçün uyğundur?
            </h2>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              Hipnoterapiya bir çox emosional və davranış səviyyəsindəki
              çətinliklərdə dəstək ola bilər. Xüsusilə:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                Qorxular və fobiyalar (uçuş, qapalı məkan, hündürlük və s.)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                Siqareti tərgitmə və zərərli vərdişlərdən azad olma
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                Özünə inamı gücləndirmə, özünü dəyərsiz hiss etmə ilə iş
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                Stress, daxili gərginlik, performans həyəcanı
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
                Travma sonrası emosional blokajlar
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-teal-200 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-500/5 p-4 text-xs md:text-sm text-teal-900 dark:text-teal-50/90">
            <p className="font-medium text-teal-800 dark:text-teal-200">
              Mifik deyil, psixoloji alətdir
            </p>
            <p className="mt-2">
              Hipnoterapiya “sehr” deyil – diqqətin dərin fokuslandığı, ağlın
              daha qəbuledici olduğu xüsusi bir psixoloji haldır. Sən hər şeyi
              eşidir və xatırlayırsan, istəmədiyin heç bir addım etmirsən.
            </p>
          </div>
        </div>

        {/* Sessiyanın gedişi */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Hipnoterapiya seansı necə keçir?
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4 text-xs md:text-sm">
            {hypnotherapySteps.map((item) => (
              <div key={item.step} className="flex flex-col gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-teal-400/60 text-xs font-semibold text-teal-700 dark:text-teal-300">
                  {item.step}
                </div>
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

        {/* FAQ */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Hipnoterapiya zamanı idarəni itirəcəyəm?
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Xeyr. Sən bütün proses boyu eşidirsən, düşünürsən və istəsən, hər
              an seansı dayandıra bilərsən. Biz yalnız sənin icazə verdiyin
              çərçivədə işləyirik.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Neçə seans kifayət edir?
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Bu, mövzuya görə dəyişir. Bəzi spesifik fobiyalar üçün 2–4 seans
              kifayət edə bilər, köklü inanclar və travmalar üçün isə daha
              uzunmüddətli proses planlana bilər.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 rounded-2xl border border-teal-200 dark:border-teal-500/40 bg-teal-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 py-4 text-xs md:text-sm text-slate-800 dark:text-slate-100">
          <p className="font-medium">
            Hipnoterapiyanın sənə uyğun olub-olmadığını birlikdə dəyərləndirək.
          </p>
          <p className="mt-1 text-slate-700 dark:text-slate-300">
            Əgər hər hansı qorxu və ya sualın varsa, ilkin qısa tanışlıq
            konsultasiyası zamanı hər şeyi izah edirəm.
          </p>
        </div>
      </section>
    </main>
  );
}
