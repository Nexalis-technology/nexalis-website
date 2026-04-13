import React from 'react';
import { Linkedin } from 'lucide-react';

// Custom Nexalis Logo Component
const NexalisLogo = () => (
  <svg width="24" height="24" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 63.5 136.5 V 63.5 L 96.82369979491291 85.34015289959805" stroke="#6366f1" strokeWidth="47" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 136.5 63.5 V 136.5 L 103.17630020508709 114.65984710040195" stroke="#818cf8" strokeWidth="47" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <NexalisLogo />
            <span className="text-xl font-display font-bold text-white tracking-tighter">Nexalis</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexalis Digital. All rights reserved.
          </div>
          
          <div className="flex space-x-8">
            {/* <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Terms</a> */}
            <a
              href="https://www.linkedin.com/company/nexalis-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
