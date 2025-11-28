import Link from "next/link";
import { getCertificates } from "@/actions/certificates";

export default async function CertificatesListPage() {
  const certificates = await getCertificates();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Sertifikatlar</h1>
        <Link
          href="/dashboard/certificates/new"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Yeni sertifikat
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Kod</th>
              <th className="px-3 py-2 text-left font-medium">Ad Soyad</th>
              <th className="px-3 py-2 text-left font-medium">Kurs</th>
              <th className="px-3 py-2 text-left font-medium">Tarix</th>
              <th className="px-3 py-2 text-left font-medium">Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((c) => (
              <tr
                key={c.id}
                className="border-t border-gray-100 dark:border-gray-800"
              >
                <td className="px-3 py-2 font-mono text-xs">{c.code}</td>
                <td className="px-3 py-2">{c.fullName}</td>
                <td className="px-3 py-2">{c.courseName}</td>
                <td className="px-3 py-2">
                  {c.issuedAt.toLocaleDateString("az-Latn-AZ")}
                </td>
                <td className="px-3 py-2">
                  <Link
                    href={`/certificate-check-${c.code}`}
                    className="text-xs text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Sertifikat səhifəsinə get
                  </Link>
                </td>
              </tr>
            ))}

            {certificates.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-3 py-4 text-center text-gray-500 text-sm"
                >
                  Hələlik sertifikat əlavə edilməyib.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
