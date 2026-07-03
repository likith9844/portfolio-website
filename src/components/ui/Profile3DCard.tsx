"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function Profile3DCard() {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse values
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to 3D rotation (tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // Map mouse position to glare effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized mouse position from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1200px] w-full h-full flex items-center justify-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-full h-full rounded-2xl preserve-3d cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
      >
        {/* Glow behind the card - Reduced intensity */}
        <div className="absolute -inset-2 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

        {/* Card Body */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border-color bg-surface z-10 preserve-3d">
          
          <img 
            src="/profile.jpg" 
            alt="Likith S"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
        </div>

        {/* Floating 3D Elements on top of the card */}
        <div 
          className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-border-color px-4 py-2 rounded-xl text-xs font-mono font-bold text-primary shadow-xl pointer-events-none z-40"
          style={{ transform: "translateZ(80px)" }}
        >
          &lt;Likith.Dev /&gt;
        </div>
        
        <div 
          className="absolute -top-4 -right-4 w-12 h-12 bg-accent/10 backdrop-blur-md border border-accent/30 rounded-full flex items-center justify-center pointer-events-none z-40 shadow-[0_0_20px_rgba(242,204,143,0.3)]"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
        </div>
        
      </motion.div>
    </div>
  );
}
