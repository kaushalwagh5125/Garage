'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Sparkles } from 'lucide-react';
import { AboutConfig } from '@/utils/api';

interface AboutProps {
  about: AboutConfig;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="relative py-24 bg-[#0A0D0C] border-t border-white/5 overflow-hidden">

      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Laser glow background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B2F024]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold">
            // OUR IDENTITY & STORY
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Cleanroom Precision for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow font-bold">Smart Scooters</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B2F024] via-[#03C03C] to-transparent mx-auto mt-6" />
        </div>

        {/* Narrative & Mission/Vision block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Left Column: Narrative story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center h-full text-left"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#B2F024] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#B2F024] tracking-widest uppercase">
                // ESTABLISHED 2025
              </span>
            </div>
            <h3 className="text-2xl font-black text-white mb-6 leading-snug">
              Chh. Sambhajinagar's First Independent Premium EV Engineering Lab
            </h3>
            <p className="text-sm text-[#8E9C95] leading-relaxed font-mono font-semibold mb-6">
              {about.story}
            </p>
            <p className="text-sm text-[#8E9C95] leading-relaxed font-mono font-semibold">
              We operate under a strict "anti-dirty" repair policy. Our team wears ESD anti-static coats, utilizing high-precision programmable spot-welders, clean digital oscilloscope signals, and computerized load testers to ensure every circuit repair complies with aerospace standards.
            </p>
          </motion.div>

          {/* Right Column: Mission & Vision */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">

            {/* Mission Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 flex flex-col text-left group hover:border-[#B2F024]/30 transition-all duration-300 rounded-3xl border border-white/5 bg-[#060808]/80 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(178,240,36,0.06)]">
                <Target className="w-5 h-5 text-[#B2F024] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-wide group-hover:text-[#B2F024] transition-colors duration-300">
                Our Mission
              </h4>
              <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold">
                {about.mission}
              </p>
            </motion.div>

            {/* Vision Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 flex flex-col text-left group hover:border-[#B2F024]/30 transition-all duration-300 rounded-3xl border border-white/5 bg-[#060808]/80 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(178,240,36,0.06)]">
                <Eye className="w-5 h-5 text-[#B2F024] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-wide group-hover:text-[#B2F024] transition-colors duration-300">
                Our Vision
              </h4>
              <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold">
                {about.vision}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Dynamic Timeline Section */}
        <div className="relative pt-12">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-mono text-xs text-[#B2F024] tracking-widest uppercase font-bold">
              // MILESTONES TIMELINE
            </h3>
            <p className="text-lg text-white font-bold mt-2">
              Our Journey in the EV Revolution
            </p>
          </div>

          {/* Central Vertical Timeline Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-40 bottom-16 -translate-x-1/2 w-[2px] bg-white/10">
            {/* Scroll Glow path overlay */}
            <motion.div
              className="w-full h-full bg-gradient-to-b from-[#B2F024] via-[#03C03C] to-[#060808] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Milestones rows */}
          <div className="space-y-12 lg:space-y-24 relative z-10">

            {about.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative ${isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                >

                  {/* Left Side Container (Year on Even, Content on Odd) */}
                  <div className={`col-span-1 lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full font-mono font-bold text-xs tracking-widest bg-gradient-to-r from-[#B2F024] to-[#03C03C] text-[#060808] shadow-[0_0_15px_rgba(178,240,36,0.25)] mb-4">
                          YEAR {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-medium max-w-md lg:ml-auto">
                          {item.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" /> // Empty placeholder
                    )}
                  </div>

                  {/* Central Node Indicator */}
                  <div className="hidden lg:flex lg:col-span-2 items-center justify-center lg:order-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-10 h-10 rounded-full bg-[#060808] border-2 border-[#B2F024] flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(178,240,36,0.3)]"
                    >
                      {item.year.substring(2)}
                    </motion.div>
                  </div>

                  {/* Right Side Container (Content on Even, Year on Odd) */}
                  <div className={`col-span-1 lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full font-mono font-bold text-xs tracking-widest bg-gradient-to-r from-[#B2F024] to-[#060808] border border-[#B2F024]/20 text-white shadow-[0_0_15px_rgba(178,240,36,0.25)] mb-4">
                          YEAR {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-medium max-w-md">
                          {item.description}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" /> // Empty placeholder
                    )}
                  </div>

                  {/* Mobile Year Badge (Only visible on small devices) */}
                  <div className="lg:hidden flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#060808] border border-[#B2F024] flex items-center justify-center text-[#B2F024] font-mono text-[10px] font-bold">
                      {item.year.substring(2)}
                    </div>
                    <span className="font-mono text-xs font-bold text-white/80">
                      YEAR {item.year}
                    </span>
                  </div>

                  {/* Mobile Content Display */}
                  <div className="lg:hidden col-span-1 pl-11 -mt-4 text-left">
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-medium">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
