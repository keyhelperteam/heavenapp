import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import AOSInit from "./components/AOSInit";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HeavenApp - Memorial & Remembrance Platform",
  description: "HeavenApp is a peaceful digital space to remember and honor your loved ones. Create beautiful memorials, light virtual candles, send flowers, and share memories with family and friends.",
  keywords: ["memorial", "remembrance", "in memory", "candle", "flowers", "memories", "obituary", "tribute"],
  authors: [{ name: "HeavenApp Team" }],
  openGraph: {
    title: "HeavenApp - Memorial & Remembrance Platform",
    description: "Create beautiful digital memorials for your loved ones. Light candles, send flowers, and share memories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <AOSInit />
        <div className="min-h-screen flex flex-col">
          <ResponsiveNav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
