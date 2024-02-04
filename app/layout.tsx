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
      <body className={`bg-[url('/background.jpg')] bg-cover bg-center ${bebasNeue.className}`}>
        <div className="w-full h-full backdrop-brightness-25 bg-black/30">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
