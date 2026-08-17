import { createFileRoute } from "@tanstack/react-router";

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
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Разбор темы</h1>;
}
