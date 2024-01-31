import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import { bebasNeue } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Phase Zero Giveaway",
  description: "Page Made for Phase Zero Giveaway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#131313] ${bebasNeue.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
