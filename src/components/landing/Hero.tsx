import { copy, scenarios } from "@/data/content";
import { Section } from "@/components/layout/Section";
import Shape from "@/components/decor/Shape";
import Marker from "@/components/decor/Marker";
import { ArrowUpRight } from "lucide-react";
import scenarioText from "@/assets/scenario-text.png";
import scenarioDeck from "@/assets/scenario-deck.png";
import scenarioTask from "@/assets/scenario-task.png";
import scenarioTopic from "@/assets/scenario-topic.png";

const scenarioImages: Record<string, string> = {
  text: scenarioText,
  deck: scenarioDeck,
  task: scenarioTask,
  topic: scenarioTopic,
};

export function Hero() {
  return (
    <Section outerClassName="py-0 md:py-0" className="relative px-6 md:px-0">
      <Shape kind="circle" size={420} className="bg-teal-500 shape-float-1" style={{ top: -80, right: -90, zIndex: 0 }} />
      <Shape kind="triangle" size={260} className="text-orange-500 shape-float-2" style={{ bottom: -70, left: -60, transform: "rotate(-15deg)", zIndex: 0 }} />

      <div className="gradient-dark-soft relative z-[1] overflow-hidden rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] text-white">
        <div className="relative z-[2]">
          <h1 className="max-w-[820px] text-[32px] leading-[1.05] md:text-[56px]">
            Учёба без ночных <Marker className="text-teal-500"><span className="whitespace-nowrap text-white">дедлайнов</span></Marker>
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
              
              <div className="flex h-20 w-20 min-[600px]:h-[96px] min-[600px]:w-[96px] min-[900px]:h-[128px] min-[900px]:w-[128px] items-center justify-center shrink-0">
                <img 
                  src={scenarioImages[s.id]} 
                  alt={s.title}
                  width={816}
                  height={816}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
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
