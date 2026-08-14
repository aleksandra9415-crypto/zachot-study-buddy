import { copy, scenarios } from "@/data/content";
// Using placeholders for now to fix build errors
const textImg = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='12' fill='%23F1F4F6'/%3E%3Crect x='16' y='12' width='32' height='40' rx='2' fill='%23132A3F'/%3E%3Crect x='20' y='20' width='24' height='2' fill='%2356AFB1'/%3E%3Crect x='20' y='26' width='24' height='2' fill='%2356AFB1'/%3E%3Crect x='20' y='32' width='16' height='2' fill='%23FC6116'/%3E%3C/svg%3E";
const deckImg = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='12' fill='%23F1F4F6'/%3E%3Crect x='12' y='16' width='40' height='28' rx='2' fill='%23132A3F'/%3E%3Crect x='18' y='30' width='6' height='8' fill='%2356AFB1'/%3E%3Crect x='28' y='26' width='6' height='12' fill='%23FC6116'/%3E%3Crect x='38' y='22' width='6' height='16' fill='%2356AFB1'/%3E%3C/svg%3E";
const taskImg = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='12' fill='%23F1F4F6'/%3E%3Crect x='18' y='14' width='28' height='36' rx='4' fill='%23132A3F'/%3E%3Crect x='22' y='18' width='20' height='8' rx='1' fill='%2356AFB1'/%3E%3Ccircle cx='25' cy='32' r='2' fill='white'/%3E%3Ccircle cx='32' cy='32' r='2' fill='white'/%3E%3Ccircle cx='39' cy='32' r='2' fill='white'/%3E%3Ccircle cx='25' cy='39' r='2' fill='white'/%3E%3Ccircle cx='32' cy='39' r='2' fill='white'/%3E%3Ccircle cx='39' cy='39' r='2' fill='white'/%3E%3Crect x='37' y='44' width='7' height='2' fill='%23FC6116'/%3E%3C/svg%3E";
const topicImg = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='12' fill='%23F1F4F6'/%3E%3Cpath d='M12 20C12 18.8954 12.8954 18 14 18H32V46H14C12.8954 46 12 45.1046 12 44V20Z' fill='%23132A3F'/%3E%3Cpath d='M52 20C52 18.8954 51.1046 18 50 18H32V46H50C51.1046 46 52 45.1046 52 44V20Z' fill='%231E3D57'/%3E%3Ccircle cx='32' cy='24' r='6' fill='%23FC6116'/%3E%3Crect x='31' cy='30' width='2' height='4' fill='%23FC6116'/%3E%3C/svg%3E";

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
