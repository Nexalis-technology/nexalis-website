'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Bot, User, Loader2, MessageCircle, PhoneCall, ChevronsDown, FileText, CirclePlus, ArrowRight } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';
import { ChatMessage } from '../types';


const AiDemo: React.FC = () => {
  const { setCursorType } = useCursor();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Nexalis. I can help with WhatsApp, web, and AI voice assistant solutions. What would you like to automate first?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const voiceFeatures = [
    {
      title: 'Answers every call',
      description: 'Zero hold time, zero missed leads, 24/7 coverage.',
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      title: 'Qualifies leads',
      description: 'Books appointments and routes hot leads instantly.',
      icon: <ChevronsDown className="w-5 h-5" />,
    },
    {
      title: 'Full call summaries',
      description: 'Every conversation is logged and actionable.',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: 'CRM & WhatsApp ready',
      description: 'Integrates with your existing sales stack seamlessly.',
      icon: <CirclePlus className="w-5 h-5" />,
    },
  ];

  const waveformHeights = [18, 34, 46, 30, 40, 22, 28, 44, 36, 26, 20, 42, 48, 32, 38, 24];

  const scrollToBottom = () => {
    if (!messagesContainerRef.current) return;
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
          config: {
            systemInstruction: "You are Nexalis Core, a sophisticated AI representative for Nexalis Digital Agency. Nexalis specializes in elite web development, WhatsApp integration, AI voice assistants, and automation. You are professional, concise, and futuristic. Keep responses under 45 words.",
          }
      });

      const responseText = response.text || "Nexalis Core is currently processing. Please standby.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Nexalis Core communication error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Signal interrupted. Nexalis systems are recalibrating.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-demo" className="py-24 bg-gradient-to-b from-lumina-dark to-[#0a0f1e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>Nexalis Omnichannel AI Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            AI Agents for <br />
            <span className="text-indigo-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400">WhatsApp, Web & Voice.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            We build AI systems that answer calls, qualify leads, and engage customers across channels. Experience Nexalis agents on <strong>Voice</strong>, <strong>WhatsApp</strong>, and web with instant responses and actionable follow-ups.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                AI Voice Assistant for Inbound Calls (24/7)
            </li>
            <li className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                WhatsApp Business API Integration
            </li>
            <li className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                24/7 Autonomous AI Support Agents
            </li>
            <li className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                Call Summaries + Real-time CRM Syncing
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f1629] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col relative"
          onClick={() => setIsChatActive(true)}
          onMouseLeave={() => setIsChatActive(false)}
        >
            <div className="bg-[#1a2236] p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MessageCircle className="text-green-500" size={16} />
                    <div className="text-indigo-400 text-[10px] font-mono tracking-tighter uppercase">Nexalis_Omnichannel_v4.0</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>

            <div
              ref={messagesContainerRef}
              className={`flex-1 p-6 space-y-4 custom-scrollbar ${isChatActive ? 'overflow-y-auto overscroll-contain' : 'overflow-y-hidden pointer-events-none'}`}
              style={{ overflowAnchor: 'none' }}
            >
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-start max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-600 ml-3' : 'bg-gray-700 mr-3'}`}>
                                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                            </div>
                            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-indigo-600 text-white rounded-tr-none' 
                                : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                            } ${msg.isError ? 'border-red-500/50 bg-red-900/10 text-red-200' : ''}`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="flex items-start max-w-[85%]">
                            <div className="w-8 h-8 rounded-full bg-gray-700 mr-3 flex items-center justify-center">
                                <Bot size={14} />
                            </div>
                            <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-700">
                                <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-[#1a2236]/50 border-t border-gray-800">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about our voice, WhatsApp, or web AI solutions..."
                        className="w-full bg-[#030712] border border-gray-800 rounded-full py-3 px-5 pr-12 text-gray-200 focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-600"
                        onMouseEnter={() => setCursorType('text')}
                        onMouseLeave={() => setCursorType('default')}
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-colors disabled:opacity-50"
                        onMouseEnter={() => setCursorType('button')}
                        onMouseLeave={() => setCursorType('default')}
                    >
                        <Send size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-indigo-500/25 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.15),_rgba(2,6,23,0.95)_45%)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(129,140,248,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(129,140,248,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
              <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-semibold tracking-[0.18em] uppercase">
                <span className="inline-block h-[2px] w-8 bg-emerald-300" />
                Introducing
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                New Launch
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">AI Voice Assistant</h3>
            <p className="max-w-4xl text-gray-300 text-lg leading-relaxed mb-10">
              Never miss a call. Never lose a lead. Our AI answers, qualifies, and follows up 24/7 in your brand&apos;s voice.
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <div className="flex items-end gap-2 h-16">
                {waveformHeights.map((height, index) => (
                  <motion.span
                    key={index}
                    className="w-2 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-300"
                    initial={{ height }}
                    whileInView={{ height: [Math.max(14, height - 10), height + 8, Math.max(14, height - 6)] }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.4, delay: index * 0.04, repeat: Infinity, repeatType: 'mirror' }}
                  />
                ))}
              </div>

              <div className="inline-flex w-fit items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.12)]">
                Live AI call
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {voiceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-indigo-400/20 bg-[#0c1330]/80 p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-400/25 text-indigo-300 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-indigo-500/20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <p className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Get a Free Demo</p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={() => setCursorType('button')}
                  onMouseLeave={() => setCursorType('default')}
                  className="inline-flex items-center gap-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 px-6 py-4 text-white text-base font-bold transition-all shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                >
                  Book Voice AI Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
                <div>
                  <div className="text-white text-3xl sm:text-4xl font-black leading-none">24/7</div>
                  <div className="text-gray-400 text-sm sm:text-base mt-2">Always on</div>
                </div>
                <div>
                  <div className="text-white text-3xl sm:text-4xl font-black leading-none">0s</div>
                  <div className="text-gray-400 text-sm sm:text-base mt-2">Response time</div>
                </div>
                <div>
                  <div className="text-white text-3xl sm:text-4xl font-black leading-none">100%</div>
                  <div className="text-gray-400 text-sm sm:text-base mt-2">Calls answered</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiDemo;
