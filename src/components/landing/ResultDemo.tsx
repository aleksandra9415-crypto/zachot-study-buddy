import { copy } from "@/data/content";

export function ResultDemo() {
  const card = copy.demo.card;

  return (
    <section className="container-page">
      <div className="gradient-dark rounded-[32px] p-6 pb-16 text-white md:p-16 md:pb-16">
        <h2 className="text-center text-[28px] md:text-[40px]">{copy.demo.h2}</h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] text-teal-200">
          {copy.demo.subtitle}
        </p>

        <div className="relative mt-10 pb-[40px]">
          <div className="aspect-[16/10] w-full rounded-[16px] bg-navy-700" />
          <div className="absolute bottom-0 left-1/2 w-full max-w-[420px] -translate-x-1/2 rounded-[24px] bg-white p-6 text-navy-900">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-200" />
              <span className="text-[14px] text-muted">{card.author}</span>
            </div>
            <h3 className="mt-4 text-[16px] font-bold">{card.title}</h3>
            <div className="mt-2 space-y-1">
              {card.lines.map((line, i) => (
                <p key={i} className="truncate text-[13px] text-muted">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.meta.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-bg px-3 py-1 text-[12px] text-navy-900"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
