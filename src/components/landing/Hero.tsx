import { copy, scenarios } from "@/data/content";

import { Section } from "@/components/layout/Section";

export function Hero() {
  return (
    <Section outerClassName="relative py-0 md:py-0" className="px-6 md:px-0">
      <Shape kind="circle" size={320} color="teal-600" position={{ top: -120, right: -80 }} />
      <Shape kind="diamond" size={120} color="amber-500" position={{ bottom: -40, left: -30 }} />
      
      <div className="relative z-10 gradient-dark rounded-[32px] p-[48px] text-white">
        <h1 className="max-w-[820px] text-[36px] leading-[1.05] md:text-[56px]">
          {copy.hero.h1}
        </h1>
        <p className="mt-6 max-w-[640px] text-[18px] text-teal-100">
          {copy.hero.subtitle}
        </p>
        <a
          href="#"
          className="mt-8 inline-flex h-[52px] items-center rounded-full bg-amber-500 px-7 text-[16px] font-bold text-ink-900 transition-opacity hover:opacity-90"
        >
          {copy.ctaPrimary}
        </a>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s) => (
            <div key={s.id} className="rounded-[24px] bg-surface p-6">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[12px] bg-amber-100 italic text-[10px] text-muted text-center">
                <img 
                  src={`https://api.dicebear.com/9.x/shapes/svg?seed=${s.id}&backgroundColor=ffefd0`} 
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-ink-900">{s.title}</h3>

              <p className="mt-1 text-[14px] text-muted">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

  );
}
