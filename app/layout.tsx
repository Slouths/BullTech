import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header';
import { Analytics } from '@vercel/analytics/next';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
});

export const metadata: Metadata = {
  title: "BullTech Miami - Premium Tech Solutions",
  description: "Innovative technology services designed for modern businesses in the heart of Miami.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${permanentMarker.variable} antialiased bg-white text-black`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
