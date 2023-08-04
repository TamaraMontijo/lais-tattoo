import "./globals.css";
import type { Metadata } from "next";
import {
  Montserrat as Montserrat,
  Barlow_Condensed as BarlowCondensed,
  Crimson_Text as Crimson,
} from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "300", "500"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const crimson = Crimson({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

const barlowCondensed = BarlowCondensed({
  weight: ["600"],
  subsets: ["latin"],
  variable: '--font-barlow-condensed'
});

export const metadata: Metadata = {
  title: "Lais Tattoo",
  description: "Faço desenhos únicos para sua pele",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-full font-montserrat overflow-x-hidden ${montserrat.variable} ${crimson.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
