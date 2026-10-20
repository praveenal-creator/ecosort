import React, { useState } from 'react';
import { UserProgress, Language, EcoChallenge } from '../types';
import { getTranslation } from '../i18n/translations';
import { ECO_CHALLENGES } from '../data/challenges';
import { WasteIcon } from './WasteIcon';
import {
  CheckCircle2,
  Calendar,
  Sparkles,
  Trophy,
  ArrowUpRight,
  Clock
} from 'lucide-react';

interface ChallengesViewProps {
  progress: UserProgress;
  lang: Language;
  onCompleteChallenge: (challengeId: string) => void;
}

export const ChallengesView: React.FC<ChallengesViewProps> = ({
  progress,
  lang,
  onCompleteChallenge
}) => {
  const t = getTranslation(lang);
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('daily');

  const filteredChallenges = ECO_CHALLENGES.filter((c) => c.recurrence === activeTab);

  const completedCount = Object.keys(progress.completedChallenges).length;
  const totalCount = ECO_CHALLENGES.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.challenges.title}
          </h1>
          <p className="text-sm text-[#526859] dark:text-[#9FB3A5] max-w-xl">
            {t.challenges.subtitle}
          </p>
        </div>

        {/* Milestone status */}
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] px-4 py-2.5 rounded-2xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex items-center gap-3 shrink-0">
          <div className="p-2 rounded-xl bg-[#EAF3EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2]">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-[#64796B] dark:text-[#8FA899] block">
              {lang === 'en' ? 'Challenge Progress' : 'சவால் முன்னேற்றம்'}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
                {completedCount} / {totalCount}
              </span>
              <span className="text-xs text-[#5B7765] dark:text-[#8FA899] tabular-nums">
                ({completionPercentage}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recurrence Segmented Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#EAEFE6] dark:bg-[#1B2921] rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('daily')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'daily'
              ? 'bg-[#FFFFFF] dark:bg-[#253A2E] text-[#18392B] dark:text-white shadow-xs'
              : 'text-[#506656] dark:text-[#9FB3A5] hover:text-[#18392B]'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>{t.challenges.dailyTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'weekly'
              ? 'bg-[#FFFFFF] dark:bg-[#253A2E] text-[#18392B] dark:text-white shadow-xs'
              : 'text-[#506656] dark:text-[#9FB3A5] hover:text-[#18392B]'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.challenges.weeklyTab}</span>
        </button>
      </div>

      {/* Challenges List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredChallenges.map((challenge) => {
          const isCompleted = Boolean(progress.completedChallenges[challenge.id]);

          return (
            <div
              key={challenge.id}
              className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                isCompleted
                  ? 'bg-[#F9FCFA] dark:bg-[#15241C] border-[#D0E2D5] dark:border-[#244230]'
                  : 'bg-[#FFFFFF] dark:bg-[#17241D] border-[#E3E8DC] dark:border-[#263D30] hover:border-[#BACDC0] dark:hover:border-[#385B45] shadow-xs'
              }`}
            >
              <div>
                {/* Unboxed Metadata (Zero-pill compliant) */}
                <div className="flex items-center justify-between text-xs text-[#607969] dark:text-[#8FA899] mb-3">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="capitalize">{challenge.recurrence} Challenge</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.categories[challenge.category]}</span>
                  </div>

                  <span className="text-[#204E34] dark:text-[#88C6A2] font-bold tabular-nums text-xs">
                    +{challenge.points} pts
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                      isCompleted ? 'bg-[#E3EFE6] dark:bg-[#1A3323] text-[#285A3E] dark:text-[#88C6A2]' : 'bg-[#EDF3EE] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2]'
                    }`}
                  >
                    <WasteIcon name={challenge.icon} className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] leading-snug">
                      {challenge.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#546A5B] dark:text-[#A7BFB2] mt-1.5 leading-relaxed">
                      {challenge.description[lang]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action area */}
              <div className="mt-4 pt-3.5 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-between">
                <span className="text-[11px] text-[#7A8E80] dark:text-[#7A9384]">
                  {isCompleted
                    ? (lang === 'en' ? 'Points credited to your account' : 'புள்ளிகள் உங்கள் கணக்கில் சேர்க்கப்பட்டது')
                    : (lang === 'en' ? 'One-time reward per cycle' : 'சுழற்சிக்கு ஒரு முறை மட்டும்')}
                </span>

                {isCompleted ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#205033] dark:text-[#88C6A2] bg-[#EAF4ED] dark:bg-[#1A3323] rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] dark:text-[#81C784]" />
                    <span>{t.challenges.completedBadge}</span>
                  </div>
                ) : (
                  <button
                    onClick={() => onCompleteChallenge(challenge.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs"
                  >
                    <span>{t.challenges.completeAction}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Encouragement Callout */}
      <div className="bg-[#FAFBF8] dark:bg-[#18261E] rounded-3xl p-5 border border-[#E3E8DC] dark:border-[#263D30] text-center max-w-xl mx-auto space-y-2">
        <Sparkles className="w-5 h-5 text-[#3A6B4C] dark:text-[#88C6A2] mx-auto" />
        <p className="text-xs sm:text-sm text-[#536B5B] dark:text-[#A7BFB2] leading-relaxed">
          {t.challenges.encouragement}
        </p>
      </div>
    </div>
  );
};
