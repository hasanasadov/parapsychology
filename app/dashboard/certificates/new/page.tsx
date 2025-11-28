import { createCertificate } from "@/actions/certificates";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createCertificateAction(formData: FormData) {
  "use server";

  const code = String(formData.get("code") || "");
  const fullName = String(formData.get("fullName") || "");
  const courseName = String(formData.get("courseName") || "");
  const issuedAt = String(formData.get("issuedAt") || "");

  // TODO: fayl yükləmə (file storage) – indi sadə placeholder
  const file = formData.get("file") as File | null;
  if (!file) {
    throw new Error("Fayl tələb olunur");
  }

  // Hələlik fake URL:
  const fileUrl = `https://files.parapsychology.az/certificates/${code}.pdf`;

  await createCertificate({
    code,
    fullName,
    courseName,
    issuedAt,
    fileUrl,
  });

  revalidatePath("/dashboard/certificates");
  redirect("/dashboard/certificates");
}

export default function NewCertificatePage() {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Yeni sertifikat əlavə et</h1>

      <form action={createCertificateAction} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Sertifikat kodu
          </label>
          <input
            name="code"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="SPPM003CPHYPS5LN68Va"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ad Soyad</label>
          <input
            name="fullName"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kurs adı</label>
          <input
            name="courseName"
            type="text"
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Verilmə tarixi
          </label>
          <input
            name="issuedAt"
            type="date"
            required
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Sertifikat faylı
          </label>
          <input
            name="file"
            type="file"
            accept="application/pdf,image/*"
            required
            className="w-full text-sm"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Sertifikat əlavə et
        </button>
      </form>
    </div>
  );
}
