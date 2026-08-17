import { subjects } from "@/data/wizard";
import { deckSizes, deckStyles } from "@/data/presentation";

export type DeckTopicState = {
  topic: string;
  subject: string;
  size: string;
  style: string;
};

type Props = {
  value: DeckTopicState;
  onChange: (patch: Partial<DeckTopicState>) => void;
};

const labelCls = "mb-2 block text-[14px] text-navy-900";

export function DeckStepTopic({ value, onChange }: Props) {
  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">О чём презентация?</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label className={labelCls} htmlFor="deck-topic">
            Тема
          </label>
          <textarea
            id="deck-topic"
            rows={2}
            value={value.topic}
            onChange={(e) => onChange({ topic: e.target.value })}
            placeholder="Например: Управление проектной средой на производстве"
            className="w-full resize-none rounded-[12px] border border-[#E6E9EC] p-[14px] text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
          />
        </div>

        <div>
          <label className={labelCls} htmlFor="deck-subject">
            Предмет
          </label>
          <select
            id="deck-subject"
            value={value.subject}
            onChange={(e) => onChange({ subject: e.target.value })}
            className="h-12 w-full rounded-[12px] border border-[#E6E9EC] bg-white px-[14px] text-[15px] text-navy-900 outline-none focus:border-teal-500"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className={labelCls}>Объём</span>
          <div className="grid grid-cols-3 gap-3 max-[899px]:grid-cols-1">
            {deckSizes.map((v) => {
              const on = value.size === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => onChange({ size: v.id })}
                  className={[
                    "rounded-[14px] p-4 text-left transition",
                    on
                      ? "border-2 border-orange-500 bg-orange-100"
                      : "border border-[#E6E9EC] hover:border-navy-900",
                  ].join(" ")}
                >
                  <span className="block text-[15px] font-bold text-navy-900">{v.label}</span>
                  <span className="mt-1 block text-[13px] text-muted">{v.hint}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className={labelCls}>Оформление</span>
          <div className="grid grid-cols-3 gap-3 max-[899px]:grid-cols-1">
            {deckStyles.map((s) => {
              const on = value.style === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onChange({ style: s.id })}
                  className={[
                    "rounded-[14px] p-4 text-left transition",
                    on
                      ? "border-2 border-orange-500"
                      : "border border-[#E6E9EC] hover:border-navy-900",
                  ].join(" ")}
                >
                  <div
                    className="aspect-video w-full rounded-[8px] border border-[#E6E9EC] p-3"
                    style={{ background: s.bg }}
                  >
                    <div
                      className="h-[6px] w-[40%] rounded-full"
                      style={{ background: s.accent }}
                    />
                    <div className="mt-2 space-y-[6px]">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="h-[4px] w-[60%] rounded-full bg-[#EAEEF2]" />
                      ))}
                    </div>
                  </div>
                  <span className="mt-3 block text-[14px] text-navy-900">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
