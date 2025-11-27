import { Toaster } from "sonner";
import CustomLayout from "@/layouts/CustomLayout";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Parapsychology.az</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="overflow-x-hidden dark:!bg-slate-950/90 ">
        <CustomLayout>
          <Hero />
          <Suspense>
            <Navbar />
          </Suspense>
          <Toaster richColors />
          <div className="min-h-screen ">{children}</div>
          <Footer />
        </CustomLayout>
      </body>
    </html>
  );
}
