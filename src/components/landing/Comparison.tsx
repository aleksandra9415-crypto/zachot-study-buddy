import { BRAND } from "@/config/brand";
import { comparison } from "@/data/content";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  return (
    <section className="container-1200 px-4 md:px-0 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-navy-950">
        Чем отличается от обычного чат-бота
      </h2>
      
      {/* Desktop Version */}
      <div className="hidden md:grid grid-cols-[0.8fr_1.4fr_1.4fr] gap-4">
        {/* Header row */}
        <div />
        <div className="bg-white rounded-[24px] p-6 flex items-center gap-3 shadow-sm border border-orange-100">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
            З
          </div>
          <span className="font-bold text-navy-950">{BRAND.name}</span>
        </div>
        <div className="bg-bg rounded-[24px] p-6 flex items-center">
          <span className="text-muted font-medium">Обычные нейросети</span>
        </div>

        {/* Rows */}
        {comparison.map((row, idx) => (
          <div key={idx} className="contents">
            <div className="flex items-center py-4 text-[15px] text-muted leading-tight">
              {row.label}
            </div>
            <div className="bg-white rounded-[24px] p-6 flex items-start gap-3 shadow-sm border border-orange-100">
              <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-900 leading-snug">{row.us}</span>
            </div>
            <div className="bg-bg rounded-[24px] p-6 flex items-start gap-3">
              <X className="w-5 h-5 text-muted shrink-0 mt-0.5" />
              <span className="text-sm text-muted leading-snug">{row.them}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col gap-10">
        {comparison.map((row, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h3 className="text-muted text-sm font-medium px-2">{row.label}</h3>
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-[24px] p-6 flex items-start gap-3 shadow-sm border border-orange-100">
                <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-[10px]">З</div>
                      <span className="font-bold text-xs text-navy-950">{BRAND.name}</span>
                   </div>
                   <span className="text-sm text-navy-900">{row.us}</span>
                </div>
              </div>
              <div className="bg-bg rounded-[24px] p-6 flex items-start gap-3">
                <X className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                   <span className="text-muted text-xs mb-1">Обычные нейросети</span>
                   <span className="text-sm text-muted">{row.them}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
