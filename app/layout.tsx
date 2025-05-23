import type { Metadata } from 'next';
import { Philosopher } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'FRAM',
  description: 'A complete e-commerce application with Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={philosopher.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
