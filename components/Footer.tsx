import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-display font-bold text-white tracking-tighter">Nexalis</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexalis Digital. All rights reserved.
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
