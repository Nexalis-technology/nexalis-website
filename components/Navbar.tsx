'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

// Custom Nexalis Logo Component
const NexalisLogo = () => (
  <svg width="28" height="28" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 63.5 136.5 V 63.5 L 96.82369979491291 85.34015289959805" stroke="#6366f1" strokeWidth="47" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 136.5 63.5 V 136.5 L 103.17630020508709 114.65984710040195" stroke="#818cf8" strokeWidth="47" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'AI Solutions', href: '#ai-demo' },
  ];

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lumina-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-2 text-2xl font-display font-bold text-white tracking-tighter"
          onMouseEnter={() => setCursorType('button')}
          onMouseLeave={() => setCursorType('default')}
        >
          <NexalisLogo />
          <span>Nexalis</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium relative group"
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lumina-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={handleCTA}
            className="bg-white text-lumina-dark px-6 py-2 rounded-full font-bold hover:bg-lumina-accent hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-lumina-dark border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleCTA}
                className="bg-lumina-accent text-white px-6 py-3 rounded-xl font-bold text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
