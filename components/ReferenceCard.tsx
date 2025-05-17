'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ReferenceCardProps {
  title: string;
  summary: string;
  image: string;
  href: string;
}

export function ReferenceCard({
  title,
  summary,
  image,
  href,
}: ReferenceCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl overflow-hidden border bg-card shadow-md hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="flex flex-col h-full">
        {/* Bildbereich mit fixer Höhe */}
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        {/* Textinhalt */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
