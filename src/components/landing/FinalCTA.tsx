import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Shape from "@/components/decor/Shape";

export const FinalCTA = () => {
  return (
    <Section className="relative bg-bg">
      <Shape kind="triangle" size={120} className="text-pink-500 shape-float-3" style={{ top: -40, left: 30, transform: "rotate(12deg)", zIndex: 0 }} />
      <Shape kind="circle" size={180} className="bg-orange-500 shape-float-4" style={{ bottom: -60, right: -30, zIndex: 0 }} />

      <div className="gradient-dark-soft rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] text-center flex flex-col items-center relative z-[1] overflow-hidden">
        <div className="relative z-[2] flex flex-col items-center">
          <SectionTitle className="text-white mb-6">
            Начни с одной работы
          </SectionTitle>
          <p className="text-[15px] md:text-base text-teal-200 max-w-[560px] leading-[1.6] mb-10">
            Первая работа бесплатно — посмотришь, как Зачёт справляется с твоей темой, и решишь, нужна ли подписка.
          </p>
          <button className="h-[52px] px-10 rounded-full bg-orange-500 text-navy-900 font-bold hover:opacity-90 transition-colors">
            Начать бесплатно
          </button>
        </div>
      </div>
    </Section>
  );
};
