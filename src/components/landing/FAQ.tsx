import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { faq } from "@/data/content";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-paper">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[32px] font-heading font-extrabold text-ink-900 text-center mb-[24px] md:mb-[32px]">
          Частые вопросы
        </h2>

        
        <div className="flex flex-col gap-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-surface rounded-[16px] shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-surface/50"
                >
                  <span className="text-base font-medium text-ink-900 leading-tight">
                    {item.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-200 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-[15px] leading-[1.6] text-muted">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
