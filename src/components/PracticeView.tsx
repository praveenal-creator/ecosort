import React, { useState } from 'react';
import { UserProgress, Language, WasteItem, WasteCategory } from '../types';
import { getTranslation } from '../i18n/translations';
import { WASTE_ITEMS } from '../data/wasteItems';
import { WasteIcon } from './WasteIcon';
import { triggerEcoConfetti } from '../utils/confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Flame,
  ArrowRight
} from 'lucide-react';

interface PracticeViewProps {
  progress: UserProgress;
  lang: Language;
  onAnswerPractice: (isCorrect: boolean, item: WasteItem) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  lang,
  onAnswerPractice
}) => {
  const t = getTranslation(lang);

  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * WASTE_ITEMS.length));
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(null);
  const [answered, setAnswered] = useState(false);
  const [streak, setStreak] = useState(0);

  const currentItem = WASTE_ITEMS[currentIndex];

  const binOptions: Array<{ category: WasteCategory; label: string; desc: string; color: string; border: string }> = [
    {
      category: 'wet',
      label: t.bins.green,
      desc: lang === 'en' ? 'Kitchen peels, food leftovers & organic yard waste' : 'சமையலறை காய்கறி கழிவுகள் & மக்கும் இலைகள்',
      color: 'bg-[#EAF4ED] dark:bg-[#1A3323] text-[#204F34] dark:text-[#A7D7B5] hover:bg-[#D7EBDC]',
      border: 'border-[#B4D7BF] dark:border-[#2E5A3D]'
    },
    {
      category: 'dry',
      label: t.bins.blue,
      desc: lang === 'en' ? 'Clean paper, plastic bottles, metal cans & milk pouches' : 'சுத்தமான காகிதம், பிளாஸ்டிக் பாட்டில்கள் & டின்கள்',
      color: 'bg-[#EBF3FB] dark:bg-[#16293D] text-[#1B4D7E] dark:text-[#81B4E5] hover:bg-[#D5E6F7]',
      border: 'border-[#ABCDEB] dark:border-[#2A496B]'
    },
    {
      category: 'hazardous',
      label: t.bins.red,
      desc: lang === 'en' ? 'Batteries, CFL bulbs, medicines, paint & toxic chemicals' : 'பேட்டரிகள், மருந்துகள், டியூப்லைட் & ரசாயனங்கள்',
      color: 'bg-[#FDF1EE] dark:bg-[#381B16] text-[#9A3519] dark:text-[#F39C6B] hover:bg-[#FAE1DC]',
      border: 'border-[#F2BEB3] dark:border-[#5C2B22]'
    },
    {
      category: 'ewaste',
      label: t.bins.purple,
      desc: lang === 'en' ? 'Old chargers, phones, cables & dead electronics' : 'பழைய சார்ஜர்கள், போன்கள் & மின்னணுக் கருவிகள்',
      color: 'bg-[#F7EEFB] dark:bg-[#331840] text-[#5C2376] dark:text-[#D197EE] hover:bg-[#EFDCF6]',
      border: 'border-[#E0BAEC] dark:border-[#55276B]'
    },
    {
      category: 'sanitary',
      label: t.bins.yellow,
      desc: lang === 'en' ? 'Wrapped pads, bandages, razor blades & face masks' : 'செய்தித்தாளில் சுற்றிய சானிட்டரி & மருத்துவ கழிவுகள்',
      color: 'bg-[#FCF9EC] dark:bg-[#332A15] text-[#7A5B0B] dark:text-[#E8BD68] hover:bg-[#F8F1D2]',
      border: 'border-[#EBDE9E] dark:border-[#57461F]'
    }
  ];

  const handleSelectBin = (category: WasteCategory) => {
    if (answered) return;
    setSelectedCategory(category);
    setAnswered(true);

    const isCorrect = category === currentItem.category;
    if (isCorrect) {
      setStreak((s) => s + 1);
      triggerEcoConfetti();
    } else {
      setStreak(0);
    }
    onAnswerPractice(isCorrect, currentItem);
  };

  const handleNext = () => {
    let nextIdx = Math.floor(Math.random() * WASTE_ITEMS.length);
    if (nextIdx === currentIndex) {
      nextIdx = (currentIndex + 1) % WASTE_ITEMS.length;
    }
    setCurrentIndex(nextIdx);
    setSelectedCategory(null);
    setAnswered(false);
  };

  const isCurrentCorrect = selectedCategory === currentItem.category;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header & Streak counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.practice.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#526859] dark:text-[#9FB3A5] mt-1">
            {t.practice.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#FFFFFF] dark:bg-[#17241D] px-3.5 py-2 rounded-xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex items-center gap-2 text-xs font-semibold text-[#18392B] dark:text-[#E8F3ED]">
            <Flame className="w-4 h-4 text-[#B85728]" />
            <span>{t.practice.streakLabel}:</span>
            <span className="font-bold tabular-nums text-sm text-[#B85728]">{streak}</span>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#17241D] px-3.5 py-2 rounded-xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex items-center gap-2 text-xs font-semibold text-[#18392B] dark:text-[#E8F3ED]">
            <Sparkles className="w-4 h-4 text-[#204F34] dark:text-[#88C6A2]" />
            <span>{t.practice.scoreLabel}:</span>
            <span className="font-bold tabular-nums text-sm text-[#204F34] dark:text-[#88C6A2]">{progress.practiceScore}</span>
          </div>
        </div>
      </div>

      {/* Waste Item Card for Practice */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 sm:p-8 border border-[#DFE6DC] dark:border-[#263D30] shadow-xs text-center space-y-4">
        <span className="text-xs font-semibold text-[#486351] dark:text-[#8EA899] uppercase tracking-wider">
          {t.practice.questionPrompt}
        </span>

        <div className="w-16 h-16 rounded-2xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center mx-auto shadow-xs">
          <WasteIcon name={currentItem.icon} className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED]">
            {currentItem.name[lang]}
          </h2>
          {lang === 'ta' && (
            <span className="text-xs text-[#7B8E81] dark:text-[#8EA899] block mt-1">
              {currentItem.name.en}
            </span>
          )}
          <p className="text-xs sm:text-sm text-[#566D5E] dark:text-[#A7BFB2] mt-2 max-w-lg mx-auto">
            {currentItem.description[lang]}
          </p>
        </div>
      </div>

      {/* Disposal Bin Options */}
      <div className="space-y-2.5">
        {binOptions.map((opt) => {
          const isSelected = selectedCategory === opt.category;
          const isTargetCategory = currentItem.category === opt.category;

          let cardStyle = `${opt.color} ${opt.border}`;
          if (answered) {
            if (isTargetCategory) {
              cardStyle = 'bg-[#E8F5E9] dark:bg-[#193622] border-[#66BB6A] text-[#1B5E20] dark:text-[#A5D6A7] ring-2 ring-[#2E7D32]';
            } else if (isSelected && !isTargetCategory) {
              cardStyle = 'bg-[#FFEBEE] dark:bg-[#381B1B] border-[#EF9A9A] text-[#B71C1C] dark:text-[#FCA5A5]';
            } else {
              cardStyle = 'bg-[#F8F9F7] dark:bg-[#131D17] border-[#E3E8DC] dark:border-[#22352A] text-[#869A8C] dark:text-[#5F7567] opacity-60';
            }
          }

          return (
            <button
              key={opt.category}
              disabled={answered}
              onClick={() => handleSelectBin(opt.category)}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${cardStyle} min-h-[56px] focus:outline-none`}
            >
              <div className="space-y-0.5">
                <span className="text-sm font-bold block">{opt.label}</span>
                <span className="text-xs opacity-90 block">{opt.desc}</span>
              </div>

              {answered && isTargetCategory && (
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-[#81C784] shrink-0" />
              )}
              {answered && isSelected && !isTargetCategory && (
                <XCircle className="w-5 h-5 text-[#C62828] dark:text-[#F87171] shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback & Educational Explanations */}
      {answered && (
        <div
          className={`rounded-2xl p-5 border space-y-3 ${
            isCurrentCorrect
              ? 'bg-[#EAF5EC] dark:bg-[#193622] border-[#A8D7B5] dark:border-[#2C5739] text-[#1B4D2E] dark:text-[#CBE5D6]'
              : 'bg-[#FFF3E0] dark:bg-[#332213] border-[#FFE082] dark:border-[#54381C] text-[#824403] dark:text-[#E8B688]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCurrentCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-[#2E7D32] dark:text-[#81C784]" />
                  <span className="text-sm font-bold">{t.practice.correctFeedback}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-[#D84315] dark:text-[#F87171]" />
                  <span className="text-sm font-bold">{t.practice.wrongFeedback}</span>
                </>
              )}
            </div>

            {isCurrentCorrect && (
              <span className="text-xs font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
                {t.practice.pointsEarnedMsg}
              </span>
            )}
          </div>

          {/* Reasoning */}
          <div className="text-xs space-y-1.5 pt-2 border-t border-black/10 dark:border-white/10">
            <div>
              <strong>{lang === 'en' ? 'Disposal Rule: ' : 'விதி: '}</strong>
              <span>{currentItem.disposal[lang]}</span>
            </div>
            <div>
              <strong>{lang === 'en' ? 'Preparation: ' : 'தயாரிப்பு: '}</strong>
              <span>{currentItem.preparation[lang]}</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs"
            >
              <span>{t.practice.nextQuestion}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
