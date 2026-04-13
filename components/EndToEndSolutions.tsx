'use client';

import React from 'react';
import { 
  BarChart3, Code2, Smartphone, Layers, Globe, Monitor, ShoppingCart, Cpu, Network, HardDrive, ArrowUpRight 
} from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const EndToEndSolutions: React.FC = () => {
  const { setCursorType } = useCursor();

  const solutions = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Turning vast data streams into actionable business intelligence using predictive modeling.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Software",
      description: "Bespoke digital architecture built from the ground up for unique operational needs.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "High-performance native experiences.",
      colSpan: "col-span-1 lg:col-span-1"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Cross-platform",
      description: "Unified codebases for iOS & Android.",
      colSpan: "col-span-1 lg:col-span-1"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Applications",
      description: "Secure, highly scalable cloud software.",
      colSpan: "col-span-1 lg:col-span-1"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Website Dev",
      description: "Modern, SEO-optimized digital fronts.",
      colSpan: "col-span-1 lg:col-span-1"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Systems",
      description: "Robust platforms for digital commerce, handling millions in transactional volume.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Legacy Migration",
      description: "Modernizing outdated monoliths into scalable microservices.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Architecture Consulting",
      description: "Strategic guidance to future-proof your digital systems.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Secure, reliable cloud deployments utilizing best-in-class DevOps practices.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-lumina-accent uppercase tracking-widest mb-3">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              End-to-End Technology Solutions
            </h3>
            <p className="text-gray-400 text-lg">
              From architectural blueprint to deployed application, our services span the entire digital lifecycle.
            </p>
          </div>
          
          <button 
            onMouseEnter={() => setCursorType('button')}
            onMouseLeave={() => setCursorType('default')}
            className="group flex items-center justify-center gap-2 border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            <span className="font-medium text-sm tracking-wide uppercase">All Technologies</span>
            <ArrowUpRight className="w-4 h-4 text-lumina-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          {solutions.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              className={`group relative overflow-hidden bg-gray-900/30 border border-gray-800 hover:border-gray-600 rounded-3xl p-8 transition-all duration-500 hover:bg-gray-800/40 ${item.colSpan}`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-lumina-accent/0 to-lumina-accent/5 group-hover:to-lumina-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-black/50 border border-gray-800 rounded-xl text-gray-400 group-hover:text-lumina-accent group-hover:border-lumina-accent/30 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-xl font-display font-bold text-white mb-3 group-hover:text-lumina-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndToEndSolutions;
