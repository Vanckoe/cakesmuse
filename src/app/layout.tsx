import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cakes Muse — муссовые торты и арт-десерты в Астане",
  description:
    "Реалистичные арт-десерты, муссовые торты, бенто и подарочные наборы Cakes Muse в Астане. Выберите вкус и обсудите оформление в WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
