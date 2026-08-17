import { useState } from "react";
import { Check, RefreshCw } from "lucide-react";
import type { OutlineItem } from "@/components/app/wizard/StepOutline";
import type { SourceItem } from "@/components/app/wizard/StepSources";

type Props = {
  outline: OutlineItem[];
  sources: SourceItem[];
  texts: Record<string, string>;
  onChangeText: (id: string, text: string) => void;
  activeId: string;
  onSelect: (id: string) => void;
};

const SOURCES_ID = "o6";

export function StepText({ outline, sources, texts, onChangeText, activeId, onSelect }: Props) {
  const [regenerating, setRegenerating] = useState(false);
  const active = outline.find((o) => o.id === activeId) ?? outline[0];
  const isSources = active.id === SOURCES_ID;
  const selectedSources = sources.filter((s) => s.on);
  const text = texts[active.id] ?? "";

  const regenerate = () => {
    setRegenerating(true);
    setTimeout(() => setRegenerating(false), 1500);
  };

  return (
    <div className="flex gap-6 max-[899px]:flex-col">
      <div className="w-[240px] shrink-0 self-start max-[899px]:hidden sticky top-6">
        <p className="text-[13px] font-bold text-muted">Разделы</p>
        <ul className="mt-3 flex flex-col gap-1">
          {outline.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => onSelect(o.id)}
                className={`flex h-10 w-full items-center justify-between rounded-[10px] px-3 text-left text-[14px] transition ${
                  o.id === active.id
                    ? "bg-[#EAEEF2] font-bold text-navy-900"
                    : "text-muted hover:bg-[#EAEEF2]"
                }`}
              >
                <span className="truncate">{o.title}</span>
                <Check className="ml-2 h-3.5 w-3.5 shrink-0 text-teal-500" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden max-[899px]:block">
        <select
          value={active.id}
          onChange={(e) => onSelect(e.target.value)}
          className="h-12 w-full rounded-[12px] border border-[#E6E9EC] bg-white px-3 text-[14px] text-navy-900"
        >
          {outline.map((o) => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[18px] font-bold text-navy-900">{active.title}</h2>
          {!isSources && (
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-muted">{text.length} знаков</span>
              <button
                type="button"
                onClick={regenerate}
                className="flex h-10 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:bg-[#EAEEF2]"
              >
                <RefreshCw className={`h-4 w-4 ${regenerating ? "animate-spin" : ""}`} />
                Перегенерировать
              </button>
            </div>
          )}
        </div>

        {isSources ? (
          <ol className="mt-4 max-w-[720px] list-decimal space-y-2 pl-5 text-[15px] leading-[1.8] text-navy-900">
            {selectedSources.map((s) => (
              <li key={s.id}>
                {s.author}. {s.title}
              </li>
            ))}
          </ol>
        ) : (
          <>
            {regenerating ? (
              <p className="mt-4 text-[14px] text-muted">Перегенерируем раздел…</p>
            ) : (
              <textarea
                value={text}
                onChange={(e) => onChangeText(active.id, e.target.value)}
                rows={14}
                className="mt-4 block w-full max-w-[720px] resize-y whitespace-pre-wrap border-0 bg-transparent p-0 text-[15px] leading-[1.8] text-navy-900 outline-none"
              />
            )}
            <p className="mt-3 text-[13px] text-muted">Правь прямо здесь — изменения сохраняются</p>
          </>
        )}
      </div>
    </div>
  );
}
