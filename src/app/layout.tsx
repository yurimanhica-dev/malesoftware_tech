import type React from "react"
import type { Metadata } from "next"
import { Outfit, Orbitron, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "MaleSoftware - Desenvolvimento de Software & Soluções Tecnológicas",
  description:
    "Transformamos desafios complexos em soluções elegantes através de desenvolvimento de software personalizado, automação inteligente e infraestrutura robusta.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans ${outfit.variable} ${orbitron.variable} ${robotoMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
