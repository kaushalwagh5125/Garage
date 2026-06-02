'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ZoomIn, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/utils/api';

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [filter, setFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Battery', 'Motor', 'Diagnostics', 'Electrical', 'Workshop', 'Pickup'];

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.tag === filter);

  return (
    <section id="gallery" className="relative py-24 bg-[#060808] border-t border-white/5 overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Dynamic Laser lines */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#B2F024]/5 rounded-full blur-[110px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold">
            // WORK ARCHIVE & BLUEPRINTS
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Workshop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow font-bold">Diagnostics Blueprint</span> Vault
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] via-[#B2F024] to-transparent mx-auto mt-6" />
        </div>

        {/* Dynamic Category Filtering controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl font-mono text-[10px] uppercase font-bold tracking-widest border transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#B2F024] to-[#03C03C] text-[#060808] border-transparent shadow-[0_0_15px_rgba(178,240,36,0.3)]'
                  : 'bg-[#0A0D0C] border-white/10 text-[#8E9C95] hover:text-white hover:border-[#B2F024]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display with Layout Animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden p-4 border border-white/5 bg-[#0A0D0C]/80 backdrop-blur-md hover:border-[#B2F024]/40 cursor-pointer flex flex-col justify-between shadow-xl transition-all duration-300"
                onClick={() => setLightboxItem(item)}
              >
                {/* Visual Canvas containing pristine high-resolution photo */}
                <div className="relative aspect-4/3 rounded-2xl bg-[#060808] border border-white/5 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={`/gallery/${item.img}.png`} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060808]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Glass Hover inspect cover overlay */}
                  <div className="absolute inset-0 bg-[#060808]/80 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20">
                    <div className="w-10 h-10 rounded-full bg-[#B2F024]/10 border border-[#B2F024]/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-[#B2F024]" />
                    </div>
                    <span className="font-mono text-[9px] text-[#B2F024] tracking-widest uppercase font-bold">
                      INSPECT COMPONENT
                    </span>
                  </div>
                </div>

                {/* Footer metadata description */}
                <div className="mt-4 pt-2 flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[9px] text-[#B2F024] font-bold uppercase tracking-widest mb-1">
                      {item.tag} // BLUEPRINT
                    </span>
                    <h4 className="font-bold text-sm text-white group-hover:text-[#B2F024] transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8E9C95] group-hover:text-[#B2F024] group-hover:translate-x-1 transition-all duration-300" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* High-Fidelity Lightbox Fullscreen Modal Overlay */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#060808]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
            >
              
              {/* Floating backdrop grid particle outline */}
              <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0A0D0C] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#060808] border border-[#B2F024]/30 flex items-center justify-center text-[#B2F024] hover:text-[#060808] hover:bg-[#B2F024] transition-all duration-300 cursor-pointer z-50 animate-pulse"
                >
                  <X className="w-5 h-5" />
                </button>

                  {/* Left Side Visual photograph */}
                  <div className="w-full md:w-3/5 aspect-4/3 rounded-2xl bg-[#060808] border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={`/gallery/${lightboxItem.img}.png`} 
                      alt={lightboxItem.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060808]/80 via-transparent to-transparent opacity-50 pointer-events-none" />
                  </div>

                {/* Right Side Metadata Narrative */}
                <div className="w-full md:w-2/5 flex flex-col justify-center text-left">
                  
                  {/* Technical Metadata Category Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#B2F024] animate-ping" />
                    <span className="font-mono text-[9px] font-bold text-[#B2F024] tracking-widest uppercase">
                      SYSTEM COMPONENT: {lightboxItem.tag}
                    </span>
                  </div>

                  {/* Core Blueprint Title */}
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {lightboxItem.title}
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold mb-6">
                    {lightboxItem.img === 'battery_work' && 
                      'Lithium-ion battery pack telemetry restoration. We disassemble the casing, conduct microscopic thermal audits to identify defect cells, perform nickel tab spot welding, balance the high-voltage cells to within 5mV, and secure the setup with high-temperature epoxy insulation.'
                    }
                    {lightboxItem.img === 'workshop_cleanroom' && 
                      'Our diagnostic cleanroom represents Chh.Sambhajinagar\'s first advanced independent oscilloscope mapping bench. We trace signals to debug speed controller short circuits, map micro-controller signals, and log leakage currents to prevent thermal runs.'
                    }
                    {lightboxItem.img === 'motor_rebuild' && 
                      'Heavy-duty wheel hub motor core overhaul. Includes custom copper winding repairs with high-temperature insulation coatings, hall sensor diagnostic mapping, neodymium alignment checks, and water-sealing replacement.'
                    }
                    {lightboxItem.img === 'controller_tracing' && 
                      'Computerized signal trace analysis of speed controllers. Pinpoints CAN-bus transmission packet drops, traces throttle signals, and tests the high-voltage MOSFET switches for complete stability.'
                    }
                    {lightboxItem.img === 'custom_scooter' && 
                      'Custom installation of dynamic exterior high-efficiency LED lights. All auxiliary lights are wired via independent relays connected directly to a DC-DC converter, avoiding any main battery drain.'
                    }
                    {lightboxItem.img === 'flatbed_towing' && 
                      'Dedicated secure EV collection transport flatbeds. Our flatbeds carry specialized scooter towing templates that secure the frame without putting any stress on the delicate hydraulic suspension or plastic bodies.'
                    }
                  </p>

                  {/* Technical Specs List */}
                  <div className="border-t border-white/10 pt-4 font-mono text-[10px] text-[#8E9C95] space-y-2">
                    <div className="flex justify-between">
                      <span>AUDIT METHODOLOGY:</span>
                      <span className="text-[#B2F024] font-bold">DIGITAL TELEMETRY</span>
                    </div>
                    <div className="flex justify-between">
                      <span>COMPLIANCE RATING:</span>
                      <span className="text-white font-bold">AEROSPACE GRADE</span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
