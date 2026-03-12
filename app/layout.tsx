import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google";
import "./globals.css";

const gameOfThrones = localFont({
  src: "../public/fonts/game-of-thrones.ttf",
  variable: "--font-cinzel",
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Krishna | The Architect of the Many-Faced Database",
  description: "A cinematic data engineering portfolio set in a digital Westeros."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${gameOfThrones.variable} ${jost.variable} bg-void text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
