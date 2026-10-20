import React, { useState } from 'react';
import { UserProgress, Language, Article, MythFact, MiniQuiz } from '../types';
import { getTranslation } from '../i18n/translations';
import { ARTICLES, MYTHS_AND_FACTS, MINI_QUIZZES } from '../data/learningHub';
import { triggerEcoConfetti } from '../utils/confetti';
import {
  GraduationCap,
  BookOpen,
  HelpCircle,
  Bookmark,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  ArrowRight,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface LearningHubViewProps {
  progress: UserProgress;
  lang: Language;
  onToggleBookmark: (articleId: string) => void;
  onMarkArticleRead: (articleId: string) => void;
}

export const LearningHubView: React.FC<LearningHubViewProps> = ({
  progress,
  lang,
  onToggleBookmark,
  onMarkArticleRead
}) => {
  const t = getTranslation(lang);
  const [activeTab, setActiveTab] = useState<'articles' | 'myths' | 'quiz'>('articles');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Myth expansion state
  const [expandedMythId, setExpandedMythId] = useState<string | null>(MYTHS_AND_FACTS[0].id);

  // Quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);

  const bookmarkedSet = new Set(progress.bookmarkedArticleIds || []);
  const readSet = new Set(progress.readArticleIds || []);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    onMarkArticleRead(article.id);
  };

  const handleSelectQuizAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    const quiz = MINI_QUIZZES[currentQuizIdx];
    if (idx === quiz.correctIndex) {
      setQuizScore((s) => s + 1);
      triggerEcoConfetti();
    }
  };

  const nextQuizQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuizIdx((idx) => (idx + 1) % MINI_QUIZZES.length);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18392B] dark:text-[#E8F3ED]">
          {t.hub.title}
        </h1>
        <p className="text-sm text-[#526859] dark:text-[#9FB3A5]">
          {t.hub.subtitle}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#EAEFE6] dark:bg-[#1B2921] rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('articles')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'articles'
              ? 'bg-[#FFFFFF] dark:bg-[#253A2E] text-[#18392B] dark:text-white shadow-xs'
              : 'text-[#506656] dark:text-[#9FB3A5] hover:text-[#18392B]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t.hub.tabArticles}</span>
        </button>

        <button
          onClick={() => setActiveTab('myths')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'myths'
              ? 'bg-[#FFFFFF] dark:bg-[#253A2E] text-[#18392B] dark:text-white shadow-xs'
              : 'text-[#506656] dark:text-[#9FB3A5] hover:text-[#18392B]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.hub.tabMyths}</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'quiz'
              ? 'bg-[#FFFFFF] dark:bg-[#253A2E] text-[#18392B] dark:text-white shadow-xs'
              : 'text-[#506656] dark:text-[#9FB3A5] hover:text-[#18392B]'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t.hub.tabQuizzes}</span>
        </button>
      </div>

      {/* Tab 1: Articles & Guides */}
      {activeTab === 'articles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ARTICLES.map((art) => {
            const isBookmarked = bookmarkedSet.has(art.id);
            const isRead = readSet.has(art.id);

            return (
              <div
                key={art.id}
                className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 border border-[#E3E8DC] dark:border-[#263D30] shadow-xs hover:border-[#BED2C4] dark:hover:border-[#3E614E] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#627A6B] dark:text-[#9FB3A5] mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{t.categories[art.category]}</span>
                    </span>

                    <button
                      onClick={() => onToggleBookmark(art.id)}
                      className={`p-1 rounded-lg transition-colors ${
                        isBookmarked
                          ? 'text-[#234937] dark:text-[#88C6A2]'
                          : 'text-[#8EA899] hover:text-[#18392B]'
                      }`}
                      title={isBookmarked ? t.hub.bookmarked : t.hub.bookmark}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#18392B] dark:text-[#E8F3ED] leading-snug">
                    {art.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#546A5B] dark:text-[#A7BFB2] mt-2 leading-relaxed">
                    {art.summary[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#EEF2EA] dark:border-[#22352A] flex items-center justify-between">
                  {isRead ? (
                    <span className="text-[11px] font-semibold text-[#285A3E] dark:text-[#88C6A2] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Completed' : 'படிக்கப்பட்டது'}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#788E7E] dark:text-[#7A9384]">
                      {lang === 'en' ? 'Unread' : 'படிக்காதது'}
                    </span>
                  )}

                  <button
                    onClick={() => openArticle(art)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#234937] dark:text-[#88C6A2] hover:underline"
                  >
                    <span>{t.hub.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Myths vs Facts */}
      {activeTab === 'myths' && (
        <div className="space-y-4 max-w-3xl">
          {MYTHS_AND_FACTS.map((item) => {
            const isExpanded = expandedMythId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-2xl border border-[#E3E8DC] dark:border-[#263D30] overflow-hidden shadow-xs transition-all"
              >
                <div
                  onClick={() => setExpandedMythId(isExpanded ? null : item.id)}
                  className="p-5 cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#A8482A] uppercase tracking-wider block">
                      {t.hub.mythLabel}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-[#18392B] dark:text-[#E8F3ED]">
                      "{item.myth[lang]}"
                    </h3>
                  </div>

                  <div className="p-1 rounded-lg text-[#6A8172] dark:text-[#88C6A2] shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-[#EEF2EA] dark:border-[#203328] space-y-3 bg-[#FAFBF9] dark:bg-[#1A2820]">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-[#234937] dark:text-[#88C6A2] uppercase tracking-wider block">
                        {t.hub.factLabel}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#18392B] dark:text-[#E8F3ED]">
                        {item.fact[lang]}
                      </p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-semibold text-[#5B7363] dark:text-[#8EA899] block">
                        {t.hub.whyLabel}:
                      </span>
                      <p className="text-xs text-[#485F50] dark:text-[#A7BFB2] leading-relaxed">
                        {item.explanation[lang]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 3: Mini Quizzes */}
      {activeTab === 'quiz' && (
        <div className="bg-[#FFFFFF] dark:bg-[#17241D] rounded-3xl p-6 sm:p-8 border border-[#E3E8DC] dark:border-[#263D30] max-w-2xl mx-auto shadow-xs space-y-5">
          <div className="flex items-center justify-between text-xs text-[#647C6D] dark:text-[#8EA899] pb-3 border-b border-[#EEF2EA] dark:border-[#22352A]">
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'en' ? 'Knowledge Check' : 'அறிவுச் சோதனை'} ({currentQuizIdx + 1} / {MINI_QUIZZES.length})
            </span>
            <span className="font-bold text-[#234937] dark:text-[#88C6A2] tabular-nums">
              {t.hub.quizScore}: {quizScore}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#18392B] dark:text-[#E8F3ED]">
            {MINI_QUIZZES[currentQuizIdx].question[lang]}
          </h3>

          <div className="space-y-2.5">
            {MINI_QUIZZES[currentQuizIdx].options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === MINI_QUIZZES[currentQuizIdx].correctIndex;

              let style = 'bg-[#FAFBF9] dark:bg-[#1B2921] border-[#DFE6DC] dark:border-[#25392D] text-[#223B2B] dark:text-[#D1E6DA] hover:bg-[#F0F5F1]';
              if (selectedAnswer !== null) {
                if (isCorrect) {
                  style = 'bg-[#E8F5E9] dark:bg-[#193622] border-[#66BB6A] text-[#1B5E20] dark:text-[#A5D6A7]';
                } else if (isSelected && !isCorrect) {
                  style = 'bg-[#FFEBEE] dark:bg-[#381B1B] border-[#EF9A9A] text-[#B71C1C] dark:text-[#FCA5A5]';
                } else {
                  style = 'opacity-50 border-[#E0E0E0]';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelectQuizAnswer(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${style}`}
                >
                  {opt[lang]}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="p-4 rounded-xl bg-[#F4F7F2] dark:bg-[#1B2B21] border border-[#DEE6DB] dark:border-[#2B4435] space-y-3">
              <p className="text-xs text-[#405646] dark:text-[#C4DDD0] leading-relaxed">
                <strong>{lang === 'en' ? 'Explanation: ' : 'விளக்கம்: '}</strong>
                {MINI_QUIZZES[currentQuizIdx].explanation[lang]}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={nextQuizQuestion}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] rounded-xl"
                >
                  {t.hub.nextQuestion}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Article Detail Full Reading Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFFFF] dark:bg-[#17241D] w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-xl border border-[#DFE6DC] dark:border-[#2F4D3C] space-y-5 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between pb-3 border-b border-[#EEF2EA] dark:border-[#22352A]">
              <div>
                <span className="text-xs text-[#5D7364] dark:text-[#9FB3A5] capitalize">
                  {t.categories[selectedArticle.category]} · {selectedArticle.readTime}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18392B] dark:text-[#E8F3ED] mt-1">
                  {selectedArticle.title[lang]}
                </h2>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-[#6D8374] hover:text-[#18392B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-sm font-bold text-[#18392B] dark:text-[#E8F3ED]">
                    {sec.heading[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#465E4E] dark:text-[#A7BFB2] leading-relaxed">
                    {sec.body[lang]}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EEF2EA] dark:border-[#22352A] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#234937] dark:bg-[#2A573F] rounded-xl"
              >
                {lang === 'en' ? 'Close Reader' : 'மூடுக'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
