"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // NOTE: To receive emails, get your free access key from https://web3forms.com
  // and paste it below.
  const WEB3FORMS_ACCESS_KEY = "7f28e896-610b-43c8-a48c-dfc471802f7f";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      // Fallback
      const mailtoLink = `mailto:likith.s.9844@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-surface border border-border-color rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300 placeholder:text-muted/40 text-sm font-sans";

  return (
    <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label inline-block mb-4">02 — Contact</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            I am currently exploring full-time roles, internships, and freelance projects in Software Development, App Development, and AI Engineering. If you have an opportunity or just want to chat, drop me a message.
          </p>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent mt-6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <h3 className="label mb-2">Reach me at</h3>

            {[
              { icon: <Mail size={16} />, label: 'Email', value: 'likith.s.9844@gmail.com', href: 'mailto:likith.s.9844@gmail.com', color: 'primary' },
              { icon: <Phone size={16} />, label: 'Phone', value: '+91-9844844956', href: 'tel:+919844844956', color: 'secondary' },
              { icon: <MapPin size={16} />, label: 'Location', value: 'Bangalore, Karnataka', href: null, color: 'accent' },
            ].map((item) => (
              <div key={item.label} className="card-accent p-5 group flex items-center gap-5">
                <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 text-${item.color} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="label text-[10px] mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <h3 className="label mt-6 mb-2">Profiles</h3>
            <div className="flex gap-3">
              <a href="https://github.com/likith9844" target="_blank" rel="noopener noreferrer"
                 className="flex-1 card flex items-center justify-center gap-2.5 px-4 py-4 text-muted hover:text-primary hover:border-primary/20 transition-all duration-300 text-sm font-medium group">
                <GithubIcon size={16} /> <span className="font-mono text-xs">likith9844</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/likith-s-2004/" target="_blank" rel="noopener noreferrer"
                 className="flex-1 card flex items-center justify-center gap-2.5 px-4 py-4 text-muted hover:text-primary hover:border-primary/20 transition-all duration-300 text-sm font-medium group">
                <LinkedinIcon size={16} /> <span className="font-mono text-xs">likith-s-2004</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <Card className="h-full">
              <div className="p-7 sm:p-10 h-full flex flex-col">
                <h2 className="text-2xl font-heading font-bold mb-8">Send a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-grow flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-success/10 text-success flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">Message Sent!</h3>
                    <p className="text-muted max-w-sm mb-8">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="label text-[10px]">Full Name *</label>
                        <input type="text" id="name" required value={formData.name} onChange={handleChange}
                          className={inputClasses} placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="label text-[10px]">Email Address *</label>
                        <input type="email" id="email" required value={formData.email} onChange={handleChange}
                          className={inputClasses} placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="label text-[10px]">Subject *</label>
                      <input type="text" id="subject" required value={formData.subject} onChange={handleChange}
                        className={inputClasses} placeholder="Job Opportunity / Freelance Project / Collab" />
                    </div>
                    <div className="flex flex-col gap-2 flex-grow">
                      <label htmlFor="message" className="label text-[10px]">Message *</label>
                      <textarea id="message" required rows={5} value={formData.message} onChange={handleChange}
                        className={`${inputClasses} resize-none flex-grow`}
                        placeholder="Tell me about your project, team, or opportunity..." />
                    </div>
                    <Button type="submit" size="lg" className="w-full mt-2" isLoading={isSubmitting}>
                      {!isSubmitting && <><Send size={16} /> Submit Message</>}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
