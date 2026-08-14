import { Section } from "@/components/layout/Section";
import Shape from "@/components/decor/Shape";

export const FinalCTA = () => {
  return (
    <Section className="bg-bg">
      <div className="bg-[linear-gradient(135deg,#0B2831_0%,#12333C_100%)] rounded-[32px] p-[48px] text-center flex flex-col items-center relative overflow-hidden">
        <Shape kind="diamond" size={96} className="bg-pink-500" style={{ top: -20, left: 40 }} />
        <Shape kind="circle" size={160} className="bg-orange-500" style={{ bottom: -70, right: -40 }} />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-[24px] md:mb-[32px]">
            Начни с одной работы
          </h2>
          <p className="text-base text-teal-200 max-w-[560px] leading-[1.6] mb-10">
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
