'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { useRef } from 'react';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ref für außerhalb des x im Mobilemenue schlißt auch das mobilemenue

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

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

    handleResize(); // Initial prüfen
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showSolidNav = isScrolled || isMobile || mobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        showSolidNav
          ? 'bg-zinc-400 border-b border-white/10 shadow-xl backdrop-blur-md'
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image src="/mountain.png" width={80} height={80} alt="Logo" />
          <div className="pt-2">
            <Image
              src="/logofont.png"
              width={150}
              height={150}
              alt="Logo Font"
            />
          </div>
        </Link>

        {/* Desktop-Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Leistungen</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-zinc-400">
                <div className="flex flex-col md:flex-row gap-6 p-6 md:w-[700px]">
                  <div className="w-full md:w-1/2 space-y-3">
                    {[
                      {
                        title: 'Individuelle KI-Lösungen',
                        desc: 'Maßgeschneiderte Lösungen für dein Unternehmen',
                      },
                      {
                        title: 'Prozessautomatisierung',
                        desc: 'Von repetitiv zu intelligent – automatisiere deine Prozesse',
                      },
                      {
                        title: 'Conversational Interfaces',
                        desc: 'Chatbots und Voicebots mit natürlicher Sprachverarbeitung',
                      },
                      {
                        title: 'Branchenlösungen',
                        desc: 'KI für Gesundheit, Industrie, Tourismus & mehr',
                      },
                    ].map((item, idx) => (
                      <NavigationMenuLink asChild key={idx}>
                        <Link
                          href="/#services"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="hidden md:block w-1/2 relative rounded-md overflow-hidden">
                    <Image
                      src="/images/brain.png"
                      alt="Leistungen Vorschau"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/references"
                  className="px-4 py-2 text-sm font-medium transition-colors hover:text-cyan-400"
                >
                  Referenzen
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="px-4 py-2 text-sm font-medium transition-colors hover:text-cyan-400"
                >
                  Über uns
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/#contact">
                  <Button variant="cyan">Jetzt beraten lassen</Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Burger Button */}
        <div className="md:hidden" ref={buttonRef}>
          <button
            onClick={() => {
              const willOpen = !mobileOpen;
              setMobileOpen(willOpen);
              if (willOpen) {
                setIsScrolled(true);
              } else if (window.scrollY <= 50) {
                setIsScrolled(false);
              }
            }}
            className="text-black focus:outline-none"
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
            className="flex flex-col space-y-2 bg-zinc-800 border-2 rounded-lg p-4 shadow-md"
          >
            <Link
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              Leistungen
            </Link>
            <Link
              href="/references"
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              Referenzen
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-white"
            >
              Über uns
            </Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)}>
              <Button variant="cyan" className="w-full">
                Jetzt beraten lassen
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
