import React from 'react';
import { Calendar, CheckCircle2, BookOpen, Sparkles, Edit3 } from 'lucide-react';
import { PracticeInfo } from '../types';
import clinicImg from '../assets/images/clinic_room_1790088634067.jpg';

interface AboutProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
  onOpenEditor: () => void;
}

export const About: React.FC<AboutProps> = ({
  practiceInfo,
  onOpenBooking,
  onOpenEditor,
}) => {
  return (
    <section
      id="about"
      aria-label="About Sidra Niamat"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F3EF] border-b border-[#E8E2D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of the calm counseling space with badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#DFD9CD] bg-white">
                <img
                  id="about-clinic-room-img"
                  src={clinicImg}
                  alt="Calm and private psychological counseling space in Lahore"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-5 bg-white border-t border-[#ECE6DA]">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EBF3EF] text-[#2C5749] flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-[#1B2B26]">
                        A Safe & Unhurried Consultation Space
                      </h4>
                      <p className="text-xs text-[#5D6F68] mt-1 leading-relaxed">
                        Designed to foster tranquility, complete client confidentiality, and peaceful reflective dialogue in Lahore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent card floating */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#2D5A4C] text-white p-4 rounded-xl shadow-lg max-w-[220px]">
                <p className="text-xs font-medium text-[#C3DFD4] uppercase tracking-wider">
                  Practice Philosophy
                </p>
                <p className="font-display text-sm font-semibold mt-1">
                  Empathetic listening meets evidence-informed guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Qualifications, and Areas of Interest */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#3C6456] mb-2">
              <span>Counseling Psychologist in Lahore</span>
            </div>

            <h2
              id="about-main-heading"
              className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight leading-tight"
            >
              About Sidra Niamat
            </h2>

            {/* Core introduction requested in prompt */}
            <p className="text-[#3A4B45] text-base sm:text-lg leading-relaxed mt-4 font-normal">
              Sidra Niamat is a psychologist based in Lahore who provides a supportive and confidential environment for individuals seeking psychological guidance.
            </p>

            <p className="text-[#556760] text-sm sm:text-base leading-relaxed mt-3">
              Recognizing that taking the first step toward mental wellness requires courage, her practice is grounded in genuine empathy, active presence, and non-judgmental acceptance. Whether navigating recurring stress, relationship strain, or personal transitions, sessions are adapted to your individual pace and life context.
            </p>

            {/* Qualifications Box (Notice: Explicitly editable placeholders, no invented degrees) */}
            <div className="mt-6 p-5 rounded-xl bg-white border border-[#E3DCD0] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#2D5A4C]" />
                  <h3 className="font-display font-semibold text-base text-[#1E2E29]">
                    Professional Qualifications & Training
                  </h3>
                </div>

                <button
                  id="btn-edit-credentials-about"
                  onClick={onOpenEditor}
                  className="text-xs text-[#2D5A4C] hover:text-[#1B382F] font-medium inline-flex items-center gap-1 hover:underline cursor-pointer"
                  title="Update with your verified degrees and institute names"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit Details</span>
                </button>
              </div>

              <div className="space-y-2">
                {practiceInfo.qualifications.map((qual, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#465851]">
                    <CheckCircle2 className="w-4 h-4 text-[#3E6B5C] shrink-0 mt-0.5" />
                    <span className="leading-snug">{qual}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#7B8B84] mt-3 pt-2.5 border-t border-[#F0EBE0] italic">
                Note: In accordance with medical ethics, all qualifications are transparent and customizable to reflect official documentation.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#445650] mb-3">
                Areas of Clinical & Counseling Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {practiceInfo.areasOfInterest.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-white border border-[#DDD6C8] text-[#293B35] font-medium shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="btn-about-book"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#2D5A4C] hover:bg-[#23483D] active:bg-[#1A382F] text-white px-6 py-3 rounded-xl font-medium text-sm shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </button>

              <a
                id="btn-about-view-services"
                href="#services"
                className="text-sm font-semibold text-[#2D5A4C] hover:text-[#1E3E34] hover:underline"
              >
                Explore Services &amp; Areas of Care &rarr;
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
