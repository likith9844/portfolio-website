import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="relative mt-auto">
      <div className="line-fade" />
      <div className="bg-surface/40">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-background font-heading font-bold text-sm">LS</span>
                </div>
                <span className="text-lg font-heading font-bold">Likith S</span>
              </div>
              <p className="text-muted text-sm max-w-sm leading-relaxed">
                Full Stack Developer, App Developer, and AI-powered engineer building production-ready web & mobile solutions. Open to roles, internships, and freelance work.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { href: "https://github.com/likith9844", icon: <GithubIcon size={16} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/likith-s-2004/", icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
                  { href: "mailto:likith.s.9844@gmail.com", icon: <Mail size={16} />, label: "Email" },
                ].map(l => (
                  <a key={l.label} href={l.href} target={l.href.startsWith('mailto') ? undefined : "_blank"} rel="noopener noreferrer" aria-label={l.label}
                     className="w-9 h-9 rounded-lg bg-surface border border-border-color flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all duration-300">
                    {l.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="label mb-5">Navigation</h3>
              <ul className="flex flex-col gap-2.5">
                {['Home','About','Projects','Resume','Contact'].map(n => (
                  <li key={n}>
                    <Link href={n === 'Home' ? '/' : `/${n.toLowerCase()}`}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors">
                      {n} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="label mb-5">Contact</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-muted">
                <li><a href="mailto:likith.s.9844@gmail.com" className="hover:text-primary transition-colors">likith.s.9844@gmail.com</a></li>
                <li><a href="tel:+919844844956" className="hover:text-primary transition-colors">+91-9844844956</a></li>
                <li>Bangalore, Karnataka, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-border-color flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted/50">
            <p>© {y} Likith S</p>
            <p className="flex items-center gap-1">Built with <Heart size={11} className="text-primary" /> Next.js & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
