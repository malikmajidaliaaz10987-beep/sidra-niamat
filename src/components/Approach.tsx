import React from 'react';
import { Ear, BrainCircuit, Users, Compass, Check } from 'lucide-react';
import { APPROACH_STEPS } from '../data/practiceData';

export const Approach: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Ear className="w-6 h-6 text-[#2D5A4C]" />;
      case 1:
        return <BrainCircuit className="w-6 h-6 text-[#2D5A4C]" />;
      case 2:
        return <Users className="w-6 h-6 text-[#2D5A4C]" />;
      default:
        return <Compass className="w-6 h-6 text-[#2D5A4C]" />;
    }
  };

  return (
    <section
      id="approach"
      aria-label="Counseling Approach"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F3EF] border-b border-[#E8E2D4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Therapeutic Philosophy
          </span>
          <h2
            id="approach-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            My Approach
          </h2>
          <p className="text-[#556761] text-base sm:text-lg mt-3 leading-relaxed">
            Sessions provide a respectful space to discuss concerns and work toward practical coping strategies. Rather than imposing rigid solutions, therapy is an active collaboration centered on your individual readiness and circumstances.
          </p>
        </div>

        {/* 3-Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`approach-step-${step.number}`}
              className="bg-white rounded-2xl p-7 border border-[#E3DDD0] shadow-xs relative flex flex-col justify-between"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF5F2] flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-display font-semibold text-2xl text-[#8E9F98]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-[#1B2B26] mb-1">
                  {step.title}
                </h3>

                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#446659] mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-sm text-[#52635D] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] mt-6 flex items-center gap-2 text-xs text-[#6B7C75]">
                <Check className="w-3.5 h-3.5 text-[#3E6B5C]" />
                <span>Paced according to your comfort</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic expectations notice */}
        <div className="mt-12 bg-white/70 border border-[#E2DC CE] rounded-xl p-6 max-w-3xl mx-auto text-center">
          <h4 className="font-display text-base font-semibold text-[#21322C] mb-1">
            Realistic Expectations &amp; Ethical Standards
          </h4>
          <p className="text-xs sm:text-sm text-[#5B6D66] leading-relaxed">
            Psychological growth is a continuous, deeply individual process. We do not make promises of instant cures or guaranteed outcomes; instead, we offer honest, compassionate guidance grounded in proven therapeutic methods to help you navigate life with greater clarity.
          </p>
        </div>

      </div>
    </section>
  );
};
