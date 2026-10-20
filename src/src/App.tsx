import React, { useState, useEffect } from 'react';
import { UserProgress, Language, Theme, WasteItem, WasteLogRecord, RecyclingCenter } from './types';
import {
  loadUserProgress,
  saveUserProgress,
  clearUserProgress,
  updateStreak,
  evaluateAchievements,
  loadStoredLanguage,
  saveStoredLanguage,
  loadStoredTheme,
  saveStoredTheme,
  applyThemeToDocument,
  getTodayDateString
} from './utils/storage';
import { getTranslation } from './i18n/translations';
import { triggerEcoConfetti } from './utils/confetti';
import { TopNav } from './components/TopNav';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DashboardView } from './components/DashboardView';
import { WasteGuideView } from './components/WasteGuideView';
import { WasteScannerView } from './components/WasteScannerView';
import { WasteLogView } from './components/WasteLogView';
import { LearningHubView } from './components/LearningHubView';
import { EcoMapView } from './components/EcoMapView';
import { ChallengesView } from './components/ChallengesView';
import { AchievementsView } from './components/AchievementsView';
import { ProgressView } from './components/ProgressView';
import { PracticeView } from './components/PracticeView';
import { SettingsView } from './components/SettingsView';
import { ItemDetailModal } from './components/ItemDetailModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { ExportZipModal } from './components/ExportZipModal';
import { Leaf, Award, CheckCircle2 } from 'lucide-react';
import { ECO_CHALLENGES } from './data/challenges';
import { ACHIEVEMENTS } from './data/achievements';

