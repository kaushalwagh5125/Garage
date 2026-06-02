'use client';

import { ArrowUp } from 'lucide-react';
import { BrandConfig, NavigationLink, Service } from '@/utils/api';

interface FooterProps {
  brand: BrandConfig;
  links: NavigationLink[];
  services: Service[];
}

export default function Footer({ brand, links, services }: FooterProps) {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#060808] text-[#8E9C95] pt-16 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Top Edge Neon Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B2F024] to-transparent opacity-50 shadow-[0_0_15px_rgba(178,240,36,0.5)]"></div>
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#B2F024]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Branding and Socials (4 grid cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3 group w-fit">
              {/* Custom Image Logo */}
              <div className="relative w-10 h-10 flex items-center justify-center filter drop-shadow(0 0 6px rgba(178,240,36,0.4)) transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={brand.logoUrl || "/logo.png"} 
                  alt={brand.nameEnglish} 
                  className="w-full h-full object-contain rounded-full border border-white/10"
                />
              </div>

              {/* Branding Titles */}
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wider text-white group-hover:text-[#B2F024] transition-colors duration-300">
                  {brand.nameMarathi}
                </span>
                <span className="font-mono text-[8px] tracking-widest text-white/60 uppercase -mt-1 font-semibold">
                  {brand.nameEnglish}
                </span>
              </div>
            </a>

            <p className="text-xs leading-relaxed font-mono font-semibold max-w-sm text-[#8E9C95]">
              Chh.Sambhajinagar's state-of-the-art futuristic EV scooter workshop. Certified lithium battery diagnostic engineering, mid/hub motor winders, speed controller signal mapping, and full restorations.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {[
                {
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  ),
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1KuP3syXyF/"
                },
                {
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  ),
                  label: "Instagram",
                  href: "https://www.instagram.com/morya_ev_services?igsh=M2Z5N2NjZnFjenA0"
                },
                {
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                  ),
                  label: "Twitter",
                  href: "#"
                },
                {
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                  ),
                  label: "YouTube",
                  href: "#"
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href !== '#' ? "_blank" : undefined}
                  rel={item.href !== '#' ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-lg bg-[#0A0D0C] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#B2F024] hover:border-[#B2F024]/40 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Index Navigation (2 grid cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold text-[#B2F024] tracking-widest uppercase mb-2">
              // INDEX SYSTEM
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs font-mono text-white/80 hover:text-[#B2F024] hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dynamic Services column (3 grid cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left">
            <h4 className="font-mono text-[10px] font-bold text-white tracking-widest uppercase mb-2">
              // EV SERVICES
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="text-xs font-mono text-white/80 hover:text-[#B2F024] hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Operations Info (3 grid cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left font-mono">
            <h4 className="font-mono text-[10px] font-bold text-[#B2F024] tracking-widest uppercase mb-2">
              // OPERATIONAL HUB
            </h4>
            
            {/* Phone */}
            <div className="flex flex-col">
              <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest mb-0.5">
                TELEMETRY ENQUIRY:
              </span>
              <span className="text-xs font-bold text-[#B2F024]">{brand.whatsappPhone}</span>
            </div>

            {/* Address */}
            <div className="flex flex-col mt-2">
              <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest mb-0.5">
                LAB LOCATION:
              </span>
              <p className="text-[11px] text-white/80 leading-relaxed max-w-[200px]">
                {brand.address}
              </p>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col mt-2">
              <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest mb-0.5">
                SYSTEM UPTIME:
              </span>
              <span className="text-[11px] text-white/80">{brand.workingHours.weekdays}</span>
              <span className="text-[11px] text-white font-semibold">{brand.workingHours.sunday}</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-white/50">
          <p className="text-center sm:text-left font-semibold">
            © 2026 {brand.nameEnglish}. All rights reserved. Precision EV Diagnostics & Tuning Chh.Sambhajinagar.
          </p>
          
          {/* Scroll To Top button */}
          <button
            onClick={handleScrollToTop}
            className="group px-4 py-2 rounded-lg bg-[#0A0D0C] border border-white/10 text-white hover:text-[#B2F024] hover:border-[#B2F024]/40 transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>BACK TO APEX</span>
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
