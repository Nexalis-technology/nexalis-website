'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../contexts/CursorContext';

const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(99, 102, 241, 0.15)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      mixBlendMode: 'screen' as any,
    },
    button: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '0px solid transparent',
      mixBlendMode: 'difference' as any,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 32,
      height: 64,
      width: 4,
      backgroundColor: '#6366f1',
      border: 'none',
      mixBlendMode: 'normal' as any,
    },
    hover: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: '#6366f1',
      border: 'none',
      mixBlendMode: 'normal' as any,
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center custom-cursor overflow-hidden"
        variants={variants}
        animate={cursorType}
        transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }}
      >
        <AnimatePresence>
          {cursorType === 'hover' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex flex-col items-center justify-center leading-none text-center"
            >
              <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] mb-0.5">
                {cursorText.split(' ')[0] || 'VIEW'}
              </span>
              <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] opacity-80">
                {cursorText.split(' ')[1] || 'CASE'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Small center dot - Hidden when in project hover mode for better visibility */}
      <motion.div 
         className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference custom-cursor"
         animate={{ 
           x: mousePosition.x - 1, 
           y: mousePosition.y - 1,
           opacity: cursorType === 'hover' ? 0 : 1,
           scale: cursorType === 'hover' ? 0 : 1
         }}
         transition={{ type: 'spring', stiffness: 1000, damping: 40 }}
      />
    </>
  );
};

export default CustomCursor;
