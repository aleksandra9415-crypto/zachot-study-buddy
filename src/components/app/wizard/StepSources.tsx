import { useState } from "react";
import { Check } from "lucide-react";

export type SourceItem = {
  id: string;
  author: string;
  title: string;
  kind: string;
  on: boolean;
  own?: boolean;
};

type Props = {
  value: SourceItem[];
  onChange: (next: SourceItem[]) => void;
};

export function StepSources({ value, onChange }: Props) {
  const [draft, setDraft] = useState("");
  const selected = value.filter((s) => s.on).length;

  const add = () => {
    const text = draft.trim();
    if (!text) return;
    onChange([
      { id: `own-${Date.now()}`, author: text, title: "Добавлено вручную", kind: "Мой источник", on: true, own: true },
      ...value,
    ]);
    setDraft("");
  };

  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Источники для работы</h2>
      <p className="mt-2 text-[14px] text-muted">
        Выбранные источники попадут в список литературы и в ссылки по тексту
      </p>

      <p className="mt-6 text-right text-[14px] text-muted">
        Выбрано {selected} из {value.length}
      </p>

      <div className="mt-2 flex flex-col gap-[10px]">
        {value.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onChange(value.map((x) => (x.id === s.id ? { ...x, on: !x.on } : x)))}
            className={[
              "flex items-center gap-4 rounded-[12px] border border-[#E6E9EC] bg-white p-4 text-left transition",
              s.on ? "" : "opacity-55",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px]",
                s.on ? "bg-teal-500 text-white" : "border border-[#E6E9EC]",
              ].join(" ")}
            >
              {s.on && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>

            <span className="flex-1">
              <span className="block text-[15px] font-bold text-navy-900">{s.author}</span>
              <span className="block text-[14px] text-muted">{s.title}</span>
            </span>

            <span
              className={[
                "shrink-0 rounded-full px-[10px] py-1 text-[12px] text-navy-900",
                s.own ? "bg-orange-100" : "bg-[#EAEEF2]",
              ].join(" ")}
            >
              {s.kind}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <span className="mb-2 block text-[14px] text-navy-900">Добавить свой источник</span>
        <div className="flex gap-3 max-[899px]:flex-col">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Автор, название — как в методичке"
            className="h-12 flex-1 rounded-[12px] border border-[#E6E9EC] px-[14px] text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
          />
          <button
            type="button"
            onClick={add}
            className="h-12 rounded-full border border-[#E6E9EC] px-6 text-[15px] text-navy-900 transition hover:border-navy-900"
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
}
