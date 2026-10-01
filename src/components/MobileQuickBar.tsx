import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { PracticeInfo } from '../types';

interface MobileQuickBarProps {
  practiceInfo: PracticeInfo;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  practiceInfo,
  onOpenBooking,
}) => {
  return (
    <div
      id="mobile-bottom-quickbar"
      aria-label="Mobile quick contact bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F6] border-t border-[#DED6C7] px-3 py-2.5 shadow-lg flex items-center justify-between gap-2"
    >
      <a
        id="mobile-quick-call"
        href={`tel:${practiceInfo.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#ECE8DF] text-[#244136] text-xs font-semibold hover:bg-[#DFD9CD] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#2E584B]" />
        <span>Call</span>
      </a>

      <a
        id="mobile-quick-whatsapp"
        href={`https://wa.me/${practiceInfo.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
          'Hello Sidra Niamat, I would like to inquire about an appointment in Lahore.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BE5B] transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      <button
        id="mobile-quick-book"
        onClick={onOpenBooking}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#2D5A4C] text-white text-xs font-semibold hover:bg-[#23483D] transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book</span>
      </button>
    </div>
  );
};
