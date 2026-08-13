import { BRAND } from "@/config/brand";

export const Privacy = () => {
  return (
    <section className="container-1200 px-4 md:px-0">
      <div 
        className="rounded-[32px] p-8 md:p-16 text-center flex flex-col items-center gap-6"
        style={{ background: 'linear-gradient(135deg, #062132 0%, #132A3F 100%)' }}
      >
        <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
          Твои работы — только твои
        </h2>
        <p className="text-teal-200 text-base md:text-lg max-w-[640px] leading-relaxed">
          Мы не передаём твои темы, тексты и файлы вузам и преподавателям. Историю работ видите только вы.
        </p>
        <a 
          href="#faq"
          className="w-full md:w-auto px-12 h-[52px] flex items-center justify-center rounded-full border border-teal-500 text-white font-medium hover:bg-teal-500/10 transition-colors"
        >
          Как мы храним данные
        </a>
      </div>
    </section>
  );
};
