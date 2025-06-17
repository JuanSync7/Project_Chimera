import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import Inter font
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Configure Inter font

export const metadata: Metadata = {
  title: 'Project Chimera: AI Chip Design Strategy',
  description: 'A comprehensive five-year strategic plan to re-architect the entire semiconductor design pipeline around a full-stack, AI-native approach.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        {/* Google Fonts are handled by next/font, no <link> tags needed for Inter specifically */}
      </head>
      <body className="font-body antialiased h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
