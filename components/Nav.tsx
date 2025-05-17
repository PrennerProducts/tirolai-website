'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const navItems = [
    { label: 'Leistungen', href: '/#services' },
    { label: 'Referenzen', href: '/references' },
    { label: 'Über uns', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform ${
          scrolled
            ? 'opacity-100 translate-y-0 bg-white/70  backdrop-blur-md shadow-md'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group text-3xl sm:text-4xl font-bold tracking-tight flex items-center space-x-1"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] via-purple-500 to-pink-500">
              Tirol
            </span>
            <span className="text-white font-extralight drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)] transition-all duration-300">
              AI
            </span>
          </Link>

          {/* Desktop */}
          <nav
            className={`hidden md:flex text-white items-center space-x-6 text-sm font-medium transition-all duration-500 transform ${
              scrolled
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact">
              <Button variant="cyan">Jetzt beraten lassen</Button>
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 p-2 border rounded hover:bg-gray-100 transition"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded hover:bg-gray-100  transition"
              aria-label="Menü öffnen"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/95  z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>
            <Button variant="cyan">Jetzt beraten lassen</Button>
          </Link>
          {/* <button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              setMenuOpen(false);
            }}
            className="mt-4 p-2 border rounded hover:bg-gray-100 transition"
          >
            {theme === 'dark' ? '🌞 Hell' : '🌙 Dunkel'}
          </button> */}
        </div>
      )}
    </>
  );
}
