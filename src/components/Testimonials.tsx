import React from 'react';
import { Quote, Shield, Info } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/practiceData';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials and Reflections"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F3EF] border-b border-[#E8E2D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Experiences &amp; Reflections
          </span>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            Client Testimonials
          </h2>
          <p className="text-[#556761] text-base mt-2.5">
            A reflection of the supportive, respectful environment provided during psychological counseling in Lahore.
          </p>

          {/* Ethical disclaimer badge */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ECE7DC] border border-[#DDD6C8] text-[11px] text-[#55655F]">
            <Info className="w-3.5 h-3.5 text-[#3E6B5C]" />
            <span>Format Placeholders • Real reviews updated with ethical consent</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3DCD0] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF5F2] text-[#2D5A4C] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium text-[#657670] bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#EAE4D7]">
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-[#4E6059] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs text-[#1F2F2A]">
                    {item.initials}
                  </h4>
                  <p className="text-[11px] text-[#71827C]">
                    {item.city}
                  </p>
                </div>

                <span className="text-[11px] font-medium text-[#2D5A4C] bg-[#E8EFEA] px-2 py-0.5 rounded">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical confidentiality statement */}
        <div className="mt-10 max-w-xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-[#6A7B74]">
          <Shield className="w-3.5 h-3.5 text-[#3E6B5C]" />
          <span>Names and identifiable details are kept private to protect client confidentiality.</span>
        </div>

      </div>
    </section>
  );
};
