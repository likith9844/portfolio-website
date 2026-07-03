"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Printer, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Resume() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Action bar — hidden on print */}
      <div className="no-print sticky top-16 z-40 glass border-b border-border-color">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-heading font-bold">Resume.pdf</h2>
            <p className="label text-[10px] mt-0.5">Likith S — Full Stack · App · AI</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer size={14} /> <span className="hidden sm:inline">Save PDF / Print</span>
            </Button>
            <Button size="sm" asChild>
              <a href="mailto:likith.s.9844@gmail.com">
                <Mail size={14} /> <span className="hidden sm:inline">Hire Me</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Resume content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-[21cm] mx-auto" // Standard A4 width constraint roughly
        >
          <div className="card p-8 sm:p-12 print:p-0 print:border-none print:shadow-none print:bg-white">

            {/* ─── Header ─── */}
            <div className="text-center mb-10 pb-8 border-b border-border-color print:border-gray-200">
              <h1 className="text-4xl font-heading font-extrabold tracking-tight mb-2 print:text-black">
                LIKITH S
              </h1>
              <p className="text-lg font-heading font-medium text-primary mb-4 print:text-blue-700">
                Full Stack Developer · App Developer · AI Engineer
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted print:text-gray-600 font-mono text-[11px]">
                <a href="mailto:likith.s.9844@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Mail size={13} /> likith.s.9844@gmail.com
                </a>
                <a href="tel:+919844844956" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Phone size={13} /> +91-9844844956
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> Bangalore, Karnataka
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted mt-2 print:text-gray-600 font-mono text-[11px]">
                <a href="https://github.com/likith9844" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <GithubIcon size={13} /> github.com/likith9844
                </a>
                <a href="https://www.linkedin.com/in/likith-s-2004/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <LinkedinIcon size={13} /> linkedin.com/in/likith-s-2004
                </a>
              </div>
            </div>

            {/* ─── Summary ─── */}
            <section className="mb-8">
              <h2 className="label text-primary mb-3 print:text-blue-700">Professional Summary</h2>
              <p className="text-sm text-muted leading-relaxed print:text-gray-800">
                Results-driven Full Stack Developer and AI-powered engineer with hands-on experience in building scalable web and mobile applications, backend systems, and client-facing solutions. Skilled in Flutter, React, Node.js, PostgreSQL, and Firebase. Adept at leveraging LLMs, prompt engineering, and AI-assisted workflows to accelerate development and deliver high-quality, production-ready code.
              </p>
            </section>

            {/* ─── Experience ─── */}
            <section className="mb-8">
              <h2 className="label text-primary mb-4 print:text-blue-700">Experience</h2>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-base font-heading font-bold print:text-black">Full Stack Developer & App Developer Intern</h3>
                    <p className="text-sm text-muted font-medium print:text-gray-600">Vithsutra Technologies</p>
                  </div>
                  <span className="font-mono text-xs shrink-0 text-muted print:text-gray-500 bg-surface-hover print:bg-transparent px-2 py-1 rounded">Dec 2025 – May 2026</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed print:text-gray-800 pl-2">
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/70 shrink-0 print:bg-blue-500" />
                    Developed client-facing web and mobile applications, contributing to frontend interfaces, backend-connected modules, and end-to-end application workflows.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/70 shrink-0 print:bg-blue-500" />
                    Built production features using JavaScript, React, Flutter, and database-backed workflows (PostgreSQL, Firebase) to improve product functionality.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary/70 shrink-0 print:bg-blue-500" />
                    Utilized AI tools and prompt engineering to accelerate feature implementation, debug complex backend issues, and optimize database queries.
                  </li>
                </ul>
              </div>
            </section>

            {/* ─── Education ─── */}
            <section className="mb-8">
              <h2 className="label text-primary mb-4 print:text-blue-700">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-heading font-bold print:text-black">B.E. in Computer Science & Engineering</h3>
                  <p className="text-sm text-muted font-medium print:text-gray-600">Alva&apos;s Institute of Engineering and Technology, Moodbidri</p>
                  <p className="text-sm text-muted mt-1 font-mono text-[11px] print:text-gray-700">CGPA: <span className="text-foreground font-semibold print:text-black text-xs">8.9/10</span></p>
                </div>
                <span className="font-mono text-xs shrink-0 text-muted print:text-gray-500 bg-surface-hover print:bg-transparent px-2 py-1 rounded">2023 – 2027</span>
              </div>
            </section>

            {/* ─── Projects ─── */}
            <section className="mb-8">
              <h2 className="label text-primary mb-4 print:text-blue-700">Key Projects</h2>
              <div className="space-y-4">
                {[
                  { title: 'ANI Marketplace App', tech: 'Flutter, Node.js, PostgreSQL, Razorpay, Stripe', desc: 'Full-stack marketplace app with multi-role user auth, secure payments, and backend-connected product workflows.' },
                  { title: 'AI Sign Language Translator', tech: 'Python, OpenCV, Machine Learning', desc: 'AI-powered gesture recognition system for sign language translation, converting gestures into real-time text output.' },
                  { title: 'ForenAdb Mobile Forensics', tech: 'Python, Flask, SQLite, ADB', desc: 'Desktop forensic platform for Android data extraction via ADB with SHA-256 evidence integrity verification.' },
                  { title: 'Telephone Card Recharge App', tech: 'Flutter, Firebase, Dart', desc: 'Mobile application with full login, transaction handling, and Firebase-backed real-time data management.' },
                ].map((p) => (
                  <div key={p.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <h3 className="text-sm font-bold print:text-black">{p.title}</h3>
                      <span className="text-[10px] text-muted font-mono print:text-gray-500">[{p.tech}]</span>
                    </div>
                    <p className="text-sm text-muted mt-1 print:text-gray-800 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Skills ─── */}
            <section>
              <h2 className="label text-primary mb-4 print:text-blue-700">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Languages', items: 'JavaScript, Python, Dart, SQL, HTML5, CSS3' },
                  { label: 'Frameworks', items: 'React.js, Next.js, Node.js, Express.js, Flutter, Tailwind CSS' },
                  { label: 'Databases & Cloud', items: 'PostgreSQL, MongoDB, Firebase, AWS, Docker, CI/CD' },
                  { label: 'AI & Tools', items: 'Prompt Engineering, LLM Integration, Git, GitHub, REST APIs' },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row gap-1 sm:gap-4 border-b border-border-color/50 print:border-gray-100 pb-2 last:border-0">
                    <span className="font-semibold text-foreground w-40 shrink-0 print:text-black font-heading tracking-wide text-[13px]">{row.label}</span>
                    <span className="text-muted print:text-gray-700">{row.items}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </>
  );
}
