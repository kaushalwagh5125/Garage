'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Wrench, DollarSign, LucideIcon } from 'lucide-react';
import { TrustBadge } from '@/utils/api';

// Map icon names from backend strings to Lucide Components
const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  DollarSign: DollarSign
};

interface TrustBadgesProps {
  badges: TrustBadge[];
}

export default function TrustBadges({ badges }: TrustBadgesProps) {
  return (
    <section className="relative py-16 bg-[#060808] border-y border-[#B2F024]/10 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Laser glow overlay */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#B2F024]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Core grid wrapping badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {badges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon] || Zap;
            
            // Map custom glow border colors
            let borderHoverClass = 'hover:border-[#03C03C]/50 hover:shadow-[0_0_20px_rgba(3,192,60,0.2)]';
            let iconColorClass = 'text-[#03C03C]';
            let glowClass = 'shadow-[0_0_10px_rgba(3,192,60,0.15)] bg-[#03C03C]/10';

            if (badge.color === 'glow-black' || index % 2 === 1) {
              borderHoverClass = 'hover:border-[#B2F024]/50 hover:shadow-[0_0_20px_rgba(178,240,36,0.15)]';
              iconColorClass = 'text-[#B2F024]';
              glowClass = 'shadow-[0_0_10px_rgba(178,240,36,0.15)] bg-[#B2F024]/10';
            }

            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className={`group p-6 flex flex-col items-center text-center cursor-default transition-all duration-300 rounded-3xl border border-white/5 bg-[#0A0D0C]/80 backdrop-blur-md ${borderHoverClass} ${index % 2 === 0 ? 'animate-float' : ''}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {/* Glowing Circle Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300 ${glowClass}`}>
                  <IconComponent className={`w-6 h-6 ${iconColorClass} group-hover:rotate-12 transition-transform duration-300`} />
                </div>

                {/* Badge Title */}
                <h3 className="font-bold text-base text-white tracking-wide mb-2 group-hover:text-[#B2F024] transition-colors duration-300">
                  {badge.title}
                </h3>

                {/* Badge Description */}
                <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-medium">
                  {badge.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
