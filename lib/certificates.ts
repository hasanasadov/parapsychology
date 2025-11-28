// lib/certificates.ts
export function parseCode(raw: string) {
  if (raw.length <= 8) {
    return { certificateNumber: raw, fin: null };
  }

  const fin = raw.slice(-8);
  const certificateNumber = raw.slice(0, -8);

  return { certificateNumber, fin };
}
