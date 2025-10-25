import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
// @ts-ignore
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relinx",
  description: "Jeu en ligne solo/multijoueur de sémantique relationnelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="theme-game">
      <body
        className={`${manrope.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
