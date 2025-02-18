import type { Metadata } from "next";
import "@/app/globals.css"

import HeaderAdmin from "./components/header";
import FooterAdmin from "./components/footer";


export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      <HeaderAdmin />
      {children}
      <FooterAdmin/>
    </body>
  </html>
  );
}
