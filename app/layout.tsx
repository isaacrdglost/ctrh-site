import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Albert_Sans } from "next/font/google";
import "./globals.css";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-body", display: "swap" });
const heading = Albert_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: "CapTalento RH — Recrutamento e Seleção Humanizado",
  description: "A CapTalento RH conecta empresas aos talentos certos — com foco em fit cultural, agilidade e parceria real em cada etapa do processo.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${body.variable} ${heading.variable}`}>{children}</body>
    </html>
  );
}
