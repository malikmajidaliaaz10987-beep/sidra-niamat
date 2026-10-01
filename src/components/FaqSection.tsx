import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data/practiceData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#ECE7DC]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Questions &amp; Clarity
          </span>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#556761] text-base mt-2.5">
            Clear information to help you feel informed and comfortable before your first psychological consultation in Lahore.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-xl border border-[#E3DCD0] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2D5A4C]"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#3E6B5C] shrink-0" aria-hidden="true" />
                    <span className="font-display font-semibold text-base sm:text-lg text-[#1B2925] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-[#F4F1EA] flex items-center justify-center shrink-0 text-[#43554F] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E8EFEA] text-[#244E41]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4E6059] leading-relaxed border-t border-[#F5F2EB] animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EFF5F2] border border-[#CADCD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#2D5A4C] text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-[#1B362D]">
                Have a question that is not covered here?
              </h3>
              <p className="text-xs text-[#4F685F] mt-0.5">
                Feel free to send a message via WhatsApp or email. We are glad to clarify any inquiries.
              </p>
            </div>
          </div>

          <a
            id="btn-faq-ask-question"
            href="#contact"
            className="px-4 py-2.5 rounded-lg bg-[#2D5A4C] hover:bg-[#23483D] text-white text-xs font-semibold shrink-0 transition-colors"
          >
            Ask a Question
          </a>
        </div>

      </div>
    </section>
  );
};
