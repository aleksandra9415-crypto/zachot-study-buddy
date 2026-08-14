import { stats } from "@/data/content";
import { Section } from "@/components/layout/Section";

const toneStyles: Record<string, string> = {
  accent: "bg-orange-500 border-transparent",
  light: "bg-teal-200 border-transparent",
  white: "bg-white border-navy-900/10",
  dark: "bg-navy-900 border-transparent",
};

const valueColor: Record<string, string> = {
  accent: "text-navy-900",
  light: "text-navy-900",
  white: "text-navy-900",
  dark: "text-orange-500",
};

const labelColor: Record<string, string> = {
  accent: "text-navy-900",
  light: "text-navy-900",
  white: "text-muted",
  dark: "text-[#8FA6AA]",
};

export function Stats() {
  return (
    <Section className="px-6 md:px-0">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center h-[132px] rounded-[20px] border text-center ${toneStyles[s.tone || 'white']}`}
          >
            <span className={`text-[40px] font-bold leading-none ${valueColor[s.tone || 'white']}`}>
              {s.value}
            </span>
            <span className={`mt-[6px] text-[13px] ${labelColor[s.tone || 'white']}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
