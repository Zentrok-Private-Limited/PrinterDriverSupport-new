import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Select Your Printer Model | Printer Driver Support',
  description:
    'Download free printer drivers and get help with printer setup, offline issues, wireless connection, paper jams, and scanner problems. Expert support for HP, Epson, Brother, and Canon printers.',
  openGraph: {
    title: 'Select Your Printer Model | Printer Driver Support',
    description:
      'Download free printer drivers and get help with printer setup, offline, wireless, paper jam, and scanner issues.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Script
          src="//code.jivosite.com/widget/XTs1LY3ZMo"
          strategy="afterInteractive"
        />
        {children}</body>
    </html>
  );
}
