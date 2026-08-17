import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, RefreshCw, X } from "lucide-react";
import { deckOutlineMock } from "@/data/presentation";

export type DeckSlide = { id: string; title: string; kind: string; bullets: string[] };

type Props = {
  value: DeckSlide[];
  onChange: (next: DeckSlide[]) => void;
};

export function DeckStepOutline({ value, onChange }: Props) {
  const [regenerating, setRegenerating] = useState(false);

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= value.length) return;
    const next = [...value];
    const a = next[index]!;
    const b = next[target]!;
    next[index] = b;
    next[target] = a;
    onChange(next);
  };

  const regenerate = () => {
    setRegenerating(true);
    setTimeout(() => {
      onChange(deckOutlineMock.map((s) => ({ ...s, bullets: [...s.bullets] })));
      setRegenerating(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Проверь структуру</h2>
      <p className="mt-2 text-[14px] text-muted">
        Каждая строка — отдельный слайд. Порядок и названия можно менять
      </p>

      <p className="mt-4 text-right text-[14px] text-muted">{value.length} слайдов</p>

      <div className="mt-3 flex flex-col gap-[10px]">
        {value.map((slide, i) => (
          <div
            key={slide.id}
            className="flex gap-4 rounded-[12px] border border-[#E6E9EC] bg-white p-4 max-[899px]:flex-col max-[899px]:gap-2"
          >
            <div className="flex flex-1 gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#EAEEF2] text-[13px] text-navy-900">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <input
                    value={slide.title}
                    onChange={(e) =>
                      onChange(
                        value.map((s) => (s.id === slide.id ? { ...s, title: e.target.value } : s)),
                      )
                    }
                    className="min-w-0 flex-1 bg-transparent text-[16px] text-navy-900 outline-none"
                  />
                  {slide.kind === "image" && (
                    <span className="shrink-0 rounded-full bg-teal-200 px-[8px] py-[3px] text-[11px] text-navy-900">
                      со схемой
                    </span>
                  )}
                </div>
                {slide.bullets.length > 0 && (
                  <p className="mt-1 truncate text-[13px] text-muted">{slide.bullets.join(", ")}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 max-[899px]:ml-10">
              <button
                type="button"
                disabled={i === 0}
                onClick={() => move(i, -1)}
                aria-label="Поднять слайд"
                className="text-muted transition hover:text-navy-900 disabled:opacity-30 disabled:hover:text-muted"
              >
                <ChevronUp className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                disabled={i === value.length - 1}
                onClick={() => move(i, 1)}
                aria-label="Опустить слайд"
                className="text-muted transition hover:text-navy-900 disabled:opacity-30 disabled:hover:text-muted"
              >
                <ChevronDown className="h-[18px] w-[18px]" />
              </button>
              {slide.kind !== "title" && (
                <button
                  type="button"
                  onClick={() => onChange(value.filter((s) => s.id !== slide.id))}
                  aria-label="Удалить слайд"
                  className="text-muted transition hover:text-navy-900"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() =>
            onChange([
              ...value,
              { id: `d-${Date.now()}`, title: "Новый слайд", kind: "text", bullets: [] },
            ])
          }
          className="flex h-11 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900"
        >
          <Plus className="h-4 w-4" />
          Добавить слайд
        </button>
        <button
          type="button"
          onClick={regenerate}
          disabled={regenerating}
          className="flex h-11 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900 disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${regenerating ? "animate-spin" : ""}`} />
          Перегенерировать структуру
        </button>
      </div>
    </div>
  );
}
