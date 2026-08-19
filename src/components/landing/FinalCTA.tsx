import { Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Shape from "@/components/decor/Shape";

export const FinalCTA = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", String((((e.clientX - r.left) / r.width) - 0.5) * 2));
    e.currentTarget.style.setProperty("--my", String((((e.clientY - r.top) / r.height) - 0.5) * 2));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };

  return (
    <Section 
      className="relative bg-bg shape-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Shape kind="triangle" size={120} className="text-pink-500" style={{ top: -40, left: 30, transform: "rotate(12deg)" }} depth={-14} float={16} floatDelay={1} />
      <Shape kind="circle" size={180} className="bg-orange-500" style={{ bottom: -60, right: -30 }} depth={22} float={20} />

      <div className="gradient-dark-soft rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] text-center flex flex-col items-center relative z-[1] overflow-hidden">
        <div className="relative z-[2] flex flex-col items-center">
          <SectionTitle className="text-white mb-6">
            Начни с одной работы
          </SectionTitle>
          <p className="text-[15px] md:text-base text-teal-200 max-w-[560px] leading-[1.6] mb-10">
            Первая работа бесплатно — посмотришь, как Зачёт справляется с твоей темой, и решишь, нужна ли подписка.
          </p>
          <Link to="/app" className="h-[52px] px-10 rounded-full bg-orange-500 text-navy-900 font-bold hover:opacity-90 transition-colors inline-flex items-center justify-center">
            Взять первую работу
          </Link>
        </div>
      </div>
    </Section>
  );
};
