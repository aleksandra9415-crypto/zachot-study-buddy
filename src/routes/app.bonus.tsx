import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/bonus")({
  head: () => ({
    meta: [
      { title: "Бонусы — Зачёт" },
      { name: "description", content: "Бонусы в личном кабинете Зачёта." },
      { property: "og:title", content: "Бонусы — Зачёт" },
      { property: "og:description", content: "Бонусы в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Бонусы</h1>;
}
