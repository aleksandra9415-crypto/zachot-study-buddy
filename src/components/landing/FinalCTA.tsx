import { Section } from "@/components/layout/Section";
import { Shape } from "@/components/decor/Shape";

export const FinalCTA = () => {
  return (
    <Section outerClassName="relative" className="bg-cream">
      <Shape kind="diamond" size={96} color="pink-500" position={{ top: -20, left: 40 }} />
      <Shape kind="circle" size={160} color="amber-500" position={{ bottom: -70, right: -40 }} />
      
      <div className="relative z-10 bg-[linear-gradient(135deg,#0B2831_0%,#12333C_100%)] rounded-[32px] p-[72px] text-center flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] font-extrabold font-nunito tracking-[-0.01em] text-white mb-[24px] md:mb-[32px]">
          Начни с одной работы
        </h2>
        <p className="text-base text-teal-100 max-w-[560px] leading-[1.6] mb-10">
          Первая работа бесплатно — посмотришь, как Зачёт справляется с твоей темой, и решишь, нужна ли подписка.
        </p>
        <button className="h-[52px] px-10 rounded-full bg-amber-500 text-ink-900 font-bold hover:bg-amber-600 transition-colors">
          Начать бесплатно
        </button>
      </div>
    </Section>
  );
};

