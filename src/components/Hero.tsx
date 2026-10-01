import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { PracticeInfo } from '../types';
import portraitImg from '../assets/images/sidra_portrait_1790088614769.jpg';

interface HeroProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ practiceInfo, onOpenBooking }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Welcome and Introduction"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7F5F0] via-[#FAF9F6] to-[#FAF9F6] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#ECE7DC]"
    >
      {/* Subtle organic background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E3EDE8]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#EBE4D5]/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location & Practice Tag */}
            <div className="inline-flex items-center gap-2 self-start bg-[#E8EFEA] border border-[#CADCD2] text-[#244E41] text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full mb-5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#2E584B]" />
              <span>Lahore, Pakistan • In-Person & Online Consultations</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#172420] leading-[1.18]"
            >
              Sidra Niamat – Psychologist in Lahore
            </h1>

            {/* Supporting Headline */}
            <h2
              id="hero-supporting-headline"
              className="text-lg sm:text-xl lg:text-2xl font-normal text-[#38534A] mt-4 font-display leading-snug"
            >
              Professional Psychological Counseling & Mental Wellness Support
            </h2>

            {/* Supporting Paragraph */}
            <p
              id="hero-supporting-paragraph"
              className="text-[#4F5E59] text-base sm:text-lg leading-relaxed mt-5 max-w-2xl font-normal"
            >
              Providing a calm, respectful and confidential space where you can talk, understand your concerns, and work toward healthier ways of coping.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8">
              <button
                id="btn-hero-book-appointment"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2D5A4C] hover:bg-[#23483D] active:bg-[#1A382F] text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-sm hover:shadow transition-all cursor-pointer focus:ring-2 focus:ring-[#3E6B5C] focus:ring-offset-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                id="btn-hero-learn-more"
                onClick={() => handleScrollTo('about')}
                className="inline-flex items-center justify-center gap-2 bg-[#EFECE3] hover:bg-[#E5E1D6] active:bg-[#DDD8CB] text-[#2C3E38] px-6 py-3.5 rounded-xl font-medium text-base border border-[#DDD7C8] transition-colors cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#4D635B]" />
              </button>
            </div>

            {/* Trust highlights under CTA */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 mt-8 border-t border-[#E8E2D4]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3C4E48]">
                <ShieldCheck className="w-4 h-4 text-[#2E584B] shrink-0" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3C4E48]">
                <HeartHandshake className="w-4 h-4 text-[#2E584B] shrink-0" />
                <span>Non-judgmental Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3C4E48] col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#2E584B] shrink-0" />
                <span>Lahore Clinic & Online</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative subtle frame border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#CADBD2] via-[#E4DDD0] to-[#E3EDE8] -z-10 opacity-70 transform rotate-1" />

              {/* Portrait container card */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-md border border-[#E3DDD0]">
                <div className="aspect-[3/4] w-full overflow-hidden bg-[#ECE8DF]">
                  <img
                    id="hero-portrait-image"
                    src={portraitImg}
                    alt="Sidra Niamat, Professional Psychologist in Lahore, Pakistan"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>

                {/* Sub-caption on image card */}
                <div className="p-4 sm:p-5 bg-white border-t border-[#EAE5D9]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-[#1A2824]">
                        {practiceInfo.name}
                      </h3>
                      <p className="text-xs text-[#52635D] font-medium">
                        Psychologist • Lahore, Pakistan
                      </p>
                    </div>

                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#E7F0EB] text-[#224A3E] border border-[#C5DCD0]">
                      Accepting New Clients
                    </span>
                  </div>

                  {/* Factual disclaimer / placeholder notice */}
                  <p className="text-[11px] text-[#717E79] mt-2 pt-2 border-t border-[#F0EBE1] italic">
                    Practicing in Lahore. Verified in-person and secure telehealth sessions.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
