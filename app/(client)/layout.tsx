import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import "@/styles/globals.css";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Hero />
      <Suspense>
        <Navbar />
      </Suspense>
      <div className="min-h-[90vh] ">{children}</div>
      <Footer />
    </div>
  );
}
