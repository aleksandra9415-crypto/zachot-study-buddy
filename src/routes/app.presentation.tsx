import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PresentationInput } from "@/components/app/presentation/PresentationInput";
import { PresentationResult } from "@/components/app/presentation/PresentationResult";
import { DeckGenerating } from "@/components/app/presentation/DeckGenerating";
import { deckOutlineMock } from "@/data/presentation";
import type { DeckSlide } from "@/components/app/presentation/PresentationResult";

export const Route = createFileRoute("/app/presentation")({
  head: () => ({
    meta: [
      { title: "Презентация — Зачёт" },
      { name: "description", content: "О чём будет презентация? Опиши подробно, и мы сделаем всё за тебя." },
      { property: "og:title", content: "Презентация — Зачёт" },
      { property: "og:description", content: "О чём будет презентация? Опиши подробно, и мы сделаем всё за тебя." },
    ],
  }),
  component: PresentationPage,
});

type ViewState = "input" | "generating" | "result";

function PresentationPage() {
  const [view, setView] = useState<ViewState>("input");
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("Не выбрано");
  const [slidesCount, setSlidesCount] = useState("auto");
  const [designId, setDesignId] = useState("ai");
  const [settings, setSettings] = useState({
    density: "short",
    extras: {
      title: true,
      numbers: true,
      images: true,
      sources: false,
    }
  });

  const handleSettingsChange = (v: Settings) => {
    setSettings(prev => ({
      ...prev,
      density: v.density,
      extras: {
        title: v.extras.title ?? prev.extras.title,
        numbers: v.extras.numbers ?? prev.extras.numbers,
        images: v.extras.images ?? prev.extras.images,
        sources: v.extras.sources ?? prev.extras.sources,
      }
    }));
  };

  const [slides, setSlides] = useState<DeckSlide[]>([]);

  const handleCreate = () => {
    setView("generating");
    setTimeout(() => {
      setSlides(deckOutlineMock.map(s => ({ ...s, bullets: [...s.bullets] })));
      setView("result");
    }, 2500);
  };

  const handleBack = () => {
    setView("input");
  };

  return (
    <div className="mx-auto w-full max-w-[900px]">
      {view === "input" && (
        <PresentationInput
          topic={topic}
          setTopic={setTopic}
          subject={subject}
          setSubject={setSubject}
          slidesCount={slidesCount}
          setSlidesCount={setSlidesCount}
          designId={designId}
          setDesignId={setDesignId}
          settings={settings}
          setSettings={handleSettingsChange}
          onCreate={handleCreate}
        />
      )}

      {view === "generating" && (
        <div className="mt-10">
          <DeckGenerating />
        </div>
      )}

      {view === "result" && (
        <PresentationResult
          topic={topic}
          slides={slides}
          setSlides={setSlides}
          designId={designId}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
