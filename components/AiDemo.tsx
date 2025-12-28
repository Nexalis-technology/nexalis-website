'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Bot, User, Loader2, MessageCircle } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';
import { ChatMessage } from '../types';


const AiDemo: React.FC = () => {
  const { setCursorType } = useCursor();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Nexalis. I am your specialized digital agent. How can I assist you with your next high-performance project?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
          systemInstruction: "You are Nexalis Core, a sophisticated AI representative for Nexalis Digital Agency. Nexalis specializes in elite web development, WhatsApp integration, and AI automation. You are professional, concise, and futuristic. Keep responses under 45 words.",
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
            <span>Nexalis Omnichannel Node</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            AI Agents for <br />
            <span className="text-indigo-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-green-400">WhatsApp & Web.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
            We don&apos;t just build websites; we integrate state-of-the-art intelligence. Experience Nexalis agents that manage complex workflows and engage customers directly on <strong>WhatsApp</strong> with zero latency.
          </p>
          
          <ul className="space-y-4">
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
                Real-time CRM Data Syncing
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f1629] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col relative"
        >
            <div className="bg-[#1a2236] p-4 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MessageCircle className="text-green-500" size={16} />
                    <div className="text-indigo-400 text-[10px] font-mono tracking-tighter uppercase">Nexalis_WhatsApp_v3.0</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
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
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-[#1a2236]/50 border-t border-gray-800">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about our WhatsApp AI solutions..."
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
    </section>
  );
};

export default AiDemo;
