'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ServiceCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative overflow-hidden p-6 bg-surface border border-muted rounded-xl shadow-sm',
        'hover:shadow-md hover:ring-2 hover:ring-accent/40 transition-all text-left flex flex-col justify-between'
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition">
        {title}
      </h3>
      <p className="text-muted">{text}</p>
      <div className="mt-6 text-sm font-medium text-accent group-hover:underline">
        Mehr erfahren →
      </div>
    </Link>
  );
}
