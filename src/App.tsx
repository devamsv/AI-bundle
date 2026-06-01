import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background decorative light glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center relative z-10"
      >
        {/* Animated Icon Container representing structural activity */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ 
              rotate: [0, 8, -8, 8, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            className="w-16 h-16 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-lg border border-zinc-800"
          >
            <Wrench className="w-7 h-7" />
          </motion.div>
        </div>

        {/* Subtle dynamic heartbeat status badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[10px] text-zinc-700 font-bold font-mono tracking-wider uppercase">
            Upgrades Ongoing
          </span>
        </div>

        {/* Header - EXACT requested text */}
        <h1 className="text-3xl sm:text-4xl font-display font-black text-zinc-950 tracking-tight leading-tight">
          Website Under Maintenance
        </h1>
        
        {/* Paragraph - EXACT requested text */}
        <p className="mt-4 text-sm sm:text-base text-zinc-650 font-medium">
          We’ll be back soon.
        </p>

        {/* Minimal status sub-block */}
        <div className="mt-12 pt-6 border-t border-zinc-200/60 max-w-xs mx-auto">
          <div className="flex items-center justify-center space-x-2 text-[11px] text-zinc-500 font-mono font-bold uppercase tracking-widest animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>System Refreshing</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative developer signature in footer edge */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="text-[10px] font-mono text-zinc-400 tracking-widest block font-bold uppercase">
          // Devendhiran
        </span>
      </div>
    </div>
  );
}
