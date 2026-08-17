import { copy, scenarios } from "@/data/content";
import { Section } from "@/components/layout/Section";
import Shape from "@/components/decor/Shape";
import Marker from "@/components/decor/Marker";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <Section outerClassName="py-0 md:py-0" className="px-6 md:px-0">
      <div className="gradient-dark relative overflow-hidden rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] text-white">
        <Shape kind="circle" size={160} className="bg-teal-500 md:hidden" style={{ top: -60, right: -40 }} />
        <Shape kind="circle" size={320} className="bg-teal-500 hidden md:block" style={{ top: -120, right: -80 }} />
        <Shape kind="diamond" size={70} className="bg-orange-500 md:hidden" style={{ bottom: -35, left: -25 }} />
        <Shape kind="diamond" size={140} className="bg-orange-500 hidden md:block" style={{ bottom: -70, left: -55 }} />
        
        <div className="relative z-10">
          <h1 className="max-w-[820px] text-[32px] leading-[1.05] md:text-[56px]">
            Учёба без ночных <Marker className="text-pink-500"><span className="whitespace-nowrap text-white">дедлайнов</span></Marker>
          </h1>
        <p className="mt-6 max-w-[640px] text-[15px] md:text-[18px] text-teal-200">
          {copy.hero.subtitle}
        </p>

        <div className="mt-[40px] grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 min-[900px]:grid-cols-4">
          {scenarios.map((s) => (
            <a 
              key={s.id} 
              href="#" 
              className="group relative flex flex-col rounded-[24px] bg-white p-6 transition-all duration-200 hover:-translate-y-[2px] hover:border-orange-500 hover:shadow-[0_8px_24px_rgba(11,40,49,0.18)] border border-[#E6E9EC] cursor-pointer min-[600px]:min-h-[200px] min-[900px]:min-h-[260px] min-[600px]:justify-between"
            >
              <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted transition-colors group-hover:text-orange-500" />
              
              <div className="flex h-16 w-16 min-[600px]:h-[72px] min-[600px]:w-[72px] min-[900px]:h-24 min-[900px]:w-24 items-center justify-center overflow-hidden rounded-[12px] bg-orange-100 shrink-0">
                <img 
                  src={`https://api.dicebear.com/9.x/shapes/svg?seed=${s.id}&backgroundColor=ffe7da`} 
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 min-[600px]:mt-0">
                <h3 className="text-[18px] font-display text-navy-900 leading-tight">{s.title}</h3>
                <p className="mt-[6px] text-[14px] text-muted leading-snug">{s.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </Section>
  );
}
