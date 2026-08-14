import { stats } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { Shape } from "@/components/decor/Shape";

const toneClass: Record<string, string> = {
  accent: "bg-amber-500 text-ink-900",
  light: "bg-amber-100 text-ink-900",
  white: "bg-surface text-ink-900",
  dark: "bg-ink-900 text-surface",
};

const widths = [1.4, 1, 1, 1.3];



export function Stats() {
  return (
    <Section className="px-6 md:px-0">
      <div className="relative overflow-hidden grid grid-cols-2 gap-4 md:flex">
        <Shape kind="circle" size={200} color="bg-teal-600" position={{ top: -50, right: -60 }} />
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{ flexGrow: widths[i], flexBasis: 0 }}
            className={`relative z-10 flex h-[120px] flex-col justify-center rounded-[20px] p-6 ${toneClass[s.tone]}`}
          >

            <span className="text-[36px] font-heading font-extrabold leading-none">{s.value}</span>

            <span className="mt-2 text-[14px]">{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
