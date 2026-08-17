import { createFileRoute } from "@tanstack/react-router";
import { HistoryList } from "@/components/app/history/HistoryList";

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
  return <HistoryList />;
}
