import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MagiBot',
  description: 'The fastest and most convenient way to anonymize your funds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/awv6vvk.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
