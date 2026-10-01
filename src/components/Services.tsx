import React, { useState } from 'react';
import {
  User,
  HeartPulse,
  Users2,
  Sparkles,
  ShieldCheck,
  Compass,
  GraduationCap,
  Home,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle,
  X,
  Calendar,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Users2':
        return <Users2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Psychological Services"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#ECE7DC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Services &amp; Specializations
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            Psychological Counseling in Lahore
          </h2>
          <p className="text-[#566862] text-base mt-3 leading-relaxed">
            Supportive, evidence-informed guidance designed for your unique circumstances. Sessions are conducted in-person at our quiet Lahore location or via secure telehealth across Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-xl p-6 border border-[#E5E0D4] shadow-xs hover:shadow-md hover:border-[#CADCD2] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#EFF5F2] text-[#2D5A4C] group-hover:bg-[#2D5A4C] group-hover:text-white transition-colors flex items-center justify-center mb-5">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Name */}
                <h3 className="font-display text-xl font-semibold text-[#1B2925] mb-2.5 group-hover:text-[#254C40] transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#54645E] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#F2ECE1] mt-2 flex items-center justify-between">
                <span className="text-xs text-[#7B8B84] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#3E6B5C]" />
                  {service.duration}
                </span>

                <button
                  id={`btn-service-learn-more-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#2D5A4C] hover:text-[#19372E] cursor-pointer group-hover:translate-x-0.5 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Personalized Care */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#667872]">
            Unsure which service matches your current needs? Feel welcome to schedule an initial consultation to discuss your concerns openly.
          </p>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#FAF9F6] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#DED7C8] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="btn-close-service-modal"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#5F6E68] hover:text-[#182723] hover:bg-[#EAE4D7] transition-colors"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon + Title */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#2D5A4C] text-white flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
                  Service Overview
                </span>
                <h3 id="modal-service-title" className="font-display text-2xl font-semibold text-[#182723]">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm sm:text-base text-[#4C5D57] leading-relaxed mb-5">
              {selectedService.fullDescription}
            </p>

            {/* Key Focus & Benefits */}
            <div className="bg-white rounded-xl p-4 border border-[#E5DFD2] mb-5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#32453F] mb-3">
                What We Focus On In Sessions
              </h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#475952]">
                    <CheckCircle className="w-4 h-4 text-[#3E6B5C] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Format and Duration */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#52635D] mb-6">
              <div className="p-3 bg-white rounded-lg border border-[#E5DFD2] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3E6B5C] shrink-0" />
                <div>
                  <span className="block font-semibold text-[#22332D]">Duration</span>
                  <span>{selectedService.duration}</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E5DFD2] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3E6B5C] shrink-0" />
                <div>
                  <span className="block font-semibold text-[#22332D]">Format</span>
                  <span>In-Person &amp; Online</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                id="btn-book-this-service"
                onClick={() => {
                  onSelectServiceForBooking(selectedService.name);
                  setSelectedService(null);
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#2D5A4C] hover:bg-[#23483D] text-white font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#ECE7DC] hover:bg-[#E2DCCF] text-[#33443E] font-medium text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
