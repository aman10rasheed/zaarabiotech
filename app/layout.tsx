import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaara Biotech | Sustainable Micro-Algae Solutions",
  description: "Pioneering biotechnology to address global energy and food crises through micro-algae innovation since 2016.",
  keywords: ["biotech", "micro-algae", "spirulina", "sustainable", "biotechnology", "Kerala", "India"],
  authors: [{ name: "Zaara Biotech" }],
  openGraph: {
    title: "Zaara Biotech | Sustainable Micro-Algae Solutions",
    description: "Pioneering biotechnology to address global energy and food crises through micro-algae innovation since 2016.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
