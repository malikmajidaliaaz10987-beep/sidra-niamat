import React, { useState } from 'react';
import { X, Save, RotateCcw, Edit3, Check } from 'lucide-react';
import { PracticeInfo } from '../types';
import { INITIAL_PRACTICE_INFO } from '../data/practiceData';

interface EditPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  practiceInfo: PracticeInfo;
  onSave: (updated: PracticeInfo) => void;
}

export const EditPracticeModal: React.FC<EditPracticeModalProps> = ({
  isOpen,
  onClose,
  practiceInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState<PracticeInfo>({ ...practiceInfo });
  const [qualText, setQualText] = useState(practiceInfo.qualifications.join('\n'));
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedQuals = qualText
      .split('\n')
      .map((q) => q.trim())
      .filter((q) => q.length > 0);

    const updated: PracticeInfo = {
      ...formData,
      qualifications: updatedQuals,
    };

    onSave(updated);
    setIsSavedNotice(true);
    setTimeout(() => {
      setIsSavedNotice(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    setFormData({ ...INITIAL_PRACTICE_INFO });
    setQualText(INITIAL_PRACTICE_INFO.qualifications.join('\n'));
  };

  return (
    <div
      id="edit-practice-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F6] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#DED7C8] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#5F6E68] hover:text-[#182723] hover:bg-[#EAE4D7] transition-colors"
          aria-label="Close practice editor"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#2D5A4C] text-white flex items-center justify-center shrink-0">
            <Edit3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-[#182723]">
              Customize Practice Details
            </h3>
            <p className="text-xs text-[#5C6E67]">
              Easily update placeholder credentials, clinic address, and contact numbers.
            </p>
          </div>
        </div>

        {isSavedNotice ? (
          <div className="py-8 text-center text-[#2D5A4C]">
            <Check className="w-10 h-10 mx-auto mb-2 text-[#2D5A4C]" />
            <p className="font-semibold text-base">Practice Information Updated!</p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4 mt-5 text-sm">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                Practitioner Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                  Phone (Display Format)
                </label>
                <input
                  type="text"
                  name="phoneDisplay"
                  value={formData.phoneDisplay}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                  Phone (Dialing Format)
                </label>
                <input
                  type="text"
                  name="phoneRaw"
                  value={formData.phoneRaw}
                  onChange={handleChange}
                  placeholder="+923164227321"
                  className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                Clinic Address (Placeholder or Actual Address)
              </label>
              <input
                type="text"
                name="clinicAddress"
                value={formData.clinicAddress}
                onChange={handleChange}
                placeholder="[Clinic Address, e.g. Suite 302, Gulberg III / DHA Phase 5, Lahore]"
                className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                Opening Hours
              </label>
              <input
                type="text"
                name="businessHours"
                value={formData.businessHours}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#354841] mb-1">
                Qualifications &amp; Degrees (One per line)
              </label>
              <textarea
                rows={3}
                value={qualText}
                onChange={(e) => setQualText(e.target.value)}
                placeholder="[Degree / Certification 1]&#10;[Degree / Certification 2]"
                className="w-full p-3 rounded-lg border border-[#D0C8B8] bg-white text-[#1E2E28] focus:border-[#2D5A4C] focus:ring-1 focus:ring-[#2D5A4C] resize-none text-xs"
              />
            </div>

            <div className="pt-4 border-t border-[#E8E2D4] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="inline-flex items-center gap-1.5 text-xs text-[#6F7E78] hover:text-[#23352F] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Placeholders</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-[#D0C8B8] text-[#3E4F49] text-xs font-medium hover:bg-[#EAE4D7] transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#2D5A4C] hover:bg-[#23483D] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
