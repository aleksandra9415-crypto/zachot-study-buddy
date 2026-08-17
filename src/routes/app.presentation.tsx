import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Stepper } from "@/components/app/wizard/Stepper";
import { DeckStepTopic, type DeckTopicState } from "@/components/app/presentation/DeckStepTopic";
import { DeckStepOutline, type DeckSlide } from "@/components/app/presentation/DeckStepOutline";
import { DeckStepSlides } from "@/components/app/presentation/DeckStepSlides";
import { DeckGenerating } from "@/components/app/presentation/DeckGenerating";
import { deckOutlineMock } from "@/data/presentation";

export const Route = createFileRoute("/app/presentation")({
  head: () => ({
    meta: [
      { title: "Презентация — Зачёт" },
      { name: "description", content: "Собери презентацию по теме: структура, слайды и оформление." },
      { property: "og:title", content: "Презентация — Зачёт" },
      { property: "og:description", content: "Собери презентацию по теме: структура, слайды и оформление." },
    ],
  }),
  component: Page,
});

const deckSteps = ["Тема", "Структура", "Слайды"];
const nextLabels = ["Собрать структуру", "Сделать слайды", "Готово"];

const initialTopic: DeckTopicState = {
  topic: "",
  subject: "История",
  size: "m",
  style: "clean",
};

function Page() {
  const [step, setStep] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [topic, setTopic] = useState<DeckTopicState>(initialTopic);
  const [slides, setSlides] = useState<DeckSlide[]>(
    deckOutlineMock.map((s) => ({ ...s, bullets: [...s.bullets] })),
  );

  const canNext = step === 0 ? topic.topic.trim().length > 0 : true;

  const onNext = () => {
    if (step === 1) {
      setGenerating(true);
      setTimeout(() => {
        setGenerating(false);
        setStep(2);
      }, 2500);
      return;
    }
    setStep((s) => Math.min(2, s + 1));
  };

  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Презентация</h1>
      <p className="mt-1 text-[14px] text-muted">Тема, структура, слайды — по шагам</p>

      <Stepper
        current={step}
        steps={deckSteps}
        onGo={(i) => !generating && i <= step && setStep(i)}
      />

      {generating ? (
        <div className="mt-6">
          <DeckGenerating />
        </div>
      ) : (
        <>
          <div className="mt-6 rounded-[20px] border border-[#E6E9EC] bg-white p-8 max-[899px]:p-5">
            {step === 0 && (
              <DeckStepTopic
                value={topic}
                onChange={(patch) => setTopic((prev) => ({ ...prev, ...patch }))}
              />
            )}
            {step === 1 && <DeckStepOutline value={slides} onChange={setSlides} />}
            {step === 2 && (
              <DeckStepSlides
                slides={slides}
                styleId={topic.style}
                onBackToOutline={() => setStep(1)}
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
            {step < 2 && (
              <button
                type="button"
                disabled={!canNext}
                onClick={onNext}
                className="h-12 rounded-full bg-orange-500 px-7 text-[15px] font-bold text-navy-900 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45 max-[899px]:w-full"
              >
                {nextLabels[step]}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
