import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import React from 'react'
import { Header } from '@/components/Header/Header'

const openSans = Open_Sans({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
