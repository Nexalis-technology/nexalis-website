'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CTO",
      company: "Novus FinTech",
      content: "Nexalis transformed our legacy infrastructure into a modern, scalable cloud solution. The AI agent integration reduced our support overhead by 60%.",
      avatar: "https://picsum.photos/100/100?random=10"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Founder",
      company: "Orbit Retail",
      content: "The level of detail in the Nexalis UI/UX design was exceptional. They didn't just build an app; they crafted an elite brand experience.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Lead",
      company: "HealthCore",
      content: "Professional, timely, and incredibly technically proficient. Nexalis saved us months of R&D by architecting our AI roadmap early.",
      avatar: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section className="py-24 bg-lumina-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Partnered with Visionaries</h2>
          <p className="text-gray-500">Delivering excellence across the global tech landscape.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 relative group hover:border-indigo-500/50 transition-colors"
            >
              <Quote className="text-lumina-accent mb-6 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-gray-300 mb-8 leading-relaxed italic">&quot;{t.content}&quot;</p>
              
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-lumina-accent" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-xs tracking-wide">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
