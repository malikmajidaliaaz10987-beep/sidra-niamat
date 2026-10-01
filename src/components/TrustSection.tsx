import React from 'react';
import { Lock, Heart, UserCheck, Stethoscope } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      id: 'trust-confidential',
      title: 'Confidential Support',
      description: 'Your sessions and communications are held in strict ethical privacy, offering a truly secure sanctuary to speak freely.',
      icon: Lock,
    },
    {
      id: 'trust-respectful',
      title: 'Respectful Environment',
      description: 'A compassionate, non-judgmental space honoring your background, values, culture, and individual lived experiences.',
      icon: Heart,
    },
    {
      id: 'trust-personalized',
      title: 'Personalized Approach',
      description: 'Every individual is unique. We tailor our discussions and pacing around your specific needs and comfort level.',
      icon: UserCheck,
    },
    {
      id: 'trust-professional',
      title: 'Professional Care',
      description: 'Grounded in recognized psychological principles, active listening, and ethical counseling standards in Lahore.',
      icon: Stethoscope,
    },
  ];

  return (
    <section
      id="trust-section"
      aria-label="Core Practice Values"
      className="py-14 sm:py-16 bg-[#FAF9F6] border-b border-[#ECE7DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Ethical Practice Standards
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#182622] mt-2">
            A Safe Foundation for Your Wellbeing
          </h2>
          <p className="text-[#596B64] text-sm sm:text-base mt-2.5">
            Therapy is built on trust, safety, and mutual collaboration. Here is what you can rely on when we work together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-white rounded-xl p-6 border border-[#E5E0D4] shadow-xs hover:border-[#CADCD2] transition-colors flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EFF5F2] text-[#295648] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1B2925] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#54645E] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
