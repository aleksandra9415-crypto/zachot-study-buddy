import { ArrowLeft } from "lucide-react";
import { demoTask, quickSolution } from "@/data/task";

type Props = {
  taskText: string;
  onReset: () => void;
  onLearn: () => void;
};

export function TaskQuick({ taskText, onReset, onLearn }: Props) {
  return (
    <div>
      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 text-[14px] text-teal-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Новая задача
      </button>

      <div className="mt-4 rounded-[14px] bg-[#EAEEF2] p-4">
        <p className="text-[13px] text-muted">Задача</p>
        <p className="mt-1 text-[15px] text-navy-900">{taskText}</p>
      </div>

      <div className="mt-4 rounded-[16px] border border-[#E6E9EC] bg-white p-6 max-[899px]:p-5">
        <div className="flex items-start justify-between gap-4 max-[899px]:flex-col">
          <div>
            <p className="text-[13px] font-bold text-muted">Дано</p>
            <div className="mt-2 space-y-1 font-mono text-[14px] text-navy-900">
              {demoTask.given.map((g) => (
                <p key={g}>{g}</p>
              ))}
            </div>
          </div>
          <p className="font-mono text-[14px] text-navy-900">{demoTask.find}</p>
        </div>

        <div className="my-5 h-px bg-[#E6E9EC]" />

        <p className="text-[13px] font-bold text-muted">Решение</p>
        <div className="mt-2 space-y-3">
          {quickSolution.map((s) => (
            <div key={s.label}>
              <p className="text-[13px] text-muted">{s.label}</p>
              <p className="mt-1 rounded-[10px] bg-[#EAEEF2] p-3 font-mono text-[14px] text-navy-900">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[12px] bg-teal-200 p-4">
          <p className="text-[18px] font-bold text-navy-900">{demoTask.answer}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-[14px] border border-[#E6E9EC] p-4 max-[899px]:flex-col max-[899px]:items-start">
          <p className="text-[14px] text-navy-900">Не до конца понял решение?</p>
          <button
            type="button"
            onClick={onLearn}
            className="h-10 shrink-0 rounded-full border border-navy-900 px-5 text-[14px] text-navy-900 transition hover:bg-navy-900 hover:text-white max-[899px]:w-full"
          >
            Разобрать по шагам
          </button>
        </div>
      </div>
    </div>
  );
}
