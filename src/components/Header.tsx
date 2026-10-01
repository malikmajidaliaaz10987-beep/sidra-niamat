import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Clock, Edit3 } from 'lucide-react';
import { PracticeInfo } from '../types';

interface HeaderProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
  onOpenEditor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  practiceInfo,
  onOpenBooking,
  onOpenEditor,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for local presence & direct contact */}
      <div className="hidden md:block bg-[#2D453E] text-[#E0EBE6] text-xs py-1.5 border-b border-[#3B574F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-[#86BAA6]" />
              Lahore, Pakistan (In-Person & Online)
            </span>
            <span className="inline-flex items-center gap-1.5 text-stone-200">
              <Clock className="w-3.5 h-3.5 text-[#86BAA6]" />
              Mon – Sat: 10:00 AM – 7:00 PM (By Appointment)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              id="btn-edit-practice-topbar"
              onClick={onOpenEditor}
              className="text-[#B9DCD0] hover:text-white inline-flex items-center gap-1 hover:underline cursor-pointer"
              title="Edit practice placeholders (clinic address, phone, qualifications)"
            >
              <Edit3 className="w-3 h-3" />
              <span>Practice Details</span>
            </button>
            <span className="text-[#4E7569]">|</span>
            <a
              id="topbar-phone-link"
              href={`tel:${practiceInfo.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-medium text-white hover:text-[#B9DCD0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#86BAA6]" />
              <span>{practiceInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E8E4DA]'
            : 'bg-[#FAF9F6] border-b border-[#ECE7DC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="group flex flex-col justify-center"
            >
              <span className="font-display text-2xl sm:text-2xl font-semibold tracking-tight text-[#1D2B26] group-hover:text-[#2E584B] transition-colors">
                {practiceInfo.name}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#52635D] font-medium mt-0.5">
                Psychologist in Lahore
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-[15px] font-medium text-[#384843] hover:text-[#244C40] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3E6B5C] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="header-call-btn"
                href={`tel:${practiceInfo.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-[#2E5347] hover:text-[#1E3A31] py-2 px-3 rounded-md hover:bg-[#EEF3F0] transition-colors"
                aria-label={`Call ${practiceInfo.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-[#3E6B5C]" />
                <span>{practiceInfo.phoneDisplay}</span>
              </a>

              <button
                id="btn-header-appointment"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#2D5A4C] hover:bg-[#23483D] active:bg-[#1B382F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-xs hover:shadow transition-all cursor-pointer focus:ring-2 focus:ring-[#3E6B5C] focus:ring-offset-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="btn-mobile-appointment-header"
                onClick={onOpenBooking}
                className="bg-[#2D5A4C] text-white text-xs font-semibold px-3 py-2 rounded-md inline-flex items-center gap-1.5"
                aria-label="Book an Appointment"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#2C3B36] hover:bg-[#EBE7DD] rounded-md transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden bg-[#FAF9F6] border-b border-[#E3DDD1] px-4 pt-3 pb-6 shadow-lg animate-fadeIn"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#293A35] hover:bg-[#EAE5D9] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-[#E8E2D4] space-y-2">
                <a
                  id="mobile-drawer-call-btn"
                  href={`tel:${practiceInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#E6ECE8] text-[#25463B] font-medium text-sm"
                >
                  <Phone className="w-4 h-4 text-[#2E584B]" />
                  <span>Call {practiceInfo.phoneDisplay}</span>
                </a>

                <button
                  id="mobile-drawer-booking-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-lg bg-[#2D5A4C] hover:bg-[#23483D] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </button>

                <button
                  id="mobile-drawer-edit-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEditor();
                  }}
                  className="w-full py-2 text-xs text-[#52635D] hover:text-[#25463B] inline-flex items-center justify-center gap-1.5 underline"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Customize Practice Details / Placeholders</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
