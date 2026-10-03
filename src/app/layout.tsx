import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/data/content";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio d'Emilio Demarny, étudiant en BTS Métiers de l'Audiovisuel. Cadrage, montage, post-production et captation d'événements.",
  keywords: [
    "Emilio Demarny",
    "BTS Métiers de l'Audiovisuel",
    "cadreur",
    "monteur",
    "vidéaste",
    "portfolio audiovisuel",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description:
      "Cadrage, montage, post-production. Portfolio audiovisuel d'Emilio Demarny.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-ink text-paper antialiased">
        <SmoothScroll />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
