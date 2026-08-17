import { useState } from "react";
import { ChevronDown, ChevronUp, Plus, RefreshCw, X } from "lucide-react";
import { outlineMock } from "@/data/wizard";

export type OutlineItem = { id: string; title: string; items: string[] };

type Props = {
  value: OutlineItem[];
  onChange: (next: OutlineItem[]) => void;
};

export function StepOutline({ value, onChange }: Props) {
  const [regenerating, setRegenerating] = useState(false);

  const move = (index: number, dir: -1 | 1) => {
    const next = [...value];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const regenerate = () => {
    setRegenerating(true);
    setTimeout(() => {
      onChange(outlineMock.map((o) => ({ ...o, items: [...o.items] })));
      setRegenerating(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Проверь содержание</h2>
      <p className="mt-2 text-[14px] text-muted">
        Можно поменять порядок, переименовать разделы или удалить лишние. Это план будущей работы
      </p>

      <div className="mt-6 flex flex-col gap-[10px]">
        {value.map((section, i) => (
          <div
            key={section.id}
            className="flex gap-4 rounded-[12px] border border-[#E6E9EC] bg-white p-4 max-[899px]:flex-col max-[899px]:gap-2"
          >
            <div className="flex flex-1 gap-3">
              <span className="mt-[2px] text-[14px] text-muted">{i + 1}</span>
              <div className="flex-1">
                <input
                  value={section.title}
                  onChange={(e) =>
                    onChange(value.map((s) => (s.id === section.id ? { ...s, title: e.target.value } : s)))
                  }
                  className="w-full bg-transparent text-[16px] text-navy-900 outline-none"
                />
                {section.items.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="ml-4 flex items-center gap-2 text-[14px] text-muted">
                        <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 max-[899px]:ml-7">
              <button
                type="button"
                disabled={i === 0}
                onClick={() => move(i, -1)}
                aria-label="Поднять раздел"
                className="text-muted transition hover:text-navy-900 disabled:opacity-30 disabled:hover:text-muted"
              >
                <ChevronUp className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                disabled={i === value.length - 1}
                onClick={() => move(i, 1)}
                aria-label="Опустить раздел"
                className="text-muted transition hover:text-navy-900 disabled:opacity-30 disabled:hover:text-muted"
              >
                <ChevronDown className="h-[18px] w-[18px]" />
              </button>
              <button
                type="button"
                onClick={() => onChange(value.filter((s) => s.id !== section.id))}
                aria-label="Удалить раздел"
                className="text-muted transition hover:text-navy-900"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            onChange([...value, { id: `new-${Date.now()}`, title: "Новый раздел", items: [] }])
          }
          className="flex h-10 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900"
        >
          <Plus className="h-4 w-4" />
          Добавить раздел
        </button>
        <button
          type="button"
          onClick={regenerate}
          disabled={regenerating}
          className="flex h-10 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900 disabled:opacity-60"
        >
          <RefreshCw className={`h-4 w-4 ${regenerating ? "animate-spin" : ""}`} />
          {regenerating ? "Составляем план…" : "Перегенерировать план"}
        </button>
      </div>
    </div>
  );
}
