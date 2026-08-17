import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/history")({
  head: () => ({
    meta: [
      { title: "Мои задания — Зачёт" },
      { name: "description", content: "Мои задания в личном кабинете Зачёта." },
      { property: "og:title", content: "Мои задания — Зачёт" },
      { property: "og:description", content: "Мои задания в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Мои задания</h1>;
}
