import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/common/header/Header";
import Footer from "@/components/layout/common/footer/Footer";

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "АИВА",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
