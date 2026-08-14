import { Section } from "@/components/layout/Section";

export const FinalCTA = () => {
  return (
    <Section className="bg-bg">
      <div className="bg-[linear-gradient(135deg,#062132_0%,#132A3F_100%)] rounded-[32px] p-[48px] text-center flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-[24px] md:mb-[32px]">
          Начни с одной работы
        </h2>
        <p className="text-base text-teal-200 max-w-[560px] leading-[1.6] mb-10">
          Первая работа бесплатно — посмотришь, как Зачёт справляется с твоей темой, и решишь, нужна ли подписка.
        </p>
        <button className="h-[52px] px-10 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors">
          Начать бесплатно
        </button>
      </div>
    </Section>
  );
};
