import React, { useState } from 'react';
import { UserProgress, Language, WasteItem } from '../types';
import { getTranslation } from '../i18n/translations';
import { WASTE_ITEMS } from '../data/wasteItems';
import { ECO_CHALLENGES } from '../data/challenges';
import { WasteIcon } from './WasteIcon';
import { calculateUserLevel, calculateEnvironmentalImpact } from '../utils/storage';
import {
  Sparkles,
  Flame,
  Award,
  CheckCircle2,
  ArrowRight,
  Plus,
  Compass,
  Lightbulb,
  ShieldAlert,
  ChevronRight,
  Camera,
  ClipboardList,
  GraduationCap,
  Scale,
  Droplet,
  TreePine,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import heroImage from '../assets/images/ecosort_hero_botanical_1792480939427.jpg';

interface DashboardViewProps {
  progress: UserProgress;
  lang: Language;
  onNavigate: (tab: string) => void;
  onSelectItem: (item: WasteItem) => void;
  onLogSortedItem: (item: WasteItem) => void;
  onCompleteChallenge: (challengeId: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  lang,
  onNavigate,
  onSelectItem,
  onLogSortedItem,
  onCompleteChallenge
}) => {
  const t = getTranslation(lang);
  const [quickQuery, setQuickQuery] = useState('');
  const [selectedQuickId, setSelectedQuickId] = useState('');
  const [logSuccessMsg, setLogSuccessMsg] = useState<string | null>(null);

  // Daily tip calculation based on day of year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const dailyTip = t.tips[dayOfYear % t.tips.length];

  // Daily featured challenge
  const dailyChallenge = ECO_CHALLENGES.find((c) => c.recurrence === 'daily') || ECO_CHALLENGES[0];
  const isDailyCompleted = Boolean(progress.completedChallenges[dailyChallenge.id]);

  // Gamification Level Calculation
  const levelInfo = calculateUserLevel(progress.totalPoints);

  // Environmental Impact Calculation
  const impact = calculateEnvironmentalImpact(progress);

  // Quick items filtering
  const matchingItems = quickQuery.trim()
    ? WASTE_ITEMS.filter((item) =>
        item.name[lang].toLowerCase().includes(quickQuery.toLowerCase()) ||
        item.name.en.toLowerCase().includes(quickQuery.toLowerCase())
      ).slice(0, 5)
    : WASTE_ITEMS.slice(0, 5);

  const handleQuickLog = () => {
    const itemToLog = WASTE_ITEMS.find((item) => item.id === selectedQuickId) || matchingItems[0];
    if (itemToLog) {
      onLogSortedItem(itemToLog);
      const msg = t.dashboard.logSuccess.replace('{points}', String(itemToLog.ecoPoints));
      setLogSuccessMsg(msg);
      setTimeout(() => setLogSuccessMsg(null), 3500);
      setQuickQuery('');
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner with editorial image & daily tip */}
      <div className="relative overflow-hidden rounded-3xl bg-[#1B382B] dark:bg-[#11241C] text-white shadow-md border border-[#234937] dark:border-[#224433]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px]">
          {/* Left Text Zone */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-[#A7D7B5] uppercase">
                {t.dashboard.welcome}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FBFBF7] leading-tight">
                {lang === 'en'
                  ? 'Segregate thoughtfully. Nourish the soil.'
                  : 'பொறுப்புடன் பிரிப்போம். பூமியைக் காப்போம்.'}
              </h1>
              <p className="text-sm sm:text-base text-[#D4E3D7] leading-relaxed max-w-xl">
                {t.dashboard.welcomeSub}
              </p>
            </div>

            {/* Daily sustainability tip card */}
            <div className="mt-6 pt-5 border-t border-[#2F5240] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#264D3A] text-[#C7E6D3] shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4 text-[#E2F1AF]" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-[#A9CBB5]">
                  {t.dashboard.dailyTipTitle}
                </span>
                <p className="text-xs sm:text-sm text-[#E7F0E9] leading-snug">
                  {dailyTip}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Zone with botanical photography */}
          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full">
            <img
              src={heroImage}
              alt="Eco-friendly reusable containers and botanical leaves"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center absolute inset-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1B382B] dark:from-[#11241C] via-transparent to-transparent opacity-85 lg:opacity-75" />
          </div>
        </div>
      </div>

      {/* Gamification Level Progression Bar */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF2EC] dark:bg-[#1E372B] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center font-bold text-sm">
              L{levelInfo.levelNumber}
            </div>
            <div>
              <span className="text-xs text-[#5C7162] dark:text-[#8EA899] uppercase tracking-wider font-semibold block">
                {t.dashboard.level} {levelInfo.levelNumber}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {levelInfo.title[lang]}
              </h2>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
              {levelInfo.currentXp} / {levelInfo.requiredXp} XP
            </span>
            <span className="text-[11px] text-[#718778] dark:text-[#8FA899] block">
              {levelInfo.percentage}% {t.dashboard.xpProgress}
            </span>
          </div>
        </div>

        <div className="w-full bg-[#EAEFE7] dark:bg-[#203328] h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-[#234937] dark:bg-[#346F4D] transition-all duration-500"
            style={{ width: `${levelInfo.percentage}%` }}
          />
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 sm:p-5 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <div className="flex items-center justify-between text-[#5B7362] dark:text-[#8EA899] mb-2">
            <span className="text-xs font-medium">{t.dashboard.stats.points}</span>
            <div className="p-1.5 rounded-lg bg-[#EAF5ED] dark:bg-[#1E372B] text-[#234937] dark:text-[#88C6A2]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {progress.totalPoints}
          </div>
          <span className="text-[11px] text-[#788E7E] dark:text-[#8FA899] mt-1 block">
            {lang === 'en' ? 'Lifetime points earned' : 'மொத்த வாழ்நாள் புள்ளிகள்'}
          </span>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 sm:p-5 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <div className="flex items-center justify-between text-[#5B7362] dark:text-[#8EA899] mb-2">
            <span className="text-xs font-medium">{t.dashboard.stats.sorted}</span>
            <div className="p-1.5 rounded-lg bg-[#EBF3FB] dark:bg-[#172E44] text-[#205282] dark:text-[#81B4E5]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {progress.sortedItemsCount}
          </div>
          <span className="text-[11px] text-[#788E7E] dark:text-[#8FA899] mt-1 block">
            {lang === 'en' ? 'Items diverted from dump' : 'பிரித்தெடுக்கப்பட்ட கழிவுகள்'}
          </span>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 sm:p-5 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <div className="flex items-center justify-between text-[#5B7362] dark:text-[#8EA899] mb-2">
            <span className="text-xs font-medium">{t.dashboard.stats.streak}</span>
            <div className="p-1.5 rounded-lg bg-[#FDF0E9] dark:bg-[#3D2317] text-[#B85728] dark:text-[#F39C6B]">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {progress.streakDays}
          </div>
          <span className="text-[11px] text-[#788E7E] dark:text-[#8FA899] mt-1 block">
            {lang === 'en' ? 'Consecutive days active' : 'தொடர் செயலில் உள்ள நாட்கள்'}
          </span>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 sm:p-5 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <div className="flex items-center justify-between text-[#5B7362] dark:text-[#8EA899] mb-2">
            <span className="text-xs font-medium">{t.dashboard.stats.challenges}</span>
            <div className="p-1.5 rounded-lg bg-[#F5EEF9] dark:bg-[#321740] text-[#6A3289] dark:text-[#D197EE]">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {Object.keys(progress.completedChallenges).length}
          </div>
          <span className="text-[11px] text-[#788E7E] dark:text-[#8FA899] mt-1 block">
            {lang === 'en' ? 'Goals accomplished' : 'நிறைவேற்றிய சவால்கள்'}
          </span>
        </div>
      </div>

      {/* Environmental Impact Estimate Card */}
      <div className="bg-[#FAFBF9] dark:bg-[#16231C] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <TreePine className="w-5 h-5 text-[#2E7D32] dark:text-[#88C6A2]" />
            <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED]">
              {t.dashboard.impactTitle}
            </h3>
          </div>
          <span className="text-[11px] text-[#647C6D] dark:text-[#8EA899] italic max-w-md">
            {t.dashboard.impactDisclaimer}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="bg-[#FFFFFF] dark:bg-[#1B2921] p-3.5 rounded-2xl border border-[#DFE6DC] dark:border-[#22352A]">
            <span className="text-[11px] text-[#5A7161] dark:text-[#8EA899] block mb-1">
              {t.dashboard.impactMetrics.landfillDiverted}
            </span>
            <span className="text-xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
              {impact.landfillKgDiverted} kg
            </span>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#1B2921] p-3.5 rounded-2xl border border-[#DFE6DC] dark:border-[#22352A]">
            <span className="text-[11px] text-[#5A7161] dark:text-[#8EA899] block mb-1">
              {t.dashboard.impactMetrics.co2eAvoided}
            </span>
            <span className="text-xl font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
              {impact.co2eAvoidedKg} kg
            </span>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#1B2921] p-3.5 rounded-2xl border border-[#DFE6DC] dark:border-[#22352A]">
            <span className="text-[11px] text-[#5A7161] dark:text-[#8EA899] block mb-1">
              {t.dashboard.impactMetrics.waterSaved}
            </span>
            <span className="text-xl font-bold text-[#1B5282] dark:text-[#81B4E5] tabular-nums">
              {impact.waterSavedLiters} L
            </span>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#1B2921] p-3.5 rounded-2xl border border-[#DFE6DC] dark:border-[#22352A]">
            <span className="text-[11px] text-[#5A7161] dark:text-[#8EA899] block mb-1">
              {t.dashboard.impactMetrics.compostProduced}
            </span>
            <span className="text-xl font-bold text-[#7E5224] dark:text-[#E0A86F] tabular-nums">
              {impact.soilCompostKg} kg
            </span>
          </div>
        </div>
      </div>

      {/* Feature Shortcut Banner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => onNavigate('scanner')}
          className="text-left bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] hover:border-[#234937] dark:hover:border-[#7CB895] transition-all flex items-center justify-between group shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#18392B] dark:text-[#E8F3ED] block">
                {t.nav.scanner}
              </span>
              <span className="text-[11px] text-[#63796A] dark:text-[#8EA899]">
                {lang === 'en' ? 'Photo item guide' : 'புகைப்பட வழிகாட்டி'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8BA092] group-hover:text-[#18392B] dark:group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={() => onNavigate('log')}
          className="text-left bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] hover:border-[#234937] dark:hover:border-[#7CB895] transition-all flex items-center justify-between group shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
              <ClipboardList className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#18392B] dark:text-[#E8F3ED] block">
                {t.nav.log}
              </span>
              <span className="text-[11px] text-[#63796A] dark:text-[#8EA899]">
                {lang === 'en' ? 'Personal waste logs' : 'தனிப்பட்ட பதிவேடு'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8BA092] group-hover:text-[#18392B] dark:group-hover:text-white transition-colors" />
        </button>

        <button
          onClick={() => onNavigate('hub')}
          className="text-left bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] hover:border-[#234937] dark:hover:border-[#7CB895] transition-all flex items-center justify-between group shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#18392B] dark:text-[#E8F3ED] block">
                {t.nav.hub}
              </span>
              <span className="text-[11px] text-[#63796A] dark:text-[#8EA899]">
                {lang === 'en' ? 'Myths & composting' : 'கற்றல் & வினாடி வினா'}
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8BA092] group-hover:text-[#18392B] dark:group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Two Column Grid: Daily Challenge + Quick Logger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Daily Challenge Card */}
        <div className="lg:col-span-6 bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-[#285A3E] dark:text-[#88C6A2] bg-[#EAF2EC] dark:bg-[#1E372B] px-2.5 py-1 rounded-md">
                {t.dashboard.dailyChallengeTitle}
              </span>
              <span className="text-xs font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
                +{dailyChallenge.points} pts
              </span>
            </div>

            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F1EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                <WasteIcon name={dailyChallenge.icon} className="w-5 h-5 text-[#234937] dark:text-[#88C6A2]" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#18392B] dark:text-[#E8F3ED]">
                  {dailyChallenge.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D7263] dark:text-[#9FB3A5] mt-1 leading-relaxed">
                  {dailyChallenge.description[lang]}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('challenges')}
              className="text-xs font-medium text-[#4B6856] dark:text-[#88C6A2] hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <span>{lang === 'en' ? 'View all challenges' : 'அனைத்து சவால்கள்'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {isDailyCompleted ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] bg-[#EAF4ED] dark:bg-[#1A3323] rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] dark:text-[#81C784]" />
                <span>{t.challenges.completedBadge}</span>
              </span>
            ) : (
              <button
                onClick={() => onCompleteChallenge(dailyChallenge.id)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-lg shadow-xs"
              >
                {t.challenges.completeAction}
              </button>
            )}
          </div>
        </div>

        {/* Quick Segregation Logger */}
        <div className="lg:col-span-6 bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-[#18392B] dark:text-[#E8F3ED]">
                {t.dashboard.quickSortTitle}
              </h3>
              <button
                onClick={() => onNavigate('guide')}
                className="text-xs font-medium text-[#3D634C] dark:text-[#88C6A2] hover:underline"
              >
                {t.dashboard.viewAllGuide}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#5D7263] dark:text-[#9FB3A5] mb-4">
              {t.dashboard.quickSortSub}
            </p>

            {/* Quick search input */}
            <div className="relative mb-3">
              <input
                type="text"
                value={quickQuery}
                onChange={(e) => setQuickQuery(e.target.value)}
                placeholder={t.dashboard.quickSortPlaceholder}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] focus:border-[#234937] focus:ring-1 focus:ring-[#234937] bg-[#FAFBF8] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED] placeholder:text-[#889B8D]"
              />
            </div>

            {/* Suggestions list */}
            <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
              {matchingItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedQuickId(item.id)}
                  className={`flex items-center justify-between p-2 rounded-xl border cursor-pointer transition-colors ${
                    selectedQuickId === item.id || (!selectedQuickId && matchingItems[0].id === item.id)
                      ? 'bg-[#EBF3EC] dark:bg-[#1E372B] border-[#A9CBB2] dark:border-[#385B45] text-[#18392B] dark:text-[#E8F3ED]'
                      : 'bg-[#FFFFFF] dark:bg-[#17241D] border-[#E8EDE5] dark:border-[#203328] hover:bg-[#F6FAF6] dark:hover:bg-[#1B2B21] text-[#33463B] dark:text-[#CDE3D5]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#E2ECE4] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                      <WasteIcon name={item.icon} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium truncate">
                      {item.name[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-semibold text-[#285A3E] dark:text-[#88C6A2] tabular-nums">
                      +{item.ecoPoints} pts
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="text-[11px] text-[#698272] dark:text-[#9FB3A5] hover:text-[#18392B] p-1"
                      title="View disposal steps"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {logSuccessMsg && (
              <div className="mt-3 p-2.5 bg-[#E8F5E9] dark:bg-[#1A3323] text-[#1B5E20] dark:text-[#A5D6A7] text-xs font-medium rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{logSuccessMsg}</span>
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-end">
            <button
              onClick={handleQuickLog}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-lg shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.dashboard.logAction}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Log & Municipal Caution Notice */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Recent Activity */}
        <div className="lg:col-span-8 bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#18392B] dark:text-[#E8F3ED]">
              {t.dashboard.recentActivityTitle}
            </h3>
            <button
              onClick={() => onNavigate('progress')}
              className="text-xs font-medium text-[#3D634C] dark:text-[#88C6A2] hover:underline"
            >
              {lang === 'en' ? 'View Full Progress' : 'முழு முன்னேற்றத்தைப் பார்'}
            </button>
          </div>

          {progress.recentActivity.length === 0 ? (
            <div className="py-8 text-center text-[#6A8172] dark:text-[#8FA899]">
              <Compass className="w-8 h-8 mx-auto mb-2 text-[#9FB5A6]" />
              <p className="text-xs sm:text-sm">{t.dashboard.noActivityYet}</p>
            </div>
          ) : (
            <div className="divide-y divide-[#F0F3EC] dark:divide-[#22352A]">
              {progress.recentActivity.slice(0, 5).map((act) => (
                <div key={act.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#EDF3EE] dark:bg-[#203629] text-[#285A3E] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-[#1E3327] dark:text-[#E8F3ED] truncate">
                        {act.title[lang]}
                      </p>
                      <span className="text-[11px] text-[#788E7E] dark:text-[#8FA899]">
                        {new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums shrink-0">
                    +{act.pointsEarned} pts
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Municipal Notice Callout Banner */}
        <div className="lg:col-span-4 bg-[#FAF9F5] dark:bg-[#1C241E] rounded-3xl p-6 border border-[#DFE6DC] dark:border-[#2A3F32] shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-[#9A5B2D] dark:text-[#DEAC6A]">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Municipal Advisory' : 'நகராட்சி வழிகாட்டல்'}
            </h4>
          </div>
          <p className="text-xs text-[#526458] dark:text-[#A7BFB2] leading-relaxed">
            {t.app.generalGuidanceNotice}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('guide')}
              className="text-xs font-medium text-[#234937] dark:text-[#88C6A2] hover:underline inline-flex items-center gap-1"
            >
              <span>{lang === 'en' ? 'Check item handling protocols' : 'கழிவு விதிகளைப் பார்க்கவும்'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
