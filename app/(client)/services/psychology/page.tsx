import Link from "next/link";

export default function PsychologyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-sky-50 via-emerald-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),_transparent_55%)]" />
        <div className="relative mx-auto container !px-4 md:!px-0 !py-16 md:!py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300/80">
            Xidmətlər · Psixologiya
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Psixoloji konsultasiya və{" "}
            <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-lime-500 dark:from-sky-300 dark:via-emerald-300 dark:to-lime-300 bg-clip-text text-transparent">
              psixoterapevtik dəstək
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 dark:text-slate-300">
            Psixoloji konsultasiya – özünü günahlandırmaq üçün deyil, özünü
            anlamaq üçündür. Burada səni dinləyən, mühakimə etməyən, amma eyni
            zamanda struktur və istiqamət verən bir mühitə daxil olursan.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-flex text-xs items-center gap-2 text-sky-700 dark:text-sky-300 underline-offset-4 hover:underline"
          >
            ← Bütün xidmətlərə qayıt
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto container !px-4 md:!px-0 !py-12 md:!py-16 space-y-10">
        {/* Mövzular */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Hansı mövzularda müraciət edə bilərsən?
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
            <ul className="space-y-2">
              <li>• Stress, narahatlıq, panik atak</li>
              <li>• Depressiv əhval, motivasiya itkisi</li>
              <li>• Münasibətlərdə təkrarlanan ssenarilər</li>
              <li>• Özünə inam və özünü dəyərsiz hiss etmə</li>
            </ul>
            <ul className="space-y-2">
              <li>• Uşaq və yeniyetmə ilə bağlı narahatlıqlar</li>
              <li>• Ailə və cütlük münasibətlərində gərginlik</li>
              <li>• İş yanığı (burnout), tükənmişlik</li>
              <li>
                • Həyatdakı dəyişikliklərə uyğunlaşma (köç, ayrılıq və s.)
              </li>
            </ul>
          </div>
        </div>

        {/* İş prinsipi */}
        <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-start">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              İş prinsiplərimiz
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Məxfilik –
                </span>{" "}
                paylaşdığın hər şey etik qaydalara uyğun olaraq qorunur.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Empatiya və real dəstək –
                </span>{" "}
                yalnız “məşhur sitatlar” deyil, gündəlik həyatda tətbiq oluna
                bilən real addımlar.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Elmi əsas –
                </span>{" "}
                istifadə olunan yanaşmalar psixologiyada təsdiqlənmiş
                metodologiyalara söykənir.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-400/40 bg-emerald-50 dark:bg-emerald-500/5 p-5 text-xs md:text-sm text-slate-800 dark:text-slate-100">
            <p className="font-medium text-emerald-800 dark:text-emerald-100">
              Bir seansla hər şey həll olunmur – bu normaldır.
            </p>
            <p className="mt-2">
              Uzun illər formalaşmış düşüncə və davranış nümunələri tədricən
              dəyişir. Biz bu prosesi səbrlə, təzyiqsiz və sənin sürətinə uyğun
              şəkildə aparırıq.
            </p>
          </div>
        </div>

        {/* Seans formatı */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 text-sm text-slate-700 dark:text-slate-300 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Seansların formatı
          </h2>
          <p>
            Seanslar online və ya офлайн (ofisdə) keçirilə bilər. Orta müddət
            50–60 dəqiqədir. İlk görüşdə əsas şikayətləri, tarixçəni və
            məqsədlərini dinləyirik, daha sonra seans tezliyini birlikdə
            planlaşdırırıq.
          </p>
          <p>
            Bəziləri üçün 6–10 seans kifayət edir, daha dərin uşaq dövrü
            travmaları və uzunmüddətli mövzular üçün isə proses daha uzun
            planlanır.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-400/40 bg-sky-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 py-4 text-xs md:text-sm text-slate-800 dark:text-slate-100">
          <p className="font-medium">
            Psixoloqa müraciət etmək zəiflik deyil – özünə qarşı qayğıdır.
          </p>
          <p className="mt-1 text-slate-700 dark:text-slate-300">
            Əgər hazır deyilsənsə, bu da normaldır. Kiçik bir addım ata bilərsən
            – qısa tanışlıq konsultasiyası üçün müraciət edib suallarını verə
            bilərsən.
          </p>
        </div>
      </section>
    </main>
  );
}
