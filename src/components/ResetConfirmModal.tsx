import React, { useEffect } from 'react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { AlertTriangle, X } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  lang,
  onClose,
  onConfirm
}) => {
  const t = getTranslation(lang);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-md rounded-3xl p-6 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] space-y-4 animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-2xl bg-[#FEE2E2] dark:bg-[#3B1919] text-[#B91C1C] dark:text-[#F87171] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#6D8374] dark:text-[#8FA899] hover:text-[#18392B] dark:hover:text-white rounded-xl"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h3 id="reset-modal-title" className="text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
            {t.progress.resetPrompt}
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6F61] dark:text-[#A7BFB2] mt-2 leading-relaxed">
            {t.progress.resetWarning}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F0F3EC] dark:border-[#22352A] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#486351] dark:text-[#A7BFB2] hover:text-[#18392B] bg-[#F2F5F0] dark:bg-[#203328] hover:bg-[#E6EBE3] rounded-xl transition-colors"
          >
            {t.progress.resetCancelBtn}
          </button>

          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] active:scale-95 transition-all rounded-xl shadow-xs"
          >
            {t.progress.resetConfirmBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
