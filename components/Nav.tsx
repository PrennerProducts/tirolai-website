'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-6 border-b border-gray-200 dark:border-zinc-700">
      {/* Logo größer */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/LogoTirolAiNeu.svg"
          alt="TirolAi Logo"
          width={240}
          height={72}
          className="h-16 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link href="#services" className="hover:underline">
          Leistungen
        </Link>
        <Link href="#projects" className="hover:underline">
          Projekte
        </Link>
        <Link href="#about" className="hover:underline">
          Über uns
        </Link>
        <Link
          href="#contact"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Jetzt beraten lassen
        </Link>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 p-2 border rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </nav>
    </header>
  );
}
