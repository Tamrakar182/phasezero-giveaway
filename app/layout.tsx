import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer"
import Nav from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] });

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
      <body className="bg-[#131313]">
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  );
}

