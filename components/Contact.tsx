'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, MapPin, X } from 'lucide-react';
import { useCursor } from '../contexts/CursorContext';

const Contact: React.FC = () => {
  const { setCursorType } = useCursor();
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold text-white mb-8">Let&apos;s Build the<br />Future Together.</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-md">
              Ready to elevate your digital presence? Schedule a consultation to discuss web, mobile, or <strong>WhatsApp AI</strong> solutions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-lumina-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-gray-400">hello@nexalis.digital</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-lumina-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Headquarters</h3>
                  <p className="text-gray-400">123 Tech District, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCalendlyOpen(true)}
              onMouseEnter={() => setCursorType('button')}
              onMouseLeave={() => setCursorType('default')}
              className="mt-12 flex items-center gap-3 bg-gradient-to-r from-lumina-accent to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-indigo-900/30"
            >
              <Calendar size={20} />
              Schedule Consultation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:border-lumina-accent focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:border-lumina-accent focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:border-lumina-accent focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Project Interest</label>
                <select className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:border-lumina-accent focus:outline-none transition-colors">
                  <option>WhatsApp AI Integration</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Full AI Transformation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:border-lumina-accent focus:outline-none transition-colors" placeholder="Tell us about your WhatsApp or AI project..."></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors"
                onMouseEnter={() => setCursorType('button')}
                onMouseLeave={() => setCursorType('default')}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <AnimatePresence>
        {isCalendlyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden relative"
            >
               <button 
                onClick={() => setIsCalendlyOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-black"
              >
                <X size={24} />
              </button>
              
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
                 <iframe 
                   src="https://calendly.com" 
                   title="Calendly Scheduling"
                   className="w-full h-full border-none"
                 />
                 <div className="absolute pointer-events-none text-gray-400 text-sm bottom-4">
                    *Demo Mode: Loading Calendly Homepage
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
