import { stats } from "@/data/content";
import { Section } from "@/components/layout/Section";

const toneClass: Record<string, string> = {
  accent: "bg-orange-500 text-white",
  light: "bg-orange-100 text-navy-900",
  white: "bg-white text-navy-900",
  dark: "bg-navy-900 text-white",
};

const widths = [1.4, 1, 1, 1.3];


export function Stats() {
  return (
    <Section className="px-0">
      <div className="grid grid-cols-2 gap-4 md:flex">
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
