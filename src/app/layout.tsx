import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MemoME - Code memorizer ',
  description: 'Memorize code and snippets very easy with MemoMe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC]`}>
        {children}
      </body>
    </html>
  );
}
