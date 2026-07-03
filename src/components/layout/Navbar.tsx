"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "glass py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-background font-heading font-bold text-sm">LS</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-heading font-bold text-foreground">Likith S</span>
            <span className="text-[9px] sm:text-[10px] font-mono text-muted tracking-wider uppercase whitespace-nowrap">Full Stack · App · AI</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.path} href={l.path} className={cn(
              "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              pathname === l.path ? "text-primary bg-primary/5" : "text-muted hover:text-foreground"
            )}>
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 mr-1">
            <span className="dot-pulse" />
            <span className="text-[11px] font-mono text-muted">Open to work</span>
          </div>
          <Button size="sm" asChild>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        <button className="md:hidden p-2 rounded-lg text-foreground/80 hover:bg-surface-hover transition-all"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={cn(
        "md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden",
        open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="glass border-t border-border-color p-5 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.path} href={l.path} className={cn(
              "px-4 py-3 rounded-xl text-base font-medium transition-all",
              pathname === l.path ? "bg-primary/10 text-primary" : "text-muted hover:bg-surface-hover hover:text-foreground"
            )}>
              {l.name}
            </Link>
          ))}
          <div className="mt-3 pt-4 border-t border-border-color">
            <Button className="w-full" asChild>
              <Link href="/contact">Hire Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
