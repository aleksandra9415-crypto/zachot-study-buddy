import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/profile")({
  head: () => ({
    meta: [
      { title: "Профиль — Зачёт" },
      { name: "description", content: "Профиль в личном кабинете Зачёта." },
      { property: "og:title", content: "Профиль — Зачёт" },
      { property: "og:description", content: "Профиль в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Профиль</h1>;
}
