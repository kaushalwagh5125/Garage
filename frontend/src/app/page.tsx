'use client';

import { useEffect, useState } from 'react';
import { fetchSiteConfig, SiteConfig } from '@/utils/api';

// Section Components
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [selectedService, setSelectedService] = useState('');

  // Fetch dynamic configurations from Backend API on mount
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchSiteConfig();
        setConfig(data);
      } catch (err) {
        console.error('Failed to load dynamic config', err);
      }
    }
    loadData();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  // Keep screen dark and non-scrollable during load phase
  if (isLoading || !config) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      {/* Sticky Blur Navbar */}
      <Navbar brand={config.brand} links={config.navigation} />
      
      {/* Cinematic Content Flow */}
      <main className="w-full flex-grow">
        {/* Fullscreen Hero */}
        <Hero brand={config.brand} />
        
        {/* Glowing Trust Badges */}
        <TrustBadges badges={config.trustBadges} />
        
        {/* Interactive Services catalog */}
        <Services services={config.services} onSelectService={handleSelectService} />
        
        {/* Widescreen story and milestones timeline */}
        <About about={config.about} />
        
        {/* High-voltage stats numbers */}
        <WhyChooseUs stats={config.stats} />
        
        {/* Cyberpunk masonry gallery blueprints */}
        <Gallery items={config.gallery} />
        
        {/* Auto-sliding reviews carousel */}
        <Reviews reviews={config.reviews} />
        
        {/* Instant WhatsApp booking form */}
        <BookingForm 
          services={config.services} 
          brand={config.brand} 
          preSelectedService={selectedService} 
        />
        
        {/* Technical maps & secure messaging contact portal */}
        <Contact brand={config.brand} />
      </main>

      {/* Futuristic operations footer */}
      <Footer 
        brand={config.brand} 
        links={config.navigation} 
        services={config.services} 
      />
    </>
  );
}
