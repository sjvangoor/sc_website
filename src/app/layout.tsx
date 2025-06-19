import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Student Consultant',
  description: 'Student-run consultancy firm',
  openGraph: {
    title: 'Student Consultant',
    description: 'Student-run consultancy firm',
    url: 'https://www.student-consultant.nl',
    siteName: 'Student Consultant',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground pt-16`}>
        <Header />
        {children}
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
