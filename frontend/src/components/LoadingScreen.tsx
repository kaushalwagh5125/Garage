'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gayathri } from 'next/font/google';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING QUANTUM ECU...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const statuses = [
      { p: 10, text: 'ESTABLISHING SECURE CONNECTIONS...' },
      { p: 30, text: 'INITIATING DYNAMIC DIAGNOSTICS...' },
      { p: 50, text: 'CALIBRATING HALL SENSORS & CONTROLLER...' },
      { p: 70, text: 'BALANCING LITHIUM-ION BATTERY CELLS...' },
      { p: 90, text: 'HEATING MOTOR MAGNET COILS...' },
      { p: 98, text: 'SYSTEMS OPTIMIZED. READY TO LAUNCH...' }
    ];

    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + Math.floor(Math.random() * 4) + 1;
        if (next >= 100) {
          clearInterval(timer);
          setStatusText('SYSTEM ONLINE');
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600); // Allow fade-out animation to finish
          }, 800);
          return 100;
        }

        // Update status texts based on percentage
        const matchingStatus = statuses.find(s => next >= s.p && prev < s.p);
        if (matchingStatus) {
          setStatusText(matchingStatus.text);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#06060A] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Matrix Particle Glow */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#03C03C_1px,transparent_1px)] [background-size:24px_24px] animate-pulse"></div>

          {/* Cinematic Outer Rotating Energy Rings */}
          <div className="relative flex items-center justify-center w-72 h-72">

            {/* Outer Ring 1: Neon Orange Slow Spin */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-64 h-64 border-2 border-dashed border-[#03C03C]/40 rounded-full"
            />

            {/* Middle Ring 2: Hot Pink Fast Reverse Spin */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute w-56 h-56 border-2 border-dotted border-[#1F1E26]/60 rounded-full"
            />

            {/* Inner Ring 3: Neon Green Accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute w-48 h-48 border border-double border-[#03C03C]/30 rounded-full"
            />

            {/* Central Holographic Logo Area */}
            <div className="absolute flex flex-col items-center justify-center">

              {/* Premium Image Logo */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  filter: [
                    'drop-shadow(0 0 10px rgba(3, 192, 60, 0.5))',
                    'drop-shadow(0 0 25px rgba(31, 30, 38, 0.5))',
                    'drop-shadow(0 0 10px rgba(3, 192, 60, 0.5))'
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-24 h-24 flex items-center justify-center"
              >
                <img 
                  src="/logo.png" 
                  alt="Moraya EV Logo" 
                  className="w-full h-full object-contain rounded-full border border-white/10"
                />
              </motion.div>

              {/* Charge Counter */}
              <motion.div
                className="mt-4 font-mono font-bold text-3xl tracking-widest text-[#F5F5FA]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {percent}<span className="text-[#03C03C] text-xl font-normal">%</span>
              </motion.div>

            </div>
          </div>

          {/* Telemetry Status Logger Box */}
          <div className="mt-12 w-80 px-4 text-center">

            {/* Horizontal Glowing Bar */}
            <div className="relative w-full h-1 bg-[#12131F] rounded-full overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#03C03C] via-[#1F1E26] to-[#A2D43D]"
                style={{ width: `${percent}%` }}
              />
              <div className="absolute top-0 right-0 w-1/4 h-full bg-white/20 animate-spark"></div>
            </div>

            {/* Technical Subtexts */}
            <AnimatePresence mode="wait">
              <motion.p
                key={statusText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[10px] tracking-widest text-[#03C03C] neon-text-green uppercase font-semibold h-4"
              >
                {statusText}
              </motion.p>
            </AnimatePresence>

            {/* Company Branding */}
            <p className="mt-8 font-semibold tracking-widest text-xs text-[#F5F5FA]/40 font-mono">
              MORAYA EV HYPER WORKSHOP v2.6
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
