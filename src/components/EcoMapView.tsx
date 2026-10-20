import React, { useState, useMemo } from 'react';
import { UserProgress, Language, WasteCategory, RecyclingCenter } from '../types';
import { getTranslation } from '../i18n/translations';
import { INITIAL_RECYCLING_CENTERS } from '../data/ecoMapData';
import {
  MapPin,
  Navigation,
  Search,
  Plus,
  ExternalLink,
  Clock,
  Phone,
  AlertCircle,
  X,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

interface EcoMapViewProps {
  progress: UserProgress;
  lang: Language;
  onAddCustomCenter: (center: RecyclingCenter) => void;
}

// Haversine distance calculator in kilometers
function calculateHaversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Number((R * c).toFixed(1));
}

export const EcoMapView: React.FC<EcoMapViewProps> = ({
  progress,
  lang,
  onAddCustomCenter
}) => {
  const t = getTranslation(lang);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState<WasteCategory | 'all'>('all');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationDenied, setLocationDenied] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Modal to add custom facility
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customAddress, setCustomAddress] = useState('');
  const [customStreams, setCustomStreams] = useState<WasteCategory[]>(['dry']);
  const [customTimings, setCustomTimings] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  // Combine initial sample centers + user-added custom centers
  const allCenters = useMemo(() => {
    return [...(progress.customRecyclingCenters || []), ...INITIAL_RECYCLING_CENTERS];
  }, [progress.customRecyclingCenters]);

  // Request browser geolocation
  const handleRequestLocation = () => {
    if (!navigator.geolocation) {
      setLocationDenied(true);
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setIsLocating(false);
        setLocationDenied(false);
      },
      (err) => {
        console.warn('Geolocation denied or unavailable', err);
        setLocationDenied(true);
        setIsLocating(false);
      },
      { timeout: 8000 }
    );
  };

  // Filter centers
  const filteredCenters = useMemo(() => {
    return allCenters.filter((c) => {
      if (selectedStream !== 'all' && !c.category.includes(selectedStream)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.en.toLowerCase().includes(q) || c.name.ta.toLowerCase().includes(q);
        const matchAddr = c.address.en.toLowerCase().includes(q) || c.address.ta.toLowerCase().includes(q);
        return matchName || matchAddr;
      }
      return true;
    });
  }, [allCenters, selectedStream, searchQuery]);

  const handleToggleStreamSelect = (cat: WasteCategory) => {
    if (customStreams.includes(cat)) {
      if (customStreams.length > 1) {
        setCustomStreams(customStreams.filter((s) => s !== cat));
      }
    } else {
      setCustomStreams([...customStreams, cat]);
    }
  };

  const handleSaveCustomCenter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || !customAddress.trim()) return;

    const newCenter: RecyclingCenter = {
      id: `center-custom-${Date.now()}`,
      name: { en: customName.trim(), ta: customName.trim() },
      category: customStreams,
      address: { en: customAddress.trim(), ta: customAddress.trim() },
      lat: userCoords ? userCoords.lat : 13.0827,
      lng: userCoords ? userCoords.lng : 80.2707,
      timings: {
        en: customTimings.trim() || 'Everyday: 9:00 AM - 6:00 PM',
        ta: customTimings.trim() || 'தினசரி: காலை 9:00 - மாலை 6:00'
      },
      notes: {
        en: customNotes.trim() || 'Verified by local resident',
        ta: customNotes.trim() || 'உள்ளூர் வாசகரால் சரிபார்க்கப்பட்டது'
      },
      isCustom: true
    };

    onAddCustomCenter(newCenter);
    setIsAddModalOpen(false);
    setCustomName('');
    setCustomAddress('');
    setCustomTimings('');
    setCustomNotes('');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.map.title}
          </h1>
          <p className="text-sm text-[#526859] dark:text-[#9FB3A5]">
            {t.map.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleRequestLocation}
            disabled={isLocating}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] bg-[#FFFFFF] dark:bg-[#1A2E22] border border-[#D5DFD4] dark:border-[#2F4D3C] hover:bg-[#F2F6F3] rounded-xl transition-all"
          >
            <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
            <span>{isLocating ? (lang === 'en' ? 'Locating...' : 'கண்டறிகிறது...') : t.map.useLocationBtn}</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] rounded-xl shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>{t.map.addCenterBtn}</span>
          </button>
        </div>
      </div>

      {/* Honest Demo Label Banner */}
      <div className="bg-[#FAF8F3] dark:bg-[#1E261F] border border-[#E8DFC8] dark:border-[#384638] rounded-2xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#9E651E] dark:text-[#DEAC6A] shrink-0 mt-0.5" />
        <div className="text-xs text-[#564E3A] dark:text-[#C7BFAC] leading-relaxed">
          <strong className="font-bold text-[#3B3423] dark:text-[#F0E6D2]">
            {lang === 'en' ? 'Regional Curated Data: ' : 'மண்டல மாதிரி தகவல்: '}
          </strong>
          {t.map.demoNotice}
        </div>
      </div>

      {locationDenied && (
        <div className="text-xs text-[#6D8374] dark:text-[#8FA899] px-1">
          {t.map.locationDeniedNotice}
        </div>
      )}

      {/* Search and Stream Filter Toolbar */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] p-4 rounded-2xl border border-[#E3E8DC] dark:border-[#263D30] flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {(['all', 'wet', 'dry', 'hazardous', 'ewaste', 'sanitary'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedStream(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                selectedStream === cat
                  ? 'bg-[#234937] text-white shadow-xs'
                  : 'bg-[#F1F4EE] dark:bg-[#203429] text-[#445B4D] dark:text-[#A8C4B5] hover:bg-[#E3EAE0]'
              }`}
            >
              {cat === 'all' ? t.categories.all : t.categories[cat]}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <Search className="w-3.5 h-3.5 text-[#799081] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.map.searchPlaceholder}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
          />
        </div>
      </div>

      {/* Centers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCenters.map((center) => {
          const distance = userCoords
            ? calculateHaversineKm(userCoords.lat, userCoords.lng, center.lat, center.lng)
            : null;

          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            center.name.en + ' ' + center.address.en
          )}`;

          return (
            <div
              key={center.id}
              className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs flex flex-col justify-between hover:border-[#BED2C4] dark:hover:border-[#335641] transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED] leading-snug">
                        {center.name[lang]}
                      </h3>
                      {center.isCustom && (
                        <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] dark:bg-[#1A3323] px-2 py-0.5 rounded">
                          {lang === 'en' ? 'User-Added' : 'சேர்க்கப்பட்டது'}
                        </span>
                      )}
                    </div>
                  </div>

                  {distance !== null && (
                    <span className="text-xs font-semibold text-[#285A3E] dark:text-[#88C6A2] bg-[#EAF2EC] dark:bg-[#1E372B] px-2.5 py-1 rounded-lg tabular-nums">
                      {t.map.distanceKm.replace('{km}', String(distance))}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#526959] dark:text-[#A7BFB2] mb-3 pl-10">
                  {center.address[lang]}
                </p>

                {/* Streams tags */}
                <div className="flex flex-wrap items-center gap-1.5 pl-10 mb-3">
                  {center.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-semibold text-[#18392B] dark:text-[#CDE3D5] bg-[#F1F5EF] dark:bg-[#203328] px-2 py-0.5 rounded-md"
                    >
                      {t.categories[cat]}
                    </span>
                  ))}
                </div>

                {/* Timings & Notes */}
                <div className="pl-10 space-y-1 text-xs text-[#627768] dark:text-[#8EA899]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{center.timings[lang]}</span>
                  </div>
                  {center.contact && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{center.contact}</span>
                    </div>
                  )}
                  {center.notes && (
                    <p className="pt-1 text-[11px] text-[#475C4E] dark:text-[#B5CCC0] italic">
                      {center.notes[lang]}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#EEF2EA] dark:border-[#22352A] flex justify-end">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] hover:underline"
                >
                  <span>{lang === 'en' ? 'Open in Maps' : 'வரைபடத்தில் பார்க்க'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Custom Facility Modal */}
      {isAddModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EEF2EA] dark:border-[#22352A]">
              <h3 className="text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {t.map.form.title}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-[#6F8576] hover:text-[#18392B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomCenter} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.map.form.name} *
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Ward 12 Scrap Yard, Metro Compost Bank"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.map.form.address} *
                </label>
                <input
                  type="text"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  placeholder="e.g. 14 Gandhi Street, Sector 3"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1.5">
                  {t.map.form.streams}
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['wet', 'dry', 'hazardous', 'ewaste', 'sanitary'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleToggleStreamSelect(cat)}
                      className={`px-3 py-1 text-xs rounded-lg border font-medium ${
                        customStreams.includes(cat)
                          ? 'bg-[#234937] text-white border-[#234937]'
                          : 'bg-[#FAFBF9] dark:bg-[#1B2921] text-[#42574A] dark:text-[#A7BFB2] border-[#D5DFD4] dark:border-[#2F4D3C]'
                      }`}
                    >
                      {t.categories[cat]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.map.form.timings}
                </label>
                <input
                  type="text"
                  value={customTimings}
                  onChange={(e) => setCustomTimings(e.target.value)}
                  placeholder="e.g. Mon-Sat: 8 AM - 5 PM"
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.map.form.notes}
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. Gate 2 for metal scrap drop-offs"
                  rows={2}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#486351] dark:text-[#9FB3A5] bg-[#F2F5F0] dark:bg-[#203328] rounded-xl"
                >
                  {t.map.form.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] rounded-xl"
                >
                  {t.map.form.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
