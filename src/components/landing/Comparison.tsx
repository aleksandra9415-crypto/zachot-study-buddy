import { BRAND } from "@/config/brand";
import { comparison } from "@/data/content";
import { Check, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import logo from "@/assets/logo.svg";

export const Comparison = () => {
  return (
    <Section id="compare" className="px-6 md:px-0">
      <SectionTitle>
        Чем отличаемся от других
      </SectionTitle>
      
      <div className="mt-[24px] grid grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 items-stretch">
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
        <div className="bg-white rounded-[24px] px-5 flex flex-col border border-[#E6E9EC] shadow-sm">
          <div className="min-h-[64px] flex items-center gap-3">
            <img src={logo} alt={BRAND.name} className="h-6 w-auto" />
          </div>

          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-[#E6E9EC]' : ''}`}>
              <Check className="w-5 h-5 text-teal-500 shrink-0" />
              <span className="text-[14px] text-navy-900 font-normal leading-snug">{row.us}</span>
            </div>
          ))}
        </div>

        {/* Right column: Them */}
        <div className="bg-[#F4F6F7] rounded-[24px] px-5 flex flex-col border border-[#E6E9EC]">
          <div className="min-h-[64px] flex items-center">
            <span className="text-muted font-medium text-[16px]">Обычные нейросети</span>
          </div>
          {comparison.map((row, idx) => (
            <div key={idx} className={`min-h-[64px] flex items-center gap-3 ${idx < comparison.length - 1 ? 'border-b border-[#E6E9EC]' : ''}`}>
              <X className="w-5 h-5 text-muted shrink-0" />
              <span className="text-[14px] text-muted font-normal leading-snug">{row.them}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
