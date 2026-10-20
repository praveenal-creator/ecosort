import React, { useEffect } from 'react';
import { WasteItem, Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { WasteIcon } from './WasteIcon';
import {
  X,
  AlertTriangle,
  CheckCircle,
  ShieldAlert,
  Plus,
  Info,
  Lightbulb,
  Sparkles
} from 'lucide-react';

interface ItemDetailModalProps {
  item: WasteItem | null;
  lang: Language;
  onClose: () => void;
  onLogSortedItem: (item: WasteItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  lang,
  onClose,
  onLogSortedItem
}) => {
  const t = getTranslation(lang);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const binColorLabels = {
    green: t.bins.green,
    blue: t.bins.blue,
    red: t.bins.red,
    purple: t.bins.purple,
    yellow: t.bins.yellow
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] max-h-[90vh] overflow-y-auto space-y-4 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
              <WasteIcon name={item.icon} className="w-6 h-6" />
            </div>
            <div>
              <h2 id="item-modal-title" className="text-xl font-bold text-[#18392B] dark:text-[#E8F3ED] leading-tight">
                {item.name[lang]}
              </h2>
              {lang === 'ta' && (
                <span className="text-xs text-[#6F8375] dark:text-[#8EA899] block mt-0.5">
                  {item.name.en}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6D8374] dark:text-[#8EA899] hover:text-[#18392B] dark:hover:text-white hover:bg-[#F0F4EE] dark:hover:bg-[#203328] rounded-xl transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unboxed Metadata Strip (Zero-pill compliant) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#536B5B] dark:text-[#9FB3A5] py-2 border-y border-[#EEF2EA] dark:border-[#22352A]">
          <span className="font-semibold text-[#18392B] dark:text-[#E8F3ED]">{t.categories[item.category]}</span>
          <span aria-hidden="true">·</span>
          <span>{binColorLabels[item.binColor]}</span>
          <span aria-hidden="true">·</span>
          <span>{item.isRecyclable ? t.guide.detailsModal.recyclable : t.guide.detailsModal.nonRecyclable}</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#465B4D] dark:text-[#A7BFB2] leading-relaxed">
          {item.description[lang]}
        </p>

        {/* Preparation Instructions */}
        <div className="bg-[#FAFBF9] dark:bg-[#1B2921] rounded-2xl p-4 border border-[#E4EAE0] dark:border-[#263D30] space-y-1.5">
          <div className="flex items-center gap-2 text-[#234937] dark:text-[#88C6A2]">
            <CheckCircle className="w-4 h-4 text-[#2E7D32] dark:text-[#88C6A2]" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {t.guide.detailsModal.preparation}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#384F40] dark:text-[#D1E6DA] leading-relaxed pl-6">
            {item.preparation[lang]}
          </p>
        </div>

        {/* Disposal Method */}
        <div className="bg-[#FAFBF9] dark:bg-[#1B2921] rounded-2xl p-4 border border-[#E4EAE0] dark:border-[#263D30] space-y-1.5">
          <div className="flex items-center gap-2 text-[#18392B] dark:text-[#88C6A2]">
            <Info className="w-4 h-4 text-[#285A3E] dark:text-[#88C6A2]" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {t.guide.detailsModal.disposalMethod}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#384F40] dark:text-[#D1E6DA] leading-relaxed pl-6">
            {item.disposal[lang]}
          </p>
        </div>

        {/* Common Mistakes to Avoid */}
        {item.commonMistakes && (
          <div className="bg-[#FFF8F3] dark:bg-[#261E17] rounded-2xl p-4 border border-[#F3DDCC] dark:border-[#423023] space-y-1.5 text-xs text-[#824411] dark:text-[#E8B688]">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#C25827]" />
              <h4>{t.guide.detailsModal.commonMistakes}</h4>
            </div>
            <p className="leading-relaxed pl-6">
              {item.commonMistakes[lang]}
            </p>
          </div>
        )}

        {/* Reuse & Upcycling Ideas */}
        {item.reuseSuggestions && (
          <div className="bg-[#F8FAF7] dark:bg-[#182B20] rounded-2xl p-4 border border-[#DCE8DF] dark:border-[#2A4434] space-y-1.5 text-xs text-[#2A5239] dark:text-[#A7D7B8]">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#35724D] dark:text-[#88C6A2]" />
              <h4>{t.guide.detailsModal.reuseSuggestions}</h4>
            </div>
            <p className="leading-relaxed pl-6">
              {item.reuseSuggestions[lang]}
            </p>
          </div>
        )}

        {/* Municipal Safety & Worker Advisory */}
        <div
          className={`rounded-2xl p-4 border space-y-1.5 ${
            item.requiresSpecialHandling
              ? 'bg-[#FDF7F3] dark:bg-[#261E17] border-[#F2DACB] dark:border-[#423023] text-[#8C4616] dark:text-[#DEAC6A]'
              : 'bg-[#F9FAF8] dark:bg-[#1B2921] border-[#DFE6DC] dark:border-[#263D30] text-[#4E6254] dark:text-[#A7BFB2]'
          }`}
        >
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {t.guide.detailsModal.localNotice}
            </h4>
          </div>
          <p className="text-xs leading-relaxed pl-6">
            {item.municipalNotice[lang]}
          </p>
        </div>

        {/* Actions Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#5D7364] dark:text-[#8EA899]">
            {t.guide.detailsModal.pointsAwarded.replace('{points}', String(item.ecoPoints))}
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onLogSortedItem(item);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{t.guide.detailsModal.logButton.replace('{points}', String(item.ecoPoints))}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
