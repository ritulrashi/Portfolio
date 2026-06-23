import type { Metadata } from "next";
import { Bodoni_Moda, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Ritul Rashi",
  description:
    "CS graduate from Virginia Tech with an interest in backend engineering, distributed systems, and fintech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-on-background selection:bg-on-tertiary-container selection:text-white cursor-crosshair">
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
