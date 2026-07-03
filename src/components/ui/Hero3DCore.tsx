"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function Hero3DCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback abstract 3D structure using pure CSS and Framer Motion
  // This creates an interactive floating "Neural Core" / "Tech Stack" representation
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] flex items-center justify-center perspective-[1000px]"
    >
      <motion.div 
        className="relative w-64 h-64 preserve-3d"
        animate={{
          rotateX: [0, 10, -10, 0],
          rotateY: [0, 360],
        }}
        transition={{
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Core Sphere */}
        <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 blur-sm shadow-[0_0_60px_rgba(224,122,95,0.8)]" />
        
        {/* Orbit Ring 1 */}
        <div className="absolute inset-0 m-auto w-64 h-64 rounded-full border border-primary/30" style={{ transform: 'rotateX(70deg) rotateY(20deg)' }}>
          <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-accent shadow-[0_0_15px_rgba(242,204,143,1)]" />
        </div>
        
        {/* Orbit Ring 2 */}
        <div className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-secondary/30" style={{ transform: 'rotateX(40deg) rotateY(60deg)' }}>
          <div className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(129,178,154,1)]" />
        </div>

        {/* Orbit Ring 3 */}
        <div className="absolute inset-0 m-auto w-56 h-56 rounded-full border border-border-color border-dashed" style={{ transform: 'rotateX(80deg) rotateY(-40deg)' }} />
        
        {/* Floating tech nodes */}
        {/* Core elements */}
        <div className="absolute top-4 right-8 w-14 h-14 bg-surface border border-primary/40 rounded-xl flex items-center justify-center font-mono text-[11px] text-primary backdrop-blur-md shadow-lg" style={{ transform: 'translateZ(90px)' }}>AI</div>
        <div className="absolute bottom-10 left-4 w-16 h-16 bg-surface border border-secondary/40 rounded-xl flex items-center justify-center font-mono text-[12px] font-bold text-secondary backdrop-blur-md shadow-lg" style={{ transform: 'translateZ(-40px)' }}>APP</div>
        <div className="absolute -top-6 left-16 w-16 h-16 bg-surface border border-accent/40 rounded-full flex items-center justify-center font-mono text-[12px] font-bold text-accent backdrop-blur-md shadow-lg" style={{ transform: 'translateZ(70px)' }}>WEB</div>
        
        {/* New additional elements for complexity */}
        <div className="absolute top-1/2 -right-12 w-12 h-12 bg-surface border border-primary/20 rounded-lg flex items-center justify-center font-mono text-[10px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(40px)' }}>LLM</div>
        <div className="absolute -bottom-8 right-16 w-10 h-10 bg-surface border border-secondary/20 rounded-full flex items-center justify-center font-mono text-[9px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(120px)' }}>DB</div>
        <div className="absolute top-20 -left-10 w-14 h-14 bg-surface border border-border-color rounded-xl flex items-center justify-center font-mono text-[10px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(-80px)' }}>API</div>
        <div className="absolute -top-12 right-1/3 w-10 h-10 bg-surface border border-accent/20 rounded-md flex items-center justify-center font-mono text-[9px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(15px)' }}>UX</div>
        <div className="absolute bottom-4 -right-2 w-12 h-12 bg-surface border border-primary/30 rounded-full flex items-center justify-center font-mono text-[10px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(-60px)' }}>CLOUD</div>
        <div className="absolute top-1/3 left-4 w-8 h-8 bg-surface border border-border-color rounded-full flex items-center justify-center font-mono text-[8px] text-muted backdrop-blur-md" style={{ transform: 'translateZ(110px)' }}>ML</div>
        
      </motion.div>
    </div>
  );
}
