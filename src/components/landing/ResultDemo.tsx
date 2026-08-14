import { copy } from "@/data/content";
import { Section } from "@/components/layout/Section";

export function ResultDemo() {
  const card = copy.demo.card;

  return (
    <Section className="px-0">
      <div className="gradient-dark rounded-[32px] p-6 pb-16 text-white md:p-16 md:pb-16">
        <h2 className="text-center text-[28px] md:text-[40px]">{copy.demo.h2}</h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] text-teal-200">
          {copy.demo.subtitle}
        </p>

        <div className="relative mt-10 pb-[40px]">
          <div className="overflow-hidden rounded-[16px] bg-white shadow-2xl">
            {/* Mockup Editor */}
            <div className="flex aspect-[16/10] w-full flex-col">
              {/* Top Panel */}
              <div className="flex h-[44px] shrink-0 items-center border-b border-[#E3E8EC] bg-bg px-4">
                <div className="flex gap-1.5">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#E3E8EC]" />
                  <div className="h-[10px] w-[10px] rounded-full bg-[#E3E8EC]" />
                  <div className="h-[10px] w-[10px] rounded-full bg-[#E3E8EC]" />
                </div>
                <div className="flex-1 text-center text-[13px] text-muted">
                  Влияние крещения Руси на становление государственности
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-[28px] items-center rounded-full border border-navy-900 px-3 text-[12px] font-medium text-navy-900">
                    Презентация
                  </div>
                  <div className="flex h-[28px] items-center rounded-full bg-navy-900 px-3 text-[12px] font-medium text-white">
                    Скачать
                  </div>
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar */}
                <div className="flex w-[48px] flex-col items-center bg-bg py-5">
                  <div className="mb-5 h-5 w-5 rounded-sm bg-muted/20" />
                  <div className="mb-5 h-5 w-5 rounded-sm bg-muted/20" />
                  <div className="mb-5 h-5 w-5 rounded-sm bg-muted/20" />
                  <div className="mb-5 h-5 w-5 rounded-sm bg-muted/20" />
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white p-8 text-left">
                  <div className="mb-6 flex h-[40px] items-center justify-between rounded-lg border border-[#E3E8EC] px-4 text-[13px] text-muted">
                    Титульный лист
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-4 text-[18px] font-bold text-navy-900">
                    Введение
                  </h4>
                  <div className="space-y-3">
                    <p className="text-[13px] leading-[1.7] text-navy-900">
                      {card.lines?.[0]?.split(" ").slice(0, 40).join(" ")}...
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 w-[calc(100%-32px)] max-w-[420px] -translate-x-1/2 translate-y-1/2 rounded-[24px] bg-white p-6 text-navy-900 shadow-xl md:translate-y-1/3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-[16px] font-bold text-orange-500">
                К
              </div>
              <span className="text-[14px] text-muted">{card.author}</span>
            </div>
            <h3 className="mt-4 text-[16px] font-bold">{card.title}</h3>
            <div className="mt-2">
              <p className="line-clamp-3 text-[13px] leading-relaxed text-muted">
                {card.lines?.[0]}
              </p>

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
    </Section>
  );
}
