import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import Nav from "@/components/Navbar"

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin-ext"],
  display: "swap",
});

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

