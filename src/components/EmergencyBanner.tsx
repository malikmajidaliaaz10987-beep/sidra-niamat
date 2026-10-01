import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      id="emergency-notice-banner"
      aria-label="Emergency and safety notice"
      className="bg-[#F5F2EB] border-b border-[#E3DDCF] text-[#4A453A] text-xs sm:text-sm transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-[260px]">
          <AlertCircle className="w-4 h-4 text-[#8C6D46] shrink-0" aria-hidden="true" />
          <p className="leading-tight">
            <span className="font-semibold text-[#2F2C24]">Crisis & Emergency Notice:</span>{' '}
            If you or someone you know is in immediate danger or experiencing an acute crisis, please contact emergency services (1122) or visit the nearest emergency department immediately.
          </p>
        </div>

        <button
          id="btn-emergency-helplines-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 font-medium text-[#2F5245] hover:text-[#1F382F] hover:underline cursor-pointer py-1 px-2 rounded focus:outline-none focus:ring-1 focus:ring-[#3E6B5C]"
          aria-expanded={isExpanded}
          aria-controls="emergency-helpline-details"
        >
          <span>Pakistan Crisis Helplines</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {isExpanded && (
        <div
          id="emergency-helpline-details"
          className="bg-[#ECE7DC] border-t border-[#DFD8C8] px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#3E3A31] animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-2.5 bg-white/70 rounded-md border border-[#D9D1BF]">
              <span className="font-semibold block text-[#24211A]">Emergency Rescue (Pakistan)</span>
              <a href="tel:1122" className="inline-flex items-center gap-1.5 text-[#2F5245] font-semibold mt-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> Dial 1122 (Toll Free)
              </a>
              <p className="text-[11px] text-[#696357] mt-0.5">24/7 Medical & Ambulance Emergency</p>
            </div>

            <div className="p-2.5 bg-white/70 rounded-md border border-[#D9D1BF]">
              <span className="font-semibold block text-[#24211A]">Umang Mental Health Helpline</span>
              <a href="tel:03117786264" className="inline-flex items-center gap-1.5 text-[#2F5245] font-semibold mt-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> 0311-7786264
              </a>
              <p className="text-[11px] text-[#696357] mt-0.5">24/7 Mental health crisis helpline in Pakistan</p>
            </div>

            <div className="p-2.5 bg-white/70 rounded-md border border-[#D9D1BF]">
              <span className="font-semibold block text-[#24211A]">Rozan Emotional Support</span>
              <a href="tel:080022444" className="inline-flex items-center gap-1.5 text-[#2F5245] font-semibold mt-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> 0800-22444
              </a>
              <p className="text-[11px] text-[#696357] mt-0.5">Free emotional support line (Mon–Sat 10am–6pm)</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
