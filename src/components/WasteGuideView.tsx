import React, { useState, useMemo } from 'react';
import { WasteItem, WasteCategory, Language, UserProgress } from '../types';
import { getTranslation } from '../i18n/translations';
import { WASTE_ITEMS } from '../data/wasteItems';
import { WasteIcon } from './WasteIcon';
import {
  Search,
  AlertTriangle,
  HelpCircle,
  ShieldAlert,
  X,
  ExternalLink,
  Plus,
  History,
  Sparkles
} from 'lucide-react';

interface WasteGuideViewProps {
  progress: UserProgress;
  lang: Language;
  onSelectItem: (item: WasteItem) => void;
  onLogSortedItem: (item: WasteItem) => void;
}

export const WasteGuideView: React.FC<WasteGuideViewProps> = ({
  progress,
  lang,
  onSelectItem,
  onLogSortedItem
}) => {
  const t = getTranslation(lang);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | 'all'>('all');
  const [filterSpecialHandlingOnly, setFilterSpecialHandlingOnly] = useState(false);

  // Category filter tabs
  const categories: Array<{ id: WasteCategory | 'all'; label: string }> = [
    { id: 'all', label: t.categories.all },
    { id: 'wet', label: t.categories.wet },
    { id: 'dry', label: t.categories.dry },
    { id: 'hazardous', label: t.categories.hazardous },
    { id: 'ewaste', label: t.categories.ewaste },
    { id: 'sanitary', label: t.categories.sanitary }
  ];

  // Popular search suggestions
  const popularKeywords = [
    { en: 'Milk pouch', ta: 'பால் கவர்' },
    { en: 'Batteries', ta: 'பேட்டரி' },
    { en: 'Pizza box', ta: 'பீட்சா அட்டை' },
    { en: 'Banana peel', ta: 'வாழைப்பழத் தோல்' },
    { en: 'Thermocol', ta: 'தெர்மாகோல்' },
    { en: 'Medicines', ta: 'மருந்துகள்' }
  ];

  // Recently viewed items from progress state
  const recentlyViewedItems = useMemo(() => {
    const ids = progress.recentlyViewedItemIds || [];
    return ids
      .map((id) => WASTE_ITEMS.find((item) => item.id === id))
      .filter((item): item is WasteItem => Boolean(item))
      .slice(0, 6);
  }, [progress.recentlyViewedItemIds]);

  // Combined filtering
  const filteredItems = useMemo(() => {
    return WASTE_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Special handling filter
      if (filterSpecialHandlingOnly && !item.requiresSpecialHandling) {
        return false;
      }
      // Text search match across both English and Tamil names + preparation/disposal
      if (!searchTerm.trim()) return true;

      const q = searchTerm.toLowerCase().trim();
      const matchNameEn = item.name.en.toLowerCase().includes(q);
      const matchNameTa = item.name.ta.toLowerCase().includes(q);
      const matchDescEn = item.description.en.toLowerCase().includes(q);
      const matchDescTa = item.description.ta.toLowerCase().includes(q);
      const matchPrepEn = item.preparation.en.toLowerCase().includes(q);

      return matchNameEn || matchNameTa || matchDescEn || matchDescTa || matchPrepEn;
    });
  }, [searchTerm, selectedCategory, filterSpecialHandlingOnly]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setFilterSpecialHandlingOnly(false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header section */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
          {t.guide.title}
        </h1>
        <p className="text-sm text-[#526859] dark:text-[#9FB3A5] max-w-2xl">
          {t.guide.subtitle}
        </p>
      </div>

      {/* Advisory Alert banner */}
      <div className="bg-[#FAF8F3] dark:bg-[#1E261F] border border-[#E6E1D1] dark:border-[#384638] rounded-2xl p-4 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-[#A36A26] dark:text-[#DEAC6A] shrink-0 mt-0.5" />
        <div className="text-xs text-[#5C5546] dark:text-[#C7BFAC] leading-relaxed">
          <strong className="font-semibold text-[#3E382E] dark:text-[#F0E6D2]">
            {lang === 'en' ? 'General Municipal Guidance: ' : 'பொது நகராட்சி வழிகாட்டல்: '}
          </strong>
          {t.app.generalGuidanceNotice}
        </div>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="space-y-3 bg-[#FFFFFF] dark:bg-[#17241D] p-4 sm:p-5 rounded-3xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#758A7C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.guide.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] focus:border-[#234937] focus:ring-1 focus:ring-[#234937] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED] placeholder:text-[#889B8D] transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#889B8D] hover:text-[#18392B] p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Search Suggestions */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-[#647C6D] dark:text-[#8FA899] font-medium mr-1">
            {t.guide.popularSearches}
          </span>
          {popularKeywords.map((kw, idx) => (
            <button
              key={idx}
              onClick={() => setSearchTerm(kw[lang])}
              className="px-2.5 py-1 rounded-lg bg-[#F0F4EE] dark:bg-[#1F3127] hover:bg-[#E3EBE1] text-[#3B5444] dark:text-[#CDE3D5] text-[11px] font-medium transition-colors"
            >
              {kw[lang]}
            </button>
          ))}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all min-h-[36px] ${
                  isSelected
                    ? 'bg-[#234937] text-white shadow-xs'
                    : 'bg-[#F1F4EE] dark:bg-[#203429] text-[#445B4D] dark:text-[#A8C4B5] hover:bg-[#E3EAE0]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Special Handling Toggle and Count Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#F0F3EC] dark:border-[#22352A] text-xs text-[#5D7263] dark:text-[#8EA899]">
          <div className="flex items-center gap-2">
            <span>
              {t.guide.showingItems.replace('{count}', String(filteredItems.length))}
            </span>
            {(searchTerm || selectedCategory !== 'all' || filterSpecialHandlingOnly) && (
              <button
                onClick={clearFilters}
                className="text-[#234937] dark:text-[#88C6A2] underline font-medium hover:text-[#142E20] ml-2"
              >
                {t.guide.clearSearch}
              </button>
            )}
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filterSpecialHandlingOnly}
              onChange={(e) => setFilterSpecialHandlingOnly(e.target.checked)}
              className="rounded border-[#C8D3C8] text-[#234937] focus:ring-[#234937]"
            />
            <span className="font-medium text-[#3A4E40] dark:text-[#A7BFB2]">
              {lang === 'en' ? 'Show special handling only' : 'சிறப்பு கவனம் தேவைப்படுபவை மட்டும்'}
            </span>
          </label>
        </div>
      </div>

      {/* Recently Viewed Strip */}
      {recentlyViewedItems.length > 0 && !searchTerm && selectedCategory === 'all' && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#18392B] dark:text-[#E8F3ED] uppercase tracking-wider">
            <History className="w-3.5 h-3.5 text-[#285A3E] dark:text-[#88C6A2]" />
            <span>{t.guide.recentlyViewedTitle}</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {recentlyViewedItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFFFF] dark:bg-[#17241D] border border-[#DFE6DC] dark:border-[#263D30] hover:border-[#234937] dark:hover:border-[#7CB895] text-xs text-[#18392B] dark:text-[#E8F3ED] whitespace-nowrap shrink-0 transition-all shadow-xs"
              >
                <div className="w-6 h-6 rounded-lg bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center">
                  <WasteIcon name={item.icon} className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{item.name[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Waste Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-12 text-center border border-[#E3E8DC] dark:border-[#263D30] shadow-xs space-y-3">
          <HelpCircle className="w-10 h-10 mx-auto text-[#9AB3A2]" />
          <h3 className="text-base font-semibold text-[#18392B] dark:text-[#E8F3ED]">
            {t.guide.noItemsFound}
          </h3>
          <p className="text-xs sm:text-sm text-[#667E6F] dark:text-[#9FB3A5] max-w-md mx-auto">
            {t.guide.noItemsFoundSub}
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] bg-[#E8F1EB] dark:bg-[#1F3327] rounded-xl hover:bg-[#D9E6DC] transition-colors"
          >
            {t.guide.clearSearch}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-5 border border-[#E3E8DC] dark:border-[#263D30] hover:border-[#BED2C4] dark:hover:border-[#385B45] shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top card metadata: clean unboxed text with typographic separator (Zero-pill rule) */}
                  <div className="flex items-center justify-between text-xs text-[#637C6C] dark:text-[#8EA899] mb-2.5">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span>{t.categories[item.category]}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{item.binColor} stream</span>
                    </div>

                    {item.requiresSpecialHandling ? (
                      <span className="text-[#A5561E] dark:text-[#F39C6B] font-medium flex items-center gap-1 text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Special Care' : 'சிறப்பு கவனம்'}</span>
                      </span>
                    ) : (
                      <span className="text-[#2F6744] dark:text-[#88C6A2] font-medium text-[11px]">
                        +{item.ecoPoints} pts
                      </span>
                    )}
                  </div>

                  {/* Item Title & Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#EBF3EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <WasteIcon name={item.icon} className="w-5 h-5 text-[#234937] dark:text-[#88C6A2]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] group-hover:text-[#234937] dark:group-hover:text-[#88C6A2] transition-colors leading-snug">
                        {item.name[lang]}
                      </h3>
                      {lang === 'ta' && (
                        <span className="text-xs text-[#7B8F81] dark:text-[#8EA899] block mt-0.5">
                          {item.name.en}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Preparation Preview */}
                  <div className="space-y-2 text-xs text-[#4E6254] dark:text-[#A7BFB2] mb-4">
                    <div>
                      <strong className="text-[#23382C] dark:text-[#D1E6DA] font-semibold block mb-0.5">
                        {lang === 'en' ? 'Prep Step: ' : 'தயாரிப்பு: '}
                      </strong>
                      <p className="line-clamp-2 leading-relaxed">
                        {item.preparation[lang]}
                      </p>
                    </div>

                    <div className="pt-1.5 border-t border-[#F2F5EF] dark:border-[#22352A]">
                      <strong className="text-[#23382C] dark:text-[#D1E6DA] font-semibold block mb-0.5">
                        {lang === 'en' ? 'Disposal Stream: ' : 'அகற்றும் முறை: '}
                      </strong>
                      <p className="line-clamp-2 leading-relaxed text-[#2C4A38] dark:text-[#88C6A2]">
                        {item.disposal[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-semibold text-[#28553C] dark:text-[#88C6A2] hover:underline inline-flex items-center gap-1.5 transition-colors py-1.5"
                  >
                    <span>{lang === 'en' ? 'Full Details' : 'முழு விபரம்'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onLogSortedItem(item)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#18392B] dark:text-[#CDE3D5] bg-[#E7EFE9] dark:bg-[#1E3327] hover:bg-[#D7E6DB] active:scale-95 transition-all rounded-xl"
                    title="Log this item as sorted"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#234937] dark:text-[#88C6A2]" />
                    <span>{lang === 'en' ? 'Log' : 'பதிவு செய்'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
