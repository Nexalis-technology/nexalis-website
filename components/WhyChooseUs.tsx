'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { CheckCircle2, Zap, Shield, HeartHandshake, Eye } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const reasons = [
    {
      id: '01',
      title: "Proven Expertise",
      description: "Delivering successful custom software solutions across industries. Our track record speaks through the robust systems we've engineered.",
      icon: <CheckCircle2 className="w-12 h-12" />
    },
    {
      id: '02',
      title: "Industry Insight",
      description: "In-depth understanding of business challenges and requirements, allowing us to build solutions that fit your precise market needs.",
      icon: <Eye className="w-12 h-12" />
    },
    {
      id: '03',
      title: "Innovative Solutions",
      description: "Advanced, AI-powered technologies for complex problem-solving. We don't just write code; we deploy digital intelligence.",
      icon: <Zap className="w-12 h-12" />
    },
    {
      id: '04',
      title: "Comprehensive Support",
      description: "Ongoing maintenance and support for sustained success. We stand by our infrastructure long after deployment.",
      icon: <Shield className="w-12 h-12" />
    },
    {
      id: '05',
      title: "Client-Centric",
      description: "Tailored software solutions designed to meet your specific needs. Your vision drives our architectural decisions.",
      icon: <HeartHandshake className="w-12 h-12" />
    }
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let step = Math.floor(latest * reasons.length);
    if (step >= reasons.length) {
      step = reasons.length - 1;
    }
    if (latest <= 0) step = 0;
    
    if (step !== activeIndex) {
      setActiveIndex(step);
    }
  });

  const scrollToSection = (index: number) => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const scrollDistance = sectionRef.current.offsetHeight - window.innerHeight;
      const targetRatio = (index + 0.5) / reasons.length;
      window.scrollTo({
        top: sectionTop + (scrollDistance * targetRatio),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} id="why-choose-us" className="bg-lumina-dark relative h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-sm font-bold text-lumina-accent uppercase tracking-widest mb-3">Our Value</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white">Why Nexalis?</h3>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Vertical Navigation */}
            <div className="w-full lg:w-1/3 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800" />
              
              <div className="space-y-6">
                {reasons.map((reason, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <div 
                      key={reason.id}
                      className="relative flex items-center group cursor-pointer"
                      onClick={() => scrollToSection(index)}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 border-2 ${isActive ? 'bg-lumina-accent border-lumina-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]' : 'bg-lumina-dark border-gray-700 text-gray-500 group-hover:border-lumina-accent/50 group-hover:text-gray-300'}`}>
                        <span className="font-display font-bold text-sm">{reason.id}</span>
                      </div>
                      <div className="ml-8 overflow-hidden">
                        <h4 className={`font-display text-xl transition-colors duration-500 ${isActive ? 'text-white font-bold' : 'text-gray-500 group-hover:text-gray-300'}`}>
                          {reason.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Display */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-10 lg:p-16 min-h-[400px] relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lumina-accent to-transparent" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <div className="text-lumina-accent mb-8 opacity-80">
                      {reasons[activeIndex].icon}
                    </div>
                    <h4 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                      {reasons[activeIndex].title}
                    </h4>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                      {reasons[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Background accent */}
                <div className="absolute right-0 bottom-0 text-[180px] md:text-[200px] text-gray-800/20 font-display font-bold leading-none select-none pointer-events-none transform translate-x-1/4 translate-y-1/4">
                  {reasons[activeIndex].id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
