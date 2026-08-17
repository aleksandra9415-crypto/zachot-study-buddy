import { workTypes, subjects, volumes } from "@/data/wizard";

export type TopicState = {
  topic: string;
  workType: string;
  subject: string;
  volume: string;
  requirements: string;
};

type Props = {
  value: TopicState;
  onChange: (patch: Partial<TopicState>) => void;
};

const labelCls = "mb-2 block text-[14px] text-navy-900";
const fieldCls =
  "w-full rounded-[12px] border border-[#E6E9EC] p-[14px] text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500";

export function StepTopic({ value, onChange }: Props) {
  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">О чём работа?</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label className={labelCls} htmlFor="wizard-topic">
            Тема
          </label>
          <textarea
            id="wizard-topic"
            rows={2}
            value={value.topic}
            onChange={(e) => onChange({ topic: e.target.value })}
            placeholder="Например: Влияние крещения Руси на становление государственности"
            className={`${fieldCls} resize-none`}
          />
        </div>

        <div>
          <span className={labelCls}>Тип работы</span>
          <div className="flex flex-wrap gap-2">
            {workTypes.map((t) => {
              const on = value.workType === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onChange({ workType: t })}
                  className={[
                    "h-10 rounded-full border px-4 text-[14px] transition",
                    on
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-[#E6E9EC] text-navy-900 hover:border-navy-900",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="wizard-subject">
            Предмет
          </label>
          <select
            id="wizard-subject"
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
            {volumes.map((v) => {
              const on = value.volume === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => onChange({ volume: v.id })}
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
          <label className={labelCls} htmlFor="wizard-req">
            Требования преподавателя — необязательно
          </label>
          <textarea
            id="wizard-req"
            rows={3}
            value={value.requirements}
            onChange={(e) => onChange({ requirements: e.target.value })}
            placeholder="Методичка, обязательные источники, особые пожелания"
            className={`${fieldCls} resize-none`}
          />
        </div>
      </div>
    </div>
  );
}
