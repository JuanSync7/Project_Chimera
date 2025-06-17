
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'; // Import Inter and JetBrains_Mono fonts
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Configure Inter font for headlines
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

// Configure JetBrains_Mono for body text
const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'] // Specify weights if needed
});

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
    <html lang="en" className={`dark ${inter.variable} ${jetbrains_mono.variable} h-full scroll-smooth`}>
      <head>
        {/* Google Fonts are handled by next/font */}
      </head>
      <body className="font-body antialiased h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
