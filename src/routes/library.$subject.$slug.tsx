import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BRAND } from "@/config/brand";
import { demoRelated, demoWork } from "@/data/library";

const SITE = "https://zachot-study-buddy.lovable.app";

const MONTHS = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}

const pageTitle = `${demoWork.title} — ${demoWork.kind} по предмету ${demoWork.subject} | ${BRAND.name}`;
const pageDescription = demoWork.intro.slice(0, 160);

export const Route = createFileRoute("/library/$subject/$slug")({
  head: ({ params }) => {
    const url = `${SITE}/library/${params.subject}/${params.slug}`;
    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: pageDescription },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Библиотека", item: `${SITE}/library` },
              {
                "@type": "ListItem",
                position: 3,
                name: demoWork.subject,
                item: `${SITE}/library/${demoWork.subjectSlug}`,
              },
              { "@type": "ListItem", position: 4, name: demoWork.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: demoWork.title,
            description: pageDescription,
            datePublished: demoWork.updated,
            dateModified: demoWork.updated,
            inLanguage: "ru-RU",
          }),
        },
      ],
    };
  },
  component: LibraryWorkPage,
});

function Toc({ active, mobile }: { active: string; mobile?: boolean }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div className="rounded-[16px] border border-[#E6E9EC] bg-white p-5 min-[900px]:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between text-[13px] font-bold text-muted"
        >
          Содержание
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {open && (
          <nav className="mt-4 flex flex-col gap-[10px]">
            {demoWork.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`text-[14px] transition-colors ${
                  active === s.id ? "text-teal-500" : "text-navy-900 hover:text-teal-500"
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    );
  }

  return (
    <aside className="sticky top-[24px] hidden rounded-[16px] border border-[#E6E9EC] bg-white p-5 min-[900px]:block">
      <p className="text-[13px] font-bold text-muted">Содержание</p>
      <nav className="mt-4 flex flex-col gap-[10px]">
        {demoWork.sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-[14px] transition-colors ${
              active === s.id ? "text-teal-500" : "text-navy-900 hover:text-teal-500"
            }`}
          >
            {s.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function LibraryWorkPage() {
  const work = demoWork;
  const [active, setActive] = useState(work.sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );
    work.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [work.sections]);

  const chips = [
    work.kind,
    work.subject,
    `${work.chars.toLocaleString("ru-RU")} знаков`,
    `${work.pages} страниц`,
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg">
      <Header />
      <main>
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {/* Хлебные крошки */}
          <nav
            aria-label="Хлебные крошки"
            className="mt-[24px] flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[13px] text-muted"
          >
            <Link to="/" className="text-teal-500 hover:underline">
              Главная
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
            <a href="/library" className="text-teal-500 hover:underline">
              Библиотека
            </a>
            <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
            <a href={`/library/${work.subjectSlug}`} className="text-teal-500 hover:underline">
              {work.subject}
            </a>
            <ChevronRight className="h-3 w-3 shrink-0" aria-hidden />
            <span>{work.title}</span>
          </nav>

          {/* Шапка работы */}
          <header className="mt-[20px]">
            <h1 className="max-w-[860px] font-display font-800 text-[28px] leading-tight tracking-[-0.01em] text-navy-900 min-[900px]:text-[40px]">
              {work.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#E6E9EC] bg-white px-3 py-[5px] text-[13px] text-navy-900"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[13px] text-muted">Обновлено {formatDate(work.updated)}</p>
          </header>

          {/* Врезка с предложением */}
          <div className="mt-[24px] flex items-center justify-between gap-4 rounded-[16px] bg-orange-100 p-5 max-[899px]:flex-col max-[899px]:items-stretch">
            <p className="text-[15px] text-navy-900">Нужна такая же работа, но по твоей теме?</p>
            <Link
              to="/app/text"
              search={{ topic: "" }}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-navy-900 px-6 text-[15px] font-medium text-white transition-opacity hover:opacity-90 max-[899px]:w-full"
            >
              Сделать свою
            </Link>
          </div>

          {/* Основная область */}
          <div className="mt-[32px] grid gap-[40px] min-[900px]:grid-cols-[1fr_260px]">
            <div className="flex flex-col gap-[24px]">
              <Toc active={active} mobile />

              <article className="rounded-[20px] border border-[#E6E9EC] bg-white p-5 min-[900px]:p-[40px]">
                <div className="flex flex-col gap-[32px]">
                  {work.sections.map((s) => (
                    <section key={s.id} id={s.id} className="scroll-mt-[96px]">
                      <h2 className="font-display font-800 text-[24px] leading-tight text-navy-900">
                        {s.title}
                      </h2>
                      <div className="mt-4 flex max-w-[680px] flex-col gap-4">
                        {s.paragraphs.map((p, i) => (
                          <p key={i} className="text-[16px] leading-[1.8] text-navy-900">
                            {p}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}

                  <section>
                    <h2 className="font-display font-800 text-[24px] leading-tight text-navy-900">
                      Список источников
                    </h2>
                    <ol className="mt-4 flex max-w-[680px] list-decimal flex-col gap-[10px] pl-5">
                      {work.sources.map((src) => (
                        <li key={src} className="text-[15px] leading-[1.7] text-navy-900">
                          {src}
                        </li>
                      ))}
                    </ol>
                  </section>
                </div>
              </article>
            </div>

            <Toc active={active} />
          </div>

          {/* Блок призыва */}
          <div className="mt-[40px] rounded-[24px] bg-[linear-gradient(135deg,#0B2831_0%,#12333C_100%)] p-6 text-center min-[900px]:p-[40px]">
            <h2 className="font-display font-800 text-[24px] leading-tight text-white min-[900px]:text-[28px]">
              Такая же работа по твоей теме
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.6] text-teal-200">
              Зачёт составит план, подберёт источники и напишет черновик. Проверять и править будешь
              ты
            </p>
            <Link
              to="/app/text"
              search={{ topic: "" }}
              className="mt-6 inline-flex h-12 items-center rounded-full bg-orange-500 px-7 text-[16px] font-medium text-navy-900 transition-opacity hover:opacity-90"
            >
              Начать бесплатно
            </Link>
          </div>

          {/* Похожие работы */}
          <section className="mt-[40px]">
            <h2 className="font-display font-800 text-[24px] leading-tight text-navy-900 min-[900px]:text-[28px]">
              Похожие работы
            </h2>
            <div className="mt-6 grid gap-4 min-[900px]:grid-cols-2">
              {demoRelated.map((item) => (
                <Link
                  key={item.slug}
                  to="/library/$subject/$slug"
                  params={{ subject: item.subjectSlug, slug: item.slug }}
                  className="rounded-[16px] border border-[#E6E9EC] bg-white p-5 transition-colors hover:border-teal-500"
                >
                  <p className="line-clamp-2 text-[15px] text-navy-900">{item.title}</p>
                  <p className="mt-2 text-[13px] text-muted">
                    {item.kind} · {item.subject}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-[24px] flex justify-center">
              <a
                href={`/library/${work.subjectSlug}`}
                className="inline-flex items-center gap-2 text-[15px] text-teal-500 hover:underline"
              >
                Все работы по предмету {work.subject}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </section>
        </div>

        <div className="mt-[80px]">
          <Footer />
        </div>
      </main>
    </div>
  );
}
