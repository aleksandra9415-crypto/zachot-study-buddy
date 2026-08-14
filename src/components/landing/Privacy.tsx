import { BRAND } from "@/config/brand";
import { Section } from "@/components/layout/Section";


export const Privacy = () => {
  return (
    <Section id="privacy" className="px-6 md:px-0">
      <div 
        className="rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] text-center flex flex-col items-center gap-6"
        style={{ background: 'linear-gradient(135deg, #0B2831 0%, #12333C 100%)' }}
      >
        <h2 className="text-white text-[26px] md:text-5xl font-bold tracking-tight">
          Твои работы — только твои
        </h2>
        <p className="text-teal-200 text-[15px] md:text-lg max-w-[640px] leading-relaxed">
          Мы не передаём твои темы, тексты и файлы вузам и преподавателям. Историю работ видишь только ты.
        </p>
        <a 
          href="#faq"
          className="w-full md:w-auto px-12 h-[52px] flex items-center justify-center rounded-full border border-teal-500 text-white font-medium hover:bg-teal-500/10 transition-colors"
        >
          Как мы храним данные
        </a>
      </div>
    </Section>
  );
};
