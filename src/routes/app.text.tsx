import { createFileRoute } from "@tanstack/react-router";

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

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Текстовая работа</h1>;
}
