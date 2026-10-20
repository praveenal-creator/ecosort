import React, { useState, useMemo } from 'react';
import { UserProgress, Language, WasteCategory, WasteLogRecord } from '../types';
import { getTranslation } from '../i18n/translations';
import { getTodayDateString, exportLogsToCsv } from '../utils/storage';
import {
  ClipboardList,
  Plus,
  Download,
  Filter,
  Trash2,
  Edit2,
  Calendar,
  CheckCircle2,
  X,
  AlertTriangle,
  Scale,
  Sparkles
} from 'lucide-react';

interface WasteLogViewProps {
  progress: UserProgress;
  lang: Language;
  onAddLog: (entry: Omit<WasteLogRecord, 'id' | 'createdAt'>) => void;
  onEditLog: (entry: WasteLogRecord) => void;
  onDeleteLog: (id: string) => void;
}

export const WasteLogView: React.FC<WasteLogViewProps> = ({
  progress,
  lang,
  onAddLog,
  onEditLog,
  onDeleteLog
}) => {
  const t = getTranslation(lang);
  const [filterCategory, setFilterCategory] = useState<WasteCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<WasteLogRecord | null>(null);

  // Form fields
  const [formItemName, setFormItemName] = useState('');
  const [formCategory, setFormCategory] = useState<WasteCategory>('wet');
  const [formDisposalMethod, setFormDisposalMethod] = useState('');
  const [formDate, setFormDate] = useState(getTodayDateString());
  const [formWeight, setFormWeight] = useState<string>('');
  const [formNotes, setFormNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Delete confirm modal state
  const [entryToDelete, setEntryToDelete] = useState<WasteLogRecord | null>(null);

  const logs = progress.wasteLogs || [];

  // Filtered entries
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      if (filterCategory !== 'all' && log.category !== filterCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          log.itemName.toLowerCase().includes(q) ||
          log.disposalMethod.toLowerCase().includes(q) ||
          (log.notes && log.notes.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [logs, filterCategory, searchQuery]);

  // Total weight estimate
  const totalGrams = logs.reduce((acc, curr) => acc + (curr.weightGrams || 0), 0);
  const totalKg = (totalGrams / 1000).toFixed(2);

  const openNewEntryModal = () => {
    setEditingEntry(null);
    setFormItemName('');
    setFormCategory('wet');
    setFormDisposalMethod('');
    setFormDate(getTodayDateString());
    setFormWeight('');
    setFormNotes('');
    setFormError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (entry: WasteLogRecord) => {
    setEditingEntry(entry);
    setFormItemName(entry.itemName);
    setFormCategory(entry.category);
    setFormDisposalMethod(entry.disposalMethod);
    setFormDate(entry.date);
    setFormWeight(entry.weightGrams ? String(entry.weightGrams) : '');
    setFormNotes(entry.notes || '');
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formItemName.trim()) {
      setFormError(t.log.form.validationError);
      return;
    }

    const weightNum = formWeight ? Math.max(0, parseInt(formWeight, 10)) : undefined;

    if (editingEntry) {
      onEditLog({
        ...editingEntry,
        itemName: formItemName.trim(),
        category: formCategory,
        disposalMethod: formDisposalMethod.trim() || 'Standard Segregation',
        date: formDate,
        weightGrams: weightNum,
        notes: formNotes.trim()
      });
    } else {
      onAddLog({
        itemName: formItemName.trim(),
        category: formCategory,
        disposalMethod: formDisposalMethod.trim() || 'Standard Segregation',
        date: formDate,
        weightGrams: weightNum,
        notes: formNotes.trim(),
        ecoPointsEarned: 10
      });
    }

    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
            {t.log.title}
          </h1>
          <p className="text-sm text-[#526859] dark:text-[#9FB3A5]">
            {t.log.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => exportLogsToCsv(logs, lang)}
            disabled={logs.length === 0}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] bg-[#FFFFFF] dark:bg-[#1A2E22] border border-[#D5DFD4] dark:border-[#2F4D3C] hover:bg-[#F2F6F3] rounded-xl transition-all disabled:opacity-40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.log.exportCsvBtn}</span>
          </button>

          <button
            onClick={openNewEntryModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>{t.log.addEntryBtn}</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">
            {lang === 'en' ? 'Total Logged Records' : 'மொத்த பதிவுகள்'}
          </span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {logs.length}
          </span>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">
            {t.log.totalWeight}
          </span>
          <span className="text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] tabular-nums">
            {totalKg} kg
          </span>
        </div>

        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs">
          <span className="text-xs text-[#5C7162] dark:text-[#8EA899] block mb-1">
            {lang === 'en' ? 'Eco Points from Logs' : 'பதிவேட்டு புள்ளிகள்'}
          </span>
          <span className="text-2xl font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
            +{logs.reduce((acc, c) => acc + c.ecoPointsEarned, 0)} pts
          </span>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-[#FFFFFF] dark:bg-[#17241D] p-4 rounded-2xl border border-[#E3E8DC] dark:border-[#263D30] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {(['all', 'wet', 'dry', 'hazardous', 'ewaste', 'sanitary'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? 'bg-[#234937] text-white shadow-xs'
                  : 'bg-[#F1F4EE] dark:bg-[#203429] text-[#445B4D] dark:text-[#A8C4B5] hover:bg-[#E3EAE0]'
              }`}
            >
              {cat === 'all' ? t.log.filterAll : t.categories[cat]}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={lang === 'en' ? 'Search records...' : 'பதிவுகளைத் தேட...'}
          className="text-xs px-3 py-1.5 rounded-lg border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
        />
      </div>

      {/* Log Entries Table / List */}
      {filteredLogs.length === 0 ? (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl p-12 text-center border border-[#E3E8DC] dark:border-[#263D30] space-y-3">
          <ClipboardList className="w-10 h-10 text-[#8EA899] mx-auto" />
          <h3 className="text-base font-semibold text-[#18392B] dark:text-[#E8F3ED]">
            {t.log.noEntries}
          </h3>
          <p className="text-xs text-[#5D7364] dark:text-[#9FB3A5] max-w-sm mx-auto">
            {t.log.noEntriesSub}
          </p>
          <button
            onClick={openNewEntryModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] rounded-xl"
          >
            {t.log.addEntryBtn}
          </button>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl border border-[#E3E8DC] dark:border-[#263D30] shadow-xs divide-y divide-[#EEF2EA] dark:divide-[#22352A] overflow-hidden">
          {filteredLogs.map((entry) => (
            <div
              key={entry.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FBFDFB] dark:hover:bg-[#1C2C23] transition-colors"
            >
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#18392B] dark:text-[#E8F3ED] truncate">
                    {entry.itemName}
                  </span>
                  <span className="text-[11px] font-semibold text-[#285A3E] dark:text-[#88C6A2] bg-[#EAF2EC] dark:bg-[#1D3628] px-2 py-0.5 rounded-md">
                    {t.categories[entry.category]}
                  </span>
                  {entry.weightGrams ? (
                    <span className="text-[11px] text-[#607767] dark:text-[#8EA899] tabular-nums">
                      · {entry.weightGrams}g
                    </span>
                  ) : null}
                </div>

                <p className="text-xs text-[#4F6456] dark:text-[#A7BFB2]">
                  {entry.disposalMethod}
                  {entry.notes ? ` — "${entry.notes}"` : ''}
                </p>

                <span className="text-[11px] text-[#788E7E] dark:text-[#7A9384] block">
                  {entry.date}
                </span>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                <span className="text-xs font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
                  +{entry.ecoPointsEarned} pts
                </span>

                <button
                  onClick={() => openEditModal(entry)}
                  className="p-1.5 text-[#5F7567] dark:text-[#8EA899] hover:text-[#18392B] dark:hover:text-white rounded-lg hover:bg-[#EFF3EE] dark:hover:bg-[#23382C]"
                  title="Edit entry"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setEntryToDelete(entry)}
                  className="p-1.5 text-[#A33B3B] hover:text-[#7F1D1D] rounded-lg hover:bg-[#FEE2E2] dark:hover:bg-[#3D1A1A]"
                  title="Delete entry"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Record / Edit Modal */}
      {isModalOpen && (
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
                {editingEntry ? t.log.form.titleEdit : t.log.form.titleNew}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[#6F8576] hover:text-[#18392B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="p-2.5 bg-[#FDF2F2] dark:bg-[#351A1A] text-[#B91C1C] dark:text-[#FCA5A5] text-xs rounded-xl flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Item Name */}
              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.log.form.itemName} *
                </label>
                <input
                  type="text"
                  value={formItemName}
                  onChange={(e) => setFormItemName(e.target.value)}
                  placeholder={t.log.form.itemNamePlaceholder}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.log.form.category} *
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value as WasteCategory)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                >
                  <option value="wet">{t.categories.wet}</option>
                  <option value="dry">{t.categories.dry}</option>
                  <option value="hazardous">{t.categories.hazardous}</option>
                  <option value="ewaste">{t.categories.ewaste}</option>
                  <option value="sanitary">{t.categories.sanitary}</option>
                </select>
              </div>

              {/* Disposal Method */}
              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.log.form.disposalMethod}
                </label>
                <input
                  type="text"
                  value={formDisposalMethod}
                  onChange={(e) => setFormDisposalMethod(e.target.value)}
                  placeholder={t.log.form.disposalMethodPlaceholder}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                />
              </div>

              {/* Date & Weight */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                    {t.log.form.date}
                  </label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                    {t.log.form.weight}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formWeight}
                    onChange={(e) => setFormWeight(e.target.value)}
                    placeholder="e.g. 250"
                    className="w-full text-xs px-3 py-2 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs font-semibold text-[#324939] dark:text-[#CDE3D5] block mb-1">
                  {t.log.form.notes}
                </label>
                <textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder={t.log.form.notesPlaceholder}
                  rows={2}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#D5DFD4] dark:border-[#2F4D3C] bg-[#FAFBF9] dark:bg-[#1B2921] text-[#18392B] dark:text-[#E8F3ED]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#486351] dark:text-[#9FB3A5] bg-[#F2F5F0] dark:bg-[#203328] rounded-xl"
                >
                  {t.log.form.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] rounded-xl shadow-xs"
                >
                  {t.log.form.saveBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {entryToDelete && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-md rounded-3xl p-6 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] space-y-4"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#FEE2E2] text-[#B91C1C] flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {t.log.deleteConfirmTitle}
              </h3>
              <p className="text-xs text-[#5C7162] dark:text-[#A7BFB2] mt-1.5 leading-relaxed">
                {t.log.deleteConfirmText} ({entryToDelete.itemName})
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setEntryToDelete(null)}
                className="px-4 py-2 text-xs font-semibold text-[#486351] dark:text-[#A7BFB2] bg-[#F2F5F0] dark:bg-[#203328] rounded-xl"
              >
                {t.log.deleteCancelBtn}
              </button>
              <button
                onClick={() => {
                  onDeleteLog(entryToDelete.id);
                  setEntryToDelete(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#B91C1C] hover:bg-[#991B1B] rounded-xl"
              >
                {t.log.deleteConfirmBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
