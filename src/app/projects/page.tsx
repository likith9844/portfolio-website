"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Lock, Code2, Sparkles, Server, Smartphone, Globe, Cpu, Blocks, Layers, MonitorSmartphone } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

const projects = [
  {
    id: 1,
    title: 'ANI Marketplace App',
    type: 'client' as const,
    icon: <MonitorSmartphone size={44} strokeWidth={1.5} />,
    summary: 'A full-scale marketplace mobile application developed from scratch for a client. Features include multi-role user authentication, secure payment gateway integration using Razorpay & Stripe, and backend-connected product workflows. The admin dashboard is powered by a robust PostgreSQL database, ensuring seamless real-time transaction handling and order tracking.',
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Razorpay', 'Stripe', 'REST APIs'],
    role: 'Full Stack Developer',
    isPrivate: true,
  },
  {
    id: 2,
    title: 'Telephone Card Recharge App',
    type: 'client' as const,
    icon: <Smartphone size={44} strokeWidth={1.5} />,
    summary: 'A recharge application designed for telephone and RFID card balance management. Implemented the complete frontend and backend workflow, including user login, transaction handling, and balance update operations. Integrated Firebase for real-time data handling, secure authentication, and scalable database management.',
    tech: ['Flutter', 'Firebase', 'Dart', 'State Management'],
    role: 'App Developer',
    isPrivate: true,
  },
  {
    id: 3,
    title: 'ForenAdb Mobile Forensics',
    type: 'academic' as const,
    icon: <Server size={44} strokeWidth={1.5} />,
    summary: 'A desktop forensics platform built for extracting and analyzing Android device data through ADB-based communication. Capable of securely retrieving call logs, SMS, contacts, and app data. Engineered a SHA-256 evidence hashing mechanism for integrity verification and automated comprehensive PDF report generation for forensic analysis.',
    tech: ['Python', 'Flask', 'SQLite', 'ADB', 'ReportLab'],
    role: 'Developer & Researcher',
    isPrivate: false,
    github: 'https://github.com/likith9844/ForenAdb',
  },
  {
    id: 4,
    title: 'AI Sign Language Translator',
    type: 'academic' as const,
    icon: <Cpu size={44} strokeWidth={1.5} />,
    summary: 'An AI-powered sign language translation system that utilizes computer vision and machine learning to recognize hand gestures. Converts recognized gestures into understandable text output in real-time, serving as an accessibility support tool. Developed custom gesture-processing logic and integrated real-time interaction flows.',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'TensorFlow', 'MediaPipe'],
    role: 'ML Developer',
    isPrivate: false,
    github: 'https://github.com/likith9844/SignLanguageTranslator',
  },
  {
    id: 5,
    title: 'Corporate Attendance System',
    type: 'client' as const,
    icon: <Globe size={44} strokeWidth={1.5} />,
    summary: 'A comprehensive attendance management web platform designed for corporate team monitoring. Features a dynamic dashboard and a powerful admin panel for tracking, monitoring, and managing employee attendance records, leave requests, and performance metrics across different organizational teams.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    role: 'Frontend Developer',
    isPrivate: true,
  },
  {
    id: 6,
    title: 'Permission Management Portal',
    type: 'client' as const,
    icon: <Layers size={44} strokeWidth={1.5} />,
    summary: 'A role-based student permission request and approval portal designed for educational institutions. Facilitates a seamless approval workflow between students, Heads of Departments (HOD), and wardens. The entire UI/UX was prototyped in Figma and translated into a highly responsive, accessible web application.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'UI/UX Design'],
    role: 'UI/UX & Frontend Developer',
    isPrivate: true,
  }
];

type FilterType = 'all' | 'client' | 'academic';

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'client', label: 'Client Work' },
  { key: 'academic', label: 'Academic & AI' },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');
  const filteredProjects = projects.filter(p => filter === 'all' || p.type === filter);

  return (
    <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="label">01 — Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mt-4 mb-4">
            My Projects
          </h1>
          <p className="text-muted max-w-2xl">
            A deep dive into my software engineering journey. From scalable full-stack client applications to AI-driven academic research — these projects highlight my ability to architect and build robust solutions.
          </p>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mt-6" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                filter === f.key
                  ? 'bg-primary/10 text-primary border border-primary/25'
                  : 'bg-surface border border-border-color text-muted hover:text-foreground hover:border-primary/15'
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="label hidden sm:flex items-center ml-auto">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div className="card-accent group overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    
                    {/* Visual / Icon Area - Upgraded for Premium Look */}
                    <div className="md:w-[22rem] bg-[#141413] border-b md:border-b-0 md:border-r border-border-color p-8 flex flex-col items-center justify-center shrink-0 relative overflow-hidden h-64 md:h-auto">
                       
                       {/* Animated Glow Background */}
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(224,122,95,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(224,122,95,0.12),transparent_70%)] transition-all duration-700" />
                       <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />
                       
                       {/* Floating 3D-like Icon Container */}
                       <motion.div 
                         className="relative z-10 w-28 h-28 rounded-3xl bg-surface border border-border-color flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_16px_48px_rgba(224,122,95,0.15)] group-hover:border-primary/30 transition-all duration-500"
                         whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                       >
                          {/* Inner glowing ring */}
                          <div className="absolute inset-2 rounded-2xl border border-primary/10 group-hover:border-primary/20 transition-colors duration-500" />
                          <div className="text-muted group-hover:text-primary transition-colors duration-500 drop-shadow-lg">
                            {project.icon}
                          </div>
                       </motion.div>
                       
                       <div className="absolute top-4 left-4 z-20">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                          project.type === 'client'
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'bg-secondary/10 text-secondary border border-secondary/20'
                        }`}>
                          {project.type}
                        </span>
                      </div>
                      
                      {project.isPrivate && (
                        <div className="absolute top-4 right-4 z-20 bg-surface/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1.5 text-[10px] font-medium border border-border-color">
                          <Lock size={10} className="text-accent" />
                          <span className="text-muted uppercase tracking-wider">Private</span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-7 md:p-9 flex flex-col flex-grow">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                      </div>
                      
                      <p className="label mb-5 text-muted/80">{project.role}</p>
                      <p className="text-muted text-sm leading-relaxed mb-8 max-w-3xl flex-grow">
                        {project.summary}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-border-color">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
                            <span key={tech} className="tag">{tech}</span>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="shrink-0">
                          {!project.isPrivate && project.github ? (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors border border-border-color px-4 py-2 rounded-lg bg-surface hover:bg-surface-hover">
                              <GithubIcon size={16} /> View Source
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-xs text-muted/50 font-mono bg-surface-hover px-4 py-2.5 rounded-lg border border-border-color">
                              <Lock size={12} /> CLIENT CONFIDENTIAL
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
