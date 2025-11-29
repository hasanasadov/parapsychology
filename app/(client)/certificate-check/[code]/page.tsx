import { getCertificateByCode } from "@/actions/certificates";
import RenderIf from "@/utils/RenderIf";

function parseCode(raw: string) {
  if (raw.length <= 8) {
    return { certificateNumber: raw, fin: null };
  }

  const fin = raw.slice(-7);
  const certificateNumber = raw.slice(0, -7);

  return { certificateNumber, fin };
}

type CertificatePageProps = {
  params: Promise<{ code: string }>;
};

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const { code } = await params;

  const certificate = await getCertificateByCode(code);
  const { certificateNumber, fin } = parseCode(code);

  const sharedContainerStyles =
    "w-full rounded-2xl p-6 md:p-8 border shadow-xl transition-all duration-300 " +
    "bg-white/90 border-gray-200 text-gray-900 " +
    "dark:bg-gray-900/80 dark:border-gray-700 dark:text-gray-100 backdrop-blur-xl";

  /** ==========================
   **  ❌ NOT FOUND
   ** ========================== */
  if (!certificate) {
    return (
      <main className="min-h-[50vh] flex items-center justify-center  dark:bg-black px-4">
        <div className="container mx-auto flex justify-center">
          <div className={`${sharedContainerStyles} relative max-w-xl`}>
            <div className="hidden dark:block pointer-events-none absolute -top-20 -right-10 h-40 w-40 rounded-full bg-red-500/30 blur-3xl" />

            <div className="text-center space-y-3 relative">
              <div className="flex justify-center">
                <div className="h-12 w-12 rounded-full bg-red-500/10 border border-red-400 dark:border-red-600 flex items-center justify-center text-red-600 dark:text-red-300 text-xl">
                  ✕
                </div>
              </div>

              <h1 className="text-lg md:text-xl font-bold">
                Sertifikat tapılmadı
              </h1>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Daxil etdiyiniz kod üzrə sistemdə sertifikat mövcud deyil.
              </p>

              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 space-y-1 border rounded-lg p-3 text-left">
                <p>
                  <strong>Tam kod: </strong> {code}
                </p>
                {fin && (
                  <p>
                    <strong>Çıxarılan FIN: </strong> {fin}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /** ==========================
   **  ✅ VALID CERTIFICATE
   ** ========================== */

  const issuedDate = new Date(certificate.issuedAt).toLocaleDateString(
    "az-Latn-AZ",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  const textSummary = `Bu sertifikat ${certificate.fullName} tərəfindən "${certificate.courseName}" təlim proqramını uğurla tamamladığını təsdiq edir. Sertifikat ${issuedDate} tarixində rəsmən təqdim olunmuşdur və bu yoxlama səhifəsi vasitəsilə etibarlıdır.`;

  // fileUrls massivdir
  const fileUrls: string[] = Array.isArray(certificate.fileUrls)
    ? certificate.fileUrls
    : certificate.fileUrls
    ? [certificate.fileUrls]
    : [];

  const fileCount = fileUrls.length;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-500 px-4 py-10">
      <div className="!container mx-auto">
        <div className={`${sharedContainerStyles}  mx-auto space-y-8 relative`}>
          {/* Dark mode glow */}
          <div className="hidden dark:block pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-14 -left-14 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-16 -right-16 h-44 w-44 bg-blue-500/10 blur-3xl rounded-full" />
          </div>

          {/* Status badge */}
          <div className="flex justify-center">
            <span
              className="px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase 
              bg-green-100 text-green-700 
              dark:bg-green-500/10 dark:text-green-300 border border-green-500/40"
            >
              ✔ Sertifikat Doğrulandı
            </span>
          </div>

          {/* Title */}
          <header className="text-center space-y-2">
            <h1 className="text-xl md:text-2xl font-bold">
              Sertifikat Yoxlama Nəticəsi
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Aşağıdakı məlumatlar sistemdə qeydiyyatda olan rəsmi sertifikata
              uyğundur.
            </p>
          </header>

          {/* Codes */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoBlock title="Tam kod" value={code} mono />
            <InfoBlock title="Sertifikat №" value={certificateNumber} />
            {fin && <InfoBlock title="FIN" value={fin} mono />}
          </section>

          {/* Summary */}
          <section className="space-y-4">
            <h2 className="text-xs tracking-widest text-gray-500 dark:text-gray-400 uppercase">
              Sertifikat Haqqında
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {textSummary}
            </p>
          </section>

          {/* Owner & details */}
          <section className="grid sm:grid-cols-2 gap-4">
            <InfoBlock title="Sertifikat sahibi" value={certificate.fullName} />
            <InfoBlock title="Verilmə tarixi" value={issuedDate} />
            <InfoBlock
              title="Təlim proqramı"
              value={certificate.courseName}
              full
            />
          </section>

          {/* All certificate files (fileUrls map) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Sertifikat faylları
              </h3>
              {fileUrls.length > 0 && (
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {fileUrls.length} fayl
                </span>
              )}
            </div>

            <RenderIf condition={!!fileCount}>
              <div
                className={`grid grid-cols-1 ${fileCount === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}  gap-4 justify-center`}
              >
                {fileUrls.map((url, index) => (
                  <div
                    key={index}
                    className="rounded-xl border w-full border-gray-200 bg-gray-50 
                        dark:border-white/10 dark:bg-gray-950/40 p-3 space-y-2"
                  >
                    <div className="w-full aspect-[4/4] max-h-[70vh] rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-black">
                      <iframe
                        src={url}
                        className="w-full h-full"
                        title={`Sertifikat faylı ${index + 1}`}
                      />
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center py-2 rounded-lg text-xs md:text-sm font-medium 
                          bg-blue-600 text-white hover:bg-blue-500 
                          dark:bg-cyan-500 dark:text-black dark:hover:bg-cyan-400 transition"
                    >
                      Faylı aç ({index + 1})
                    </a>
                  </div>
                ))}
              </div>
            </RenderIf>
            <RenderIf condition={!fileCount}>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bu sertifikat üçün sistemdə fayl əlavə edilməyib.
              </p>
            </RenderIf>
          </section>

          <footer className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-500 dark:text-gray-400">
            Bu səhifə real vaxtda sertifikatın doğrulanması üçün nəzərdə
            tutulub. Kodu paylaşarkən şəxsi məlumatlarınızın təhlükəsizliyinə
            diqqət yetirin.
          </footer>
        </div>
      </div>
    </main>
  );
}

/* ------------------------------
   Reusable field component
------------------------------ */
function InfoBlock({
  title,
  value,
  mono = false,
  full = false,
}: {
  title: string;
  value: string;
  mono?: boolean;
  full?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-3 space-y-1 text-sm bg-gray-50 border-gray-200 text-gray-900 
      dark:bg-gray-800/50 dark:border-white/10 dark:text-gray-100 transition
      ${full ? "sm:col-span-2" : ""}`}
    >
      <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {title}
      </p>
      <p className={`${mono ? "font-mono" : "font-medium"} text-sm break-all`}>
        {value}
      </p>
    </div>
  );
}
