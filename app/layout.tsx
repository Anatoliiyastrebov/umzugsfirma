import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nordumzug-demo.de"),
  title: {
    default: `${SITE.name} — Stressfrei umziehen in ganz Deutschland`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium Umzugsservice in Deutschland: schnell, sicher und mit Festpreis-Garantie. Privat- und Firmenumzüge, Möbelmontage und Verpackungsservice.",
  keywords: [
    "Umzugsfirma",
    "Umzug Deutschland",
    "Privatumzug",
    "Firmenumzug",
    "Festpreis Umzug",
    "Umzugsservice",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://nordumzug-demo.de",
    siteName: SITE.name,
    title: `${SITE.name} — Stressfrei umziehen in ganz Deutschland`,
    description:
      "Schnell, zuverlässig und mit Festpreis-Garantie. Ihr Premium-Umzug von der Planung bis zum letzten Karton.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Professioneller Umzugsservice in Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Stressfrei umziehen`,
    description:
      "Premium Umzugsservice mit Festpreis-Garantie und Versicherung inklusive.",
    images: [
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
