'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { href: '#why', label: 'Waarom Student Consultant' },
  { href: '#services', label: 'Servicedomeinen' },
  { href: '#sectors', label: 'Sectoren' },
  { href: '#about', label: 'Over ons' },
];

type Theme = 'light' | 'dark';

export default function Header() {
  const [theme, setTheme] = useState<Theme>('light');
  const [lang, setLang] = useState<'nl' | 'en'>('nl');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-primary dark:text-accent">SC</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            aria-label="Switch language"
            onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {lang.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}
