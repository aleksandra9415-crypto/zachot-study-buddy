import { useState } from "react";
import { ArrowLeft, Check, Info, X } from "lucide-react";
import { demoTask, selfCheckTask, stepByStep } from "@/data/task";

type Props = {
  taskText: string;
  onReset: () => void;
  onSelfCheck: () => void;
};

export function TaskLearn({ taskText, onReset, onSelfCheck }: Props) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const done = index >= stepByStep.length;
  const step = stepByStep[Math.min(index, stepByStep.length - 1)]!;
  const question = "question" in step ? step.question : undefined;
  const answered = picked !== null;

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

      {!done && (
        <div className="mt-4">
          <div className="flex gap-[6px]">
            {stepByStep.map((s, i) => (
              <span
                key={s.id}
                className={`h-1 flex-1 rounded-full ${i <= index ? "bg-orange-500" : "bg-[#EAEEF2]"}`}
              />
            ))}
          </div>
          <p className="mt-2 text-[13px] text-muted">
            Шаг {index + 1} из {stepByStep.length}
          </p>
        </div>
      )}

      <div className="mt-4 rounded-[14px] bg-[#EAEEF2] p-4">
        <p className="text-[13px] text-muted">Задача</p>
        <p className="mt-1 text-[15px] text-navy-900">{taskText}</p>
      </div>

      {done ? (
        <div className="mt-4">
          <div className="rounded-[12px] bg-teal-200 p-4">
            <p className="text-[18px] font-bold text-navy-900">{demoTask.answer}</p>
          </div>

          <div className="mt-4 rounded-[14px] border border-[#E6E9EC] p-4">
            <p className="text-[13px] font-bold text-muted">Проверь себя</p>
            <p className="mt-2 text-[15px] text-navy-900">{selfCheckTask}</p>
            <button
              type="button"
              onClick={onSelfCheck}
              className="mt-3 h-10 rounded-full border border-navy-900 px-5 text-[14px] text-navy-900 transition hover:bg-navy-900 hover:text-white max-[899px]:w-full"
            >
              Решить эту
            </button>
          </div>

          <p className="mt-4 flex items-start gap-2 text-[13px] text-muted">
            <Info className="mt-[2px] h-[14px] w-[14px] shrink-0" />
            Разбирай задачи сам — на семинаре спросят именно ход решения
          </p>
        </div>
      ) : (
        <div className="mt-4 rounded-[16px] border border-[#E6E9EC] bg-white p-6 max-[899px]:p-5">
          <h2 className="text-[18px] font-bold text-navy-900">{step.title}</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-navy-900">{step.body}</p>

          {"formula" in step && step.formula && (
            <p className="mt-4 rounded-[10px] bg-[#EAEEF2] p-[14px] font-mono text-[15px] text-navy-900">
              {step.formula}
            </p>
          )}

          {question && (
            <div className="mt-4">
              <div className="flex flex-col gap-3">
                {question.options.map((option, i) => {
                  const isCorrect = i === question.correct;
                  const chosen = picked === i;
                  let cls = "border border-[#E6E9EC] hover:border-teal-500";
                  if (answered && isCorrect) cls = "border-2 border-teal-500 bg-teal-200";
                  else if (answered && chosen) cls = "border-2 border-pink-500";
                  else if (answered) cls = "border border-[#E6E9EC]";
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={answered}
                      onClick={() => setPicked(i)}
                      className={`flex h-[52px] w-full items-center justify-between gap-3 rounded-[12px] px-4 text-left text-[15px] text-navy-900 transition max-[899px]:h-[60px] ${cls}`}
                    >
                      <span>{option}</span>
                      {answered && isCorrect && <Check className="h-[18px] w-[18px] text-teal-500" />}
                      {answered && chosen && !isCorrect && (
                        <X className="h-[18px] w-[18px] text-pink-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <p className="mt-4 rounded-[10px] bg-[#EAEEF2] p-[14px] text-[14px] text-navy-900">
                  {picked === question.correct ? question.explainRight : question.explainWrong}
                </p>
              )}
            </div>
          )}

          {(!question || answered) && (
            <button
              type="button"
              onClick={() => {
                setPicked(null);
                setIndex((i) => i + 1);
              }}
              className="mt-6 h-12 w-full rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition hover:opacity-90"
            >
              {index === stepByStep.length - 1 ? "Показать ответ" : "Дальше"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
