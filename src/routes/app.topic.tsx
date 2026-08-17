import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopicStart } from "@/components/app/topic/TopicStart";
import { TopicProgram } from "@/components/app/topic/TopicProgram";

export const Route = createFileRoute("/app/topic")({
  head: () => ({
    meta: [
      { title: "Разбор темы — Зачёт" },
      { name: "description", content: "Разбор темы в личном кабинете Зачёта." },
      { property: "og:title", content: "Разбор темы — Зачёт" },
      { property: "og:description", content: "Разбор темы в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("recap");
  const [started, setStarted] = useState(false);
  const [programKey, setProgramKey] = useState(0);
  const [activeTopic, setActiveTopic] = useState("");

  if (started) {
    return (
      <TopicProgram
        key={programKey}
        topic={activeTopic}
        onReset={() => {
          setStarted(false);
          setTopic("");
        }}
      />
    );
  }

  return (
    <TopicStart
      topic={topic}
      onTopic={setTopic}
      level={level}
      onLevel={setLevel}
      onStart={() => {
        setActiveTopic(topic.trim());
        setProgramKey((k) => k + 1);
        setStarted(true);
      }}
    />
  );
}
