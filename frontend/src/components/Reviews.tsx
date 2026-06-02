'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '@/utils/api';

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-slide effect that pauses when cursor hovers over the card
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, reviews.length]);

  return (
    <section id="reviews" className="relative py-24 bg-[#0A0D0C] border-b border-white/5 overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Background spotlight beam */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#B2F024]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold">
            // CLIENT FEEDBACK
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Trusted by Chh.Sambhajinagar's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow font-bold">Smart Riders</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] via-[#B2F024] to-transparent mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-3xl p-8 md:p-12 border border-white/5 bg-[#060808]/80 backdrop-blur-md relative flex flex-col items-center text-center cursor-default shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              
              {/* Massive background double quote glowing icon */}
              <MessageSquare className="absolute -top-6 -right-6 w-32 h-32 text-white/[0.02] rotate-12 pointer-events-none" />

              {/* Glowing Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className="w-5 h-5 text-[#B2F024] fill-[#B2F024] filter drop-shadow(0 0 5px rgba(178,240,36,0.4))" 
                  />
                ))}
              </div>

              {/* Marathi Testimonial Quote */}
              <blockquote className="text-lg md:text-xl font-bold text-white leading-relaxed mb-6 italic tracking-wide">
                “{reviews[activeIndex].textMarathi}”
              </blockquote>

              {/* English Translation Description */}
              <p className="text-xs md:text-sm text-[#8E9C95] leading-relaxed font-mono font-semibold mb-8 max-w-2xl">
                {reviews[activeIndex].textEnglish}
              </p>

              {/* Reviewer Meta row */}
              <div className="flex flex-col items-center">
                <h4 className="font-extrabold text-sm text-[#B2F024] tracking-wider mb-1">
                  {reviews[activeIndex].name}
                </h4>
                <div className="flex items-center gap-2 font-mono text-[9px] text-[#8E9C95] font-bold uppercase tracking-widest">
                  <span>RIDER OF:</span>
                  <span className="px-2 py-0.5 rounded bg-[#B2F024]/10 border border-[#B2F024]/20 text-white">
                    {reviews[activeIndex].vehicleModel}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{reviews[activeIndex].date}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrow Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl bg-[#060808] border border-white/10 text-white hover:text-[#B2F024] hover:border-[#B2F024]/40 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Sliding Progress Dot indicators */}
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx 
                      ? 'w-6 bg-gradient-to-r from-[#B2F024] to-[#03C03C]' 
                      : 'w-2.5 bg-white/10 hover:bg-[#B2F024]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl bg-[#060808] border border-white/10 text-white hover:text-[#B2F024] hover:border-[#B2F024]/40 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
