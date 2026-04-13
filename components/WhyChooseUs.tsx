'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Check, TrendingUp, BrainCircuit, Layers, Target, Rocket, Zap, HeartHandshake,
  Bot, MessageSquare, Phone, Cpu, PenTool, Globe, Smartphone, Server,
  Settings, DollarSign, Users, RefreshCw, LineChart, MessageCircle, Clock, Infinity as InfinityIcon
} from 'lucide-react';

const Card01 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2">
      We don't just build software — we deliver measurable business outcomes. Every solution we create is engineered for performance, reliability, and growth.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      <div className="flex flex-col gap-3">
        {['AI-powered platforms built to perform at scale', 'High-availability web & mobile applications', 'Measurable outcomes, not vanity metrics', 'End-to-end ownership of every delivery'].map((text, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lumina-accent/20 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-lumina-accent" />
            </span>
            {text}
          </div>
        ))}
      </div>
      <div className="bg-[#111830] border border-[#1e2850] rounded-2xl p-5">
        <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">Our delivery promise</div>
        <div className="flex flex-col">
          {[
            { num: '1', title: 'Scoped clearly', sub: 'Fixed timelines, no scope creep' },
            { num: '2', title: 'Built right', sub: 'Clean architecture, tested thoroughly' },
            { num: '3', title: 'Shipped on time', sub: 'Agile sprints, consistent delivery' },
            { num: '4', title: 'Supported long-term', sub: 'We stay after launch' },
          ].map((step, i) => (
            <div key={i} className={`flex items-start gap-3 py-2.5 ${i !== 3 ? 'border-b border-[#1a2244]' : ''}`}>
              <div className="w-6 h-6 rounded-full bg-lumina-accent flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">{step.num}</div>
              <div>
                <div className="text-[13px] font-semibold text-gray-200 leading-tight">{step.title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Card02 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2">
      AI isn't a feature we bolt on — it's the foundation. We build systems that think, learn, and scale with your business at every layer.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      <div className="flex flex-col gap-3">
        {[
          { icon: <Cpu className="w-5 h-5" />, title: 'Custom LLMs', sub: 'Models trained on your domain & business data' },
          { icon: <Bot className="w-5 h-5" />, title: 'AI Chatbots & Agents', sub: 'Intelligent assistants handling real queries' },
          { icon: <MessageSquare className="w-5 h-5" />, title: 'WhatsApp AI', sub: 'Automate replies, lead capture & support' },
          { icon: <Phone className="w-5 h-5" />, title: 'AI Voice & Call Systems', sub: 'Conversational voice AI for sales' }
        ].map((pill, i) => (
          <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-3 flex items-center gap-3 hover:border-lumina-accent transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lumina-accent/10 border border-lumina-accent/20 flex items-center justify-center text-lumina-accent flex-shrink-0">
              {pill.icon}
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-200 mb-0.5">{pill.title}</div>
              <div className="text-[11px] text-gray-500 leading-tight">{pill.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#111830] border border-[#1e2850] rounded-2xl p-5 h-full">
        <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">How it works</div>
        <div className="flex flex-col">
          {[
            { num: '1', title: 'Understand your business', sub: 'Map workflows, data, and goals' },
            { num: '2', title: 'Design the AI layer', sub: 'Custom models & integration architecture' },
            { num: '3', title: 'Build & integrate', sub: 'Wired seamlessly into existing systems' },
            { num: '4', title: 'Launch & improve', sub: 'Continuous learning as data grows' },
          ].map((step, i) => (
            <div key={i} className={`flex items-start gap-3 py-2.5 ${i !== 3 ? 'border-b border-[#1a2244]' : ''}`}>
              <div className="w-6 h-6 rounded-full bg-lumina-accent flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">{step.num}</div>
              <div>
                <div className="text-[13px] font-semibold text-gray-200 leading-tight">{step.title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Card03 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2">
      From idea to deployment, we handle everything. You don't need multiple vendors — Nexalis is your single tech partner for the entire product lifecycle.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: <PenTool className="w-5 h-5 text-purple-400" />, bg: 'bg-purple-500/10', title: 'UI/UX Design', sub: 'Interfaces that convert' },
          { icon: <Globe className="w-5 h-5 text-blue-400" />, bg: 'bg-blue-500/10', title: 'Web Platforms', sub: 'Fast, scalable websites' },
          { icon: <Smartphone className="w-5 h-5 text-emerald-400" />, bg: 'bg-emerald-500/10', title: 'iOS & Android', sub: 'Native mobile apps' },
          { icon: <Server className="w-5 h-5 text-teal-400" />, bg: 'bg-teal-500/10', title: 'Backend & AI', sub: 'APIs & pipelines' }
        ].map((tile, i) => (
          <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-4">
            <div className={`w-8 h-8 rounded-lg ${tile.bg} flex items-center justify-center mb-3`}>
              {tile.icon}
            </div>
            <div className="text-[14px] font-bold text-white mb-1">{tile.title}</div>
            <div className="text-[11px] text-gray-500 leading-tight">{tile.sub}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#111830] border border-[#1e2850] rounded-2xl p-5 h-full">
        <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">Why one partner matters</div>
        <div className="flex flex-col">
          {[
            { title: 'No handoff delays', sub: 'Design & dev in one team' },
            { title: 'Consistent vision', sub: 'One team owns your product' },
            { title: 'Faster delivery', sub: 'No vendor coordination overhead' },
            { title: 'Single accountability', sub: 'We own the outcome' },
          ].map((step, i) => (
            <div key={i} className={`flex items-start gap-3 py-2.5 ${i !== 3 ? 'border-b border-[#1a2244]' : ''}`}>
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"><Check className="w-3 h-3" /></div>
              <div>
                <div className="text-[13px] font-semibold text-gray-200 leading-tight">{step.title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Card04 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      Every feature we build has a purpose. We focus on solving real problems — eliminating waste, engaging customers, and turning your tech investment into measurable growth.
    </p>
    <div className="grid grid-cols-2 gap-4">
      {[
        { icon: <Settings className="w-5 h-5 text-emerald-400" />, bg: 'bg-emerald-500/10', title: 'Automation', metric: '↑', mcolor: 'text-emerald-400', sub: 'Eliminate repetitive manual work with intelligent workflows' },
        { icon: <DollarSign className="w-5 h-5 text-lumina-accent" />, bg: 'bg-lumina-accent/10', title: 'Costs', metric: '↓', mcolor: 'text-lumina-accent', sub: 'Reduce operational overhead with smarter systems' },
        { icon: <Users className="w-5 h-5 text-lumina-accent" />, bg: 'bg-lumina-accent/10', title: 'Engagement', metric: '↑', mcolor: 'text-emerald-400', sub: 'AI-personalised customer experiences that retain users' },
        { icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, bg: 'bg-emerald-500/10', title: 'Revenue', metric: '↑', mcolor: 'text-emerald-400', sub: 'Features engineered to drive growth, not just traffic' }
      ].map((tile, i) => (
        <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-5">
          <div className={`w-10 h-10 rounded-lg ${tile.bg} flex items-center justify-center mb-3`}>
            {tile.icon}
          </div>
          <div className="text-[16px] font-bold text-white mb-1 flex items-center gap-2">
            {tile.title} <span className={tile.mcolor}>{tile.metric}</span>
          </div>
          <div className="text-[12px] text-gray-500 leading-relaxed">{tile.sub}</div>
        </div>
      ))}
    </div>
  </div>
);

const Card05 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-2">
      Our solutions are designed to grow with you. Whether you're a startup or a scaling enterprise, we build systems that handle high traffic, future expansion, and evolving AI capabilities.
    </p>
    <div className="grid grid-cols-3 gap-4 mb-2">
      {[
        { val: '∞', label: 'Scales without a rebuild' },
        { val: 'AI+', label: 'Ready for next-gen models' },
        { val: '99%', label: 'Uptime-first architecture' }
      ].map((stat, i) => (
        <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-4 text-center">
          <div className="text-2xl font-black text-lumina-accent mb-1">{stat.val}</div>
          <div className="text-[10px] text-gray-400 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      <div className="flex flex-col gap-3">
        {['Architected for high traffic & rapid user growth', 'Built to plug in new AI capabilities as they emerge', 'Startup-ready to enterprise-grade, seamlessly', 'Cloud-native infrastructure, not legacy stacks'].map((text, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lumina-accent/20 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-lumina-accent" />
            </span>
            {text}
          </div>
        ))}
      </div>
      <div className="bg-[#111830] border border-[#1e2850] rounded-2xl p-5">
        <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-4">Scale path</div>
        <div className="flex flex-col">
          {[
            { num: 'MVP', title: 'Launch fast', sub: 'Core product, lean and production-ready' },
            { num: 'v2', title: 'Add AI & automation', sub: 'Plug in intelligence as you grow' },
            { num: '∞', title: 'Scale globally', sub: 'Architecture holds under enterprise load' },
          ].map((step, i) => (
            <div key={i} className={`flex items-start gap-4 py-2.5 ${i !== 2 ? 'border-b border-[#1a2244]' : ''}`}>
              <div className="font-black text-lumina-accent text-sm w-8 pt-0.5">{step.num}</div>
              <div>
                <div className="text-[13px] font-semibold text-gray-200 leading-tight">{step.title}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Card06 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      We move fast without compromising quality. Our agile approach means you see progress early, get updates often, and always know exactly where your project stands.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { icon: <Zap className="w-5 h-5 text-lumina-accent" />, title: 'Faster delivery', desc: 'Iterative sprints with working software shipped every 2 weeks' },
        { icon: <RefreshCw className="w-5 h-5 text-lumina-accent" />, title: 'Continuous improvement', desc: 'Post-launch updates, optimisations, and feature rollouts' },
        { icon: <LineChart className="w-5 h-5 text-lumina-accent" />, title: 'Full transparency', desc: 'Live dashboards, weekly updates, no black-box development' }
      ].map((card, i) => (
        <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-5 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-lumina-accent/10 flex items-center justify-center">{card.icon}</div>
          <div className="text-[14px] font-bold text-gray-200">{card.title}</div>
          <div className="text-[12px] text-gray-500 leading-relaxed">{card.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const Card07 = () => (
  <div className="flex flex-col gap-6">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
      Your vision drives everything we do. We work as your partner — not just a vendor — understanding your goals deeply and turning them into powerful digital products that last.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: <Users className="w-5 h-5 text-lumina-accent" />, title: 'Dedicated team', desc: 'A focused team aligned to your goals, not juggling 20 projects at once' },
        { icon: <MessageCircle className="w-5 h-5 text-lumina-accent" />, title: 'Honest communication', desc: 'Proactive updates, no surprises, straight talk when things need adjusting' },
        { icon: <Clock className="w-5 h-5 text-lumina-accent" />, title: 'On-time delivery', desc: 'We set realistic timelines and hit them — no excuses, no delays' },
        { icon: <InfinityIcon className="w-5 h-5 text-lumina-accent" />, title: 'Long-term partnership', desc: 'We stay after launch — supporting, evolving, and growing with you' }
      ].map((card, i) => (
        <div key={i} className="bg-[#111830] border border-[#1e2850] rounded-xl p-5 flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-lumina-accent/10 flex items-center justify-center">{card.icon}</div>
          <div className="text-[14px] font-bold text-gray-200">{card.title}</div>
          <div className="text-[12px] text-gray-500 leading-relaxed">{card.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const reasons = [
  { id: '01', title: "Proven Execution, Not Just Promises", tag: "Track Record", icon: <TrendingUp className="w-3 h-3" />, content: <Card01 /> },
  { id: '02', title: "Deep AI & LLM Expertise", tag: "AI Core", icon: <BrainCircuit className="w-3 h-3" />, content: <Card02 /> },
  { id: '03', title: "End-to-End Development", tag: "Single Partner", icon: <Layers className="w-3 h-3" />, content: <Card03 /> },
  { id: '04', title: "Built for Business Impact", tag: "ROI Focused", icon: <Target className="w-3 h-3" />, content: <Card04 /> },
  { id: '05', title: "Scalable & Future-Ready Systems", tag: "Future-Proof", icon: <Rocket className="w-3 h-3" />, content: <Card05 /> },
  { id: '06', title: "Fast, Agile & Reliable", tag: "Agile Delivery", icon: <Zap className="w-3 h-3" />, content: <Card06 /> },
  { id: '07', title: "Client-Centric Approach", tag: "Your Success First", icon: <HeartHandshake className="w-3 h-3" />, content: <Card07 /> }
];

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="why-choose-us" className="bg-lumina-dark relative h-[600vh]">
      <div className="container mx-auto px-6 pt-14 sm:pt-16 lg:pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-sm font-bold text-lumina-accent uppercase tracking-widest mb-3">Our Value</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white">Why Nexalis?</h3>
        </motion.div>
      </div>

      <div className="sticky top-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start pb-8 lg:pb-10">
            {/* Vertical Navigation */}
            <div className="w-full lg:w-1/3 relative hidden lg:block">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800" />
              
              <div className="space-y-5 py-4">
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
                      <div className="ml-6 overflow-hidden">
                        <h4 className={`font-display text-lg tracking-tight transition-colors duration-500 line-clamp-1 ${isActive ? 'text-white font-bold' : 'text-gray-500 group-hover:text-gray-300'}`}>
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
              <div className="bg-[#0d1228] border border-[#1a2244] rounded-3xl p-6 md:p-8 lg:p-12 h-[850px] md:h-[750px] lg:h-[750px] xl:h-[650px] relative overflow-hidden flex flex-col justify-start">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lumina-accent via-purple-400 to-transparent" />
                
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full"
                  >
                    <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-lumina-accent bg-lumina-accent/10 border border-lumina-accent/20 rounded-full px-3.5 py-1.5 mb-5">
                      {reasons[activeIndex].icon}
                      {reasons[activeIndex].tag}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-display font-black text-white mb-6 leading-tight">
                      {reasons[activeIndex].title}
                    </h4>
                    
                    <div className="w-full">
                      {reasons[activeIndex].content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Background accent */}
                <div className="absolute right-6 -top-4 text-[120px] md:text-[180px] text-white/[0.02] font-display font-black leading-none select-none pointer-events-none">
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