export default function App() {
  const [lang, setLang] = useState<Language>(() => loadStoredLanguage());
  const [theme, setTheme] = useState<Theme>(() => loadStoredTheme());
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(() => {
    const loaded = loadUserProgress();
    return updateStreak(loaded);
  });

  // Modal states
  const [selectedItemForModal, setSelectedItemForModal] = useState<WasteItem | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Toast notification for achievements and feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = getTranslation(lang);

  // Initialize theme on mount
  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    saveStoredTheme(nextTheme);
  };

  const handleToggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'ta' : 'en';
    setLang(nextLang);
    saveStoredLanguage(nextLang);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Log an item as segregated
  const handleLogSortedItem = (item: WasteItem) => {
    setProgress((prev) => {
      const updatedCategoryCounts = {
        ...prev.categoryCounts,
        [item.category]: (prev.categoryCounts[item.category] || 0) + 1
      };

      const newActivity = [
        {
          id: `sort-${Date.now()}`,
          timestamp: new Date().toISOString(),
          type: 'sorted_item' as const,
          title: {
            en: `Segregated: ${item.name.en}`,
            ta: `பிரித்தெடுக்கப்பட்டது: ${item.name.ta}`
          },
          pointsEarned: item.ecoPoints,
          category: item.category
        },
        ...prev.recentActivity
      ].slice(0, 30);

      const recentIds = [item.id, ...(prev.recentlyViewedItemIds || []).filter((id) => id !== item.id)].slice(0, 8);

      const baseUpdated: UserProgress = {
        ...prev,
        totalPoints: prev.totalPoints + item.ecoPoints,
        sortedItemsCount: prev.sortedItemsCount + 1,
        categoryCounts: updatedCategoryCounts,
        recentActivity: newActivity,
        recentlyViewedItemIds: recentIds
      };

      const { updatedProgress, newlyUnlocked } = evaluateAchievements(baseUpdated);
      saveUserProgress(updatedProgress);

      if (newlyUnlocked.length > 0) {
        triggerEcoConfetti();
        const firstAch = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
        if (firstAch) {
          showToast(`🏆 Milestone Unlocked: ${firstAch.title[lang]}!`);
        }
      }

      return updatedProgress;
    });
  };

  // Select item to view details
  const handleSelectItem = (item: WasteItem) => {
    setSelectedItemForModal(item);
    setProgress((prev) => {
      const recentIds = [item.id, ...(prev.recentlyViewedItemIds || []).filter((id) => id !== item.id)].slice(0, 8);
      const updated = { ...prev, recentlyViewedItemIds: recentIds };
      saveUserProgress(updated);
      return updated;
    });
  };

  // Personal Waste Log actions
  const handleAddWasteLog = (entry: Omit<WasteLogRecord, 'id' | 'createdAt'>) => {
    const newRecord: WasteLogRecord = {
      ...entry,
      id: `log-${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    setProgress((prev) => {
      const updatedLogs = [newRecord, ...(prev.wasteLogs || [])];
      const updatedCounts = {
        ...prev.categoryCounts,
        [entry.category]: (prev.categoryCounts[entry.category] || 0) + 1
      };

      const newActivity = [
        {
          id: `act-log-${Date.now()}`,
          timestamp: new Date().toISOString(),
          type: 'log_added' as const,
          title: {
            en: `Logged in tracker: ${entry.itemName}`,
            ta: `பதிவேட்டில் சேர்க்கப்பட்டது: ${entry.itemName}`
          },
          pointsEarned: entry.ecoPointsEarned,
          category: entry.category
        },
        ...prev.recentActivity
      ].slice(0, 30);

      const baseUpdated: UserProgress = {
        ...prev,
        totalPoints: prev.totalPoints + entry.ecoPointsEarned,
        sortedItemsCount: prev.sortedItemsCount + 1,
        categoryCounts: updatedCounts,
        wasteLogs: updatedLogs,
        recentActivity: newActivity
      };

      const { updatedProgress, newlyUnlocked } = evaluateAchievements(baseUpdated);
      saveUserProgress(updatedProgress);
      showToast(lang === 'en' ? 'Record saved to your Waste Log (+10 pts)!' : 'கழிவுப் பதிவேட்டில் சேர்க்கப்பட்டது (+10 புள்ளிகள்)!');

      if (newlyUnlocked.length > 0) {
        triggerEcoConfetti();
      }

      return updatedProgress;
    });
  };

  const handleEditWasteLog = (entry: WasteLogRecord) => {
    setProgress((prev) => {
      const updatedLogs = (prev.wasteLogs || []).map((l) => (l.id === entry.id ? entry : l));
      const updated: UserProgress = {
        ...prev,
        wasteLogs: updatedLogs
      };
      saveUserProgress(updated);
      showToast(lang === 'en' ? 'Log entry updated.' : 'பதிவு மாற்றியமைக்கப்பட்டது.');
      return updated;
    });
  };

  const handleDeleteWasteLog = (id: string) => {
    setProgress((prev) => {
      const updatedLogs = (prev.wasteLogs || []).filter((l) => l.id !== id);
      const updated: UserProgress = {
        ...prev,
        wasteLogs: updatedLogs
      };
      saveUserProgress(updated);
      showToast(lang === 'en' ? 'Entry deleted from log.' : 'பதிவு நீக்கப்பட்டது.');
      return updated;
    });
  };

  // Bookmark / read articles in Learning Hub
  const handleToggleBookmark = (articleId: string) => {
    setProgress((prev) => {
      const existing = prev.bookmarkedArticleIds || [];
      const updatedBookmarks = existing.includes(articleId)
        ? existing.filter((id) => id !== articleId)
        : [...existing, articleId];

      const updated = { ...prev, bookmarkedArticleIds: updatedBookmarks };
      saveUserProgress(updated);
      return updated;
    });
  };

  const handleMarkArticleRead = (articleId: string) => {
    setProgress((prev) => {
      const existing = prev.readArticleIds || [];
      if (existing.includes(articleId)) return prev;
      const updated = { ...prev, readArticleIds: [...existing, articleId] };
      saveUserProgress(updated);
      return updated;
    });
  };

  // Add custom recycling center
  const handleAddCustomCenter = (center: RecyclingCenter) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        customRecyclingCenters: [center, ...(prev.customRecyclingCenters || [])]
      };
      saveUserProgress(updated);
      showToast(lang === 'en' ? 'Custom facility saved to map!' : 'புதிய மையம் வரைபடத்தில் சேர்க்கப்பட்டது!');
      return updated;
    });
  };

  // Update notification preferences
  const handleUpdateNotifications = (enabled: boolean, time: string) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        notificationsEnabled: enabled,
        reminderTime: time
      };
      saveUserProgress(updated);
      return updated;
    });
  };

  // Complete a challenge
  const handleCompleteChallenge = (challengeId: string) => {
    const challenge = ECO_CHALLENGES.find((c) => c.id === challengeId);
    if (!challenge) return;

    const today = getTodayDateString();
    if (progress.completedChallenges[challengeId]) {
      return;
    }

    setProgress((prev) => {
      const updatedChallenges = {
        ...prev.completedChallenges,
        [challengeId]: today
      };

      const newActivity = [
        {
          id: `chall-${Date.now()}`,
          timestamp: new Date().toISOString(),
          type: 'challenge_completed' as const,
          title: {
            en: `Completed: ${challenge.title.en}`,
            ta: `முடிந்தது: ${challenge.title.ta}`
          },
          pointsEarned: challenge.points
        },
        ...prev.recentActivity
      ].slice(0, 30);

      const baseUpdated: UserProgress = {
        ...prev,
        totalPoints: prev.totalPoints + challenge.points,
        completedChallenges: updatedChallenges,
        recentActivity: newActivity
      };

      const { updatedProgress, newlyUnlocked } = evaluateAchievements(baseUpdated);
      saveUserProgress(updatedProgress);

      triggerEcoConfetti();
      showToast(`✨ Challenge Completed! +${challenge.points} pts`);

      if (newlyUnlocked.length > 0) {
        const firstAch = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
        if (firstAch) {
          setTimeout(() => {
            showToast(`🏆 Milestone Unlocked: ${firstAch.title[lang]}!`);
          }, 1500);
        }
      }

      return updatedProgress;
    });
  };

  // Practice quiz answer
  const handleAnswerPractice = (isCorrect: boolean, item: WasteItem) => {
    if (!isCorrect) return;

    setProgress((prev) => {
      const newScore = prev.practiceScore + 10;
      const baseUpdated: UserProgress = {
        ...prev,
        totalPoints: prev.totalPoints + 10,
        practiceScore: newScore
      };

      const { updatedProgress, newlyUnlocked } = evaluateAchievements(baseUpdated);
      saveUserProgress(updatedProgress);

      if (newlyUnlocked.length > 0) {
        const firstAch = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
        if (firstAch) {
          showToast(`🏆 Milestone Unlocked: ${firstAch.title[lang]}!`);
        }
      }

      return updatedProgress;
    });
  };

  // Reset all progress
  const handleResetConfirm = () => {
    const cleared = clearUserProgress();
    setProgress(cleared);
    showToast(t.progress.resetSuccessMsg);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F5] dark:bg-[#0E1712] text-[#1C2826] dark:text-[#E8F3ED] transition-colors selection:bg-[#D7E8DC] selection:text-[#18392B]">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-16 right-4 sm:right-8 z-50 animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="bg-[#18392B] dark:bg-[#1C3628] text-white px-4 py-2.5 rounded-2xl shadow-lg border border-[#2B5640] dark:border-[#38634D] flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#A7D7B5] shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Bar Navigation */}
      <TopNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        lang={lang}
        onToggleLang={handleToggleLanguage}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 xl:pb-12">
        {currentTab === 'dashboard' && (
          <DashboardView
            progress={progress}
            lang={lang}
            onNavigate={setCurrentTab}
            onSelectItem={handleSelectItem}
            onLogSortedItem={handleLogSortedItem}
            onCompleteChallenge={handleCompleteChallenge}
          />
        )}

        {currentTab === 'guide' && (
          <WasteGuideView
            progress={progress}
            lang={lang}
            onSelectItem={handleSelectItem}
            onLogSortedItem={handleLogSortedItem}
          />
        )}

        {currentTab === 'scanner' && (
          <WasteScannerView
            lang={lang}
            onLogSortedItem={handleLogSortedItem}
            onOpenLogModal={(initial) => {
              setCurrentTab('log');
            }}
          />
        )}

        {currentTab === 'log' && (
          <WasteLogView
            progress={progress}
            lang={lang}
            onAddLog={handleAddWasteLog}
            onEditLog={handleEditWasteLog}
            onDeleteLog={handleDeleteWasteLog}
          />
        )}

        {currentTab === 'hub' && (
          <LearningHubView
            progress={progress}
            lang={lang}
            onToggleBookmark={handleToggleBookmark}
            onMarkArticleRead={handleMarkArticleRead}
          />
        )}

        {currentTab === 'map' && (
          <EcoMapView
            progress={progress}
            lang={lang}
            onAddCustomCenter={handleAddCustomCenter}
          />
        )}

        {currentTab === 'challenges' && (
          <ChallengesView
            progress={progress}
            lang={lang}
            onCompleteChallenge={handleCompleteChallenge}
          />
        )}

        {currentTab === 'achievements' && (
          <AchievementsView
            progress={progress}
            lang={lang}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressView
            progress={progress}
            lang={lang}
            onOpenResetConfirm={() => setIsResetModalOpen(true)}
          />
        )}

        {currentTab === 'practice' && (
          <PracticeView
            progress={progress}
            lang={lang}
            onAnswerPractice={handleAnswerPractice}
          />
        )}

        {currentTab === 'settings' && (
          <SettingsView
            progress={progress}
            lang={lang}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            onToggleLang={handleToggleLanguage}
            onOpenResetConfirm={() => setIsResetModalOpen(true)}
            onUpdateNotifications={handleUpdateNotifications}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        lang={lang}
      />

      {/* Modals */}
      <ItemDetailModal
        item={selectedItemForModal}
        lang={lang}
        onClose={() => setSelectedItemForModal(null)}
        onLogSortedItem={handleLogSortedItem}
      />

      <ResetConfirmModal
        isOpen={isResetModalOpen}
        lang={lang}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetConfirm}
      />

      <ExportZipModal
        isOpen={isExportModalOpen}
        lang={lang}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Subtle Accessible Footer */}
      <footer className="border-t border-[#E3E8DC] dark:border-[#1E3025] bg-[#FAFBF8] dark:bg-[#121B16] py-8 px-4 sm:px-6 lg:px-8 text-xs text-[#63796A] dark:text-[#88A392] hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#234937] dark:bg-[#2A573F] text-white flex items-center justify-center">
              <Leaf className="w-3 h-3 text-[#C8E6C9]" />
            </div>
            <span className="font-semibold text-[#18392B] dark:text-[#E8F3ED]">EcoSort Platform</span>
            <span aria-hidden="true">·</span>
            <span>{t.app.tagline}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setCurrentTab('settings')}
              className="text-[#234937] dark:text-[#88C6A2] hover:underline font-medium"
            >
              {lang === 'en' ? 'Settings & Privacy' : 'அமைப்புகள் & தனியுரிமை'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-[#234937] dark:text-[#88C6A2] hover:underline font-medium"
            >
              {lang === 'en' ? 'Download Project ZIP' : 'மூலக் குறியீடு ZIP'}
            </button>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Client-Side SPA • Cloudflare Pages Ready' : 'கிளவுட்ஃபிளேர் பேஜஸ் தயார்'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
