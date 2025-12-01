import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "PearlGate Memorials & Events - Funeral & Event Planning in Nigeria",
  description: "Professional funeral and event planning services in Nigeria. We provide compassionate memorial services and exceptional event planning with dignity and care.",
  keywords: "funeral planning, event planning, memorial services, Nigeria, PearlGate, Egbeda",
  openGraph: {
    title: "PearlGate Memorials & Events",
    description: "Professional funeral and event planning services in Nigeria",
    url: "http://pearlgate.com.ng",
    siteName: "PearlGate Memorials & Events",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}