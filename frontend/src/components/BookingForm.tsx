'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap, Phone, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrandConfig, Service } from '@/utils/api';

interface BookingFormProps {
  services: Service[];
  brand: BrandConfig;
  preSelectedService: string;
}

export default function BookingForm({ services, brand, preSelectedService }: BookingFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('');
  const [problem, setProblem] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Pre-select service if passed from catalog click
  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService);
    }
  }, [preSelectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Input Validation
    if (!name.trim()) return setError('Please enter your name.');
    if (!phone.trim() || phone.length < 10) return setError('Please enter a valid 10-digit phone number.');
    if (!vehicle.trim()) return setError('Please specify your scooter model.');
    if (!service) return setError('Please select a service category.');

    setSuccess(true);

    // Full screen cyber confetti burst trigger
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#03C03C', '#B2F024', '#060808', '#F2F3F4']
    });

    // Format WhatsApp pre-filled message string
    const whatsappMsg = `Hello Moraya EV Services,

Name: ${name.trim()}
Phone: ${phone.trim()}
Vehicle: ${vehicle.trim()}
Service Needed: ${service}

Problem:
${problem.trim() || 'General diagnostic scan and performance tuning.'}

Please contact me regarding service booking.`;

    const encodedMsg = encodeURIComponent(whatsappMsg);

    // Deep-link trigger after 1.2s delay to let user view success animation
    setTimeout(() => {
      window.open(`https://wa.me/${brand.whatsappPhone}?text=${encodedMsg}`, '_blank');
      setSuccess(false);
      // Reset form
      setName('');
      setPhone('');
      setVehicle('');
      setService('');
      setProblem('');
    }, 1200);
  };

  return (
    <section id="booking" className="relative py-24 bg-[#060808] border-b border-[#B2F024]/10 overflow-hidden">

      {/* Dynamic Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      {/* Visual cyber spotlight overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#B2F024]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold">
            // SECURE RESERVATIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Instant <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow font-bold">WhatsApp Booking</span> System
          </h2>
          <p className="text-xs text-[#8E9C95] font-mono mt-3 uppercase tracking-wider font-semibold">
            No Databases. No Signups. Direct encrypted scheduling.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] via-[#B2F024] to-transparent mx-auto mt-6" />
        </div>

        {/* Dynamic Glassmorphism Form container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 md:p-12 border border-white/5 bg-[#0A0D0C]/80 backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#060808]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-30"
            >
              <Sparkles className="w-16 h-16 text-[#B2F024] neon-text-yellow mb-6 animate-pulse" />
              <h3 className="text-2xl font-black text-white tracking-wide mb-2 uppercase">
                BOOKING COMPILED SUCCESSFULLY
              </h3>
              <p className="text-xs text-[#B2F024] font-mono tracking-widest uppercase animate-pulse">
                REDIRECTING SECURE CONNECTION TO WHATSAPP...
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 text-left">

            {/* Error alerts */}
            {error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name input */}
              <div className="flex flex-col">
                <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                  Rider Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ganesh More"
                  className="px-5 py-4 rounded-xl bg-[#060808] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Phone Number input */}
              <div className="flex flex-col">
                <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="px-5 py-4 rounded-xl bg-[#060808] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vehicle Model input */}
              <div className="flex flex-col">
                <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                  Scooter / EV Model *
                </label>
                <input
                  type="text"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g. Ola S1 Pro / Ather 450X"
                  className="px-5 py-4 rounded-xl bg-[#060808] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              {/* Service Required (Dynamic dropdown) */}
              <div className="flex flex-col">
                <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                  Service Category Required *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="px-5 py-4 rounded-xl bg-[#060808] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white outline-none transition-all duration-300 cursor-pointer appearance-none shadow-inner"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%23B2F024\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.25rem',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <option value="" disabled className="bg-[#060808] text-white/30">
                    Select Service...
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#060808] text-white">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Problem Description text area */}
            <div className="flex flex-col">
              <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                Problem Details (Optional)
              </label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe battery drop issues, noise from motor core, throttle lag details..."
                rows={4}
                className="px-5 py-4 rounded-xl bg-[#060808] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-all duration-300 resize-none shadow-inner"
              />
            </div>

            {/* Booking submission button */}
            <button
              type="submit"
              className="mt-4 w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-[#060808] bg-gradient-to-r from-[#B2F024] to-[#03C03C] hover:brightness-110 shadow-[0_0_20px_rgba(178,240,36,0.2)] hover:shadow-[0_0_30px_rgba(178,240,36,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer spring-scale-hover border-none"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Book on WhatsApp</span>
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}
