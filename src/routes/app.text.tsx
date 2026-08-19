import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Stepper } from "@/components/app/wizard/Stepper";
import { StepTopic, type TopicState } from "@/components/app/wizard/StepTopic";
import { StepOutline, type OutlineItem } from "@/components/app/wizard/StepOutline";
import { StepSources, type SourceItem } from "@/components/app/wizard/StepSources";
import { StepText } from "@/components/app/wizard/StepText";
import { StepDone } from "@/components/app/wizard/StepDone";
import { GeneratingScreen } from "@/components/app/wizard/GeneratingScreen";
import { outlineMock, sourcesMock, sectionTextMock } from "@/data/wizard";

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

const nextLabels = [
  "Составить содержание",
  "Подобрать источники",
  "Написать текст",
  "Готово",
  "Создать новую работу",
];

const initialTopic = (defaultTopic = ""): TopicState => ({
  topic: defaultTopic,
  workType: "Реферат",
  subject: "История",
  volume: "m",
  requirements: "",
});

const initialTexts = (outline: OutlineItem[]) =>
  Object.fromEntries(outline.map((o) => [o.id, sectionTextMock[o.id] ?? ""])) as Record<
    string,
    string
  >;

function Page() {
  const { topic: topicParam } = createFileRoute("/app/text").useSearch() as { topic?: string };
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [topic, setTopic] = useState<TopicState>(() => initialTopic(topicParam || ""));
  const [outline, setOutline] = useState<OutlineItem[]>(
    outlineMock.map((o) => ({ ...o, items: [...o.items] })),
  );
  const [sources, setSources] = useState<SourceItem[]>(sourcesMock.map((s) => ({ ...s })));
  const [texts, setTexts] = useState<Record<string, string>>(() => initialTexts(outlineMock));
  const [activeSection, setActiveSection] = useState(outlineMock[0]!.id);

  const canNext = step === 0 ? topic.topic.trim().length > 0 : true;

  const reset = () => {
    setTopic(initialTopic(""));
    setOutline(outlineMock.map((o) => ({ ...o, items: [...o.items] })));
    setSources(sourcesMock.map((s) => ({ ...s })));
    setTexts(initialTexts(outlineMock));
    setActiveSection(outlineMock[0]!.id);
    setStep(0);
  };

  const onNext = () => {
    if (step === 4) {
      reset();
      return;
    }
    if (step === 2) {
      setGenerating(true);
      setTimeout(() => {
        setGenerating(false);
        setStep(3);
      }, 2500);
      return;
    }
    setStep((s) => Math.min(4, s + 1));
  };

  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Текстовая работа</h1>
      <p className="mt-1 text-[14px] text-muted">Черновик сохраняется автоматически</p>

      <Stepper current={step} onGo={(i) => !generating && i <= step && setStep(i)} />

      {generating ? (
        <div className="mt-6">
          <GeneratingScreen />
        </div>
      ) : (
        <>
          <div className="mt-6 rounded-[20px] border border-[#E6E9EC] bg-white p-8 max-[899px]:p-5">
            {step === 0 && (
              <StepTopic value={topic} onChange={(patch) => setTopic((prev) => ({ ...prev, ...patch }))} />
            )}
            {step === 1 && <StepOutline value={outline} onChange={setOutline} />}
            {step === 2 && <StepSources value={sources} onChange={setSources} />}
            {step === 3 && (
              <StepText
                outline={outline}
                sources={sources}
                texts={texts}
                onChangeText={(id, text) => setTexts((prev) => ({ ...prev, [id]: text }))}
                activeId={activeSection}
                onSelect={setActiveSection}
              />
            )}
            {step === 4 && (
              <StepDone
                workType={topic.workType}
                sectionsCount={outline.length}
                onBackToText={() => setStep(3)}
              />
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
              disabled={!canNext}
              onClick={onNext}
              className="h-12 rounded-full bg-orange-500 px-7 text-[15px] font-bold text-navy-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45 max-[899px]:w-full"
            >
              {nextLabels[step]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
