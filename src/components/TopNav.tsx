import React from 'react';
import { Language, Theme } from '../types';
import { getTranslation } from '../i18n/translations';
import { Languages, Download, Leaf, Sun, Moon } from 'lucide-react';

interface TopNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  lang: Language;
  onToggleLang: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenExport: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentTab,
  onSelectTab,
  lang,
  onToggleLang,
  theme,
  onToggleTheme,
  onOpenExport
}) => {
  const t = getTranslation(lang);

  const navItems = [
    { id: 'dashboard', label: t.nav.dashboard },
    { id: 'guide', label: t.nav.guide },
    { id: 'scanner', label: t.nav.scanner },
    { id: 'log', label: t.nav.log },
    { id: 'hub', label: t.nav.hub },
    { id: 'map', label: t.nav.map },
    { id: 'challenges', label: t.nav.challenges },
    { id: 'achievements', label: t.nav.achievements },
    { id: 'progress', label: t.nav.progress },
    { id: 'settings', label: t.nav.settings }
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#F8F9F5]/90 dark:bg-[#121B16]/90 backdrop-blur-md border-b border-[#E3E8DC] dark:border-[#203429] px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234937] dark:focus-visible:ring-[#7AB893] rounded-lg p-0.5"
        >
          <div className="w-8 h-8 rounded-lg bg-[#234937] dark:bg-[#2C5D44] text-white flex items-center justify-center shadow-xs">
            <Leaf className="w-4 h-4 text-[#C8E6C9]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED] whitespace-nowrap shrink-0">
            EcoSort
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop with scrollable container) */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-[#465E50] dark:text-[#A8C2B3] overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1.5 px-2 rounded-md ${
                  isActive
                    ? 'text-[#18392B] dark:text-white font-bold bg-[#E8F1EC] dark:bg-[#1E362A]'
                    : 'hover:text-[#18392B] dark:hover:text-white hover:bg-[#F0F4EE] dark:hover:bg-[#182C22]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Theme, Language, Source ZIP) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-[#234937] dark:text-[#A7D7B5] bg-[#EAF2EC] dark:bg-[#1A3125] hover:bg-[#DCECE0] dark:hover:bg-[#234232] rounded-xl transition-all min-h-[38px] min-w-[38px] flex items-center justify-center"
            title={theme === 'dark' ? t.theme.toggleToLight : t.theme.toggleToDark}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FDE047]" />
            ) : (
              <Moon className="w-4 h-4 text-[#234937]" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#234937] dark:text-[#CBE5D6] bg-[#EAF2EC] dark:bg-[#1A3125] hover:bg-[#DCECE0] dark:hover:bg-[#234232] active:scale-95 transition-all rounded-xl whitespace-nowrap shrink-0 min-h-[38px]"
            title="Switch Language / மொழியை மாற்றவும்"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-[#37694E] dark:text-[#88C6A2]" />
            <span>{t.app.switchLanguage}</span>
          </button>

          {/* ZIP Export Button */}
          <button
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] dark:hover:bg-[#346B4E] active:scale-95 transition-all rounded-xl shadow-xs whitespace-nowrap shrink-0 min-h-[38px]"
            title="Download full project source code as a ZIP archive"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{t.app.exportZip}</span>
            <span className="md:hidden">ZIP</span>
          </button>
        </div>
      </div>
    </header>
  );
};
