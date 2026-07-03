import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AIChatbot } from "@/components/ui/AIChatbot";

export const metadata: Metadata = {
  title: "Likith S — Full Stack Developer · App Developer · AI & Prompt Engineer",
  description: "Portfolio of Likith S — Full Stack Developer, App Developer, and AI/Prompt Engineer. Specializing in React, Next.js, Flutter, Node.js, and AI-driven development.",
  keywords: ["Likith S", "Full Stack Developer", "App Developer", "AI Developer", "Prompt Engineer", "React", "Flutter", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
