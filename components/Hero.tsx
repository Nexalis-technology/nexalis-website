'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code2, BrainCircuit, Smartphone } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const Hero: React.FC = () => {
  const { setCursorType } = useCursor();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-lumina-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="flex justify-center mb-6 space-x-4">
            <span className="flex items-center px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-xs font-medium text-gray-400 uppercase tracking-widest">
              <Code2 className="w-3 h-3 mr-2 text-lumina-accent" /> Digital Systems
            </span>
            <span className="flex items-center px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-xs font-medium text-gray-400 uppercase tracking-widest">
              <BrainCircuit className="w-3 h-3 mr-2 text-lumina-accent" /> AI Agents
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
            onMouseEnter={() => setCursorType('text')}
            onMouseLeave={() => setCursorType('default')}
          >
            Forging the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent to-purple-500">
              Digital Intelligence
            </span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
          >
            Nexalis architects high-performance digital ecosystems and deploys autonomous AI agents that redefine industry standards.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-4 bg-lumina-accent hover:bg-lumina-accentGlow text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full font-semibold transition-all"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Case Studies
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
