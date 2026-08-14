import { copy, scenarios } from "@/data/content";
import textImg from "@/assets/illustrations/scenario-text.png";
import deckImg from "@/assets/illustrations/scenario-deck.png";
import taskImg from "@/assets/illustrations/scenario-task.png";
import topicImg from "@/assets/illustrations/scenario-topic.png";

const ILLUSTRATIONS: Record<string, { src: string; alt: string }> = {
  text: { src: textImg, alt: "Иллюстрация: стопка листов и ручка" },
  deck: { src: deckImg, alt: "Иллюстрация: экран с презентацией" },
  task: { src: taskImg, alt: "Иллюстрация: калькулятор и линейка" },
  topic: { src: topicImg, alt: "Иллюстрация: раскрытая книга и лампочка" },
};

export function Hero() {
  return (
    <section className="container-page">
      <div className="gradient-dark rounded-[32px] p-8 text-white md:p-16">
        <h1 className="max-w-[820px] text-[36px] leading-[1.05] md:text-[56px]">
          {copy.hero.h1}
        </h1>
        <p className="mt-6 max-w-[640px] text-[18px] text-teal-200">
          {copy.hero.subtitle}
        </p>
        <a
          href="#"
          className="mt-8 inline-flex h-[52px] items-center rounded-full bg-orange-500 px-7 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {copy.ctaPrimary}
        </a>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s) => (
            <div key={s.id} className="rounded-[24px] bg-white p-6">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[12px]">
                <img
                  src={ILLUSTRATIONS[s.id]?.src}
                  alt={ILLUSTRATIONS[s.id]?.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-[16px] font-bold text-navy-900">{s.title}</h3>

              <p className="mt-1 text-[14px] text-muted">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
