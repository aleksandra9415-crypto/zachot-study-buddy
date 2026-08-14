import { ArrowRight } from "lucide-react";
import { copy } from "@/data/content";
import { Section } from "@/components/layout/Section";

import { Section } from "@/components/layout/Section";

export function Personalization() {
  return (
    <Section className="px-0">
      <div className="rounded-[32px] bg-white p-6 md:p-12">
        <div className="flex justify-center">
          <div className="relative h-[400px] w-[280px] overflow-hidden rounded-[24px] bg-teal-200">
            <div className="absolute inset-0 flex items-center justify-center bg-navy-100 text-[14px] text-muted italic">
              [Изображение рабочего стола]
            </div>
          </div>

        </div>

        <h2 className="mt-10 text-center text-[28px] md:text-[40px]">
          {copy.personalization.h2}
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] text-muted">
          {copy.personalization.text}
        </p>

        <button
          type="button"
          className="mt-8 flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-navy-900 bg-transparent px-7 text-[16px] font-medium text-navy-900 transition-colors hover:bg-bg"
        >
          {copy.personalization.cta}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
}
