import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Image as ImageIcon, X } from "lucide-react";
import { deckStyles } from "@/data/presentation";
import type { DeckSlide } from "./DeckStepOutline";

type Props = {
  slides: DeckSlide[];
  styleId: string;
  onBackToOutline: () => void;
};

function SlideBody({
  slide,
  accent,
  large,
}: {
  slide: DeckSlide;
  accent: string;
  large?: boolean;
}) {
  if (slide.kind === "title") {
    return (
      <div className="flex h-full items-center justify-center px-2 text-center">
        <span
          className={large ? "text-[28px] font-bold" : "text-[13px] font-bold"}
          style={{ color: accent }}
        >
          {slide.title}
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <span
        className={large ? "text-[28px] font-bold" : "text-[11px] font-bold"}
        style={{ color: accent }}
      >
        {slide.title}
      </span>
      <div className={`mt-2 flex flex-1 gap-3 ${large ? "mt-5 gap-6" : ""}`}>
        <ul className={`flex-1 space-y-1 ${large ? "space-y-3" : ""}`}>
          {slide.bullets.slice(0, 3).map((b) => (
            <li
              key={b}
              className={`flex items-start gap-2 text-muted ${large ? "text-[16px]" : "text-[9px]"}`}
            >
              <span
                className={`mt-[6px] shrink-0 rounded-full bg-current ${large ? "h-[5px] w-[5px]" : "h-[3px] w-[3px]"}`}
              />
              {b}
            </li>
          ))}
        </ul>
        {slide.kind === "image" && (
          <div className="flex w-[40%] items-center justify-center rounded-[6px] bg-[#EAEEF2]">
            <ImageIcon
              className={large ? "h-8 w-8 text-muted" : "h-[14px] w-[14px] text-muted"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function DeckStepSlides({ slides, styleId, onBackToOutline }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [notice, setNotice] = useState(false);
  const style = deckStyles.find((s) => s.id === styleId) ?? deckStyles[0]!;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % slides.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? i : (i - 1 + slides.length) % slides.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, slides.length]);

  const openSlide = openIndex === null ? null : slides[openIndex];

  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Готовые слайды</h2>

      <div className="mt-6 grid grid-cols-3 gap-4 max-[899px]:grid-cols-1">
        {slides.map((slide, i) => (
          <div key={slide.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full cursor-pointer rounded-[10px] border border-[#E6E9EC] p-3 text-left transition hover:border-2 hover:border-orange-500"
              style={{ background: style.bg, aspectRatio: "16 / 9" }}
            >
              <SlideBody slide={slide} accent={style.accent} />
            </button>
            <p className="mt-2 truncate text-[13px] text-muted">
              {i + 1}. {slide.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setNotice(true)}
          className="flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition hover:opacity-90"
        >
          <Download className="h-[18px] w-[18px]" />
          Скачать .pptx
        </button>
        {notice && (
          <p className="mt-3 rounded-[10px] bg-[#EAEEF2] p-3 text-[13px] text-muted">
            Демо-версия: файл пока не формируется. Экспорт появится после подключения генерации.
          </p>
        )}

        <div className="mt-4 flex gap-3 max-[899px]:flex-col">
          <button
            type="button"
            onClick={onBackToOutline}
            className="h-11 flex-1 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900"
          >
            Вернуться к структуре
          </button>
          <a
            href="/app/history"
            className="flex h-11 flex-1 items-center justify-center rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900"
          >
            Сохранить в Мои задания
          </a>
        </div>
      </div>

      {openSlide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 max-[899px]:p-0"
          style={{ background: "rgba(11, 40, 49, 0.6)" }}
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="flex w-full items-center justify-center gap-5 max-[899px]:flex-col max-[899px]:gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Предыдущий слайд"
              onClick={() =>
                setOpenIndex((i) => (i === null ? i : (i - 1 + slides.length) % slides.length))
              }
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 max-[899px]:order-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-[800px] max-[899px]:order-1">
              <div
                className="rounded-[12px] p-8"
                style={{ background: style.bg, aspectRatio: "16 / 9" }}
              >
                <SlideBody slide={openSlide} accent={style.accent} large />
              </div>
              <button
                type="button"
                aria-label="Закрыть"
                onClick={() => setOpenIndex(null)}
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 max-[899px]:top-2 max-[899px]:right-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <button
              type="button"
              aria-label="Следующий слайд"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % slides.length))}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-navy-900 max-[899px]:order-3"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
