import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/task")({
  head: () => ({
    meta: [
      { title: "Решение задачи — Зачёт" },
      { name: "description", content: "Решение задачи в личном кабинете Зачёта." },
      { property: "og:title", content: "Решение задачи — Зачёт" },
      { property: "og:description", content: "Решение задачи в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Решение задачи</h1>;
}
