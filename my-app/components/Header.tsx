'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '#why', label: 'Waarom Student Consultant' },
  { href: '#services', label: 'Servicedomeinen' },
  { href: '#sectors', label: 'Sectoren' },
  { href: '#about', label: 'Over ons' },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState('NL');
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setDark(true);
  }, []);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-primary">Student Consultant</Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setLang(lang === 'NL' ? 'EN' : 'NL')} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            {lang}
          </button>
        </div>
      </div>
    </header>
  );
}
