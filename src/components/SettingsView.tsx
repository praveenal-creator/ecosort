import React, { useState } from 'react';
import { UserProgress, Language, Theme } from '../types';
import { getTranslation } from '../i18n/translations';
import {
  Settings,
  Moon,
  Sun,
  Languages,
  Shield,
  Download,
  Trash2,
  Bell,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface SettingsViewProps {
  progress: UserProgress;
  lang: Language;
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLang: () => void;
  onOpenResetConfirm: () => void;
  onUpdateNotifications: (enabled: boolean, time: string) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  progress,
  lang,
  theme,
  onToggleTheme,
  onToggleLang,
  onOpenResetConfirm,
  onUpdateNotifications
}) => {
  const t = getTranslation(lang);
  const [notificationsEnabled, setNotificationsEnabled] = useState(progress.notificationsEnabled || false);
  const [reminderTime, setReminderTime] = useState(progress.reminderTime || '20:00');
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const handleToggleNotif = (enabled: boolean) => {
    setNotificationsEnabled(enabled);
    onUpdateNotifications(enabled, reminderTime);
    setSaveToast(lang === 'en' ? 'Preferences saved' : 'அமைப்புகள் சேமிக்கப்பட்டது');
    setTimeout(() => setSaveToast(null), 3000);
  };

  const handleExportBackupJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `EcoSort-Backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
          {t.settings.title}
        </h1>
        <p className="text-sm text-[#526859] dark:text-[#9FB3A5]">
          {t.settings.subtitle}
        </p>
      </div>

      {saveToast && (
        <div className="p-3 bg-[#E8F5E9] dark:bg-[#1A3323] text-[#1B5E20] dark:text-[#A5D6A7] text-xs font-semibold rounded-2xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* Appearance & Language */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-5">
        <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] flex items-center gap-2">
          <Settings className="w-4 h-4 text-[#285A3E] dark:text-[#88C6A2]" />
          <span>{t.settings.appearanceTitle}</span>
        </h3>

        <div className="divide-y divide-[#EEF2EA] dark:divide-[#22352A]">
          {/* Theme Row */}
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-[#18392B] dark:text-[#E8F3ED] block">
                {t.settings.themeLabel}
              </span>
              <span className="text-xs text-[#5D7364] dark:text-[#9FB3A5]">
                {theme === 'dark' ? t.theme.dark : t.theme.light}
              </span>
            </div>

            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1E3127] text-[#18392B] dark:text-[#E8F3ED] hover:bg-[#F0F4EE]"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#FDE047]" /> : <Moon className="w-3.5 h-3.5 text-[#234937]" />}
              <span>{theme === 'dark' ? t.theme.light : t.theme.dark}</span>
            </button>
          </div>

          {/* Language Row */}
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-[#18392B] dark:text-[#E8F3ED] block">
                {t.settings.languageLabel}
              </span>
              <span className="text-xs text-[#5D7364] dark:text-[#9FB3A5]">
                {lang === 'en' ? 'English (Current)' : 'தமிழ் (தற்போதைய மொழி)'}
              </span>
            </div>

            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1E3127] text-[#18392B] dark:text-[#E8F3ED] hover:bg-[#F0F4EE]"
            >
              <Languages className="w-3.5 h-3.5 text-[#285A3E] dark:text-[#88C6A2]" />
              <span>{t.app.switchLanguage}</span>
            </button>
          </div>

          {/* Notifications / Reminder */}
          <div className="py-3 flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-[#18392B] dark:text-[#E8F3ED] block">
                {lang === 'en' ? 'Daily Evening Sorting Reminder' : 'தினசரி மாலை கழிவுப் பிரிப்பு நினைவூட்டல்'}
              </span>
              <span className="text-xs text-[#5D7364] dark:text-[#9FB3A5]">
                {lang === 'en' ? 'Browser local notification prompt at 8:00 PM' : 'இரவு 8:00 மணிக்கு உலாவி நினைவூட்டல்'}
              </span>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => handleToggleNotif(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#D8E2D9] dark:bg-[#2A4234] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#234937] dark:peer-checked:bg-[#2E7D32]" />
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Architecture Notice */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-3">
        <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#285A3E] dark:text-[#88C6A2]" />
          <span>{t.settings.privacyTitle}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#4E6455] dark:text-[#A7BFB2] leading-relaxed">
          {t.settings.privacyText}
        </p>
      </div>

      {/* Danger Zone & Data Export */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] flex items-center gap-2">
          <Download className="w-4 h-4 text-[#285A3E] dark:text-[#88C6A2]" />
          <span>{t.settings.dangerTitle}</span>
        </h3>
        <p className="text-xs text-[#5D7364] dark:text-[#9FB3A5] leading-relaxed">
          {t.settings.dangerText}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportBackupJson}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#18392B] dark:text-[#CBE5D6] bg-[#EDF3EE] dark:bg-[#1F3327] hover:bg-[#E0ECE2] rounded-xl transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.settings.exportBackupBtn}</span>
          </button>

          <button
            onClick={onOpenResetConfirm}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#8B2626] dark:text-[#FCA5A5] bg-[#FDF2F2] dark:bg-[#381B1B] hover:bg-[#FBE4E4] border border-[#F2C2C2] dark:border-[#522525] rounded-xl transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.settings.clearDataBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
