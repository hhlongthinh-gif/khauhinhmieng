/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  Volume2, 
  BookOpen, 
  HelpCircle, 
  Compass, 
  ChevronRight, 
  Loader2, 
  AlertCircle,
  X,
  Info
} from 'lucide-react';
import { WordDetailsType, WordPhoneme } from './types';
import { FALLBACK_WORDS, CATEGORIES } from './data/fallbackWords';
import { MouthShapeSvg } from './components/MouthShapeSvg';
import { PracticePanel } from './components/PracticePanel';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentWord, setCurrentWord] = useState<WordDetailsType>(FALLBACK_WORDS['sheep']);
  const [selectedPhonemeIndex, setSelectedPhonemeIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [wordInput, setWordInput] = useState('');
  const [showHandbook, setShowHandbook] = useState<boolean>(false);

  // Active Phoneme helper
  const activePhoneme: WordPhoneme | undefined = currentWord.phonemes?.[selectedPhonemeIndex];

  // Set default search word input upon currentWord change or first load
  useEffect(() => {
    setSelectedPhonemeIndex(0);
    setErrorMsg(null);
  }, [currentWord]);

  // Audio Playback using SpeechSynthesis
  const speakWordEnglish = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handler for querying words
  const handleSearchWord = async (wordToSearch: string) => {
    const cleanWord = wordToSearch.trim().toLowerCase();
    if (!cleanWord) return;

    setErrorMsg(null);

    // 1. Check offline fallback dictionary first
    if (FALLBACK_WORDS[cleanWord]) {
      setCurrentWord(FALLBACK_WORDS[cleanWord]);
      return;
    }

    // 2. Query server proxy if not available in fallback list
    setLoading(true);
    try {
      const response = await fetch('/api/word-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: cleanWord }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Yêu cầu phân tích từ thất bại.');
      }

      const parsedData = await response.json();
      if (parsedData && parsedData.word) {
        setCurrentWord(parsedData);
      } else {
        throw new Error('Dữ liệu phân tích trả về không khớp định dạng.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message || 
        'Không thể phân tích từ này hiện tại. Bạn vui lòng kiểm tra khoá GEMINI_API_KEY trong tab Secrets, hoặc luyện tập với các từ phổ biến cấu hình sẵn dưới đây.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchWord(wordInput);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" id="app-root">
      
      {/* HEADER BAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs" id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md shadow-rose-500/10">
              👄
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                English Mouth Shapes
                <span className="p-0.5 px-1.5 bg-rose-500 text-white rounded text-[9px] font-extrabold uppercase tracking-widest animate-pulse">Pro</span>
              </h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Sơ đồ chi tiết khẩu hình miệng & Phòng luyện âm âm vị tiếng Anh</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowHandbook(!showHandbook)}
              className="flex items-center gap-1.5 p-2 px-3.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs text-slate-600 font-semibold bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
              id="handbook-toggle-btn"
            >
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span>Sổ tay Phiên âm</span>
            </button>
          </div>
        </div>
      </header>

      {/* CORE CONTENT LAYOUT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" id="app-main">
        
        {/* TOP HANDBOOK SECTION (Toggleable) */}
        {showHandbook && (
          <div className="mb-6 bg-cyan-950 text-cyan-50 p-6 rounded-2xl border border-cyan-800 shadow-lg relative animate-fadeIn" id="handbook-panel">
            <button 
              onClick={() => setShowHandbook(false)}
              className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-200 p-1 bg-cyan-900 rounded-full transition-colors"
              id="close-handbook-btn"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-w-3xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                Hướng dẫn định khung Sổ tay Phiên âm IPA tiếng Anh
              </h3>
              <p className="text-xs text-cyan-300 leading-relaxed mb-4">
                Phát âm chuẩn tiếng Anh đòi hỏi sự chuyển động chính xác của ba nhóm cơ bộ phận: 
                <strong> Môi (Lips)</strong>, <strong>Hàm (Jaw)</strong> và <strong>Lưỡi (Tongue)</strong>. Tiếng Việt của chúng ta cấu âm bẹt và lười di chuyển môi hơn, do đó việc hiểu rõ sơ đồ cơ năng sẽ giúp bạn vượt trội việc luyện nghe lẫn nói nói chung.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs" id="handbook-grid">
                <div className="bg-cyan-900/40 p-3 rounded-xl border border-cyan-800/40">
                  <span className="font-bold text-cyan-200 block mb-1">👄 Khẩu độ môi:</span>
                  <p className="text-cyan-300 text-[11px] leading-relaxed">
                    Có 3 dạng chính: Spread (dẹt mím cười), Rounded (tròn sâu đẩy hơi ra đằng trước), và Neutral (há lỏng tự nhiên).
                  </p>
                </div>
                <div className="bg-cyan-900/40 p-3 rounded-xl border border-cyan-800/40">
                  <span className="font-bold text-cyan-200 block mb-1">🦷 Vị trí răng cửa:</span>
                  <p className="text-cyan-300 text-[11px] leading-relaxed">
                    Khép sát tạo âm sibilant ma sát hoặc há vừa để tạo khoảng khí hoặc kẹp lưỡi thở kẽ răng như âm th.
                  </p>
                </div>
                <div className="bg-cyan-900/40 p-3 rounded-xl border border-cyan-800/40">
                  <span className="font-bold text-cyan-200 block mb-1">👅 Điểm đặt lưỡi:</span>
                  <p className="text-cyan-300 text-[11px] leading-relaxed">
                    Đè phẳng lưỡi sát sàn khoang miệng (phát nguyên âm), dính chặt nướu răng cửa (alveolar) hoặc đẩy lùi sau (velar).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="main-grid-layout">
          
          {/* LEFT PART: WORD SELECTOR & AI INTEGRATION (COL-SPAN 4) */}
          <div className="lg:col-span-4 space-y-6" id="left-column">
            
            {/* SEARCH AND AI LOOKUP CARD */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm" id="search-container-box">
              <h2 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" />
                Dịch thuật khẩu hình AI
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Nhập bất cứ từ tiếng Anh nào (Vd: <span className="hover:underline font-semibold cursor-pointer text-slate-700" onClick={() => { setWordInput('beautiful'); handleSearchWord('beautiful'); }}>beautiful</span>, <span className="hover:underline font-semibold cursor-pointer text-slate-700" onClick={() => { setWordInput('think'); handleSearchWord('think'); }}>think</span>). Mô hình Gemini sẽ tự động bóc tách âm vị, phiên âm và vẽ sơ đồ vị trí môi lưỡi chi tiết cho từ đó.
              </p>

              <form onSubmit={handleFormSubmit} className="flex gap-2" id="search-word-form">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </span>
                  <input
                    type="text"
                    value={wordInput}
                    onChange={(e) => setWordInput(e.target.value)}
                    placeholder="Nhập từ tiếng Anh..."
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                    id="search-input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !wordInput.trim()}
                  className="p-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  id="submit-query-btn"
                >
                  {loading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <span>Tra cứu</span>
                  )}
                </button>
              </form>

              {/* Error messages if any */}
              {errorMsg && (
                <div className="mt-4 p-3 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-[11px] flex items-start gap-2 leading-relaxed" id="search-error-info">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Lưu ý phân tích:</span> {errorMsg}
                  </div>
                </div>
              )}
            </div>

            {/* POPULAR FIXED CATEGORIES */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm" id="categories-container-box">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Từ vựng điển hình</h3>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Offline Sẵn</span>
              </div>

              <div className="space-y-5" id="categories-list">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-2" id={`category-${cat.id}`}>
                    <div className="bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="text-[11px] font-bold text-slate-700 block">{cat.name}</span>
                      <span className="text-[10px] text-slate-500 leading-tight block mt-0.5">{cat.description}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 px-1" id={`words-for-${cat.id}`}>
                      {cat.words.map((w) => {
                        const isActive = currentWord.word === w;
                        return (
                          <button
                            key={w}
                            onClick={() => {
                              setWordInput(w);
                              handleSearchWord(w);
                            }}
                            className={`p-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isActive
                                ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/10'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200/40'
                            }`}
                            id={`word-btn-${w}`}
                          >
                            {w}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PART: MAIN DETAILED VISUALIZER & IPA PANEL (COL-SPAN 8) */}
          <div className="lg:col-span-8 space-y-6" id="right-column-details">
            
            {/* WORD OVERVIEW SHEET */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm" id="word-detail-overview-card">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4" id="word-head-info">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide capitalize">{currentWord.word}</span>
                    <span className="p-0.5 px-2 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase border border-slate-200">
                      {currentWord.partOfSpeech}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-rose-500 tracking-wide">{currentWord.ipa}</span>
                    <button
                      onClick={() => speakWordEnglish(currentWord.word)}
                      className="p-1 text-slate-400 hover:text-rose-500 bg-slate-50 hover:bg-rose-50 rounded-lg transition-all cursor-pointer"
                      title="Nghe phát âm cả từ"
                      id="overview-speaker-btn"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-semibold flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-100/60 w-fit">
                    <span>Định nghĩa:</span>
                    <span className="font-bold">{currentWord.meaning}</span>
                  </p>
                </div>

                {/* SYNONYMS & ANTONYMS BANNER */}
                <div className="flex flex-col gap-2 min-w-[160px] max-w-[280px]" id="synonyms-antonyms-box">
                  {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                    <div id="synonyms-group">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Từ đồng nghĩa</span>
                      <div className="flex flex-wrap gap-1">
                        {currentWord.synonyms.map((syn) => (
                          <span 
                            key={syn} 
                            onClick={() => { setWordInput(syn); handleSearchWord(syn); }}
                            className="p-1 px-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-md text-[10px] font-bold hover:bg-indigo-100 cursor-pointer transition-colors"
                          >
                            {syn}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentWord.antonyms && currentWord.antonyms.length > 0 && (
                    <div id="antonyms-group">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Từ trái nghĩa</span>
                      <div className="flex flex-wrap gap-1">
                        {currentWord.antonyms.map((ant) => (
                          <span 
                            key={ant} 
                            onClick={() => { setWordInput(ant); handleSearchWord(ant); }}
                            className="p-1 px-2 bg-slate-100 border border-slate-200 text-slate-600 rounded-md text-[10px] font-bold hover:bg-slate-200 cursor-pointer transition-colors"
                          >
                            {ant}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SAMPLE SENTENCE INTERACTION */}
              {currentWord.example && (
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs shadow-inner" id="sample-sentence-block">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Câu ví dụ ngữ cảnh</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900 tracking-wide text-xs sm:text-sm flex items-center gap-2">
                      <span>{currentWord.example.english}</span>
                      <button
                        onClick={() => speakWordEnglish(currentWord.example.english)}
                        className="p-0.5 text-slate-400 hover:text-slate-800 rounded bg-white border border-slate-200 cursor-pointer transition-colors"
                        title="Nghe phát âm cả câu"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </p>
                    <p className="text-slate-500 text-[11px] font-mono font-medium">{currentWord.example.ipa}</p>
                    <p className="text-slate-700 font-medium italic text-[11px]">Dịch nghĩa: {currentWord.example.vietnamese}</p>
                  </div>
                </div>
              )}
            </div>

            {/* CHOOSE SPEECH SOUND WAVE (PHONEME NAV TABS) */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm" id="phonemes-breakdown-card">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Ấn một âm vị dưới đây để bóc tách khẩu hình:</h3>
              <div className="flex flex-wrap items-center gap-2" id="phoneme-tabs-container">
                {currentWord.phonemes && currentWord.phonemes.map((pho, idx) => {
                  const isActive = selectedPhonemeIndex === idx;
                  return (
                    <button
                      key={`${pho.symbol}-${idx}`}
                      onClick={() => setSelectedPhonemeIndex(idx)}
                      className={`flex items-center gap-2 p-2.5 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-[1px]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                      id={`phoneme-tab-${idx}`}
                    >
                      <span className="text-sm font-black tracking-wider text-rose-500">/{pho.symbol}/</span>
                      <span className="w-[1px] h-3 bg-slate-300"></span>
                      <span className="text-[10px] opacity-80 uppercase tracking-wider">{pho.type === 'vowel' ? 'Nguyên âm' : 'Phụ âm'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CHOSEN PHONEME DETAILED LAYOUT AND SVG CHART */}
            {activePhoneme ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="active-phoneme-board">
                
                {/* Visual SVG Diagram (col-span 5) */}
                <div className="md:col-span-5 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between" id="visual-mouth-shapes-box">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Khung giải phẫu phát âm</span>
                    <span className="px-2 py-0.5 bg-rose-50 border border-rose-100 text-rose-600 rounded text-[9px] font-extrabold uppercase">
                      /{activePhoneme.symbol}/
                    </span>
                  </div>

                  <div className="flex-1 w-full min-h-[260px] flex items-center justify-center p-1" id="svg-renderer-wrapper">
                    <MouthShapeSvg mouthShapeId={activePhoneme.mouthShapeId} />
                  </div>
                </div>

                {/* Physical Steps, Errors & Corrective Tips (col-span 7) */}
                <div className="md:col-span-7 space-y-4 flex flex-col justify-between" id="descriptions-instructions-box">
                  
                  {/* Step Description */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex-1" id="step-description-bubble">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      Cách vận hành cơ quan cấu âm:
                    </h4>
                    <span className="text-xs font-black text-rose-600 block mb-1.5">{activePhoneme.label}</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      {activePhoneme.description}
                    </p>
                  </div>

                  {/* Errors and Remedies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="errors-remedies-grid">
                    {/* Error info */}
                    <div className="bg-rose-50/50 border border-slate-150 rounded-2xl p-4 flex flex-col" id="common-errors-card">
                      <div className="flex items-center gap-1.5 text-rose-700 font-bold text-xs mb-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Lỗi Việt hay mắc phải:</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-semibold flex-1">
                        {activePhoneme.commonErrors}
                      </p>
                    </div>

                    {/* Remedy Tip */}
                    <div className="bg-emerald-50/50 border border-slate-150 rounded-2xl p-4 flex flex-col" id="remedy-card">
                      <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs mb-1">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Cách chỉnh sửa chuẩn:</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-semibold flex-1">
                        {activePhoneme.remedy}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              <div className="p-10 text-center bg-white rounded-2xl border border-slate-200 text-slate-500" id="no-phoneme-selection">
                Chưa có âm vị nào được lựa chọn để bóc tách.
              </div>
            )}

            {/* PRACTICE WORKSHOP INTERACTION */}
            {activePhoneme && (
              <PracticePanel 
                word={currentWord.word} 
                ipa={currentWord.ipa} 
                symbol={activePhoneme.symbol} 
                symbolLabel={activePhoneme.label}
              />
            )}

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200/80 mt-16 py-8 text-center text-xs text-slate-400 font-medium" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>English Mouth Shapes & Phonetics v1.0. Chuyên mục hướng dẫn giải phẫu phát âm trực quan.</p>
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <span>Sinh bởi Học viện Phát âm</span>
            <span>•</span>
            <span>Giám sát khoa học bởi Gemini 3.5 AI</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
