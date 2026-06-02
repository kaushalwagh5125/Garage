'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandConfig, NavigationLink } from '@/utils/api';

interface NavbarProps {
  brand: BrandConfig;
  links: NavigationLink[];
}

export default function Navbar({ brand, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track page scroll to toggle backdrop-blur intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section for indicator
      const sections = links.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offset for sticky header
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
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#060808]/70 backdrop-blur-xl border-b border-[#B2F024]/10 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group relative z-50 animate-pulse"
          >
            {/* Custom Glowing Image Logo */}
            <div className="relative w-12 h-12 flex items-center justify-center filter drop-shadow(0 0 6px rgba(178, 240, 36, 0.45)) transition-transform duration-300 group-hover:scale-105">
              <img 
                src={brand.logoUrl || "/logo.png"} 
                alt={brand.nameEnglish} 
                className="w-full h-full object-contain rounded-full border border-white/5"
              />
              {/* Spinning Accent Ring on Hover */}
              <div className="absolute -inset-1 border border-dashed border-[#B2F024]/40 rounded-full animate-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Marathi Title with Glowing Sub-label */}
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-[#B2F024] transition-colors duration-300">
                {brand.nameMarathi}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#8E9C95] uppercase -mt-1 font-semibold">
                {brand.nameEnglish}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 text-sm tracking-wider font-semibold uppercase font-mono transition-colors duration-300 spring-scale-hover ${
                    isActive ? 'text-[#B2F024] neon-text-yellow' : 'text-[#8E9C95] hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Sliding active tab line — bright lime green with custom glowing shadow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarBorder"
                      className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-[#B2F024] shadow-[0_0_10px_#B2F024]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Glowing CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="relative px-7 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest font-black overflow-hidden group border border-[#B2F024] bg-transparent text-[#B2F024] transition-all duration-300 hover:bg-[#B2F024] hover:text-[#060808] hover:shadow-[0_0_25px_rgba(178,240,36,0.5)] flex items-center gap-2 spring-scale-hover select-none"
            >
              <span className="relative z-10 transition-colors duration-300">
                Talk To Us
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B2F024] group-hover:text-[#060808] group-hover:rotate-45 transition-all duration-300 stroke-[3]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden relative z-50 w-10 h-10 items-center justify-center rounded-full border border-[#B2F024]/20 bg-[#0A0D0C]/60 backdrop-blur text-white hover:text-[#B2F024] hover:border-[#B2F024]/50 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5 animate-pulse text-[#B2F024]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#060808]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-8"
          >
            {/* Cyber Matrix Particle Accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#B2F024_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 mt-4 relative z-10">
              <p className="font-mono text-[10px] tracking-widest text-[#B2F024] font-bold uppercase mb-2">
                // SYSTEM INDEX
              </p>
              {links.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.4, ease: 'easeOut' }}
                    className={`text-2xl md:text-3xl font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-between ${
                      isActive ? 'text-[#B2F024] neon-text-yellow font-black' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-white/30 font-normal tracking-widest">
                      0{idx + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Footer & Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border-t border-[#B2F024]/10 pt-6 font-mono text-[11px] text-white/60 flex flex-col gap-3 relative z-10"
            >
              <div className="flex items-center justify-between">
                <span>SERVICE ENQUIRIES:</span>
                <span className="text-[#B2F024] font-bold tracking-wider">{brand.whatsappPhone}</span>
              </div>
              <p className="leading-relaxed">
                {brand.address}
              </p>
              
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-[#B2F024] to-[#03C03C] text-center font-bold text-xs uppercase tracking-widest text-[#060808] hover:brightness-110 shadow-lg hover:shadow-[0_0_15px_rgba(178,240,36,0.4)] transition-all duration-300"
              >
                Talk To Us Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
