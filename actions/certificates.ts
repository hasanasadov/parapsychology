// services/certificates.ts
"use server";

import { prisma } from "@/lib/prisma";

export async function getCertificates() {
  return prisma.certificate.findMany({
    orderBy: { createdAt: "desc" },
  });
}

type CreateCertificateInput = {
  code: string;
  fullName: string;
  courseName: string;
  issuedAt: string;
  fileUrl: string;
};

export async function createCertificate(data: CreateCertificateInput) {
  return prisma.certificate.create({
    data: {
      code: data.code,
      fullName: data.fullName,
      courseName: data.courseName,
      issuedAt: new Date(data.issuedAt),
      fileUrl: data.fileUrl,
    },
  });
}

export async function getCertificateByCode(code: string) {
  return prisma.certificate.findUnique({
    where: { code },
  });
}
