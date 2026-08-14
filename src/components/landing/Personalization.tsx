import { ArrowRight } from "lucide-react";
import { copy } from "@/data/content";
import { Section } from "@/components/layout/Section";
import Shape from "@/components/decor/Shape";


export function Personalization() {
  return (
    <Section className="px-6 md:px-0">
      <div className="rounded-[32px] bg-white p-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px] items-center min-[901px]:grid-cols-2">
          {/* Left Column: Image */}
          <div className="relative aspect-[3/2] md:aspect-[4/5] flex items-center justify-center">
            <Shape 
              kind="square" 
              className="bg-orange-500" 
              style={{ 
                width: "100%", 
                height: "100%", 
                bottom: -12, 
                left: -12,
                ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? { bottom: -24, left: -24 } : {})
              }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" 
              alt="Workspace"
              className="relative z-10 h-full w-full object-cover rounded-[24px] rotate-[-1deg] md:rotate-[-2deg]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[28px] md:text-[40px] leading-tight font-display">
              {copy.personalization.h2}
            </h2>
            <p className="mt-[24px] md:mt-[32px] max-w-[480px] text-[16px] text-muted">
              {copy.personalization.text}
            </p>

            <button
              type="button"
              className="mt-8 flex h-[52px] w-fit items-center justify-center gap-2 rounded-full border border-navy-900 bg-transparent px-[28px] text-[16px] font-medium text-navy-900 transition-colors hover:bg-bg"
            >
              Попробовать
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
