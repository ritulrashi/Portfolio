import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
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
    <html lang="en" className={`${lexend.variable} scroll-smooth`}>
      <body className="bg-background text-text selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
