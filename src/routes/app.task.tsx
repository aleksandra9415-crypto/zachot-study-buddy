import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TaskStart, type TaskMode } from "@/components/app/task/TaskStart";
import { TaskQuick } from "@/components/app/task/TaskQuick";
import { TaskLearn } from "@/components/app/task/TaskLearn";
import { selfCheckTask } from "@/data/task";

export const Route = createFileRoute("/app/task")({
  head: () => ({
    meta: [
      { title: "Решение задачи — Зачёт" },
      { name: "description", content: "Реши задачу с готовым ответом или разбором по шагам." },
      { property: "og:title", content: "Решение задачи — Зачёт" },
      { property: "og:description", content: "Реши задачу с готовым ответом или разбором по шагам." },
    ],
  }),
  component: Page,
});

function Page() {
  const [mode, setMode] = useState<TaskMode>("learn");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [view, setView] = useState<"start" | "quick" | "learn">("start");
  const [solvedText, setSolvedText] = useState("");
  const [learnKey, setLearnKey] = useState(0);

  const reset = () => {
    setView("start");
    setText("");
  };

  if (view === "quick") {
    return (
      <TaskQuick
        taskText={solvedText}
        onReset={reset}
        onLearn={() => {
          setLearnKey((k) => k + 1);
          setView("learn");
        }}
      />
    );
  }

  if (view === "learn") {
    return (
      <TaskLearn
        key={learnKey}
        taskText={solvedText}
        onReset={reset}
        onSelfCheck={() => {
          setText(selfCheckTask);
          setView("start");
        }}
      />
    );
  }

  return (
    <TaskStart
      mode={mode}
      onMode={setMode}
      text={text}
      onText={setText}
      subject={subject}
      onSubject={setSubject}
      onSolve={() => {
        setSolvedText(text.trim());
        setLearnKey((k) => k + 1);
        setView(mode === "quick" ? "quick" : "learn");
      }}
    />
  );
}
