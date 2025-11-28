import { Toaster } from "sonner";
import CustomLayout from "@/layouts/CustomLayout";

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
          <Toaster richColors />
          <div className="min-h-screen ">{children}</div>
        </CustomLayout>
      </body>
    </html>
  );
}
