import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Calculator,
  Presentation,
  Lightbulb,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { appActions, examples } from "@/data/content";
import cardText from "@/assets/app-card-text.png";
import cardTask from "@/assets/app-card-task.png";
import cardDeck from "@/assets/app-card-deck.png";
import cardTopic from "@/assets/app-card-topic.png";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "С чем помочь? — Зачёт" },
      { name: "description", content: "Главный экран кабинета: тексты, задачи, презентации и разбор тем." },
      { property: "og:title", content: "С чем помочь? — Зачёт" },
      { property: "og:description", content: "Главный экран кабинета: тексты, задачи, презентации и разбор тем." },
    ],
  }),
  component: AppHome,
});

const actionIcons: Record<string, LucideIcon> = {
  text: FileText,
  task: Calculator,
  deck: Presentation,
  topic: Lightbulb,
};

const actionArt: Record<string, string> = {
  text: cardText,
  task: cardTask,
  deck: cardDeck,
  topic: cardTopic,
};

const typeIcons: Record<string, LucideIcon> = {
  "Текстовая работа": FileText,
  "Решение задачи": Calculator,
  "Презентация": Presentation,
};

function AppHome() {
  return (
    <div>
      <h1 className="font-display text-[32px] font-extrabold text-navy-900">С чем помочь?</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 min-[900px]:grid-cols-2">
        {appActions.map((a) => {
          const Icon = actionIcons[a.id] ?? FileText;
          return (
            <Link
              key={a.id}
              to={a.to as "/app"}
              className="group relative isolate flex flex-col overflow-hidden rounded-[20px] border border-[#E6E9EC] bg-white p-6 transition-all duration-200 hover:border-orange-500 hover:shadow-[0_8px_24px_rgba(11,40,49,0.10)]"
            >
              <img
                src={actionArt[a.id]}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={512}
                height={512}
                className="pointer-events-none absolute -top-2 right-0 -z-10 h-[120px] w-[120px] object-contain opacity-90 transition-transform duration-300 group-hover:scale-105 min-[900px]:h-[140px] min-[900px]:w-[140px]"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-orange-100">
                <Icon className="h-[22px] w-[22px] text-navy-900" />
              </div>
              <h2 className="mt-4 text-[18px] font-bold text-navy-900">{a.title}</h2>
              <p className="mt-1.5 max-w-[75%] whitespace-pre-line text-[14px] text-muted">{a.text}</p>
              <span className="mt-5 inline-flex h-10 w-fit items-center rounded-full bg-orange-500 px-5 text-[14px] font-medium text-navy-900">
                {a.cta}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-[22px] font-extrabold text-navy-900">Последние работы</h2>
          <Link to="/app/history" className="text-[14px] text-teal-500">
            Все задания
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {examples.slice(0, 3).map((ex) => {
            const Icon = typeIcons[ex.type] ?? FileText;
            return (
              <div
                key={ex.title}
                className="flex items-center gap-4 rounded-[14px] border border-[#E6E9EC] bg-white px-5 py-4 transition-colors hover:border-teal-500"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-teal-200">
                  <Icon className="h-[18px] w-[18px] text-navy-900" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] text-navy-900">{ex.title}</p>
                  <p className="mt-0.5 text-[13px] text-muted">
                    {ex.type} · {ex.subject}
                  </p>
                </div>
                <ChevronRight className="h-[18px] w-[18px] shrink-0 text-muted" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
