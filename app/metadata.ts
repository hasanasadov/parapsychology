import { metaKeywords } from "@/constants/metadata";

export const metadata = {
  title: "Parapschyology official website",
  description: "Next.js developer portfolio website",
  keywords: metaKeywords,
  authors: [{ name: "Hasanali Asadov" }],
  openGraph: {
    title: "Parapschyology official website",
    description: "Developer portfolio website",
    url: "https://parapschyology.az",
    type: "website",
    images: [
      {
        url: "https://parapschyology.az/1.png",
        width: 1200,
        height: 630,
        alt: "Parapschyology official website",
      },
    ],
  },
  // sosial media, favicon, open graph və s. metadata da əlavə oluna bilər
};
