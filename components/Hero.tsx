'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code2, BrainCircuit } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';
import InteractiveGlobe from './ui/InteractiveGlobe';

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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Interactive Globe */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-[60vh] absolute bottom-0 lg:bottom-auto lg:-right-[10%] lg:top-1/2 lg:-translate-y-1/2 lg:w-[65%] lg:h-[120vh]">
          <InteractiveGlobe />
        </div>
      </div>

      {/* Decorative Gradients for blending and text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 w-full pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl pointer-events-auto"
        >
          <motion.div variants={item} className="flex justify-start mb-8 space-x-4">
            <span className="flex items-center px-4 py-2 rounded-full border border-gray-700/50 bg-black/40 backdrop-blur-md text-xs font-bold text-gray-300 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <Code2 className="w-4 h-4 mr-2 text-lumina-accent" /> Digital Systems
            </span>
            <span className="flex items-center px-4 py-2 rounded-full border border-gray-700/50 bg-black/40 backdrop-blur-md text-xs font-bold text-gray-300 uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <BrainCircuit className="w-4 h-4 mr-2 text-lumina-accent" /> AI Agents
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold mb-6 leading-[1.1] text-white"
            onMouseEnter={() => setCursorType('text')}
            onMouseLeave={() => setCursorType('default')}
          >
            Forging the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lumina-accent via-purple-400 to-indigo-300 drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Digital Intelligence
            </span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed drop-shadow-md"
          >
            Nexalis architects high-performance digital ecosystems and deploys autonomous AI agents that redefine industry standards.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row justify-start gap-5">
            <button 
              className="px-8 py-4 bg-lumina-accent hover:bg-indigo-500 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="px-8 py-4 bg-black/30 backdrop-blur-md border border-gray-600 hover:border-white text-white rounded-full font-bold transition-all hover:bg-white/5 hover:-translate-y-1"
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
        className="absolute bottom-10 left-6 md:left-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-lumina-accent via-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
