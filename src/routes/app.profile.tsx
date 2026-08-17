import { createFileRoute } from "@tanstack/react-router";
import { ProfileForm } from "@/components/app/profile/ProfileForm";

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
  return <ProfileForm />;
}
