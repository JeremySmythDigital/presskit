import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PressKit.ai - Automated PR for Founders",
  description: "Get press coverage without the $60K/month agency fees. AI-powered press releases, journalist database, and pitch automation.",
  keywords: ["PR", "press release", "media coverage", "founders", "startups", "automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}