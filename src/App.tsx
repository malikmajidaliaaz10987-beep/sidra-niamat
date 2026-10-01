/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { EditPracticeModal } from './components/EditPracticeModal';
import { INITIAL_PRACTICE_INFO, SERVICES_DATA } from './data/practiceData';
import { PracticeInfo } from './types';

export default function App() {
  const [practiceInfo, setPracticeInfo] = useState<PracticeInfo>(() => {
    try {
      const saved = localStorage.getItem('sidra_niamat_practice_info');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback to initial
    }
    return INITIAL_PRACTICE_INFO;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleSavePracticeInfo = (updated: PracticeInfo) => {
    setPracticeInfo(updated);
    try {
      localStorage.setItem('sidra_niamat_practice_info', JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const handleOpenBooking = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy or top hash sync if needed
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1E2927]">
      {/* 1. Safety & Crisis Emergency Notice */}
      <EmergencyBanner />

      {/* 2. Responsive Sticky Header */}
      <Header
        practiceInfo={practiceInfo}
        onOpenBooking={handleOpenBooking}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* 3. Hero Section with Sidra Niamat Portrait and Core Value Proposition */}
      <main id="main-content" className="flex-1">
        <Hero
          practiceInfo={practiceInfo}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. Trust Pillars Section (Confidential, Respectful, Personalized, Professional) */}
        <TrustSection />

        {/* 5. About Section with Practice Background & Verifiable Placeholders */}
        <About
          practiceInfo={practiceInfo}
          onOpenBooking={handleOpenBooking}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* 6. Comprehensive Services Section */}
        <Services
          services={SERVICES_DATA}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 7. Approach: Listen, Understand, Work Together */}
        <Approach />

        {/* 8. Appointment Booking System */}
        <AppointmentForm
          practiceInfo={practiceInfo}
          preselectedService={preselectedService}
        />

        {/* 9. Contact Details, Lahore Office & Google Maps Embed */}
        <ContactSection
          practiceInfo={practiceInfo}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* 10. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 11. Client Reflections & Ethical Placeholders */}
        <Testimonials />
      </main>

      {/* 12. Professional Footer with Legal Disclaimers & Quick Links */}
      <Footer
        practiceInfo={practiceInfo}
        onOpenBooking={handleOpenBooking}
      />

      {/* 13. Mobile Bottom Action Bar (Call, WhatsApp, Book) */}
      <MobileQuickBar
        practiceInfo={practiceInfo}
        onOpenBooking={handleOpenBooking}
      />

      {/* 14. In-App Practice Details Customizer */}
      <EditPracticeModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        practiceInfo={practiceInfo}
        onSave={handleSavePracticeInfo}
      />
    </div>
  );
}

