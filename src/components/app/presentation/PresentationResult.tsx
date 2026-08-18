import { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Plus, 
  Download, 
  Pencil, 
  ChevronUp, 
  ChevronDown, 
  X, 
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { deckDesigns, deckOutlineMock } from "@/data/presentation";
export type DeckSlide = {
  id: string;
  title: string;
  kind: "title" | "text" | "image";
  bullets: string[];
};

type Props = {
  topic: string;
  slides: DeckSlide[];
  setSlides: (s: DeckSlide[]) => void;
  designId: string;
  onBack: () => void;
};

export function PresentationResult({ topic, slides, setSlides, designId, onBack }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [exportNotice, setExportNotice] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const design = deckDesigns.find(d => d.id === designId) ?? deckDesigns[0]!;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex(i => (i === null || i === slides.length - 1 ? i : i + 1));
      if (e.key === "ArrowLeft") setOpenIndex(i => (i === null || i === 0 ? i : i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, slides.length]);

  const move = (index: number, dir: number) => {
    const target = index + dir;
    if (target < 0 || target >= slides.length) return;
    const next = [...slides];
    [next[index], next[target]] = [next[target], next[index]];
    setSlides(next);
  };

  const removeSlide = (id: string) => {
    setSlides(slides.filter(s => s.id !== id));
  };

  const addSlide = () => {
    const newSlide: DeckSlide = {
      id: `new-${Date.now()}`,
      title: "Новый слайд",
      kind: "text",
      bullets: []
    };
    setSlides([...slides, newSlide]);
  };

  const updateTitle = (id: string, newTitle: string) => {
    setSlides(slides.map(s => s.id === id ? { ...s, title: newTitle } : s));
  };

  return (
    <div className="py-8 max-[899px]:py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[14px] font-medium text-teal-500 transition hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Новая презентация
        </button>
      </div>
      
      <div className="mt-4 flex items-center justify-between gap-4">
        <h1 className="font-display text-[24px] font-extrabold text-navy-900 truncate">
          {topic || "Презентация"}
        </h1>
        <span className="shrink-0 text-[14px] text-muted">{slides.length} слайдов</span>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-3 gap-4 max-[899px]:grid-cols-1">
        {slides.map((slide, i) => (
          <div key={slide.id} className="group">
            <div 
              className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[10px] border border-[#E6E9EC] transition hover:border-orange-500 hover:shadow-md"
              style={{ backgroundColor: design.bg }}
              onClick={() => setOpenIndex(i)}
            >
              <div className="flex h-full flex-col p-3">
                {slide.kind === 'title' ? (
                  <div className="flex flex-1 items-center justify-center text-center">
                    <span className="text-[13px] font-bold" style={{ color: design.accent }}>{slide.title}</span>
                  </div>
                ) : (
                  <>
                    <span className="text-[11px] font-bold" style={{ color: design.accent }}>{slide.title}</span>
                    <div className="mt-2 flex flex-1 gap-2 overflow-hidden">
                      <ul className="flex-1 space-y-1">
                        {slide.bullets.slice(0, 3).map((b: string, bi: number) => (
                          <li key={bi} className="flex items-start gap-1.5 text-[9px]" style={{ color: `${design.ink}B3` }}>
                            <div className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: design.ink, opacity: 0.7 }} />
                            <span className="truncate">{b}</span>
                          </li>
                        ))}
                      </ul>
                      {slide.kind === 'image' && (
                        <div className="flex w-[40%] items-center justify-center rounded-[6px]" style={{ backgroundColor: `${design.ink}14` }}>
                          <ImageIcon className="h-3 w-3" style={{ color: `${design.ink}4D` }} />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1 flex items-center gap-1.5">
                <span className="text-[13px] text-muted shrink-0">{i + 1}.</span>
                {editingId === slide.id ? (
                  <input
                    autoFocus
                    value={slide.title}
                    onBlur={() => setEditingId(null)}
                    onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
                    onChange={(e) => updateTitle(slide.id, e.target.value)}
                    className="w-full bg-transparent text-[13px] text-navy-900 outline-none border-b border-teal-500"
                  />
                ) : (
                  <span className="truncate text-[13px] text-muted">{slide.title}</span>
                )}
              </div>
              
              <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 max-[899px]:opacity-100">
                <button 
                  onClick={(e) => { e.stopPropagation(); setEditingId(slide.id); }}
                  className="p-1 text-muted hover:text-navy-900"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button 
                  disabled={i === 0}
                  onClick={(e) => { e.stopPropagation(); move(i, -1); }}
                  className="p-1 text-muted hover:text-navy-900 disabled:opacity-30"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button 
                  disabled={i === slides.length - 1}
                  onClick={(e) => { e.stopPropagation(); move(i, 1); }}
                  className="p-1 text-muted hover:text-navy-900 disabled:opacity-30"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                {slide.kind !== 'title' && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeSlide(slide.id); }}
                    className="p-1 text-muted hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addSlide}
        className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#E6E9EC] bg-white text-[14px] text-navy-900 transition hover:border-navy-900"
      >
        <Plus className="h-4 w-4" />
        Добавить слайд
      </button>

      {/* Export */}
      <div className="mt-10">
        <button
          onClick={() => setExportNotice(true)}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition hover:opacity-90"
        >
          <Download className="h-[18px] w-[18px]" />
          Скачать .pptx
        </button>
        {exportNotice && (
          <div className="mt-3 rounded-[10px] bg-[#EAEEF2] p-3 text-[13px] text-muted text-center animate-in fade-in slide-in-from-top-1">
            Демо-версия: файл пока не формируется. Экспорт появится после подключения генерации.
          </div>
        )}

        <div className="mt-4 flex gap-3 max-[899px]:flex-col">
          <button
            onClick={onBack}
            className="h-[44px] flex-1 rounded-full border border-[#E6E9EC] bg-white text-[14px] text-navy-900 transition hover:border-navy-900"
          >
            Сменить оформление
          </button>
          <a
            href="/app/history"
            className="flex h-[44px] flex-1 items-center justify-center rounded-full border border-[#E6E9EC] bg-white text-[14px] text-navy-900 transition hover:border-navy-900"
          >
            Сохранить в Мои задания
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B2831]/60 p-6 backdrop-blur-sm max-[899px]:p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div 
            className="relative flex w-full max-w-[900px] flex-col items-center gap-6"
            onClick={e => e.stopPropagation()}
          >
            <div 
              className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] p-10 shadow-2xl max-[899px]:p-6"
              style={{ backgroundColor: design.bg }}
            >
              {slides[openIndex].kind === 'title' ? (
                <div className="flex h-full items-center justify-center text-center">
                  <h2 className="text-[32px] font-extrabold max-[899px]:text-[22px]" style={{ color: design.accent }}>
                    {slides[openIndex].title}
                  </h2>
                </div>
              ) : (
                <div className="flex h-full flex-col">
                  <h2 className="text-[28px] font-extrabold max-[899px]:text-[18px]" style={{ color: design.accent }}>
                    {slides[openIndex].title}
                  </h2>
                  <div className="mt-8 flex flex-1 gap-10 max-[899px]:mt-4 max-[899px]:gap-4">
                    <ul className="flex-1 space-y-4 max-[899px]:space-y-2">
                      {slides[openIndex].bullets.map((b: string, bi: number) => (
                        <li key={bi} className="flex items-start gap-3 text-[18px] leading-relaxed max-[899px]:text-[14px]" style={{ color: design.ink }}>
                          <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: design.accent }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {slides[openIndex].kind === 'image' && (
                      <div className="flex w-[40%] items-center justify-center rounded-[12px]" style={{ backgroundColor: `${design.ink}0A` }}>
                        <ImageIcon className="h-12 w-12" style={{ color: `${design.ink}26` }} />
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <button 
                onClick={() => setOpenIndex(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/10 text-navy-900 transition hover:bg-navy-900/20 max-[899px]:h-8 max-[899px]:w-8"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                disabled={openIndex === 0}
                onClick={() => setOpenIndex(openIndex - 1)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg transition hover:bg-orange-500 disabled:opacity-50"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="text-[14px] font-bold text-white">
                {openIndex + 1} / {slides.length}
              </div>
              <button 
                disabled={openIndex === slides.length - 1}
                onClick={() => setOpenIndex(openIndex + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy-900 shadow-lg transition hover:bg-orange-500 disabled:opacity-50"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
