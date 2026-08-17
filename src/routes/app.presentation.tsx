import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/presentation")({
  head: () => ({
    meta: [
      { title: "Презентация — Зачёт" },
      { name: "description", content: "Презентация в личном кабинете Зачёта." },
      { property: "og:title", content: "Презентация — Зачёт" },
      { property: "og:description", content: "Презентация в личном кабинете Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return <h1 className="font-display text-[32px] font-extrabold text-navy-900">Презентация</h1>;
}
