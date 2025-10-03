import TechLoading from "@/components/TechLoading";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Orbitron, Outfit, Roboto_Mono } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MaleSoftware | Desenvolvimento de Software & Soluções Tecnológicas",
  description:
    "Transformamos desafios complexos em soluções modernas e eficientes através de desenvolvimento de software personalizado, automação inteligente e infraestrutura robusta.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`font-sans ${outfit.variable} ${orbitron.variable} ${robotoMono.variable} antialiased`}
      >
        <Suspense fallback={<TechLoading />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
