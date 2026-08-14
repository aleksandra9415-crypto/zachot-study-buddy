import { BRAND } from "@/config/brand";
import { comparison } from "@/data/content";
import { Check, X } from "lucide-react";
import { Section } from "@/components/layout/Section";

export const Comparison = () => {
  return (
    <Section id="comparison" className="px-6 md:px-0">
      <h2 className="text-center text-3xl md:text-4xl font-heading font-extrabold mb-[24px] md:mb-[32px] text-ink-900">
        Чем отличается от обычного чат-бота
      </h2>
      
      <div className="grid grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 items-stretch">
        {/* Left column: labels */}
        <div className="flex flex-col">
          <div className="min-h-[64px]" />
          {comparison.map((row, idx) => (
            <div key={idx} className="min-h-[64px] flex items-center justify-end text-[14px] text-ink-900 font-bold text-right pr-4">
              {row.label}
            </div>
          ))}
        </div>

        {/* Middle column: Us */}
        <div className="bg-surface rounded-[24px] px-5 flex flex-col border border-line shadow-sm">
          <div className="min-h-[64px] flex items-center gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-[6px] flex items-center justify-center text-ink-900 font-bold text-sm">
              З
            </div>
            <span className="font-heading font-extrabold text-ink-900 text-[16px]">{BRAND.name}</span>
          </div>
          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-line' : ''}`}>
              <Check className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-[14px] text-ink-900 font-normal leading-snug">{row.us}</span>
            </div>
          ))}
        </div>

        {/* Right column: Them */}
        <div className="bg-teal-100/50 rounded-[24px] px-5 flex flex-col">
          <div className="min-h-[64px] flex items-center">
            <span className="text-muted font-bold text-[16px]">Обычные нейросети</span>
          </div>
          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-line' : ''}`}>
              <X className="w-5 h-5 text-muted shrink-0" />
              <span className="text-[14px] text-muted font-normal leading-snug">{row.them}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
