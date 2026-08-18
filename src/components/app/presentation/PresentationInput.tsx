import { useState, useRef, useEffect } from "react";
import { 
  LayoutGrid, 
  BookOpen, 
  SlidersHorizontal, 
  ChevronDown, 
  Paperclip, 
  Sparkles, 
  Check 
} from "lucide-react";
import { deckLengths, deckSettings, deckDesigns } from "@/data/presentation";
import { subjects } from "@/data/wizard";

type Settings = {
  density: string;
  extras: Record<string, boolean>;
};

type Props = {
  topic: string;
  setTopic: (v: string) => void;
  subject: string;
  setSubject: (v: string) => void;
  slidesCount: string;
  setSlidesCount: (v: string) => void;
  designId: string;
  setDesignId: (v: string) => void;
  settings: Settings;
  setSettings: (v: Settings) => void;
  onCreate: () => void;
};

export function PresentationInput({
  topic, setTopic,
  subject, setSubject,
  slidesCount, setSlidesCount,
  designId, setDesignId,
  settings, setSettings,
  onCreate
}: Props) {
  const [showSettings, setShowSettings] = useState(false);
  const [showSubjectMenu, setShowSubjectMenu] = useState(false);
  const [showLengthMenu, setShowLengthMenu] = useState(false);
  const [fileNotice, setFileNotice] = useState(false);
  const [designsNotice, setDesignsNotice] = useState(false);

  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDown = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setShowSettings(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSettings(false);
    };
    if (showSettings) {
      document.addEventListener("mousedown", handleDown);
      document.addEventListener("keydown", handleKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [showSettings]);

  const handleAddFile = () => {
    setFileNotice(true);
    setTimeout(() => setFileNotice(false), 4000);
  };

  const currentLengthLabel = deckLengths.find(l => l.id === slidesCount)?.label || "Авто";

  return (
    <div className="py-10 max-[899px]:py-6">
      <h1 className="text-center font-display text-[32px] font-extrabold text-navy-900 max-[899px]:text-[26px]">
        О чём будет презентация?
      </h1>

      {/* Params Panel */}
      <div className="mt-6 flex flex-wrap items-center gap-3 max-[899px]:flex-col max-[899px]:items-stretch">
        <div className="relative inline-block">
          <button
            onClick={() => setShowLengthMenu(!showLengthMenu)}
            className="flex h-12 items-center gap-2 rounded-[12px] border border-[#E6E9EC] bg-white px-4 text-[15px] text-navy-900 transition hover:border-navy-900"
          >
            <LayoutGrid className="h-[18px] w-[18px] text-muted" />
            Слайдов: {currentLengthLabel}
            <ChevronDown className="h-4 w-4" />
          </button>
          {showLengthMenu && (
            <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-xl border border-[#E6E9EC] bg-white p-2 shadow-xl">
              {deckLengths.map(l => (
                <button
                  key={l.id}
                  onClick={() => { setSlidesCount(l.id); setShowLengthMenu(false); }}
                  className={`w-full rounded-lg px-3 py-2 text-left text-[14px] transition hover:bg-[#F5F7F9] ${slidesCount === l.id ? 'bg-[#F5F7F9] font-bold text-navy-900' : 'text-muted'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative inline-block">
          <button
            onClick={() => setShowSubjectMenu(!showSubjectMenu)}
            className="flex h-12 items-center gap-2 rounded-[12px] border border-[#E6E9EC] bg-white px-4 text-[15px] text-navy-900 transition hover:border-navy-900"
          >
            <BookOpen className="h-[18px] w-[18px] text-muted" />
            Предмет: {subject}
            <ChevronDown className="h-4 w-4" />
          </button>
          {showSubjectMenu && (
            <div className="absolute left-0 top-full z-10 mt-2 w-48 rounded-xl border border-[#E6E9EC] bg-white p-2 shadow-xl">
              {["Не выбрано", ...subjects].map(s => (
                <button
                  key={s}
                  onClick={() => { setSubject(s); setShowSubjectMenu(false); }}
                  className={`w-full rounded-lg px-3 py-2 text-left text-[14px] transition hover:bg-[#F5F7F9] ${subject === s ? 'bg-[#F5F7F9] font-bold text-navy-900' : 'text-muted'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative ml-auto max-[899px]:ml-0">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex h-12 items-center gap-2 rounded-[12px] border border-[#E6E9EC] bg-white px-4 text-[15px] text-navy-900 transition hover:border-navy-900"
          >
            <SlidersHorizontal className="h-[18px] w-[18px] text-muted" />
            Настройки
          </button>
          {showSettings && (
            <div 
              ref={settingsRef}
              className="absolute right-0 top-full z-20 mt-2 w-[320px] rounded-[16px] border border-[#E6E9EC] bg-white p-5 shadow-[0_12px_32px_rgba(11,40,49,0.12)] max-[899px]:fixed max-[899px]:bottom-0 max-[899px]:left-0 max-[899px]:right-0 max-[899px]:top-auto max-[899px]:w-full max-[899px]:rounded-b-none"
            >
              <div className="hidden h-1.5 w-12 rounded-full bg-[#EAEEF2] mx-auto mb-4 max-[899px]:block" />
              
              <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Объём текста</span>
              <div className="mt-3 flex gap-2">
                {deckSettings.density.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSettings({ ...settings, density: d.id })}
                    className={`flex-1 h-10 rounded-full text-[14px] transition ${settings.density === d.id ? 'bg-navy-900 text-white' : 'bg-[#F5F7F9] text-muted hover:bg-[#EAEEF2]'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>

              <div className="my-5 h-[1px] bg-[#E6E9EC]" />

              <span className="block text-[13px] font-bold uppercase tracking-wider text-muted">Что добавить</span>
              <div className="mt-3 space-y-4">
                {deckSettings.extras.map(ex => (
                  <div key={ex.id} className="flex items-center justify-between">
                    <span className="text-[14px] text-navy-900">{ex.label}</span>
                    <button
                      onClick={() => setSettings({
                        ...settings,
                        extras: { ...settings.extras, [ex.id]: !settings.extras[ex.id] }
                      })}
                      className={`relative h-[22px] w-[40px] rounded-full transition-colors ${settings.extras[ex.id] ? 'bg-teal-500' : 'bg-[#EAEEF2]'}`}
                    >
                      <div className={`absolute top-0.5 h-[18px] w-[18px] rounded-full bg-white transition-all ${settings.extras[ex.id] ? 'left-[20px]' : 'left-0.5'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-3 rounded-[20px] border border-[#E6E9EC] bg-white p-5">
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Основные принципы ландшафтного дизайна. Раскрой понятие, покажи приёмы и приведи примеры."
          className="h-[160px] w-full resize-none text-[16px] leading-[1.6] text-navy-900 outline-none placeholder:text-[#AAB4BE]"
        />
        
        <div className="mt-4 flex flex-wrap items-center gap-3 max-[899px]:flex-col max-[899px]:items-stretch">
          <button
            onClick={handleAddFile}
            className="flex h-12 items-center gap-2 rounded-full bg-[#EAEEF2] px-5 text-[15px] font-medium text-navy-900 transition hover:bg-[#DEE3E8]"
          >
            <Paperclip className="h-[18px] w-[18px]" />
            Добавить файл
          </button>
          <button
            disabled={!topic.trim()}
            onClick={onCreate}
            className="flex h-12 items-center gap-2 rounded-full bg-orange-500 px-6 text-[15px] font-bold text-navy-900 transition hover:opacity-90 disabled:opacity-45 disabled:cursor-not-allowed max-[899px]:order-first"
          >
            <Sparkles className="h-[18px] w-[18px]" />
            Создать презентацию
          </button>
        </div>
      </div>

      {fileNotice && (
        <div className="mt-3 inline-block rounded-[10px] bg-[#EAEEF2] px-3 py-[12px] text-[13px] text-muted">
          Демо-версия: загрузка файлов появится позже
        </div>
      )}

      <p className="mt-3 text-center text-[14px] text-muted">
        Опиши подробно, что должно быть в презентации — чем точнее, тем ближе результат
      </p>

      {/* Design selection */}
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-4 max-[899px]:grid-cols-2">
          {deckDesigns.map(design => (
            <div key={design.id}>
              <button
                onClick={() => setDesignId(design.id)}
                className={`group relative block aspect-[16/10] w-full overflow-hidden rounded-[14px] border transition-all ${designId === design.id ? 'border-2 border-orange-500 shadow-lg' : 'border-[#E6E9EC] hover:border-navy-900/20'}`}
                style={{ backgroundColor: design.bg }}
              >
                {/* Mock slides view */}
                <div className="relative h-full w-full">
                  {/* Left slide */}
                  <div 
                    className="absolute left-[22.5%] top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border border-navy-900/5 bg-white shadow-sm"
                    style={{ backgroundColor: design.bg }}
                  >
                    <div className="flex h-full flex-col items-center justify-center p-2">
                      <div className="h-[8%] w-[70%] rounded-full" style={{ backgroundColor: design.accent }} />
                      <div className="mt-[8%] h-[5%] w-[50%] rounded-full" style={{ backgroundColor: design.ink, opacity: 0.25 }} />
                      <div className="mt-[4%] h-[5%] w-[40%] rounded-full" style={{ backgroundColor: design.ink, opacity: 0.25 }} />
                    </div>
                  </div>
                  {/* Right slide */}
                  <div 
                    className="absolute left-[35%] top-[58%] h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border shadow-[0_4px_12px_rgba(11,40,49,0.14)]"
                    style={{ backgroundColor: design.bg, borderColor: `${design.ink}1F` }}
                  >
                    <div className="flex h-full flex-col p-2 pt-3">
                      <div className="h-[8%] w-[60%] rounded-full" style={{ backgroundColor: design.accent }} />
                      <div className="mt-[10%] h-[5%] w-[80%] rounded-full" style={{ backgroundColor: design.ink, opacity: 0.25 }} />
                      <div className="mt-[5%] h-[5%] w-[70%] rounded-full" style={{ backgroundColor: design.ink, opacity: 0.25 }} />
                      <div className="mt-[5%] h-[5%] w-[75%] rounded-full" style={{ backgroundColor: design.ink, opacity: 0.25 }} />
                    </div>
                  </div>
                </div>

                {designId === design.id && (
                  <div className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-navy-900">
                    <Check className="h-4 w-4" />
                  </div>
                )}
                {design.special && (
                  <div className={`absolute bottom-2 ${designId === design.id ? 'left-10' : 'left-2'} flex items-center gap-1.5 rounded-full border border-[#E6E9EC] bg-white px-2.5 py-1 text-[12px] font-medium text-navy-900 shadow-sm`}>
                    <Sparkles className="h-3 w-3 text-orange-500" />
                    AI-выбор
                  </div>
                )}
              </button>
              <span className="mt-2 block text-[13px] text-navy-900">{design.label}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setDesignsNotice(true)}
          className="mt-4 flex h-[52px] w-full items-center justify-center rounded-[14px] border border-[#E6E9EC] bg-white text-[15px] font-medium text-navy-900 transition hover:bg-[#F5F7F9]"
        >
          Все дизайны
        </button>
        {designsNotice && (
          <p className="mt-2 text-center text-[13px] text-muted">
            Пока доступны девять оформлений, остальные добавим позже
          </p>
        )}
      </div>
    </div>
  );
}
