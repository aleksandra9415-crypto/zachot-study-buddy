import { BRAND } from "@/config/brand";
import { comparison } from "@/data/content";
import { Check, X } from "lucide-react";
import { Section } from "@/components/layout/Section";

export const Comparison = () => {
  return (
    <Section id="comparison" className="px-6 md:px-0">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-[24px] md:mb-[32px] text-navy-950">
        Чем отличается от обычного чат-бота
      </h2>
      
      <div className="grid grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 items-stretch">
        {/* Left column: labels */}
        <div className="flex flex-col">
          <div className="min-h-[64px]" />
          {comparison.map((row, idx) => (
            <div key={idx} className="min-h-[64px] flex items-center justify-end text-[14px] text-navy-900 font-semibold text-right pr-4">
              {row.label}
            </div>
          ))}
        </div>

        {/* Middle column: Us */}
        <div className="bg-white rounded-[24px] px-5 flex flex-col border border-orange-50/50 shadow-sm">
          <div className="min-h-[64px] flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded-[6px] flex items-center justify-center text-navy-900 font-bold text-sm">
              З
            </div>
            <span className="font-bold text-navy-950 text-[16px]">{BRAND.name}</span>
          </div>
          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-[#EFEAE1]' : ''}`}>
              <Check className="w-5 h-5 text-teal-500 shrink-0" />
              <span className="text-[14px] text-navy-900 font-normal leading-snug">{row.us}</span>
            </div>
          ))}
        </div>

        {/* Right column: Them */}
        <div className="bg-[#EFEAE1] rounded-[24px] px-5 flex flex-col">
          <div className="min-h-[64px] flex items-center">
            <span className="text-muted font-medium text-[16px]">Обычные нейросети</span>
          </div>
          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-[#E8E2D8]' : ''}`}>
              <X className="w-5 h-5 text-muted shrink-0" />
              <span className="text-[14px] text-muted font-normal leading-snug">{row.them}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
