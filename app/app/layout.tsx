import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mukhbitah - Hijab Style & Fashion",
  description: "Galeri koleksi kerudung dengan berbagai model dan warna pilihan. Temukan kerudung yang sesuai dengan gaya Anda.",
  keywords: "hijab, kerudung, pashmina, segi empat, instan, mukhbitah, anna mukhbitah",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
