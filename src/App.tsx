/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Flower, Mail, Sparkles, X } from 'lucide-react';

interface FloatingFlowerProps {
  key?: number;
  delay?: number;
  x: number;
  y: number;
  size?: number;
  color?: string;
}

const FloatingFlower = ({ delay = 0, x = 0, y = 0, size = 24, color = "text-pink-400" }: FloatingFlowerProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.2, 1],
      y: [y, y - 40, y],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute ${color} pointer-events-none`}
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Flower size={size} />
  </motion.div>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF5F7] overflow-hidden relative flex items-center justify-center font-serif">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingFlower 
            key={i} 
            x={Math.random() * 100} 
            y={Math.random() * 100} 
            delay={i * 0.5}
            size={20 + Math.random() * 20}
            color={i % 2 === 0 ? "text-pink-300" : "text-rose-200"}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-pink-500 text-sm uppercase tracking-[0.3em] font-sans font-semibold mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            International Women's Day
          </motion.h2>
          <h1 className="text-4xl md:text-5xl text-rose-900 font-bold leading-tight">
            For My Best Friend, <br/>
            <span className="text-pink-600 italic">Fatima</span>
          </h1>
        </motion.div>

        {/* Envelope / Letter Container */}
        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group relative"
              >
                {/* Envelope Body */}
                <div className="w-64 h-44 bg-rose-100 rounded-lg shadow-xl border-2 border-rose-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <Mail className="text-rose-400 w-12 h-12 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 text-rose-400 text-xs font-sans">
                    <span>Click to open</span>
                    <Sparkles size={12} className="animate-pulse" />
                  </div>
                </div>
                {/* Decorative Seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <Heart className="text-white w-5 h-5 fill-current" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ y: 100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 border border-rose-100 relative"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-rose-300 hover:text-rose-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="space-y-6 text-rose-900 leading-relaxed">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="text-pink-500 fill-pink-500 w-8 h-8" />
                    </motion.div>
                  </div>

                  <p className="text-lg font-medium italic">Dearest Fatima,</p>
                  
                  <p className="text-base">
                    Thank you for being my best friend and the most kind, honest and amazing person.
                  </p>

                  <p className="text-base">
                    May Allah bless you with a lot of happiness and make your day as beautiful as you are.
                  </p>

                  <div className="pt-4 border-t border-rose-50 border-dashed">
                    <p className="text-sm text-rose-400 font-sans uppercase tracking-widest">With lots of love,</p>
                    <p className="text-xl font-bold text-pink-600 mt-1">Umaid</p>
                  </div>
                </div>

                {/* Decorative Flowers on Card */}
                <div className="absolute -bottom-4 -left-4">
                  <Flower className="text-pink-200 w-12 h-12 rotate-12" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Flower className="text-rose-100 w-16 h-16 -rotate-12" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }

        body {
          font-family: var(--font-serif);
        }
      `}} />
    </div>
  );
}
