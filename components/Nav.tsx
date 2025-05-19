'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

export default function Nav() {
  // const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-400 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="group text-3xl sm:text-4xl font-bold tracking-tight flex items-center space-x-1"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500">
            Tirol
          </span>
          <span className="text-white font-extralight drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,1)] transition-all duration-300">
            AI
          </span>
          <span className="ml-1 w-1 h-5 bg-cyan-400 animate-pulse rounded-sm" />
        </Link>

        {/* Navigation Menu (shadcn/ui) */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Leistungen</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-zinc-400">
                <div className="flex flex-col md:flex-row gap-6 p-6 md:w-[700px]">
                  <div className="w-full md:w-1/2 space-y-3">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/#services"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Individuelle KI-Lösungen
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Maßgeschneiderte Lösungen für dein Unternehmen
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/#services"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Prozessautomatisierung
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Von repetitiv zu intelligent – automatisiere deine
                          Prozesse
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/#services"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Conversational Interfaces
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Chatbots und Voicebots mit natürlicher
                          Sprachverarbeitung
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/#services"
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Branchenlösungen
                        </div>
                        <p className="text-sm text-muted-foreground">
                          KI für Gesundheit, Industrie, Tourismus & mehr
                        </p>
                      </Link>
                    </NavigationMenuLink>
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
      </div>
    </header>
  );
}
