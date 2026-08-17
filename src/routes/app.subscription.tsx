import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/subscription")({
  head: () => ({
    meta: [
      { title: "Подписка — Зачёт" },
      { name: "description", content: "Подписка в личном кабинете Зачёта." },
      { property: "og:title", content: "Подписка — Зачёт" },
      { property: "og:description", content: "Подписка в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Подписка</h1>;
}
