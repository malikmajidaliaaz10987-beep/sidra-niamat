import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Shield,
  X,
  FileText,
} from 'lucide-react';
import { PracticeInfo } from '../types';

interface FooterProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ practiceInfo, onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Sidra Niamat', href: '#about' },
    { name: 'Psychological Services', href: '#services' },
    { name: 'My Approach', href: '#approach' },
    { name: 'Frequently Asked Questions', href: '#faqs' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer
        id="main-footer"
        aria-label="Website Footer"
        className="bg-[#1C2824] text-[#D8E2DD] pt-16 pb-12 border-t border-[#2B3B36]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2D3E38]">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl font-semibold text-white tracking-tight">
                {practiceInfo.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#8CB8A7] font-medium mt-1">
                Psychologist in Lahore
              </p>
              <p className="text-sm text-[#A8B7B1] leading-relaxed mt-4 max-w-sm">
                Providing a calm, respectful and confidential space in Lahore where individuals can understand their emotional concerns and develop practical, sustainable coping strategies.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  id="footer-social-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sidra Niamat on Instagram"
                  className="w-9 h-9 rounded-lg bg-[#273731] hover:bg-[#344941] text-[#A6C5B8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-facebook"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sidra Niamat on Facebook"
                  className="w-9 h-9 rounded-lg bg-[#273731] hover:bg-[#344941] text-[#A6C5B8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sidra Niamat on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#273731] hover:bg-[#344941] text-[#A6C5B8] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className="text-[#9CAD98] hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">
                Practice Contact in Lahore
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8CB8A7] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#80948C]">Phone &amp; WhatsApp:</span>
                    <a
                      href={`tel:${practiceInfo.phoneRaw}`}
                      className="font-medium text-white hover:text-[#8CB8A7] transition-colors"
                    >
                      {practiceInfo.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8CB8A7] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#80948C]">Direct Email:</span>
                    <a
                      href={`mailto:${practiceInfo.email}`}
                      className="font-medium text-white hover:text-[#8CB8A7] transition-colors"
                    >
                      {practiceInfo.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8CB8A7] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#80948C]">Consulting Office:</span>
                    <span className="text-[#BDCCC6]">{practiceInfo.clinicAddress}</span>
                    <span className="block text-xs text-[#80948C]">Lahore, Punjab, Pakistan</span>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <button
                  id="btn-footer-appointment"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#2D5A4C] hover:bg-[#396F5E] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  Schedule an Appointment
                </button>
              </div>
            </div>

          </div>

          {/* Footer Disclaimer & Legal */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#80948C]">
            <p className="text-center md:text-left max-w-2xl leading-relaxed">
              <strong>Ethical Notice:</strong> Information on this website is for general informational purposes and is not a substitute for emergency care or medical advice.
            </p>

            <div className="flex items-center gap-4 shrink-0">
              <button
                id="btn-footer-privacy"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                id="btn-footer-terms"
                onClick={() => setLegalModal('terms')}
                className="hover:text-white underline cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-[#697C74]">
            &copy; {new Date().getFullYear()} Sidra Niamat. All rights reserved. Psychological Counseling &amp; Mental Wellness in Lahore, Pakistan.
          </div>
        </div>
      </footer>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div
          id="legal-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#DED7C8] relative max-h-[85vh] overflow-y-auto text-[#2C3D37]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#5F6E68] hover:text-[#182723] hover:bg-[#EAE4D7] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2D5A4C] text-white flex items-center justify-center shrink-0">
                {legalModal === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#182723]">
                {legalModal === 'privacy' ? 'Privacy Policy & Confidentiality' : 'Terms & Conditions of Service'}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-[#4E6059] space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Client Confidentiality:</strong> All psychological discussions, session notes, and communications between client and Sidra Niamat are held in strict ethical confidence.
                  </p>
                  <p>
                    <strong>2. Standard Safety Exceptions:</strong> As required by professional and ethical mandates, confidentiality may be broken only in circumstances involving immediate, imminent risk of physical harm to oneself or others, or where required by law.
                  </p>
                  <p>
                    <strong>3. Data Collection:</strong> Information submitted via the appointment booking form (name, contact phone, email, scheduling preferences) is utilized exclusively to manage consultations and will never be sold, rented, or distributed to third parties.
                  </p>
                  <p>
                    <strong>4. Digital Communications:</strong> While reasonable measures are taken to secure emails and messaging channels, clients are advised that unencrypted electronic communications carry inherent security limits.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Scope of Practice:</strong> Psychological counseling and mental wellness services are educational and therapeutic coping resources. They do not constitute emergency psychiatric hospitalization or pharmacology prescriptions.
                  </p>
                  <p>
                    <strong>2. Appointment Cancellation & Rescheduling:</strong> Please provide at least 24 hours of advance notice for any cancellations or changes to your scheduled in-person or online session time.
                  </p>
                  <p>
                    <strong>3. Mutual Respect:</strong> Our Lahore practice maintains a zero-tolerance policy for abuse, harassment, or unsafe behavior, ensuring a secure environment for both client and practitioner.
                  </p>
                  <p>
                    <strong>4. Crisis Situations:</strong> If you are in immediate personal crisis, please reach out to emergency medical services (1122 in Pakistan) or your nearest hospital emergency unit.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D4] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 rounded-xl bg-[#2D5A4C] text-white text-xs font-semibold hover:bg-[#23483D] transition-colors"
              >
                Understood &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
