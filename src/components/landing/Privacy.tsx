import { BRAND } from "@/config/brand";
import { Section } from "@/components/layout/Section";


export const Privacy = () => {
  return (
    <Section id="privacy" className="px-6 md:px-0">
      <div 
        className="rounded-[32px] p-[48px] text-center flex flex-col items-center gap-6"
        style={{ background: 'var(--gradient-dark)' }}
      >
        <h2 className="text-surface text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
          Твои работы — только твои
        </h2>
        <p className="text-teal-100 text-base md:text-lg max-w-[640px] leading-relaxed">
          Мы не передаём твои темы, тексты и файлы вузам и преподавателям. Историю работ видишь только ты.
        </p>
        <a 
          href="#faq"
          className="w-full md:w-auto px-12 h-[52px] flex items-center justify-center rounded-full border border-teal-600 text-surface font-medium hover:bg-teal-600/10 transition-colors"

        >
          Как мы храним данные
        </a>
      </div>
    </Section>
  );
};
