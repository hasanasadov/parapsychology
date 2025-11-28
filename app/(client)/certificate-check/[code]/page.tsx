import { getCertificateByCode } from "@/actions/certificates";

function parseCode(raw: string) {
  if (raw.length <= 8) {
    return { certificateNumber: raw, fin: null };
  }

  const fin = raw.slice(-8);
  const certificateNumber = raw.slice(0, -8);

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

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
          <h1 className="text-xl font-semibold mb-2 text-center">
            Sertifikat tapılmadı
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
            Daxil etdiyiniz kod üzrə sistemdə keçərli sertifikat tapılmadı.
          </p>

          <div className="mt-4 text-xs text-gray-500 dark:text-gray-500 space-y-1">
            <p>
              <span className="font-semibold">Tam kod:</span> {code}
            </p>
            {fin && (
              <p>
                <span className="font-semibold">Çıxarılan FIN:</span> {fin}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100 px-4">
      <div className="max-w-lg w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Sertifikat Yoxlama
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
          Sertifikat məlumatları şəxsiyyət vəsiqəsinin FIN koduna əsasən
          yoxlanılır.
        </p>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Tam kod
            </p>
            <p className="font-mono text-sm font-semibold break-all">{code}</p>
          </div>
          {fin && (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
              <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
                FIN
              </p>
              <p className="font-mono text-sm font-semibold">{fin}</p>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-6">
          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Sertifikat nömrəsi
            </p>
            <p className="text-base font-medium">{certificateNumber}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Ad Soyad
            </p>
            <p className="text-base font-medium">{certificate.fullName}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Kurs
            </p>
            <p className="text-base font-medium">{certificate.courseName}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Verilmə tarixi
            </p>
            <p className="text-base font-medium">
              {certificate.issuedAt.toLocaleDateString("az-Latn-AZ")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400">
              Sertifikat faylı
            </p>
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Faylı aç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
