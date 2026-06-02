'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { BrandConfig } from '@/utils/api';

interface HeroProps {
  brand: BrandConfig;
}

export default function Hero({ brand }: HeroProps) {

  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleWhatsAppChat = () => {
    const formattedMsg = encodeURIComponent(
      "Hello Moraya EV Services, I would like to inquire about electric scooter diagnostics and servicing."
    );
    window.open(`https://wa.me/${brand.whatsappPhone}?text=${formattedMsg}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060808]"
    >
      {/* ── Full-bleed Workshop Background — High opacity on the right to match mockup clarity ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-80"
        style={{
          backgroundImage: `url('/premium_ev_diagnostics.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7) saturate(0.85) contrast(1.1)',
        }}
      />
      
      {/* Strong left-side vignette so text is perfectly readable and matches the dark left side of mockup */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060808] via-[#060808] via-[#060808]/80 to-transparent pointer-events-none z-[2]" />
      
      {/* Top + bottom vignette to blend into obsidian sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060808] via-transparent to-[#060808] pointer-events-none z-[2]" />

      {/* Subtle technical grid overlay across the whole section */}
      <div className="absolute inset-0 grid-bg opacity-[0.22] pointer-events-none z-[3]" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_520px] gap-8 items-center">

        {/* ════ LEFT COLUMN ════ */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* Status chip with solid green zap icon circle inside */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 select-none shadow-[0_0_15px_rgba(178,240,36,0.02)]">
            <div className="w-5 h-5 rounded-full bg-[#B2F024] flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-[#060808] fill-[#060808]" />
            </div>
            <span className="font-mono text-[9px] tracking-[0.2em] text-[#8E9C95] uppercase font-bold">
              // HYPER POWER TUNING LAB
            </span>
          </div>

          {/* ── Marathi Heading with stunning green-to-black gradient rounded-card backing ── */}
          {/* Matches the mockup perfectly: rounded card with green gradient glow on the right, dark on the left */}
          <div className="relative mb-6 max-w-max select-none">
            <div className="absolute -inset-y-4 -inset-x-6 bg-gradient-to-r from-[#060808]/90 via-[#0C1A09]/95 to-[#244215]/90 rounded-3xl border border-[#B2F024]/20 shadow-[0_0_40px_rgba(28,53,18,0.25)] -z-10 overflow-hidden">
              {/* Highlight gradient glow on the right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#B2F024]/12 to-transparent pointer-events-none" />
            </div>
            <h1 className="text-[4.2rem] sm:text-[5.4rem] md:text-[6.4rem] xl:text-[7.2rem] font-black leading-[1.02] tracking-tight text-white pr-4">
              मोरया <span className="text-[#B2F024]">इ. व्ही.</span><br />सर्व्हिसेस
            </h1>
          </div>

          {/* English subtitle */}
          <p className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white uppercase mb-4 select-none">
            MORAYA <span className="text-[#B2F024] neon-text-yellow">EV</span> SERVICES
          </p>

          {/* Lime tagline — Sans-serif font to match mockup text thickness */}
          <p className="text-xs sm:text-sm tracking-[0.18em] font-black text-[#B2F024] uppercase mb-6 select-none">
            COMPLETE ELECTRIC SCOOTER &amp; EV REPAIR SOLUTIONS
          </p>

          {/* Description */}
          <p className="text-sm leading-7 text-[#8E9C95] max-w-[500px] mb-10 select-none">
            Chh.Sambhajinagar's premier futuristic EV engineering station. We
            specialize in high-voltage lithium-ion pack spot-welding, precision Hall
            sensor re-windings, high-end digital controller signal mapping, and full
            mechanical restorations. Let's return your electric scooter to aerospace
            efficiency.
          </p>

          {/* ── Buttons ── */}
          {/* Rectangular shapes (rounded-xl) as specified and shown in the mockup */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">

            {/* BOOK SERVICE — solid neon lime, rectangular rounded-xl */}
            <button
              onClick={handleScrollToBooking}
              className="group flex items-center justify-center gap-2.5 px-9 py-4.5 bg-[#B2F024] text-[#060808] font-mono text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(178,240,36,0.55)] cursor-pointer spring-scale-hover"
            >
              <span>Book Service</span>
              <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* WHATSAPP US — outlined with lime border, white text, rectangular rounded-xl */}
            <button
              onClick={handleWhatsAppChat}
              className="group flex items-center justify-center gap-2.5 px-9 py-4.5 border border-[#B2F024] bg-transparent text-white font-mono text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#B2F024]/10 transition-all duration-300 cursor-pointer spring-scale-hover"
            >
              {/* WhatsApp icon inline SVG in white */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white group-hover:scale-110 transition-transform duration-300">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Us</span>
            </button>
          </div>
        </motion.div>

        {/* ════ RIGHT COLUMN — HUD ════ */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Ambient bright neon glow behind HUD */}
          <div className="absolute w-[420px] h-[420px] bg-[#B2F024]/10 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[390px] h-[390px] xl:w-[460px] xl:h-[460px] flex items-center justify-center z-10"
          >

            {/* ── Outermost rotating dashed ring ── */}
            <div
              className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#B2F024]/30 animate-orbit"
              style={{ animationDuration: '24s' }}
            />

            {/* ── Second ring reverse ── */}
            <div
              className="absolute inset-5 rounded-full border border-dotted border-[#03C03C]/40 animate-orbit"
              style={{ animationDuration: '14s', animationDirection: 'reverse' }}
            />

            {/* ── Thick glowing neon ring ── */}
            <div
              className="absolute inset-10 rounded-full z-10"
              style={{
                border: '4px solid #B2F024',
                boxShadow: '0 0 25px rgba(178,240,36,0.7), 0 0 65px rgba(178,240,36,0.35), inset 0 0 25px rgba(178,240,36,0.15)',
              }}
            />

            {/* ── Circular image at center showing EV Scooter Diagnostic stand ── */}
            <motion.div
              className="absolute inset-[3.6rem] rounded-full overflow-hidden bg-[#060808]/90"
              style={{
                boxShadow: '0 0 35px rgba(178,240,36,0.2)',
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <img
                src="/premium_ev_diagnostics.png"
                alt="Moraya EV Diagnostics Lab"
                className="w-full h-full object-cover scale-[1.3] translate-y-[-5%] translate-x-[5%]"
                style={{
                  filter: 'brightness(1.05) saturate(1.1) contrast(1.05)'
                }}
              />
              
              {/* Scanline shimmer & green blueprint screen overlay */}
              <div className="absolute inset-0 bg-[#B2F024]/5 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B2F024]/12 to-transparent animate-[scanline_4s_linear_infinite]" />
            </motion.div>

            {/* ── HUD Label: TOP — SYSTEM: BRAND_MARK_ACTIVE ── */}
            {/* Matches the mockup perfectly in design and placement */}
            <div
              className="absolute font-mono text-[9px] tracking-widest text-[#B2F024] bg-[#060808]/95 px-3.5 py-1.5 rounded border border-[#B2F024]/50 shadow-[0_0_15px_rgba(178,240,36,0.3)] select-none backdrop-blur-md whitespace-nowrap font-black z-20"
              style={{ top: '15px', left: '60%' }}
            >
              <span className="text-[#B2F024]">SYSTEM:</span> <span className="text-white">BRAND_MARK_ACTIVE</span>
            </div>

            {/* ── HUD Label: BOTTOM — DIAGNOSTICS RESOLUTION ── */}
            {/* Matches the mockup perfectly in design and placement */}
            <div
              className="absolute font-mono text-[9px] tracking-widest text-[#B2F024] bg-[#060808]/95 px-3.5 py-1.5 rounded border border-[#B2F024]/50 shadow-[0_0_15px_rgba(178,240,36,0.3)] select-none backdrop-blur-md whitespace-nowrap font-black z-20"
              style={{ bottom: '15px', left: '50%', transform: 'translateX(-50%)' }}
            >
              <span className="text-[#B2F024]">DIAGNOSTICS RESOLUTION:</span> <span className="text-white">100%</span>
            </div>

            {/* Futuristic horizontal accent lines */}
            <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-l from-transparent to-[#B2F024]/60 z-20" />
            <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-transparent to-[#B2F024]/60 z-20" />

          </motion.div>
        </div>
      </div>

      {/* ── Marquee ticker bar at bottom ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-3 bg-[#060808]/90 border-t border-[#B2F024]/20 backdrop-blur-md z-20 select-none">
        <div
          className="flex w-max whitespace-nowrap uppercase font-mono text-[10px] tracking-widest font-bold select-none"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {/* First copy */}
          {[
            { lime: true,  text: '// Sensor Winding Overhaul' },
            { lime: false, text: "Chh.Sambhajinagar's Leading Chassis Overhaul" },
            { lime: true,  text: '// 100% Waterproof Connecting Harness' },
            { lime: false, text: 'Doorstep Transit Telemetry' },
            { lime: true,  text: '// Same Day Diagnostic Scan' },
            { lime: false, text: 'Lithium Pack Restorations' },
            { lime: true,  text: '// Dynamic Diagnostic Mode On' },
          ].map((item, i) => (
            <span
              key={i}
              className={`mx-8 ${item.lime ? 'text-[#B2F024]' : 'text-[#8E9C95]/80'}`}
            >
              {item.text}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            { lime: true,  text: '// Sensor Winding Overhaul' },
            { lime: false, text: "Chh.Sambhajinagar's Leading Chassis Overhaul" },
            { lime: true,  text: '// 100% Waterproof Connecting Harness' },
            { lime: false, text: 'Doorstep Transit Telemetry' },
            { lime: true,  text: '// Same Day Diagnostic Scan' },
            { lime: false, text: 'Lithium Pack Restorations' },
            { lime: true,  text: '// Dynamic Diagnostic Mode On' },
          ].map((item, i) => (
            <span
              key={`b${i}`}
              className={`mx-8 ${item.lime ? 'text-[#B2F024]' : 'text-[#8E9C95]/80'}`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
