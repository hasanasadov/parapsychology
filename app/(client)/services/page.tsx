import { services } from "@/constants/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-sky-100 via-blue-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-black">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),_transparent_55%)]" />
        <div className="relative mx-auto container !px-4 md:!px-0 !py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-300/80">
            Xidmətlər
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Psixoloji{" "}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-500 dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
              dəstək və inkişaf
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-700 dark:text-slate-300">
            Burada məqsəd təkcə simptomları aradan qaldırmaq deyil. Səni özünü
            daha dərindən anlamağa, daxili resurslarını aktivləşdirməyə və həyat
            keyfiyyətini uzunmüddətli olaraq artırmağa kömək edirik.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto container !px-4 md:!px-0 py-12 md:!py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/80 dark:via-slate-950 dark:to-black p-5 shadow-sm dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-transform hover:-translate-y-1 hover:border-sky-400/70"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50 group-hover:text-sky-800 dark:group-hover:text-cyan-300">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Ətraflı bax</span>
                <span className="inline-flex items-center gap-1 text-sky-600 dark:text-cyan-300 group-hover:translate-x-1 transition-transform">
                  Keçid
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 3.5L10 8L5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* INFO BOX */}
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/70 px-5 py-4 text-xs md:text-sm text-slate-700 dark:text-slate-300">
          <p className="font-medium text-slate-900 dark:text-slate-100">
            İlk konsultasiya – tanışlıq və planlama
          </p>
          <p className="mt-1">
            Birinci görüşümüzdə sənin hekayəni dinləyirik, məqsədləri
            dəqiqləşdiririk və hansı xidmətin sənə daha uyğun olduğunu birlikdə
            müəyyənləşdiririk.
          </p>
        </div>
      </section>
    </main>
  );
}
