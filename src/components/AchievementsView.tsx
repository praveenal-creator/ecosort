import React from 'react';
import { UserProgress, Language, Achievement } from '../types';
import { getTranslation } from '../i18n/translations';
import { ACHIEVEMENTS } from '../data/achievements';
import { WasteIcon } from './WasteIcon';
import { Award, Lock, CheckCircle2 } from 'lucide-react';

interface AchievementsViewProps {
  progress: UserProgress;
  lang: Language;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({
  progress,
  lang
}) => {
  const t = getTranslation(lang);

  const unlockedSet = new Set(progress.unlockedAchievementIds || []);
  const totalChallengesCompleted = Object.keys(progress.completedChallenges || {}).length;
  const hazardousTotal = (progress.categoryCounts.hazardous || 0) + (progress.categoryCounts.ewaste || 0);
  const totalLogs = progress.wasteLogs ? progress.wasteLogs.length : 0;

  const getMetricCurrentValue = (ach: Achievement): number => {
    switch (ach.metric) {
      case 'totalSorted':
        return progress.sortedItemsCount;
      case 'challengesCompleted':
        return totalChallengesCompleted;
      case 'streakDays':
        return progress.streakDays;
      case 'wetSorted':
        return progress.categoryCounts.wet;
      case 'drySorted':
        return progress.categoryCounts.dry;
      case 'hazardousSorted':
        return hazardousTotal;
      case 'practiceScore':
        return progress.practiceScore;
      case 'logsCount':
        return totalLogs;
      default:
        return 0;
    }
  };

  const unlockedCount = progress.unlockedAchievementIds.length;
  const totalCount = ACHIEVEMENTS.length;

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.achievements.title}
          </h1>
          <p className="text-sm text-[#526859] dark:text-[#9FB3A5] max-w-xl">
            {t.achievements.subtitle}
          </p>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] px-4 py-2.5 rounded-2xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex items-center gap-3 shrink-0">
          <div className="p-2 rounded-xl bg-[#EAF3EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-[#64796B] dark:text-[#8FA899] block">
              {lang === 'en' ? 'Badges Earned' : 'பெற்ற பதக்கங்கள்'}
            </span>
            <span className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
              {t.achievements.unlockedCount
                .replace('{unlocked}', String(unlockedCount))
                .replace('{total}', String(totalCount))}
            </span>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map((ach) => {
          const isUnlocked = unlockedSet.has(ach.id);
          const currentVal = getMetricCurrentValue(ach);
          const progressPercent = Math.min(100, Math.round((currentVal / ach.targetValue) * 100));

          return (
            <div
              key={ach.id}
              className={`rounded-3xl p-5 border flex flex-col justify-between transition-all ${
                isUnlocked
                  ? 'bg-[#FFFFFF] dark:bg-[#17241D] border-[#B9CEBE] dark:border-[#2E543D] shadow-xs'
                  : 'bg-[#F9FAF7] dark:bg-[#131E18] border-[#E3E8DC] dark:border-[#22352A] opacity-75'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isUnlocked
                        ? 'bg-[#234937] dark:bg-[#2A573F] text-white shadow-xs'
                        : 'bg-[#E7ECE3] dark:bg-[#1D2C23] text-[#7A8E80]'
                    }`}
                  >
                    <WasteIcon name={ach.icon} className="w-6 h-6" />
                  </div>

                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#234937] dark:text-[#88C6A2] bg-[#EAF4ED] dark:bg-[#1A3323] px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t.achievements.unlockedOn}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7A8E80] dark:text-[#6D8576]">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{t.achievements.locked}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] leading-snug">
                  {ach.title[lang]}
                </h3>
                <p className="text-xs text-[#566B5C] dark:text-[#A7BFB2] mt-1.5 leading-relaxed">
                  {ach.description[lang]}
                </p>
              </div>

              {/* Progress bar and numeric tracking */}
              <div className="mt-5 pt-3.5 border-t border-[#EEF2EA] dark:border-[#22352A] space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-[#63796A] dark:text-[#8EA899]">
                  <span>{lang === 'en' ? 'Requirement' : 'தேவை'}</span>
                  <span className="font-semibold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
                    {Math.min(currentVal, ach.targetValue)} / {ach.targetValue}
                  </span>
                </div>

                <div className="w-full bg-[#E8EDE4] dark:bg-[#203328] h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      isUnlocked ? 'bg-[#234937] dark:bg-[#346F4D]' : 'bg-[#769380]'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
