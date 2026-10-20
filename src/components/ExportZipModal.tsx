import React, { useState } from 'react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { generateSourceZip, downloadBlob } from '../utils/zipExport';
import { Download, CheckCircle2, FileCode2, X, Terminal, Globe, Loader2 } from 'lucide-react';

interface ExportZipModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const ExportZipModal: React.FC<ExportZipModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
  const t = getTranslation(lang);
  const [isPackaging, setIsPackaging] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    try {
      setIsPackaging(true);
      const zipBlob = await generateSourceZip();
      downloadBlob(zipBlob, 'EcoSort-SourceCode.zip');
      setIsPackaging(false);
      setDownloadReady(true);
      setTimeout(() => setDownloadReady(false), 5000);
    } catch (err) {
      console.error('Failed to create ZIP', err);
      setIsPackaging(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-xl rounded-3xl p-6 sm:p-7 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] space-y-5 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF2EC] dark:bg-[#203629] text-[#234937] dark:text-[#88C6A2] flex items-center justify-center shrink-0">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 id="export-modal-title" className="text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
                {t.export.title}
              </h3>
              <span className="text-xs text-[#5E7566] dark:text-[#9FB3A5]">
                {lang === 'en' ? 'Vite + React + TypeScript + Tailwind' : 'Vite + React + TypeScript'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6D8374] dark:text-[#8EA899] hover:text-[#18392B] dark:hover:text-white rounded-xl"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#4E6254] dark:text-[#A7BFB2] leading-relaxed">
          {t.export.description}
        </p>

        {/* Quick Instructions & Deployment Settings */}
        <div className="bg-[#FAFBF9] dark:bg-[#1B2921] rounded-2xl p-4 border border-[#E3E8DC] dark:border-[#263D30] space-y-3 text-xs text-[#445A4C] dark:text-[#A7BFB2]">
          <div className="flex items-center gap-2 font-bold text-[#18392B] dark:text-[#E8F3ED]">
            <Terminal className="w-4 h-4 text-[#285A3E] dark:text-[#88C6A2]" />
            <span>{lang === 'en' ? 'Local Run Commands' : 'கணினியில் இயக்க'}</span>
          </div>
          <div className="bg-[#F0F4EE] dark:bg-[#15231B] rounded-xl p-3 font-mono text-[11px] text-[#1E392B] dark:text-[#88C6A2] space-y-1">
            <p>npm install</p>
            <p>npm run dev</p>
          </div>

          <div className="flex items-center gap-2 font-bold text-[#18392B] dark:text-[#E8F3ED] pt-1">
            <Globe className="w-4 h-4 text-[#205282] dark:text-[#81B4E5]" />
            <span>{lang === 'en' ? 'Cloudflare Pages Deployment Settings' : 'கிளவுட்ஃபிளேர் பேஜஸ் அமைப்புகள்'}</span>
          </div>
          <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-[#556D5F] dark:text-[#9FB3A5]">
            <li><strong>Build Command:</strong> <code className="bg-[#F0F4EE] dark:bg-[#15231B] px-1 py-0.5 rounded">npm run build</code></li>
            <li><strong>Build Output Directory:</strong> <code className="bg-[#F0F4EE] dark:bg-[#15231B] px-1 py-0.5 rounded">dist</code></li>
            <li><strong>Environment:</strong> 100% Client-side static single-page app (No server needed)</li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#6B8071] dark:text-[#8FA899]">
            {downloadReady && (
              <span className="inline-flex items-center gap-1.5 text-[#2E7D32] dark:text-[#81C784] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t.export.readyMsg}</span>
              </span>
            )}
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-[#486351] dark:text-[#A7BFB2] hover:text-[#18392B] bg-[#F2F5F0] dark:bg-[#203328] rounded-xl"
            >
              {lang === 'en' ? 'Close' : 'மூடுக'}
            </button>

            <button
              onClick={handleDownloadZip}
              disabled={isPackaging}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] hover:bg-[#1B382B] active:scale-95 transition-all rounded-xl shadow-xs disabled:opacity-50"
            >
              {isPackaging ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.export.generating}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{t.export.downloadBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
