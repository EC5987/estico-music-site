import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { ContactSection } from '@/components/sections/ContactSection';
import studioBackground from '@/assets/studio-background.jpg';
import logoStacked from '@/assets/Estico-Logo-stacked.png';
import logoDefault from '@/assets/Estico-Logo.png';

const useStacked = true;           // flip to false to try the horizontal
const logoSrc = useStacked ? logoStacked : logoDefault;





type Section = 'about' | 'services' | 'work' | 'contact' | null;

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>(null);

    // Brighten background on mobile only when a modal is open
    useEffect(() => {
      const root = document.documentElement;
      if (activeSection) root.classList.add('modal-open');
      else root.classList.remove('modal-open');
      return () => root.classList.remove('modal-open');
    }, [activeSection]);

  const sections = [
    { id: 'about' as const, title: 'About', component: AboutSection },
    { id: 'services' as const, title: 'Services', component: ServicesSection },
    { id: 'work' as const, title: 'Work', component: WorkSection },
    { id: 'contact' as const, title: 'Contact', component: ContactSection },
  ];

  const getModalTitle = (section: Section) => {
    switch (section) {
      case 'about': return 'About ESTICO Music';
      case 'services': return 'Our Services';
      case 'work': return 'Featured Projects';
      case 'contact': return 'Contact Us';
      default: return '';
    }
  };

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${studioBackground})`,
          filter: 'brightness(var(--hero-brightness)) blur(4px)',

        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-background/20" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo/Title */}
          <div className="space-y-4">
  {/* SEO + accessibility: keep an H1 */}
  <h1 className="sr-only">ESTICO Music</h1>

{/* Logo */}
<img
  src={logoSrc}
  alt="ESTICO Music logo"
  className="mx-auto h-[200px] md:h-[300px] lg:h-[380px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] -translate-y-3"
  loading="eager"
  decoding="async"
/>





  {/* Subtitle (optional) */}
<p className="heading-secondary font-raleway max-sm:text-[0.95rem] max-sm:tracking-tight">
  Where emotion meets precision in sound
</p>


</div>


          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="btn-boutique"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={activeSection !== null}
        onClose={() => setActiveSection(null)}
        title={getModalTitle(activeSection)}
      >
        {ActiveComponent && <ActiveComponent />}
      </Modal>
    </div>
  );
};

export default Index;
