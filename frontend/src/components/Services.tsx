'use client';

import { motion } from 'framer-motion';
import { 
  BatteryCharging, 
  Settings, 
  Cpu, 
  Lightbulb, 
  CheckCircle, 
  Truck, 
  ArrowRight, 
  Check,
  LucideIcon 
} from 'lucide-react';
import { Service } from '@/utils/api';

// Map icon strings from backend API into Lucide React components
const iconMap: Record<string, LucideIcon> = {
  BatteryCharging: BatteryCharging,
  Settings: Settings,
  Cpu: Cpu,
  Lightbulb: Lightbulb,
  CheckCircle: CheckCircle,
  Truck: Truck
};

interface ServicesProps {
  services: Service[];
  onSelectService: (serviceName: string) => void;
}

export default function Services({ services, onSelectService }: ServicesProps) {
  
  const handleBookService = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    
    // Scroll smoothly to booking
    const element = document.getElementById('booking');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#060808] overflow-hidden">
      
      {/* High-Voltage Grid Backdrop lines */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Futuristic Laser Light Accents */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#03C03C]/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#B2F024]/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Widescreen Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold"
          >
            // PROFESSIONAL SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4"
          >
            High-Voltage <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow">EV Diagnostics</span> & Tuning
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#03C03C] via-[#B2F024] to-transparent mx-auto mt-6"
          />
        </div>

        {/* 3-Column Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Settings;
            const isHighlighted = service.highlight;
            const cardAccentColor = service.color === '#1F1E26' ? '#03C03C' : service.color === '#03C03C' ? '#B2F024' : '#B2F024';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group rounded-3xl p-8 bg-[#0A0D0C]/80 backdrop-blur-md flex flex-col justify-between h-full transition-all duration-500 overflow-hidden spring-scale-hover border ${
                  isHighlighted 
                    ? 'border-[#B2F024]/40 shadow-[0_0_20px_rgba(178,240,36,0.08)]'
                    : 'border-white/5 hover:border-[#B2F024]/30'
                }`}
              >
                {/* Radial Hover Spark Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${cardAccentColor} 0%, transparent 70%)`
                  }}
                />

                <div>
                  
                  {/* Top Header Card row */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Glowing Core Icon */}
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110"
                      style={{
                        boxShadow: `inset 0 0 10px ${cardAccentColor}15, 0 0 15px ${cardAccentColor}25`
                      }}
                    >
                      <IconComponent 
                        className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6"
                        style={{ color: cardAccentColor }}
                      />
                    </div>

                    {/* Cyber Tag */}
                    <span 
                      className="font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#060808] border border-white/10 text-white"
                    >
                      <span style={{ color: cardAccentColor }}>//</span> {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B2F024] transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-medium mb-6 font-semibold">
                    {service.description}
                  </p>

                  {/* Technical Bullet Items */}
                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center bg-black/30 border border-white/10 mt-0.5"
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: cardAccentColor }} strokeWidth={3} />
                        </div>
                        <span className="font-mono text-[10px] font-semibold tracking-wide">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card CTA Trigger: Book service */}
                <button
                  onClick={() => handleBookService(service.title)}
                  className="w-full py-3.5 rounded-2xl font-mono text-[10px] font-bold uppercase tracking-widest text-white border bg-[#060808] border-white/10 flex items-center justify-center gap-2 group-hover:text-black transition-all duration-300 cursor-pointer overflow-hidden relative"
                >
                  {/* Backdrop slide hover overlay */}
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"
                    style={{
                      background: `${cardAccentColor}`
                    }}
                  />
                  
                  <span className="relative z-10 group-hover:text-black">Configure Service</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                </button>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
