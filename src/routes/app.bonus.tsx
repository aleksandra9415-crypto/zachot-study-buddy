import { createFileRoute } from "@tanstack/react-router";
import { BonusBoard } from "@/components/app/bonus/BonusBoard";

export const Route = createFileRoute("/app/bonus")({
  head: () => ({
    meta: [
      { title: "Бонусы — Зачёт" },
      { name: "description", content: "Приглашай друзей, получай бонусы и подключай телеграм-бота Зачёта." },
      { property: "og:title", content: "Бонусы — Зачёт" },
      { property: "og:description", content: "Приглашай друзей, получай бонусы и подключай телеграм-бота Зачёта." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <h1 className="font-display text-[32px] font-extrabold text-navy-900">Все бонусы Зачёта</h1>
      <div className="mt-6">
        <BonusBoard />
      </div>
    </div>
  );
}

