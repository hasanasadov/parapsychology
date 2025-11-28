// actions/Certificate.ts
"use server";

import { prisma } from "@/lib/prisma";
import { CertificateModel } from "@/types";
import { revalidatePath } from "next/cache";

export async function CertificateGetItems() {
  try {
    return await prisma.certificate.findMany();
  } catch (error) {
    console.error("An error accured : ", error);
    return [];
  }
}

export async function CertificateAddItem(data: CertificateModel) {
  try {
    const newItem = await prisma.certificate.create({ data });
    revalidatePath("/dashboard");
    return newItem;
  } catch (error) {
    console.error("Add Error:", error);
    return null;
  }
}

export async function CertificateUpdateItem(
  id: string,
  data: Partial<CertificateModel>
) {
  try {
    const updated = await prisma.certificate.update({
      where: { id },
      data,
    });
    revalidatePath("/dashboard");
    return updated;
  } catch (error) {
    console.error("Update Error:", error);
    return null;
  }
}

export async function CertificateDeleteItem(id: string) {
  try {
    await prisma.certificate.delete({ where: { id } });
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Delete Error:", error);
  }
}


export async function getCertificateByCode(code: string) {
  try {
    const certificate = await prisma.certificate.findUnique({
      where: { code },
    });
    return certificate;
  } catch (error) {
    console.error("Get Certificate Error:", error);
    return null;
  }
}