import { ArrowRight } from "lucide-react";
import { copy } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { Shape } from "@/components/decor/Shape";


export function Personalization() {
  return (
    <Section outerClassName="relative" className="px-6 md:px-0">
      <div className="relative z-10 rounded-[32px] bg-surface p-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px] items-center min-[901px]:grid-cols-2">
          {/* Left Column: Image with shape */}
          <div className="relative aspect-[3/2] md:aspect-[4/5] overflow-hidden rounded-[24px]">
            <Shape kind="square" size={240} color="amber-500" position={{ bottom: -24, left: -24 }} />
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" 
              alt="Workspace"
              className="relative z-10 h-full w-full object-cover rounded-[24px]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[28px] md:text-[40px] leading-tight font-nunito font-extrabold tracking-[-0.01em]">
              {copy.personalization.h2}
            </h2>
            <p className="mt-[24px] md:mt-[32px] max-w-[480px] text-[16px] text-muted">
              {copy.personalization.text}
            </p>

            <button
              type="button"
              className="mt-8 flex h-[52px] w-fit items-center justify-center gap-2 rounded-full border border-ink-900 bg-transparent px-[28px] text-[16px] font-bold text-ink-900 transition-colors hover:bg-cream"
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

