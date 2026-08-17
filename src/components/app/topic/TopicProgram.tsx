import { useState } from "react";
import { ArrowLeft, Check, ChevronDown } from "lucide-react";
import { topicProgram } from "@/data/topic";
import { TopicDrill } from "./TopicDrill";
import { TopicAsk } from "./TopicAsk";

type Props = {
  topic: string;
  onReset: () => void;
};

export function TopicProgram({ topic, onReset }: Props) {
  const [open, setOpen] = useState<string | null>(topicProgram[0]?.id ?? null);
  const [done, setDone] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  const total = topicProgram.length;
  const progress = Math.round((done.length / total) * 100);

  return (
    <div>
      <button
        type="button"
        onClick={onReset}
        className="flex items-center gap-2 text-[14px] text-teal-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Другая тема
      </button>

      <div className="mt-4 rounded-[14px] bg-[#EAEEF2] p-4">
        <p className="text-[18px] font-bold text-navy-900">{topic}</p>
        <p className="mt-1 text-[13px] text-muted">5 блоков · примерно 40 минут</p>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#EAEEF2]">
          <div
            className="h-full rounded-full bg-teal-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[13px] whitespace-nowrap text-muted">
          Пройдено {done.length} из {total}
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {topicProgram.map((block, i) => {
          const isOpen = open === block.id;
          const isDone = done.includes(block.id);
          const answerShown = answers.includes(block.id);

          return (
            <div
              key={block.id}
              className="rounded-[14px] border border-[#E6E9EC] bg-white p-4 max-[899px]:p-[14px]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : block.id)}
                className="flex w-full items-center gap-3 text-left"
              >
                <span
                  className={[
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    isDone ? "bg-teal-500" : "border border-[#E6E9EC]",
                  ].join(" ")}
                >
                  {isDone ? (
                    <Check className="h-[14px] w-[14px] text-white" />
                  ) : (
                    <span className="text-[13px] text-muted">{i + 1}</span>
                  )}
                </span>
                <span className="flex-1 text-[16px] text-navy-900">{block.title}</span>
                <ChevronDown
                  className={[
                    "h-[18px] w-[18px] shrink-0 text-muted transition-transform",
                    isOpen ? "rotate-180" : "",
                  ].join(" ")}
                />
              </button>

              {isOpen && (
                <div>
                  <p className="mt-[14px] text-[15px] leading-[1.7] text-navy-900">{block.body}</p>

                  <ul className="mt-[14px] flex flex-col gap-2">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-[7px] h-[6px] w-[6px] shrink-0 bg-teal-500" />
                        <span className="text-[14px] text-navy-900">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-[12px] bg-[#EAEEF2] p-[14px]">
                    <p className="text-[12px] font-bold text-muted">Проверь себя</p>
                    <p className="mt-1 text-[14px] text-navy-900">{block.question}</p>
                    {answerShown ? (
                      <p className="mt-3 text-[14px] text-muted">{block.answer}</p>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setAnswers((prev) => [...prev, block.id])}
                        className="mt-3 h-9 rounded-full border border-[#E6E9EC] bg-white px-4 text-[13px] font-bold text-navy-900"
                      >
                        Показать ответ
                      </button>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setDone((prev) => (prev.includes(block.id) ? prev : [...prev, block.id]));
                      setOpen(topicProgram[i + 1]?.id ?? null);
                    }}
                    className="mt-4 h-11 w-full rounded-full bg-navy-900 text-[14px] font-bold text-white"
                  >
                    Понятно, дальше
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <TopicDrill />
      <TopicAsk />
    </div>
  );
}
