import { useRef } from "react";
import { ChevronLeft, ChevronRight, FileText, Calculator, Presentation } from "lucide-react";
import { copy, examples } from "@/data/content";

const typeIcons: Record<string, any> = {
  "Текстовая работа": FileText,
  "Решение задачи": Calculator,
  "Презентация": Presentation,
};


import { Section } from "@/components/layout/Section";

export function Examples() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 316, behavior: "smooth" });
  };

  return (
    <Section id="examples" className="px-0">
      <h2 className="text-center text-[28px] md:text-[40px]">{copy.examples.h2}</h2>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Назад"
          onClick={() => scrollBy(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-orange-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Вперёд"
          onClick={() => scrollBy(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900 transition-colors hover:bg-orange-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-6 flex snap-x gap-4 overflow-x-auto pb-2"
      >
        {examples.map((ex) => (
          <article
            key={ex.title}
            className="flex w-[300px] shrink-0 snap-start flex-col rounded-[24px] bg-white p-6"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-teal-200 text-teal-500">
              {(() => {
                const Icon = typeIcons[ex.type] || FileText;
                return <Icon className="h-5 w-5" />;
              })()}
            </div>

            <h3 className="mt-4 line-clamp-2 text-[16px] font-bold text-navy-900">
              {ex.title}
            </h3>
            <div className="mt-auto pt-6 flex flex-wrap gap-x-1.5 gap-y-0.5 text-[12px] text-muted">
              <span>{ex.type}</span>
              {ex.size && (
                <>
                  <span>·</span>
                  <span>{ex.size}</span>
                </>
              )}
              {ex.subject && (
                <>
                  <span>·</span>
                  <span>{ex.subject}</span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
