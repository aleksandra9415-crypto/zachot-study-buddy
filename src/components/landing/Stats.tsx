import { stats } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { Shape } from "@/components/decor/Shape";

const toneClass: Record<string, string> = {
  accent: "bg-amber-500 text-ink-900",
  light: "bg-amber-100 text-ink-900",
  white: "bg-surface text-ink-900",
  dark: "bg-ink-900 text-white",
};

const widths = [1.4, 1, 1, 1.3];


export function Stats() {
  return (
    <Section outerClassName="relative" className="px-6 md:px-0">
      <Shape kind="circle" size={200} color="teal-600" position={{ top: -50, right: -60 }} />
      <div className="relative z-10 grid grid-cols-2 gap-4 md:flex">
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{ flexGrow: widths[i], flexBasis: 0 }}
            className={`flex h-[120px] flex-col justify-center rounded-[20px] p-6 ${toneClass[s.tone]}`}
          >
            <span className="text-[36px] font-bold leading-none">{s.value}</span>
            <span className="mt-2 text-[14px]">{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

