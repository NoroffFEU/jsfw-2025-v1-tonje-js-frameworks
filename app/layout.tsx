import type { Metadata } from "next";
import { Inter, DM_Sans, Spirax } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spirax = Spirax({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-spirax",
});

export const metadata: Metadata = {
  title: "Alera Online Shop",
  description: "Shop and Browse products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${spirax.variable}`}>
        {children}
      </body>
    </html>
  );
}
