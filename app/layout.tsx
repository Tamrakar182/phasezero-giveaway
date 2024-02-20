import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";
import { Bebas_Neue } from "next/font/google";

export const metadata: Metadata = {
  title: "Phase Zero Giveaway",
  description: "Page Made for Phase Zero Giveaway",
};

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[url('/background.jpg')] bg-cover bg-center relative ${bebasNeue.className}`}
      >
        <div className="w-full h-full backdrop-brightness-50 bg-black/30">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
