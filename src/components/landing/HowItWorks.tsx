import { copy, steps } from "@/data/content";
import { Section } from "@/components/layout/Section";


export function HowItWorks() {
  return (
    <Section id="how" className="px-6 md:px-0">
      <h2 className="text-center text-[28px] md:text-[40px] mb-[24px] md:mb-[32px] font-nunito font-extrabold text-ink-900 tracking-[-0.01em]">{copy.how.h2}</h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const first = i === 0;
          return (
            <div
              key={step.n}
              className={`flex flex-col rounded-[24px] p-6 border shadow-sm ${
                first ? "bg-teal-600 text-white border-teal-600" : "bg-surface text-ink-900 border-line"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[14px] font-bold ${
                  first ? "bg-white/20 text-white" : "bg-teal-100 text-teal-600"
                }`}
              >
                {step.n}
              </span>
              <h3 className="mt-4 text-[18px] font-nunito font-extrabold">{step.title}</h3>
              <p className={`mt-2 text-[14px] leading-relaxed ${first ? "text-teal-100" : "text-muted"}`}>
                {step.text}
              </p>
              {first && (
                <button
                  type="button"
                  className="mt-6 inline-flex h-[52px] items-center justify-center rounded-full bg-amber-500 px-7 text-[16px] font-bold text-ink-900 transition-opacity hover:opacity-90"
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
