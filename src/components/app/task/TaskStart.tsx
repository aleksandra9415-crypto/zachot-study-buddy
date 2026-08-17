import { useState } from "react";
import { GraduationCap, Image as ImageIcon, Zap } from "lucide-react";
import { subjects } from "@/data/wizard";
import { taskExamples } from "@/data/task";

export type TaskMode = "quick" | "learn";

type Props = {
  mode: TaskMode;
  onMode: (mode: TaskMode) => void;
  text: string;
  onText: (text: string) => void;
  subject: string;
  onSubject: (subject: string) => void;
  onSolve: () => void;
};

const modes = [
  {
    id: "quick" as TaskMode,
    icon: Zap,
    title: "Получить ответ",
    text: "Готовое решение с формулами и пояснением",
  },
  {
    id: "learn" as TaskMode,
    icon: GraduationCap,
    title: "Хочу разобраться",
    text: "Разбор по шагам — поймёшь, как решать такие",
  },
];

function shorten(value: string) {
  return value.length > 40 ? `${value.slice(0, 40)}…` : value;
}

export function TaskStart({ mode, onMode, text, onText, subject, onSubject, onSolve }: Props) {
  const [photoNotice, setPhotoNotice] = useState(false);

  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Давай решим задачу</h1>
      <p className="mt-1 text-[14px] text-muted">Текстом или фото — как удобнее</p>

      <div className="mt-6 grid grid-cols-2 gap-4 max-[899px]:grid-cols-1">
        {modes.map((m) => {
          const on = mode === m.id;
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onMode(m.id)}
              className={[
                "relative rounded-[16px] bg-white p-5 text-left transition",
                on ? "border-2 border-orange-500" : "border border-[#E6E9EC] hover:border-navy-900",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute top-5 right-5 flex h-5 w-5 items-center justify-center rounded-full",
                  on ? "bg-orange-500" : "border border-[#E6E9EC]",
                ].join(" ")}
              >
                {on && <span className="h-[6px] w-[6px] rounded-full bg-navy-900" />}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-orange-100">
                <Icon className="h-5 w-5 text-navy-900" />
              </span>
              <span className="mt-3 block text-[16px] font-bold text-navy-900">{m.title}</span>
              <span className="mt-1 block pr-6 text-[13px] text-muted">{m.text}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <textarea
          rows={5}
          value={text}
          onChange={(e) => onText(e.target.value)}
          placeholder="Впиши условие задачи целиком — с числами и единицами"
          className="w-full resize-none rounded-[14px] border border-[#E6E9EC] p-4 text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
        />

        <div className="mt-3 flex items-start justify-between gap-3 max-[899px]:flex-col">
          <div>
            <button
              type="button"
              onClick={() => setPhotoNotice(true)}
              className="flex h-10 items-center gap-2 rounded-full border border-[#E6E9EC] px-4 text-[14px] text-navy-900 transition hover:border-navy-900"
            >
              <ImageIcon className="h-4 w-4" />
              Приложить фото
            </button>
            {photoNotice && (
              <p className="mt-2 rounded-[10px] bg-[#EAEEF2] p-3 text-[13px] text-muted">
                Демо-версия: распознавание фото появится позже
              </p>
            )}
          </div>

          <select
            value={subject}
            onChange={(e) => onSubject(e.target.value)}
            aria-label="Предмет"
            className="h-10 rounded-[12px] border border-[#E6E9EC] bg-white px-3 text-[14px] text-navy-900 outline-none focus:border-teal-500 max-[899px]:w-full"
          >
            <option value="">Не выбрано</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <p className="text-[13px] text-muted">Или возьми пример:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {taskExamples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => onText(example)}
                className="h-[34px] max-w-full truncate rounded-full border border-[#E6E9EC] px-4 text-[13px] text-navy-900 transition hover:border-navy-900"
              >
                {shorten(example)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled={text.trim().length === 0}
          onClick={onSolve}
          className="mt-6 h-[52px] w-full rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Решить
        </button>
      </div>
    </div>
  );
}
