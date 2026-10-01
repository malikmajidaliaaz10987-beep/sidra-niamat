import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Edit3,
} from 'lucide-react';
import { PracticeInfo } from '../types';

interface ContactSectionProps {
  practiceInfo: PracticeInfo;
  onOpenEditor: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  practiceInfo,
  onOpenEditor,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F3EF] border-b border-[#E8E2D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            Contact Sidra Niamat
          </h2>
          <p className="text-[#556761] text-base mt-2.5">
            Reach out with any questions or to coordinate an appointment. We aim to respond to all inquiries within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-5 border border-[#E3DDD0] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-[#EFF5F2] text-[#2D5A4C] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#667770]">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${practiceInfo.phoneRaw}`}
                    className="block text-base sm:text-lg font-semibold text-[#1E2E29] hover:text-[#2D5A4C] transition-colors"
                  >
                    {practiceInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(practiceInfo.phoneDisplay, 'phone')}
                  className="p-2 text-[#6D7D76] hover:text-[#1E2E29] hover:bg-[#F2ECE1] rounded-lg transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#2D5A4C]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${practiceInfo.phoneRaw}`}
                  className="px-3 py-1.5 rounded-lg bg-[#2D5A4C] text-white text-xs font-semibold hover:bg-[#23483D] transition-colors"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-5 border border-[#E3DDD0] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <div className="w-11 h-11 rounded-lg bg-[#EFF5F2] text-[#2D5A4C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#667770]">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${practiceInfo.email}`}
                    className="block text-sm sm:text-base font-semibold text-[#1E2E29] hover:text-[#2D5A4C] transition-colors truncate"
                  >
                    {practiceInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(practiceInfo.email, 'email')}
                className="p-2 text-[#6D7D76] hover:text-[#1E2E29] hover:bg-[#F2ECE1] rounded-lg transition-colors shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#2D5A4C]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Clinic Address */}
            <div className="bg-white rounded-xl p-5 border border-[#E3DDD0] shadow-xs">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-[#EFF5F2] text-[#2D5A4C] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#667770]">
                      Location &amp; Clinic
                    </span>
                    <p className="text-base font-semibold text-[#1E2E29]">
                      Lahore, Punjab, Pakistan
                    </p>
                    <p className="text-xs sm:text-sm text-[#4E6059] mt-1">
                      {practiceInfo.clinicAddress}
                    </p>
                    <p className="text-[11px] text-[#788882] mt-1 italic">
                      (Confidential consulting suite; precise suite number and gate pass shared upon session confirmation)
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenEditor}
                  className="text-xs text-[#2D5A4C] hover:underline flex items-center gap-1 shrink-0 ml-2"
                  title="Edit clinic address placeholder"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit</span>
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-5 border border-[#E3DDD0] shadow-xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#EFF5F2] text-[#2D5A4C] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#667770]">
                  Consultation Hours
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#1E2E29]">
                  {practiceInfo.businessHours}
                </p>
                <p className="text-xs text-[#5D6F69] mt-0.5">
                  Sunday: Closed (Prior appointments only for emergency follow-up)
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#1E8E44]" />
                <div>
                  <span className="font-semibold text-sm text-[#18532E] block">
                    Message Directly on WhatsApp
                  </span>
                  <span className="text-xs text-[#356B48]">
                    Fastest way to check same-week availability in Lahore
                  </span>
                </div>
              </div>
              <a
                href={`https://wa.me/${practiceInfo.phoneRaw.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs font-semibold transition-colors"
              >
                Chat
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Context */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#E3DDD0] shadow-xs overflow-hidden">
              
              {/* Map header */}
              <div className="p-4 bg-[#FAF9F6] border-b border-[#ECE6DA] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2D5A4C]" />
                  <span className="font-semibold text-sm text-[#1B2B26]">
                    Practice Area: Lahore, Pakistan
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Lahore,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2D5A4C] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map iframe centered on Lahore */}
              <div className="aspect-[4/3] w-full bg-[#E5E1D7] relative">
                <iframe
                  id="google-maps-iframe"
                  title="Lahore Practice Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108861.42851214373!2d74.26553896593457!3d31.520369599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full"
                />
              </div>

              {/* Location notes */}
              <div className="p-4 sm:p-5 bg-white text-xs text-[#596A64] space-y-1.5">
                <p className="font-semibold text-[#1F302A]">
                  Accessibility &amp; Parking:
                </p>
                <p>
                  Central location in Lahore with reserved private parking and serene waiting facilities. Easily accessible from Gulberg, DHA, Cantt, Model Town, and surrounding districts.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
