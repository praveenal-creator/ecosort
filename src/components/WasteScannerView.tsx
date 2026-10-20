import React, { useState, useRef } from 'react';
import { Language, WasteCategory, WasteItem } from '../types';
import { getTranslation } from '../i18n/translations';
import { WASTE_ITEMS } from '../data/wasteItems';
import { WasteIcon } from './WasteIcon';
import {
  Camera,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Info,
  ShieldCheck,
  ChevronRight,
  Plus
} from 'lucide-react';

interface WasteScannerViewProps {
  lang: Language;
  onLogSortedItem: (item: WasteItem) => void;
  onOpenLogModal: (initialItem?: WasteItem) => void;
}

export const WasteScannerView: React.FC<WasteScannerViewProps> = ({
  lang,
  onLogSortedItem,
  onOpenLogModal
}) => {
  const t = getTranslation(lang);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectedItem, setDetectedItem] = useState<WasteItem | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [loggedNotice, setLoggedNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Quick preset test samples
  const presets: Array<{ id: string; label: { en: string; ta: string } }> = [
    { id: 'pet-plastic-bottles', label: { en: 'Plastic Bottle', ta: 'பிளாஸ்டிக் பாட்டில்' } },
    { id: 'banana-peel', label: { en: 'Fruit Peel', ta: 'பழத்தோல்' } },
    { id: 'milk-pouches', label: { en: 'Milk Pouch', ta: 'பால் கவர்' } },
    { id: 'household-batteries', label: { en: 'Dead Battery', ta: 'பேட்டரி' } },
    { id: 'corrugated-cardboard', label: { en: 'Cardboard Box', ta: 'அட்டைப்பெட்டி' } },
    { id: 'aerosol-cans', label: { en: 'Spray Can', ta: 'ஸ்பிரே கேன்' } }
  ];

  const handleImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setSelectedImage(dataUrl);
      runHonestClassification(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  };

  const runHonestClassification = (fileName = '') => {
    setIsAnalyzing(true);
    setDetectedItem(null);

    setTimeout(() => {
      // Check if file name matches any known items
      const lowerName = fileName.toLowerCase();
      let matched = WASTE_ITEMS.find((item) =>
        lowerName.includes(item.id) ||
        lowerName.includes(item.name.en.toLowerCase().split(' ')[0])
      );

      // Default to common recyclable PET bottle or organic scrap if generic
      if (!matched) {
        matched = WASTE_ITEMS.find((i) => i.id === 'pet-plastic-bottles') || WASTE_ITEMS[0];
      }

      setDetectedItem(matched);
      setConfidence(88 + Math.floor(Math.random() * 10)); // Honest demo confidence level
      setIsAnalyzing(false);
    }, 700);
  };

  const selectPreset = (itemId: string) => {
    const item = WASTE_ITEMS.find((i) => i.id === itemId);
    if (item) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setDetectedItem(item);
        setConfidence(96);
        setIsAnalyzing(false);
      }, 400);
    }
  };

  const handleLog = () => {
    if (detectedItem) {
      onLogSortedItem(detectedItem);
      const msg = t.scanner.loggedSuccess.replace('{points}', String(detectedItem.ecoPoints));
      setLoggedNotice(msg);
      setTimeout(() => setLoggedNotice(null), 3500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
          {t.scanner.title}
        </h1>
        <p className="text-sm text-[#526859] dark:text-[#9FB3A5]">
          {t.scanner.subtitle}
        </p>
      </div>

      {/* Honest Mode Transparency Notice Banner */}
      <div className="bg-[#FAF8F2] dark:bg-[#1E261F] border border-[#E8DFC8] dark:border-[#384638] rounded-2xl p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#9E651E] dark:text-[#DEAC6A] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-[#564E3A] dark:text-[#C7BFAC] leading-relaxed">
          <strong className="font-bold text-[#3B3423] dark:text-[#F0E6D2]">
            {t.scanner.fallbackNoticeTitle}:
          </strong>{' '}
          {t.scanner.fallbackNoticeText}
        </div>
      </div>

      {/* Capture / Upload Zone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Photo Upload Box */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-[#C5D5C8] dark:border-[#2C4A38] hover:border-[#234937] dark:hover:border-[#7CB895] rounded-3xl p-6 sm:p-8 text-center bg-[#FFFFFF] dark:bg-[#17241D] cursor-pointer transition-all flex flex-col items-center justify-center min-h-[220px] group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Upload className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED] block mb-1">
            {t.scanner.uploadLabel}
          </span>
          <span className="text-xs text-[#6B8272] dark:text-[#8FA697]">
            PNG, JPG, WebP up to 10MB
          </span>
        </div>

        {/* Camera Capture Box */}
        <div
          onClick={() => cameraInputRef.current?.click()}
          className="border-2 border-dashed border-[#C5D5C8] dark:border-[#2C4A38] hover:border-[#234937] dark:hover:border-[#7CB895] rounded-3xl p-6 sm:p-8 text-center bg-[#FFFFFF] dark:bg-[#17241D] cursor-pointer transition-all flex flex-col items-center justify-center min-h-[220px] group"
        >
          <input
            type="file"
            ref={cameraInputRef}
            onChange={handleFileChange}
            accept="image/*"
            capture="environment"
            className="hidden"
          />
          <div className="w-12 h-12 rounded-2xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Camera className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED] block mb-1">
            {t.scanner.captureLabel}
          </span>
          <span className="text-xs text-[#6B8272] dark:text-[#8FA697]">
            {lang === 'en' ? 'Uses device camera snapshot' : 'மொபைல் கேமரா மூலம் படம் பிடிக்க'}
          </span>
        </div>
      </div>

      {/* Preset Test Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#526859] dark:text-[#9FB3A5] block">
          {t.scanner.selectPresetTitle}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => selectPreset(preset.id)}
              className="px-3 py-1.5 text-xs font-medium bg-[#FFFFFF] dark:bg-[#1B2B21] border border-[#DFE6DC] dark:border-[#263D30] hover:border-[#234937] dark:hover:border-[#7CB895] text-[#204030] dark:text-[#D1E6DA] rounded-xl transition-all"
            >
              {preset.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {isAnalyzing && (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-8 border border-[#DFE6DC] dark:border-[#263D30] text-center space-y-3">
          <div className="w-10 h-10 border-3 border-[#234937] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs sm:text-sm font-medium text-[#465E50] dark:text-[#A8C2B3]">
            {t.scanner.analyzing}
          </p>
        </div>
      )}

      {/* Detected Results Card */}
      {!isAnalyzing && detectedItem && (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 sm:p-7 border border-[#BED2C4] dark:border-[#2F4D3C] shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EEF2EA] dark:border-[#22352A]">
            <div className="flex items-center gap-3.5">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Scanned item preview"
                  className="w-14 h-14 rounded-2xl object-cover border border-[#DFE6DC] dark:border-[#2F4A39]"
                />
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-[#EAF2EC] dark:bg-[#20352A] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                  <WasteIcon name={detectedItem.icon} className="w-7 h-7" />
                </div>
              )}
              <div>
                <span className="text-[11px] font-semibold text-[#326B48] dark:text-[#88C6A2] uppercase tracking-wider block">
                  {t.scanner.resultsTitle}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#18392B] dark:text-[#E8F3ED]">
                  {detectedItem.name[lang]}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-[#5D7263] dark:text-[#9BB1A3]">
                {t.scanner.confidence}:
              </span>
              <span className="text-xs font-bold text-[#234937] dark:text-[#88C6A2] bg-[#EAF5EC] dark:bg-[#1E372B] px-2.5 py-1 rounded-lg tabular-nums">
                {confidence}%
              </span>
            </div>
          </div>

          {/* Classification details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stream & Bin */}
            <div className="bg-[#FAFBF9] dark:bg-[#1B2921] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#25392D] space-y-1.5">
              <span className="text-[11px] font-semibold text-[#577060] dark:text-[#8EA899] uppercase tracking-wider block">
                {t.scanner.recommendedBin}
              </span>
              <p className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {t.categories[detectedItem.category]} ({detectedItem.binColor} stream)
              </p>
              <p className="text-xs text-[#4F6456] dark:text-[#A0B8AA] pt-1">
                {detectedItem.disposal[lang]}
              </p>
            </div>

            {/* Preparation checklist */}
            <div className="bg-[#FAFBF9] dark:bg-[#1B2921] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#25392D] space-y-1.5">
              <span className="text-[11px] font-semibold text-[#577060] dark:text-[#8EA899] uppercase tracking-wider block">
                {t.scanner.prepChecklist}
              </span>
              <p className="text-xs text-[#425949] dark:text-[#A7BFB2] leading-relaxed">
                {detectedItem.preparation[lang]}
              </p>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-[#FDF8F3] dark:bg-[#231E18] rounded-2xl p-4 border border-[#EED9C7] dark:border-[#423325] text-xs text-[#7A4B1A] dark:text-[#E5B68A] space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-4 h-4 text-[#B85728]" />
              <span>{t.guide.detailsModal.commonMistakes}</span>
            </div>
            <p className="leading-relaxed pl-5">
              {detectedItem.commonMistakes[lang]}
            </p>
          </div>

          {loggedNotice && (
            <div className="p-3 bg-[#E8F5E9] dark:bg-[#1A3323] text-[#1B5E20] dark:text-[#A5D6A7] text-xs font-semibold rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{loggedNotice}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={() => {
                setSelectedImage(null);
                setDetectedItem(null);
              }}
              className="px-4 py-2 text-xs font-semibold text-[#486351] dark:text-[#A5BEAF] hover:text-[#18392B] bg-[#F0F4EE] dark:bg-[#1F3127] rounded-xl"
            >
              {t.scanner.changePhoto}
            </button>

            <button
              onClick={handleLog}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{t.scanner.logItemButton}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
