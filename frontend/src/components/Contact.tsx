'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, AlertTriangle, CheckSquare } from 'lucide-react';
import { BrandConfig, submitContactForm } from '@/utils/api';

interface ContactProps {
  brand: BrandConfig;
}

export default function Contact({ brand }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handlePhoneCall = () => {
    window.open(`tel:${brand.whatsappPhone.replace('+', '')}`, '_self');
  };

  const handleWhatsAppDirect = () => {
    window.open(`https://wa.me/${brand.whatsappPhone}`, '_blank');
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation
    if (!name.trim()) return setError('Please enter your name.');
    if (!phone.trim() || phone.length < 10) return setError('Please enter a valid phone number.');
    if (!message.trim()) return setError('Please enter a brief message.');

    setLoading(true);

    try {
      // POST to our dynamic Node.js/Express backend API!
      const res = await submitContactForm({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim()
      });

      if (res.success) {
        setSuccess(true);
        setTicketId(res.submissionId || `EV-${Math.floor(100000 + Math.random() * 900000)}`);
        // Reset fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError('Connection refused. Please verify backend API is operational.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0D0C] overflow-hidden border-b border-white/5">
      
      {/* Dynamic Background Tech Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#B2F024]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs tracking-widest text-[#B2F024] uppercase font-bold">
            // SECURE MESSAGING TRANSIT
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Connect with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B2F024] to-[#03C03C] neon-text-yellow font-bold">EV Technicians</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#03C03C] via-[#B2F024] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Dynamic contact details & Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* Call now button */}
              <button
                onClick={handlePhoneCall}
                className="py-4 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest text-[#B2F024] border border-[#B2F024]/40 bg-[#060808] hover:bg-gradient-to-r hover:from-[#B2F024] hover:to-[#03C03C] hover:text-[#060808] transition-all duration-300 hover:shadow-[0_0_15px_rgba(178,240,36,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </button>

              {/* Chat now button */}
              <button
                onClick={handleWhatsAppDirect}
                className="py-4 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 bg-[#060808] hover:border-[#B2F024] hover:text-[#B2F024] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Chat Direct</span>
              </button>
            </div>

            {/* Information Details Panel */}
            <div className="rounded-3xl border border-white/5 bg-[#060808]/80 backdrop-blur-md p-6 space-y-6 shadow-xl">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#B2F024]/10 border border-[#B2F024]/20 flex items-center justify-center text-[#B2F024]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1">
                    WORKSHOP ADDRESS
                  </span>
                  <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold">
                    {brand.address}
                  </p>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#03C03C]/10 border border-[#03C03C]/20 flex items-center justify-center text-[#03C03C]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1">
                    SUPPORT EMAIL
                  </span>
                  <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold">
                    {brand.supportEmail}
                  </p>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#B2F024]/10 border border-[#B2F024]/20 flex items-center justify-center text-[#B2F024]">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1">
                    OPERATING SCHEDULE
                  </span>
                  <p className="text-xs text-[#8E9C95] leading-relaxed font-mono font-semibold">
                    {brand.workingHours.weekdays}
                  </p>
                  <p className="text-xs text-white leading-relaxed font-mono font-bold mt-0.5">
                    {brand.workingHours.sunday}
                  </p>
                </div>
              </div>

            </div>

            {/* Styled Iframe Map container */}
            <div className="rounded-3xl overflow-hidden aspect-16/9 bg-[#060808] border border-white/10 relative shadow-xl">
              <iframe
                title="Moraya EV Location Map"
                src={brand.googleMapEmbedUrl}
                className="w-full h-full border-none opacity-80 mix-blend-luminosity filter contrast-125"
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Secure Message Gateway */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/5 bg-[#060808]/80 backdrop-blur-md p-8 md:p-10 text-left relative overflow-hidden shadow-2xl"
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#060808]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-25"
                  >
                    <CheckSquare className="w-16 h-16 text-[#B2F024] neon-text-yellow mb-6" />
                    <h3 className="text-2xl font-black text-white mb-2 uppercase">
                      MESSAGE TRANSMITTED SECURELY
                    </h3>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-[10px] text-white/80 mb-6 max-w-sm">
                      <div className="flex justify-between mb-1.5 font-bold">
                        <span>TRANSMIT TICKET:</span>
                        <span className="text-[#B2F024]">{ticketId}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>STATUS LOGGED:</span>
                        <span className="text-white">200 OK</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-2.5 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest text-[#060808] bg-gradient-to-r from-[#B2F024] to-[#03C03C] hover:brightness-110 shadow-md cursor-pointer"
                    >
                      Transcribe New Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                
                <p className="font-mono text-[10px] text-[#B2F024] tracking-widest uppercase font-bold">
                  // LOG TRANSMISSION GATEWAY
                </p>

                {error && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                    Sender Identity *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="px-5 py-4 rounded-xl bg-[#0A0D0C] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-colors duration-300 shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                      Secure Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="px-5 py-4 rounded-xl bg-[#0A0D0C] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-colors duration-300 shadow-inner"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                      Secure Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-Digit Mobile"
                      className="px-5 py-4 rounded-xl bg-[#0A0D0C] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-colors duration-300 shadow-inner"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="font-mono text-[9px] font-bold text-white/60 tracking-widest uppercase mb-2">
                    Encryption Message Payload *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="State details regarding query..."
                    rows={4}
                    className="px-5 py-4 rounded-xl bg-[#0A0D0C] border border-white/10 focus:border-[#B2F024] focus:ring-1 focus:ring-[#B2F024]/40 text-sm font-mono text-white placeholder-white/20 outline-none transition-colors duration-300 resize-none shadow-inner"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-[#060808] bg-gradient-to-r from-[#B2F024] to-[#03C03C] hover:brightness-110 shadow-[0_0_20px_rgba(178,240,36,0.2)] hover:shadow-[0_0_30px_rgba(178,240,36,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-none"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Data...' : 'Transmit Encrypted Message'}</span>
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
