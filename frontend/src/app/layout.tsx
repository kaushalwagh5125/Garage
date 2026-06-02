import type { Metadata } from 'next';
import './globals.css';

import LenisProvider from '@/components/LenisProvider';
import CustomCursor from '@/components/CustomCursor';
import CanvasParticles from '@/components/CanvasParticles';

export const metadata: Metadata = {
  title: 'मोरया इ. व्ही. सर्व्हिसेस | Moraya EV Services - Chh.Sambhajinagar\'s Premium Futuristic EV Garage',
  description: 'Chh.Sambhajinagar\'s first premium independent luxury EV cleanroom. Specialized lithium battery spot-welding, precision hub motor sensor winding, CAN-bus speed controller signal mapping, and same-day diagnostics.',
  keywords: ['EV garage Chh.Sambhajinagar', 'Electric Scooter Repair', 'Lithium Battery Repair Chh.Sambhajinagar', 'Ola Scooter repair', 'Ather repair Chh.Sambhajinagar', 'Moraya EV Services', 'Battery cell balancing Chh.Sambhajinagar'],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-behavior-smooth">
      <head>
        {/* Dynamic favicon definition using branding logo */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="antialiased bg-[#06060A] text-[#F5F5FA] font-sans selection:bg-[#03C03C] selection:text-white min-h-screen">
        <LenisProvider>
          {/* Futuristic Interactive Backdrops */}
          <CanvasParticles />
          <CustomCursor />
          
          {/* Main App Content */}
          <div className="relative z-10 w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
