import React from 'react';
import { UserProgress, Language, WasteCategory } from '../types';
import { getTranslation } from '../i18n/translations';
import {
  Sparkles,
  CheckCircle2,
  Flame,
  Award,
  RotateCcw,
  BarChart2,
  Trash2,
  TreePine,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import compostImage from '../assets/images/ecosort_compost_nature_1792480939249.jpg';

interface ProgressViewProps {
  progress: UserProgress;
  lang: Language;
  onOpenResetConfirm: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  progress,
  lang,
  onOpenResetConfirm
}) => {
  const t = getTranslation(lang);

  const totalSorted = progress.sortedItemsCount || 1;

  const streams: Array<{
    key: WasteCategory;
    label: string;
    color: string;
    barColor: string;
    count: number;
  }> = [
    {
      key: 'wet',
      label: t.categories.wet,
      color: 'text-[#2D6A4F] dark:text-[#88C6A2]',
      barColor: 'bg-[#2D6A4F] dark:bg-[#346F4D]',
      count: progress.categoryCounts.wet || 0
    },
    {
      key: 'dry',
      label: t.categories.dry,
      color: 'text-[#1D63B8] dark:text-[#81B4E5]',
      barColor: 'bg-[#1D63B8] dark:bg-[#2563EB]',
      count: progress.categoryCounts.dry || 0
    },
    {
      key: 'hazardous',
      label: t.categories.hazardous,
      color: 'text-[#C34A26] dark:text-[#F39C6B]',
      barColor: 'bg-[#C34A26] dark:bg-[#EA580C]',
      count: progress.categoryCounts.hazardous || 0
    },
    {
      key: 'ewaste',
      label: t.categories.ewaste,
      color: 'text-[#6A3289] dark:text-[#D197EE]',
      barColor: 'bg-[#6A3289] dark:bg-[#9333EA]',
      count: progress.categoryCounts.ewaste || 0
    },
    {
      key: 'sanitary',
      label: t.categories.sanitary,
      color: 'text-[#A07018] dark:text-[#E0A86F]',
      barColor: 'bg-[#A07018] dark:bg-[#CA8A04]',
      count: progress.categoryCounts.sanitary || 0
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.progress.title}
          </h1>
          <p className="text-sm text-[#526859] dark:text-[#9FB3A5] max-w-xl">
            {t.progress.subtitle}
          </p>
        </div>

        <button
          onClick={onOpenResetConfirm}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#8B2626] dark:text-[#FCA5A5] bg-[#FDF2F2] dark:bg-[#381B1B] hover:bg-[#FBE4E4] border border-[#F2C2C2] dark:border-[#522525] rounded-xl transition-all self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{lang === 'en' ? 'Reset Progress' : 'முன்னேற்றத்தை மீட்டமை'}</span>
        </button>
      </div>

      {/* High-level stats summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">{t.dashboard.stats.points}</span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">{progress.totalPoints}</span>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">{t.dashboard.stats.sorted}</span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">{progress.sortedItemsCount}</span>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">{t.dashboard.stats.streak}</span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">{progress.streakDays}</span>
        </div>
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">{t.practice.scoreLabel}</span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">{progress.practiceScore}</span>
        </div>
      </div>

      {/* Waste Stream Breakdown & Impact Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Stream Breakdown Bars */}
        <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base sm:text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {t.progress.categoryBreakdownTitle}
              </h3>
              <BarChart2 className="w-5 h-5 text-[#4E755E] dark:text-[#88C6A2]" />
            </div>

            <div className="space-y-4">
              {streams.map((stream) => {
                const percentage = totalSorted > 0 ? Math.round((stream.count / totalSorted) * 100) : 0;
                return (
                  <div key={stream.key} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#18392B] dark:text-[#E8F3ED]">{stream.label}</span>
                      <div className="flex items-center gap-2 font-medium">
                        <span className="text-[#64796B] dark:text-[#8EA899] tabular-nums">{stream.count} items</span>
                        <span className="text-[#18392B] dark:text-[#E8F3ED] font-bold tabular-nums">({percentage}%)</span>
                      </div>
                    </div>

                    <div className="w-full bg-[#EAEFE7] dark:bg-[#203328] h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${stream.barColor}`}
                        style={{ width: `${Math.max(percentage, stream.count > 0 ? 5 : 0)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-between text-xs text-[#556D5D] dark:text-[#8EA899]">
            <span>{lang === 'en' ? 'Calculated from local browser activity' : 'உலாவியில் சேமிக்கப்பட்ட தரவுகளிலிருந்து'}</span>
            <span className="font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
              {progress.sortedItemsCount} {lang === 'en' ? 'Total Logged' : 'மொத்தம்'}
            </span>
          </div>
        </div>

        {/* Environmental Impact & Nature Visual Card */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#234937] dark:bg-[#12241A] text-white border border-[#1A382A] dark:border-[#224430] shadow-xs flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-[#A7D7B5] uppercase">
              {lang === 'en' ? 'Living Circular Impact' : 'இயற்கை சுழற்சி தாக்கம்'}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#FBFBF7] leading-snug">
              {lang === 'en'
                ? 'Preventing Landfill Methane & Toxic Leaching'
                : 'குப்பைமேடு மீத்தேன் & நிலத்தடி நீர் நஞ்சாவதைத் தடுத்தல்'}
            </h4>
            <p className="text-xs sm:text-sm text-[#D7E6DB] leading-relaxed">
              {lang === 'en'
                ? 'Separating organic wet waste diverts moisture from dumps, preventing spontaneous toxic fires and producing nutrient-rich compost for local soil.'
                : 'ஈரக்கழிவை தனியாக பிரிப்பது குப்பைமேட்டில் தீப்பிடிப்பதைத் தடுத்து, மண்ணை செழுமைப்படுத்தும் இயற்கை உரமாக மாற உதவுகிறது.'}
            </p>
          </div>

          <div className="relative h-44 w-full mt-2">
            <img
              src={compostImage}
              alt="Rich compost soil with sprouting seedling"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#234937] dark:from-[#12241A] via-transparent to-transparent opacity-80" />
          </div>
        </div>
      </div>

      {/* Comprehensive Activity History */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-[#18392B] dark:text-[#E8F3ED] mb-4">
          {t.dashboard.recentActivityTitle}
        </h3>

        {progress.recentActivity.length === 0 ? (
          <p className="text-xs sm:text-sm text-[#6C8374] dark:text-[#8EA899] py-6 text-center">
            {t.dashboard.noActivityYet}
          </p>
        ) : (
          <div className="divide-y divide-[#EEF2EA] dark:divide-[#22352A]">
            {progress.recentActivity.map((act) => (
              <div key={act.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F1EB] dark:bg-[#203629] text-[#285A3E] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-[#18392B] dark:text-[#E8F3ED] truncate">
                      {act.title[lang]}
                    </p>
                    <span className="text-[11px] text-[#718778] dark:text-[#8EA899]">
                      {new Date(act.timestamp).toLocaleDateString([], {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#205234] dark:text-[#88C6A2] tabular-nums shrink-0">
                  +{act.pointsEarned} pts
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
