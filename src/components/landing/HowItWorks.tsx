import { copy, steps } from "@/data/content";
import { Section } from "@/components/layout/Section";


export function HowItWorks() {
  return (
    <Section id="how" className="px-6 md:px-0">
      <h2 className="text-center text-[28px] md:text-[40px] mb-[24px] md:mb-[32px]">{copy.how.h2}</h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const first = i === 0;
          return (
            <div
              key={step.n}
              className={`flex flex-col rounded-[24px] p-6 ${
                first ? "bg-amber-500 text-white" : "bg-white text-ink-900"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[14px] font-bold ${
                  first ? "bg-white text-amber-500" : "bg-amber-100 text-ink-900"
                }`}
              >
                {step.n}
              </span>
              <h3 className="mt-4 text-[18px]">{step.title}</h3>
              <p className={`mt-2 text-[14px] ${first ? "" : "text-muted"}`}>
                {step.text}
              </p>
              {first && (
                <button
                  type="button"
                  className="mt-6 inline-flex h-[52px] items-center justify-center rounded-full bg-ink-900 px-7 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  {copy.how.firstCta}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
