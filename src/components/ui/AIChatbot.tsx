"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';

type Message = { id: string; text: string; sender: 'user' | 'bot'; isTyping?: boolean };

const initialMessage = "Hi! I'm Likith's AI Assistant. You can ask me about his skills, projects, experience, or how to contact him. How can I help you today?";

// Enhanced Rule-Based AI Engine
function generateResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Regex patterns for better matching efficiency and coverage
  const match = (pattern: RegExp) => pattern.test(lowerInput);

  if (match(/skill|tech|stack|know|language|framework|tool/)) {
    return "Likith's expertise spans the full stack. He builds frontends with React, Next.js, and Tailwind CSS. For mobile, he uses Flutter and Dart. His backends are powered by Node.js, Express, and PostgreSQL/MongoDB. He also heavily utilizes AI (LLMs & Prompt Engineering) to accelerate development.";
  }
  if (match(/project|portfolio|work|built|made|app/)) {
    return "Likith has engineered several production-grade applications. Highlights include the 'ANI Marketplace App' (a scalable Flutter/PostgreSQL platform with payment gateways), 'ForenAdb Mobile Forensics' (a Python desktop tool for data extraction), and an 'AI Sign Language Translator'. Check out the Projects page for full details!";
  }
  if (match(/experience|intern|job|work|role/)) {
    return "He gained professional experience as a Full Stack & App Developer Intern at Vithsutra Technologies (Dec 2025 - May 2026). There, he independently built and shipped production client applications using Flutter, React, and PostgreSQL, significantly improving his ability to write scalable, production-ready code.";
  }
  if (match(/contact|email|hire|reach|phone|call/)) {
    return "You can reach Likith directly at likith.s.9844@gmail.com, or give him a call at +91-9844844956. He is currently seeking full-time software engineering roles and freelance opportunities. Feel free to use the Contact page form as well!";
  }
  if (match(/education|cgpa|study|college|degree|university/)) {
    return "Likith is pursuing his B.E. in Computer Science & Engineering at Alva's Institute of Engineering and Technology (2023-2027). He maintains an excellent academic record with an 8.9/10 CGPA.";
  }
  if (match(/resume|cv|download/)) {
    return "You can view and download his completely printable, web-optimized resume by clicking the 'Resume' link in the top navigation bar.";
  }
  if (match(/ai|prompt|llm|gpt/)) {
    return "Likith doesn't just write code—he leverages AI to write it faster and better. As an AI & Prompt Engineer, he uses advanced LLMs to debug complex issues, design system architectures, and automate repetitive tasks, making him an incredibly efficient developer.";
  }
  if (match(/^hi$|^hello$|^hey$|^greetings$/)) {
    return "Hello there! I'm Likith's AI Assistant. How can I help you learn more about his background, skills, or projects today?";
  }
  if (match(/who are you|what are you|bot/)) {
    return "I am a custom AI assistant built directly into Likith's portfolio. I'm here to provide you with instant information about his qualifications, experience, and contact details!";
  }
  
  return "That's an interesting question! I am specifically trained on Likith's professional portfolio. Try asking me about his 'skills', 'experience', 'projects', 'education', or how to 'contact' him.";
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: initialMessage, sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    
    // Add typing indicator
    const typingId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: typingId, text: '', sender: 'bot', isTyping: true }]);

    // Simulate AI response delay
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      setMessages(prev => 
        prev.map(msg => msg.id === typingId ? { ...msg, text: responseText, isTyping: false } : msg)
      );
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] h-[480px] bg-surface border border-border-color rounded-2xl shadow-2xl flex flex-col overflow-hidden glass"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-color bg-surface-hover/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">Portfolio AI Bot</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[10px] text-muted font-mono">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
              >
                <Minimize2 size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-background rounded-br-sm' 
                      : 'bg-surface-hover border border-border-color text-foreground rounded-bl-sm'
                  }`}>
                    {msg.isTyping ? (
                      <div className="flex gap-1 items-center h-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    ) : (
                      <p className="leading-relaxed">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-border-color bg-surface-hover/30">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my skills, projects..."
                  className="flex-1 bg-surface border border-border-color rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted/50"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-xl bg-primary text-background flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(224,122,95,0.3)] transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-surface-hover border border-border-color text-muted' : 'bg-primary text-background'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

    </div>
  );
}
