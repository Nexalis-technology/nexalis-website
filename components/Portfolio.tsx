'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const { setCursorType, setCursorText } = useCursor();

  const projects: Project[] = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      id: 2,
      title: "HealthAI Assistant",
      category: "AI Integration",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      id: 3,
      title: "Urban E-Commerce",
      category: "Mobile App",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      id: 4,
      title: "Crypto Exchange",
      category: "Blockchain",
      image: "https://picsum.photos/800/600?random=4"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Selected Work</h2>
            <p className="text-gray-500 text-lg">Where innovation meets execution.</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lumina-accent hover:text-white transition-colors mt-6 md:mt-0 font-medium"
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
          >
            View all projects &rarr;
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-none"
              onMouseEnter={() => {
                setCursorType('hover');
                setCursorText('CASE STUDY');
              }}
              onMouseLeave={() => {
                setCursorType('default');
                setCursorText('');
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-lumina-accent text-sm font-bold tracking-widest uppercase mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
