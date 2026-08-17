import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Stepper } from "@/components/app/wizard/Stepper";
import { StepTopic, type TopicState } from "@/components/app/wizard/StepTopic";
import { StepOutline, type OutlineItem } from "@/components/app/wizard/StepOutline";
import { StepSources, type SourceItem } from "@/components/app/wizard/StepSources";
import { outlineMock, sourcesMock } from "@/data/wizard";

export const Route = createFileRoute("/app/text")({
  head: () => ({
    meta: [
      { title: "Текстовая работа — Зачёт" },
      { name: "description", content: "Текстовая работа в личном кабинете Зачёта." },
      { property: "og:title", content: "Текстовая работа — Зачёт" },
      { property: "og:description", content: "Текстовая работа в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

const nextLabels = ["Составить содержание", "Подобрать источники", "Написать текст", "Дальше", "Готово"];

function Page() {
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState<TopicState>({
    topic: "",
    workType: "Реферат",
    subject: "История",
    volume: "m",
    requirements: "",
  });
  const [outline, setOutline] = useState<OutlineItem[]>(
    outlineMock.map((o) => ({ ...o, items: [...o.items] })),
  );
  const [sources, setSources] = useState<SourceItem[]>(sourcesMock.map((s) => ({ ...s })));

  const canNext = step === 0 ? topic.topic.trim().length > 0 : true;

  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Текстовая работа</h1>
      <p className="mt-1 text-[14px] text-muted">Черновик сохраняется автоматически</p>

      <Stepper current={step} onGo={(i) => i <= step && setStep(i)} />

      <div className="mt-6 rounded-[20px] border border-[#E6E9EC] bg-white p-8 max-[899px]:p-5">
        {step === 0 && (
          <StepTopic value={topic} onChange={(patch) => setTopic((prev) => ({ ...prev, ...patch }))} />
        )}
        {step === 1 && <StepOutline value={outline} onChange={setOutline} />}
        {step === 2 && <StepSources value={sources} onChange={setSources} />}
        {step === 3 && (
          <h2 className="font-display text-[20px] font-extrabold text-navy-900">Текст</h2>
        )}
        {step === 4 && (
          <h2 className="font-display text-[20px] font-extrabold text-navy-900">Готово</h2>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 max-[899px]:flex-col-reverse">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="h-12 rounded-full border border-navy-900 bg-transparent px-6 text-[15px] text-navy-900 transition hover:bg-navy-900 hover:text-white max-[899px]:w-full"
          >
            Назад
          </button>
        ) : (
          <span className="max-[899px]:hidden" />
        )}
        <button
          type="button"
          disabled={!canNext || step === 4}
          onClick={() => setStep((s) => Math.min(4, s + 1))}
          className="h-12 rounded-full bg-orange-500 px-7 text-[15px] font-bold text-navy-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45 max-[899px]:w-full"
        >
          {nextLabels[step]}
        </button>
      </div>
    </div>
  );
}
