"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Briefcase, GraduationCap, MapPin, Calendar, Wrench, Cpu, BookOpen } from 'lucide-react';

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
const stagger = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };

const skills = [
  { category: "Languages", items: ['JavaScript', 'Python', 'Dart', 'SQL', 'HTML5', 'CSS3'] },
  { category: "Frameworks", items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Flutter', 'MERN Stack'] },
  { category: "Databases", items: ['MongoDB', 'PostgreSQL', 'Firebase', 'SQLite'] },
  { category: "Cloud & DevOps", items: ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub', 'REST APIs', 'VS Code'] },
  { category: "AI & Tools", items: ['Prompt Engineering', 'LLM Integration', 'AI-Assisted Development', 'ChatGPT', 'Cursor AI', 'GitHub Copilot'] },
  { category: "Design", items: ['Figma', 'UI/UX Design', 'Responsive Design', 'Wireframing'] },
];

export default function About() {
  return (
    <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20">
      <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl mx-auto">

        {/* INTRO */}
        <motion.div variants={fade} transition={{ duration: 0.5 }}>
          <span className="label">00 — About</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mt-4 mb-2">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mt-4 mb-10" />
        </motion.div>

        <motion.div variants={fade} transition={{ duration: 0.5 }} className="space-y-5 text-muted leading-relaxed mb-24">
          <p>
            I am a <strong className="text-foreground">Full Stack Developer, App Developer, and AI-powered engineer</strong> with a strong focus on building production-quality software. Currently in my 4th year of Computer Science & Engineering at Alva&apos;s Institute of Engineering and Technology (CGPA: <strong className="text-foreground">8.9/10</strong>), I have accumulated hands-on experience through real client projects, internships, and academic research.
          </p>
          <p>
            My expertise spans the full development lifecycle — from designing user interfaces in Figma to implementing complex backend architectures with <strong className="text-foreground">Node.js, PostgreSQL, and Firebase</strong>. On the frontend, I work extensively with <strong className="text-foreground">React, Next.js, and Tailwind CSS</strong> for web, and <strong className="text-foreground">Flutter & Dart</strong> for cross-platform mobile apps.
          </p>
          <p>
            What sets me apart is my ability to leverage <strong className="text-foreground">AI tools and prompt engineering</strong> to significantly accelerate development. I use AI-assisted coding workflows, integrate LLMs into application pipelines, and craft precise prompts that turn AI into a reliable development partner — making me faster and more productive without sacrificing code quality.
          </p>
          <p>
            I am actively seeking <strong className="text-foreground">software engineering roles, internships, and freelance opportunities</strong> where I can contribute to meaningful technical challenges and deliver real business value.
          </p>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div variants={fade} transition={{ duration: 0.5 }} className="mb-24">
          <span className="label">01 — Experience</span>
          <h2 className="text-3xl font-heading font-bold tracking-tight mt-4 mb-8">Where I&apos;ve Worked</h2>

          <Card>
            <div className="p-7 sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold">Full Stack Developer & App Developer Intern</h3>
                    <p className="text-muted text-sm font-medium">Vithsutra Technologies</p>
                  </div>
                </div>
                <span className="label bg-surface-hover px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-2">
                  <Calendar size={12} /> Dec 2025 – May 2026
                </span>
              </div>
              <ul className="space-y-3 text-muted text-sm leading-relaxed ml-[60px]">
                {[
                  "Developed and shipped client-facing web and mobile applications, contributing to frontend interfaces, backend-connected modules, and complete application workflows from design to deployment.",
                  "Built production features using JavaScript, React, Flutter, and database-backed workflows — implementing user authentication flows, payment integrations, and real-time data handling.",
                  "Worked on API development and integration with PostgreSQL and Firebase, ensuring data consistency and scalable backend architecture.",
                  "Collaborated with the team on testing, debugging, code reviews, and iterative feature development across multiple concurrent client projects.",
                  "Applied AI-assisted development practices using prompt engineering to accelerate feature implementation and code quality.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* EDUCATION */}
        <motion.div variants={fade} transition={{ duration: 0.5 }} className="mb-24">
          <span className="label">02 — Education</span>
          <h2 className="text-3xl font-heading font-bold tracking-tight mt-4 mb-8">Academic Background</h2>

          <Card>
            <div className="p-7 sm:p-9">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold">B.E. in Computer Science & Engineering</h3>
                    <p className="text-muted text-sm font-medium">Alva&apos;s Institute of Engineering and Technology</p>
                  </div>
                </div>
                <span className="label bg-surface-hover px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-2">
                  <Calendar size={12} /> 2023 – 2027
                </span>
              </div>
              <div className="mt-6 ml-[60px] flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div><span className="text-muted">CGPA:</span> <span className="text-primary font-bold text-base">8.9/10</span></div>
                <div className="flex items-center gap-1.5 text-muted"><MapPin size={13} /> Moodbidri, Karnataka</div>
              </div>
              <div className="mt-5 ml-[60px]">
                <p className="text-sm text-muted leading-relaxed">
                  Coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Software Engineering, and Machine Learning fundamentals.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* WHAT I BRING */}
        <motion.div variants={fade} transition={{ duration: 0.5 }} className="mb-24">
          <span className="label">03 — Strengths</span>
          <h2 className="text-3xl font-heading font-bold tracking-tight mt-4 mb-8">What I Bring to the Table</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Cpu size={18} />, title: "AI-First Mindset", desc: "I integrate AI tools into my workflow — from using LLMs to debug complex issues to generating boilerplate code with precise prompts, making me significantly faster than traditional development." },
              { icon: <BookOpen size={18} />, title: "Self-Taught & Adaptive", desc: "Most of my technical skills are self-taught through real projects and documentation. I can pick up new technologies quickly and apply them to solve actual problems." },
              { icon: <Briefcase size={18} />, title: "Client-Ready", desc: "With experience delivering software for paying clients, I understand requirements gathering, iterative feedback, deadlines, and the importance of writing maintainable, well-documented code." },
              { icon: <GraduationCap size={18} />, title: "Strong Foundations", desc: "A solid academic record (8.9 CGPA) combined with practical knowledge of DSA, system design patterns, and software engineering principles." },
            ].map((item) => (
              <Card key={item.title}>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent mb-4">{item.icon}</div>
                  <h3 className="text-base font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div variants={fade} transition={{ duration: 0.5 }}>
          <span className="label">04 — Skills</span>
          <h2 className="text-3xl font-heading font-bold tracking-tight mt-4 mb-8">Technical Toolbox</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((g) => (
              <Card key={g.category}>
                <CardHeader><div className="flex items-center gap-3"><Wrench size={14} className="text-muted" /><h3 className="font-heading font-bold text-sm">{g.category}</h3></div></CardHeader>
                <CardContent><div className="flex flex-wrap gap-2">
                  {g.items.map(s => <span key={s} className="tag">{s}</span>)}
                </div></CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
