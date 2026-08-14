import { stats } from "@/data/content";
import { Section } from "@/components/layout/Section";

const toneClass: Record<string, string> = {
  accent: "bg-orange-500 text-navy-900",
  light: "bg-orange-100 text-navy-900",
  white: "bg-white text-navy-900",
  dark: "bg-navy-900 text-white",
};

const widths = [1.4, 1, 1, 1.3];


export function Stats() {
  return (
    <Section className="px-6 md:px-0">
      <div className="gradient-dark h-auto md:h-[132px] rounded-[24px] overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 h-full items-center p-6 md:p-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="relative flex flex-col items-center justify-center h-full text-center py-4 md:py-0"
            >
              {/* Vertical divider */}
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[56px] bg-navy-700" />
              )}
              
              <span className="text-[40px] font-bold leading-none text-orange-500">{s.value}</span>
              <span className="mt-[6px] text-[13px] text-[#8FA6AA]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
