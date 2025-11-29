"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CertificateCheckPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmed = code.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    router.push(`/certificate-check/${encodeURIComponent(trimmed)}`);
  };

  const isDisabled = !code.trim() || isLoading;

  return (
    <main
      className="min-h-[80vh] w-full 
      text-slate-900 dark:text-slate-50
      flex items-center justify-center px-4 py-8 transition-colors duration-300"
    >
      {/* background glow-lar */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-56 w-56 rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-blue-400/15 dark:bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/60 dark:bg-slate-800/40 blur-3xl" />
      </div>

      <div className="w-full max-w-4xl">
        <div
          className="relative w-full rounded-3xl border 
          border-slate-200/80 bg-white/80 
          dark:border-white/10 dark:bg-slate-900/75
          shadow-[0_18px_60px_rgba(15,23,42,0.18)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.7)]
          overflow-hidden backdrop-blur-2xl transition-colors duration-300"
        >
          {/* üst incə xətt */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
          {/* künc glow */}
          <div className="pointer-events-none absolute -top-20 -right-10 h-40 w-40 rounded-full bg-cyan-400/15 dark:bg-cyan-500/15 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-0">
            {/* Sol / üst – info */}
            <section className="px-5 sm:px-7 md:px-10 py-7 md:py-10 flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-slate-200/70 dark:border-white/5">
              {/* badge + icon */}
              <div className="flex items-center justify-between gap-3">
                <div
                  className="inline-flex items-center gap-2 rounded-full border 
                  border-slate-200/80 bg-white/70 
                  dark:border-white/10 dark:bg-slate-950/60 
                  px-3 py-1"
                >
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                    bg-emerald-500/10 text-emerald-700 border border-emerald-500/40 text-sm
                    dark:bg-emerald-500/15 dark:text-emerald-300"
                  >
                    ✓
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 dark:text-slate-300">
                    Certificate verification
                  </p>
                </div>

                <span className="hidden sm:inline-flex text-[11px] text-slate-400 dark:text-slate-400">
                  Real-time check
                </span>
              </div>

              {/* başlıq */}
              <div className="space-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                  Sertifikat kodunu yoxla
                </h1>
                <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                  Sertifikatın üzərində gördüyün kodu daxil et və sistemdə rəsmi
                  olaraq qeydiyyatda olub-olmadığını saniyələr içində yoxla.
                </p>
              </div>

              {/* info pill-lər */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300/90">
                <InfoPill
                  label="Dəstəklənən format"
                  value="Tam sertifikat kodu"
                />
                <InfoPill
                  label="Görünən məlumatlar"
                  value="Sahib, kurs, tarix"
                />
                <InfoPill
                  label="Təhlükəsizlik"
                  value="Yalnız kod əsasında yoxlama"
                />
              </div>

              {/* helper */}
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200/70 dark:border-white/5 pt-4">
                Kodu paylaşarkən şəxsi məlumatlarınızın təhlükəsizliyinə diqqət
                yetirin. Bu sistem yalnız mövcud sertifikatın həqiqiliyini
                təsdiqləmək üçündür və əlavə şəxsi məlumat tələb etmir.
              </p>
            </section>

            {/* Sağ / alt – form */}
            <section className="px-5 sm:px-7 md:px-9 py-6 md:py-9 bg-slate-50/80 dark:bg-slate-950/70 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="certificate-code"
                    className="block text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400"
                  >
                    Sertifikat kodu
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                      <span
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                        bg-white border border-slate-200 text-cyan-600 text-xs
                        dark:bg-slate-900/80 dark:border-cyan-500/30 dark:text-cyan-300"
                      >
                        #
                      </span>
                    </div>
                    <input
                      id="certificate-code"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Məs: CERT2024ABCD1234567"
                      className="w-full rounded-xl border border-slate-300 bg-white/90 px-10 py-2.5 text-sm sm:text-[15px]
                        text-slate-900 shadow-sm outline-none
                        placeholder:text-slate-400
                        focus:ring-2 focus:ring-cyan-500/70 focus:border-cyan-400/80
                        dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-50 dark:placeholder:text-slate-500
                        transition-all"
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                    Sertifikat üzərində yazılan tam kodu olduğu kimi daxil
                    etməyə çalışın. Böyük/kiçik hərf formatına əməl etməyiniz
                    tövsiyə olunur.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5
                    text-sm sm:text-[15px] font-semibold 
                    bg-cyan-600 text-white hover:bg-cyan-500 active:bg-cyan-500/90
                    dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-colors shadow-[0_10px_30px_rgba(8,47,73,0.25)] dark:shadow-[0_10px_35px_rgba(34,211,238,0.35)]"
                  disabled={isDisabled}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent 
                        animate-spin"
                      />
                      <span>Yüklənir...</span>
                    </>
                  ) : (
                    <>
                      <span>Yoxla</span>
                      <span className="text-base leading-none">↗</span>
                    </>
                  )}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-xl border p-3 space-y-1 text-[11px] sm:text-xs
      border-slate-200/80 bg-white/80 text-slate-800
      dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100
      transition-colors"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="text-[11px] sm:text-xs text-slate-800 dark:text-slate-100">
        {value}
      </p>
    </div>
  );
}
