'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { StatConfig } from '@/utils/api';

interface WhyChooseUsProps {
  stats: StatConfig[];
}

export default function WhyChooseUs({ stats }: WhyChooseUsProps) {
  return (
    <section className="relative py-20 bg-[#060808] border-y border-white/5 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Background soft glow spotlight */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#B2F024]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative group rounded-3xl p-8 bg-[#0A0D0C]/80 border border-white/5 flex flex-col justify-center items-center text-center cursor-default overflow-hidden shadow-xl hover:border-[#B2F024]/40 transition-colors duration-300"
            >
              
              {/* Spinning background halo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,240,36,0.03)_0%,transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              {/* Glowing Stat Count - Animated */}
              <div className="flex items-baseline mb-2">
                <AnimatedNumber value={stat.count} />
                <span className="text-4xl font-extrabold tracking-tight text-[#B2F024] neon-text-yellow">
                  {stat.suffix}
                </span>
              </div>

              {/* Stat Description label */}
              <p className="font-mono text-xs tracking-wider text-[#8E9C95] uppercase font-semibold">
                {stat.label}
              </p>

              {/* Small Cyber Accent dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#03C03C] animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B2F024]" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Highly optimized scroll counter
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    // Run counting animation inside 1.2s duration
    const duration = 1200;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Beautiful easeOutExpo curve for premium deceleration feel
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * (end - start) + start);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white tracking-tight">
      {displayValue}
    </span>
  );
}
