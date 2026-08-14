import { Section } from "@/components/layout/Section";
import { Shape } from "@/components/decor/Shape";

export const FinalCTA = () => {
  return (
    <Section className="bg-paper">
      <div className="bg-gradient-dark relative overflow-hidden rounded-[32px] p-[48px] text-center flex flex-col items-center">
        <Shape kind="diamond" size={96} color="bg-pink-500" position={{ top: -20, left: 40 }} />
        <Shape kind="circle" size={160} color="bg-amber-500" position={{ bottom: -70, right: -40 }} />
        
        <h2 className="relative z-10 text-[32px] md:text-[40px] font-bold text-surface mb-[24px] md:mb-[32px] font-heading font-extrabold">

          Начни с одной работы
        </h2>
        <p className="relative z-10 text-base text-teal-100 max-w-[560px] leading-[1.6] mb-10">
          Первая работа бесплатно — посмотришь, как Зачёт справляется с твоей темой, и решишь, нужна ли подписка.
        </p>
        <button className="relative z-10 h-[52px] px-10 rounded-full bg-amber-500 text-ink-900 font-bold hover:bg-amber-600 transition-colors">
          Начать бесплатно
        </button>
      </div>
    </Section>

  );
};
