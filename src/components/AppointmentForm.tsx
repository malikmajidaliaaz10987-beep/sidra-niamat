import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Send,
  Lock,
  CheckCircle2,
  MessageCircle,
  Phone,
  User,
  Mail,
  HelpCircle,
} from 'lucide-react';
import { PracticeInfo, AppointmentFormData } from '../types';

interface AppointmentFormProps {
  practiceInfo: PracticeInfo;
  preselectedService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  practiceInfo,
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    sessionType: 'in-person',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    reason: preselectedService || 'Individual Counseling',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle preselected service changes if prop updates
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, reason: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate safe client-side booking registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  // Generate WhatsApp booking URL with pre-filled message
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Sidra Niamat,\n\nI would like to request a psychological counseling appointment:\n\n• Name: ${formData.fullName || '[Your Name]'}\n• Format: ${formData.sessionType === 'in-person' ? 'In-Person (Lahore)' : 'Online Consultation'}\n• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n• Time: ${formData.preferredTime}\n• Reason: ${formData.reason}\n${formData.message ? `• Note: ${formData.message}` : ''}\n\nThank you.`
    );
    return `https://wa.me/923164227321?text=${text}`;
  };

  return (
    <section
      id="appointment"
      aria-label="Appointment Booking"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#ECE7DC]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#3C6456]">
            Confidential Consultation
          </span>
          <h2
            id="appointment-heading"
            className="font-display text-3xl sm:text-4xl font-semibold text-[#182723] tracking-tight mt-2"
          >
            Request an Appointment
          </h2>
          <p className="text-[#556761] text-base mt-2.5">
            Take the first step toward greater clarity. Fill out the form below or contact our Lahore clinic coordinator directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E3DCD0] shadow-sm p-6 sm:p-10 lg:p-12 relative">
          
          {isSubmitted ? (
            /* Success confirmation screen */
            <div id="appointment-success-state" className="text-center py-8 sm:py-12 animate-fadeIn">
              <div className="w-16 h-16 bg-[#EBF4F0] text-[#2D5A4C] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1B2B26]">
                Appointment Request Received
              </h3>
              <p className="text-sm sm:text-base text-[#52635D] max-w-lg mx-auto mt-3 leading-relaxed">
                Thank you, <strong className="text-[#1E2E29]">{formData.fullName}</strong>. Your request for{' '}
                <span className="font-medium text-[#2D5A4C]">{formData.reason}</span> ({formData.sessionType === 'in-person' ? 'In-Person in Lahore' : 'Online'}) has been recorded.
              </p>

              <div className="mt-6 p-4 bg-[#F7F5F0] rounded-xl max-w-md mx-auto text-left text-xs sm:text-sm text-[#465751] border border-[#E4DDD0] space-y-1.5">
                <p><strong>Next Step:</strong> Our clinic coordinator will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 24 business hours to confirm your time slot.</p>
                <p className="text-[11px] text-[#71827B]">For urgent scheduling or quick inquiries, you may also message directly on WhatsApp.</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  id="btn-whatsapp-confirm"
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5B] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Confirm via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      sessionType: 'in-person',
                      preferredDate: '',
                      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
                      reason: 'Individual Counseling',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#DDD7C8] text-[#33443E] hover:bg-[#F2ECE1] text-sm font-medium transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form id="form-appointment-booking" onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 bg-[#FDF2F2] border border-[#F5C2C2] text-[#9E2A2B] rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              {/* Consultation Format (In-person Lahore vs Online) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3D4F49] mb-2.5">
                  Consultation Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.sessionType === 'in-person'
                        ? 'border-[#2D5A4C] bg-[#EFF5F2] text-[#1E3A31]'
                        : 'border-[#E0D9CC] bg-white text-[#52635D] hover:bg-[#F9F7F3]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="in-person"
                      checked={formData.sessionType === 'in-person'}
                      onChange={handleChange}
                      className="text-[#2D5A4C] focus:ring-[#3E6B5C] mr-3"
                    />
                    <div>
                      <span className="font-semibold text-sm block text-[#1E2E29]">
                        In-Person Consultation (Lahore)
                      </span>
                      <span className="text-xs text-[#5D6F69]">
                        At quiet consulting suite in Lahore
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.sessionType === 'online'
                        ? 'border-[#2D5A4C] bg-[#EFF5F2] text-[#1E3A31]'
                        : 'border-[#E0D9CC] bg-white text-[#52635D] hover:bg-[#F9F7F3]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="sessionType"
                      value="online"
                      checked={formData.sessionType === 'online'}
                      onChange={handleChange}
                      className="text-[#2D5A4C] focus:ring-[#3E6B5C] mr-3"
                    />
                    <div>
                      <span className="font-semibold text-sm block text-[#1E2E29]">
                        Secure Online Video Session
                      </span>
                      <span className="text-xs text-[#5D6F69]">
                        Available across Lahore, Pakistan &amp; Overseas
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="input-fullName" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-[#A13A3A]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="input-fullName"
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ayesha Khan"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="input-phone" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-[#A13A3A]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="input-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX or WhatsApp"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Reason */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="input-email" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="select-reason" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Reason for Appointment
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <select
                      id="select-reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all cursor-pointer"
                    >
                      <option value="Individual Counseling">Individual Counseling</option>
                      <option value="Anxiety & Stress Support">Anxiety &amp; Stress Support</option>
                      <option value="Relationship Counseling">Relationship Counseling</option>
                      <option value="Emotional Wellbeing">Emotional Wellbeing</option>
                      <option value="Self-Esteem & Confidence">Self-Esteem &amp; Confidence</option>
                      <option value="Personal Growth">Personal Growth &amp; Transitions</option>
                      <option value="Student Counseling">Student Counseling</option>
                      <option value="Family Counseling">Family Counseling</option>
                      <option value="Initial General Consultation">Initial General Consultation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="input-preferredDate" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                    <input
                      id="input-preferredDate"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="select-preferredTime" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#768781]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="select-preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all cursor-pointer"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                      <option value="Flexible / First Available Slot">Flexible / First Available Slot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Notes */}
              <div>
                <label htmlFor="textarea-message" className="block text-xs font-semibold text-[#30413B] uppercase tracking-wider mb-1.5">
                  Message or Questions (Optional)
                </label>
                <textarea
                  id="textarea-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any background you would like us to know beforehand, or specify any scheduling preferences..."
                  className="w-full p-3.5 rounded-xl border border-[#D5CEC0] bg-[#FAF9F6] text-[#1B2925] text-sm focus:bg-white focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] transition-all resize-none"
                />
              </div>

              {/* Privacy Reassurance (User Prompt Mandate) */}
              <div className="p-4 bg-[#F6F4EE] rounded-xl border border-[#E3DC CE] flex items-start gap-3">
                <Lock className="w-4 h-4 text-[#2D5A4C] shrink-0 mt-0.5" />
                <p className="text-xs text-[#52635D] leading-relaxed">
                  <strong className="text-[#20312C]">Privacy Reassurance:</strong> Your information is treated with respect and confidentiality. Details submitted here are used solely for scheduling your session and coordinating with Sidra Niamat's clinic.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  id="btn-submit-appointment"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#2D5A4C] hover:bg-[#23483D] active:bg-[#1A382F] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>

                <a
                  id="btn-whatsapp-direct"
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BE5B] text-white text-sm font-semibold transition-colors"
                  title="Book immediately via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
