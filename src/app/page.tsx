"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Download, Cpu, Smartphone, Globe, Database, Sparkles, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Hero3DCore } from '@/components/ui/Hero3DCore';
import { Profile3DCard } from '@/components/ui/Profile3DCard';
import { motion } from 'framer-motion';

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };

const stats = [
  { value: '6+', label: 'Projects Delivered' },
  { value: '6mo', label: 'Industry Experience' },
  { value: '8.9', label: 'CGPA / 10' },
  { value: '10+', label: 'Technologies' },
];

export default function Home() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_100%)] z-0" />
        
        <div className="glow w-[600px] h-[600px] bg-primary -top-40 -left-40 z-0" />
        <div className="glow w-[400px] h-[400px] bg-secondary bottom-20 right-0 z-0" />
        <div className="glow w-[300px] h-[300px] bg-accent top-1/2 left-1/2 z-0" style={{ opacity: 0.03 }} />

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div className="lg:col-span-7" initial="initial" animate="animate" variants={stagger}>
              <motion.div variants={fade} transition={{ duration: 0.5 }} className="flex items-center gap-3 mb-8">
                <span className="dot-pulse" />
                <span className="label">Available for opportunities</span>
              </motion.div>

              <motion.h1 variants={fade} transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-extrabold tracking-tight">
                I&apos;m <span className="text-gradient">Likith S</span><span className="text-accent">.</span>
              </motion.h1>

              <motion.p variants={fade} transition={{ duration: 0.5 }}
                className="mt-4 text-xl sm:text-2xl font-heading font-medium text-muted tracking-tight">
                Full Stack Developer · App Developer · AI & Prompt Engineer
              </motion.p>

              <motion.p variants={fade} transition={{ duration: 0.5 }}
                className="mt-6 text-muted max-w-xl leading-relaxed">
                I build production-ready web & mobile applications using React, Next.js, Flutter, and Node.js — and I leverage AI tools and prompt engineering to accelerate development workflows. I hold a B.E. in Computer Science & Engineering from Alva&apos;s Institute of Engineering and Technology with hands-on client project experience.
              </motion.p>

              <motion.div variants={fade} transition={{ duration: 0.5 }} className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/projects">View My Work <ArrowRight size={18} /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div variants={fade} transition={{ duration: 0.5 }} className="mt-12 flex items-center gap-5 text-muted">
                <a href="https://github.com/likith9844" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm hover:text-primary transition-colors font-mono">
                  <GithubIcon size={18} /> likith9844
                </a>
                <span className="w-px h-4 bg-border-color" />
                <a href="https://www.linkedin.com/in/likith-s-2004/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm hover:text-primary transition-colors font-mono">
                  <LinkedinIcon size={18} /> likith-s-2004
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Code Block & Profile 3D Card */}
            {/* Right — Code Block & Profile 3D Card */}
            {/* Right — 3D Profile Card */}
            <motion.div className="lg:col-span-5 hidden lg:flex items-center justify-center w-full h-full" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-full max-w-[220px] aspect-[4/5] relative">
                  <Profile3DCard />
                </div>
            </motion.div>
          </div>

          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <ArrowDown size={20} className="text-muted/30 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className="py-20">
        <div className="line-fade" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-gradient">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHAT I DO ════════ */}
      <section className="py-28">
        <div className="line-fade" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 mb-14">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4"><span className="label">01 — Services</span></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">What I Offer</h2>
              <p className="text-muted max-w-xl">From idea to deployment — I handle the full lifecycle.</p>
            </div>
            
            {/* The abstract 3D Core moved here */}
            <div className="hidden lg:block w-[400px] shrink-0">
              <Hero3DCore />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Globe size={20} />, title: "Web Development", desc: "React, Next.js, Tailwind — responsive SPAs, SSR websites, and dashboards." },
              { icon: <Smartphone size={20} />, title: "App Development", desc: "Flutter & Dart — cross-platform mobile apps with native feel and Firebase integration." },
              { icon: <Database size={20} />, title: "Backend & APIs", desc: "Node.js, Express, PostgreSQL, MongoDB — scalable REST APIs and microservices." },
              { icon: <Cpu size={20} />, title: "AI-Powered Dev", desc: "AI-assisted coding, prompt engineering, LLM integration, and AI workflow automation." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.3, delay: i * 0.08 }}>
                <Card className="h-full">
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-4">{item.icon}</div>
                    <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FEATURED PROJECTS ════════ */}
      <section className="py-28">
        <div className="line-fade" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-4"><span className="label">02 — Portfolio</span></div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted max-w-xl">Production client work and research-driven academic projects.</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex shrink-0">
              <Link href="/projects">All Projects <ArrowRight size={16} /></Link>
            </Button>
          </div>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "ANI Marketplace App",
                type: "Client",
                desc: "Full-stack marketplace mobile application with multi-role user authentication, Razorpay & Stripe payment gateway integration, real-time product catalog management, order tracking, and a PostgreSQL-backed admin panel.",
                tech: ["Flutter", "Node.js", "PostgreSQL", "Razorpay", "Stripe"],
              },
              {
                num: "02",
                title: "ForenAdb Mobile Forensics",
                type: "Academic",
                desc: "Desktop forensics platform that communicates with Android devices via ADB to extract call logs, SMS, contacts, and app data. Features SHA-256 evidence hashing for integrity verification and automated PDF report generation.",
                tech: ["Python", "Flask", "SQLite", "ADB"],
              },
            ].map((p) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4 }}>
                <div className="card-accent p-7 sm:p-9 group">
                  <div className="flex items-start gap-6">
                    <span className="text-3xl font-heading font-extrabold text-border-color group-hover:text-primary/20 transition-colors hidden sm:block">{p.num}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`label text-[11px] ${p.type === 'Client' ? 'text-primary' : 'text-secondary'}`}>{p.type}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3">{p.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Button variant="outline" asChild><Link href="/projects">View All Projects</Link></Button>
          </div>
        </div>
      </section>

      {/* ════════ CURRENTLY EXPLORING ════════ */}
      <section className="py-28">
        <div className="line-fade" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-28">
          <div className="flex items-center gap-4 mb-4"><span className="label">03 — Learning</span></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-14">Currently Exploring</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: <Sparkles size={20} />, title: "LLM & Prompt Engineering", desc: "Building AI-augmented development workflows, crafting effective prompts for code generation, and integrating LLMs into application pipelines." },
              { icon: <Zap size={20} />, title: "DevOps & Cloud", desc: "Docker containerization, CI/CD pipelines with GitHub Actions, AWS deployment, and infrastructure-as-code practices." },
              { icon: <Globe size={20} />, title: "System Design", desc: "Scalable architecture patterns, microservices, database optimization, caching strategies, and distributed systems fundamentals." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.08 }}>
                <Card className="h-full"><div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent mb-4">{item.icon}</div>
                  <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-28">
        <div className="line-fade" />
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-28">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="card p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="glow w-[300px] h-[300px] bg-primary -top-20 -right-20" />
              <div className="glow w-[200px] h-[200px] bg-accent -bottom-10 -left-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Let&apos;s build something together.</h2>
                <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
                  Whether you need a developer for your team, a freelancer for a project, or just want to connect — I&apos;m all ears.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild><Link href="/resume"><Download size={18} /> View Resume</Link></Button>
                  <Button variant="outline" size="lg" asChild><Link href="/contact">Send a Message</Link></Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
