import { Toaster } from "sonner";
import CustomLayout from "@/layouts/CustomLayout";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";
// import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between overflow-x-hidden ">
        <CustomLayout>
          <Hero />
          <Navbar />
          <Toaster richColors />
          {children}
          {/* <Footer /> */}
        </CustomLayout>
      </body>
    </html>
  );
}
