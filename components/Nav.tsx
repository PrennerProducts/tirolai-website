'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useIsScrolled from '@/hooks/useIsScrolled';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
/* Removed unused import to fix eslint error */
//// import { useLocaleContext } from '@/app/locale-context';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const isScrolled = useIsScrolled();
  const showSolidNav = !isHomepage || isScrolled || isMobile || mobileOpen;

  // Removed unused locale and setLocale to fix eslint errors
  // const { locale, setLocale } = useLocaleContext();
  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showNav) return null;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? 'bg-[rgba(14,164,233,0.35)] dark:bg-[rgba(30,41,59,0.85)] border-b border-muted/40 shadow-md backdrop-blur-md'
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center space-x-2 group">
          {/* Dark Mode Logo */}
          <Image
            src="/mountainWhite.png"
            width={80}
            height={80}
            alt="Logo"
            priority
            className="hidden dark:block"
          />
          {/* Light Mode Logo */}
          <Image
            src="/mountain.png"
            width={80}
            height={80}
            alt="Logo"
            priority
            className="block dark:hidden"
          />

          <div className="pt-2">
            {/* Dark Font Logo */}
            <Image
              src="/logofontWhite.png"
              width={150}
              height={150}
              alt="Logo Font"
              priority
              className="hidden dark:block"
            />
            {/* Light Font Logo */}
            <Image
              src="/logofont.png"
              width={150}
              height={150}
              alt="Logo Font"
              priority
              className="block dark:hidden"
            />
          </div>
        </Link>

        <NavigationMenu className="hidden md:flex items-center text-foreground">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/services"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    pathname.startsWith('/services') ? 'text-accent' : ''
                  }`}
                >
                  {t('leistungen')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/references"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    pathname === '/references' ? 'text-accent' : ''
                  }`}
                >
                  {t('referenzen')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    pathname === '/about' ? 'text-accent' : ''
                  }`}
                >
                  {t('ueber_uns')}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/#contact">
                  <Button variant="cyan">{t('jetzt_beraten_lassen')}</Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <div className="ml-4 flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </NavigationMenu>

        {/* Mobile Burger Button */}
        <div className="md:hidden" ref={buttonRef}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4">
          <div
            ref={menuRef}
            className="flex flex-col space-y-2 bg-surface border border-muted rounded-lg p-4 shadow-md"
          >
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
            >
              {t('leistungen')}
            </Link>

            <Link
              href="/references"
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
            >
              {t('referenzen')}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
            >
              {t('ueber_uns')}
            </Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)}>
              <Button variant="cyan">{t('jetzt_beraten_lassen')}</Button>
            </Link>
            <div className="pt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-md text-foreground hover:bg-accent/10 transition"
      aria-label="Theme wechseln"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
