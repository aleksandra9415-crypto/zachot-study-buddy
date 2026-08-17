import { createFileRoute } from "@tanstack/react-router";
import { SubscriptionBoard } from "@/components/app/subscription/SubscriptionBoard";

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
  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Подписка</h1>
      <SubscriptionBoard />
    </div>
  );
}
