import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Section } from "@/components/layout/Section";
import { ResultDemo } from "@/components/landing/ResultDemo";
import { Reviews } from "@/components/landing/Reviews";
import { Pricing } from "@/components/landing/Pricing";
import { BRAND } from "@/config/brand";
import { referatPage } from "@/data/seoToolReferat";
import { comparison, examples } from "@/data/content";
import { Sparkles, Check, ArrowRight, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Shape } from "@/components/decor/Shape";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/example")({
  head: () => ({
    meta: [
      { title: referatPage.metaTitle },
      { name: "description", content: referatPage.metaDescription },
      { property: "og:title", content: referatPage.metaTitle },
      { property: "og:description", content: referatPage.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://zachot-study-buddy.lovable.app/example" }
    ]
  }),
  component: SeoToolPage,
});

function SeoToolPage() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleCta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    navigate({ to: referatPage.targetApp, search: { topic } });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://zachot-study-buddy.lovable.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": referatPage.h1
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": referatPage.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="pb-[96px]">
        {/* Hero Section */}
        <Section className="px-6 md:px-0 pt-6">
          <div className="flex items-center gap-2 text-[13px] text-muted overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link to="/" className="hover:text-navy-900 transition-colors">Главная</Link>
            <span className="text-line">/</span>
            <span className="text-muted">{referatPage.h1}</span>
          </div>

          <div className="mt-4">
            <h1 className="text-[32px] md:text-[40px] font-display font-extrabold text-navy-900 max-w-[800px] leading-tight">
              {referatPage.h1}
            </h1>
            <p className="mt-3 text-[16px] text-muted max-w-[640px] leading-relaxed">
              {referatPage.subtitle}
            </p>

            {/* Form Card */}
            <div className="mt-8 rounded-[20px] border border-line bg-white p-5 shadow-sm max-w-[800px]">
              <form onSubmit={handleCta} className="space-y-4">
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder={referatPage.inputPlaceholder}
                  className="w-full resize-none border-0 bg-transparent p-0 text-[16px] text-navy-900 placeholder:text-muted focus:ring-0 min-h-[80px]"
                />
                <button
                  type="submit"
                  disabled={!topic.trim()}
                  className="w-full md:w-fit flex h-[52px] items-center justify-center gap-2 rounded-full bg-orange-500 px-8 text-[16px] font-bold text-navy-900 transition-opacity hover:opacity-90 disabled:opacity-45 disabled:cursor-not-allowed"
                >
                  <Sparkles className="h-4.5 w-4.5" />
                  {referatPage.inputCta}
                </button>
              </form>
            </div>

            {/* Bullets */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {referatPage.bullets.map((bullet, idx) => (
                <a
                  key={idx}
                  href={bullet.anchor}
                  className="flex items-center gap-1.5 text-[14px] text-teal-500 font-medium hover:underline"
                >
                  <Check className="h-4 w-4" />
                  {bullet.label}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Comparison Section */}
        <Section id="compare" className="mt-[56px] px-6 md:px-0">
          <h2 className="text-[28px] font-display font-extrabold text-navy-900 text-center">
            Чем отличается от обычного чат-бота
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 items-stretch">
            {/* Mobile simplified or desktop full table */}
            <div className="hidden md:flex flex-col">
              <div className="min-h-[64px]" />
              {comparison.slice(0, 4).map((row, idx) => (
                <div key={idx} className="min-h-[64px] flex items-center justify-end text-[14px] text-navy-900 font-semibold text-right pr-4">
                  {row.label}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[24px] px-5 flex flex-col border border-line shadow-sm">
              <div className="min-h-[64px] flex items-center gap-3">
                <img src={logo} alt={BRAND.name} className="h-6 w-auto" />
              </div>
              {comparison.slice(0, 4).map((row, idx) => (
                <div key={idx} className={`min-h-[64px] flex items-center gap-3 py-3 ${idx < 3 ? 'border-b border-line' : ''}`}>
                  <Check className="w-5 h-5 text-teal-500 shrink-0 md:hidden" />
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-navy-900 md:hidden uppercase tracking-wider opacity-50 mb-1">{row.label}</span>
                    <span className="text-[14px] text-navy-900 font-normal leading-snug">{row.us}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F4F6F7] rounded-[24px] px-5 flex flex-col border border-line">
              <div className="min-h-[64px] flex items-center">
                <span className="text-muted font-medium text-[16px]">Обычные нейросети</span>
              </div>
              {comparison.slice(0, 4).map((row, idx) => (
                <div key={idx} className={`min-h-[64px] flex items-center gap-3 py-3 ${idx < 3 ? 'border-b border-line' : ''}`}>
                  <X className="w-5 h-5 text-muted shrink-0 md:hidden" />
                  <div className="flex flex-col">
                     <span className="text-[12px] font-bold text-muted md:hidden uppercase tracking-wider opacity-50 mb-1">{row.label}</span>
                    <span className="text-[14px] text-muted font-normal leading-snug">{row.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/" hash="compare" className="text-[14px] text-teal-500 font-medium hover:underline inline-flex items-center gap-1">
              Полное сравнение на главной
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Section>

        {/* Examples Section */}
        <Section className="mt-[56px] px-6 md:px-0">
          <h2 className="text-[28px] font-display font-extrabold text-navy-900 text-center">
            Примеры готовых работ
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {examples.slice(0, 6).map((item, idx) => (
              <div key={idx} className="bg-white border border-line rounded-[16px] p-5">
                <h3 className="text-[15px] font-bold text-navy-900 line-clamp-2 h-10 leading-snug">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-[13px] text-muted">
                  <span>{item.type}</span>
                  <span>•</span>
                  <span>{item.size}</span>
                  <span>•</span>
                  <span>{item.subject}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SEO Text Section */}
        <Section id="how" className="mt-[56px] px-6 md:px-0">
          <div className="bg-white border border-line rounded-[24px] p-10 max-[899px]:p-5">
            <div className="max-w-[720px]">
              {referatPage.seo.map((block, idx) => (
                <div key={block.id} className={idx > 0 ? "mt-8" : ""}>
                  <h2 className="text-[24px] font-display font-extrabold text-navy-900 mb-4">
                    {block.heading}
                  </h2>
                  {block.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-[16px] leading-[1.8] text-navy-900 mb-4 last:mb-0">
                      {p}
                    </p>
                  ))}
                  {block.list && (
                    <ul className="mt-4 space-y-2.5">
                      {block.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-[15px] text-navy-900 leading-normal">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" className="mt-[56px] px-6 md:px-0">
          <h2 className="text-[28px] font-display font-extrabold text-navy-900 text-center mb-8">
            Частые вопросы
          </h2>
          <div className="mx-auto max-w-[800px]">
            <Accordion type="single" collapsible className="space-y-3">
              {referatPage.faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-[20px] border border-line bg-white px-6 transition-all data-[state=open]:border-teal-500"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline">
                    <h3 className="text-[16px] md:text-[18px] font-bold text-navy-900 leading-tight">
                      {item.q}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-1 text-[15px] leading-relaxed text-muted">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Call to Action Section */}
        <Section className="mt-[56px] px-6 md:px-0">
          <div className="bg-[linear-gradient(135deg,#0B2831_0%,#12333C_100%)] rounded-[32px] p-12 max-[899px]:px-6 max-[899px]:py-10 text-center">
            <h2 className="text-[32px] font-display font-extrabold text-white mb-3">
              Попробуй на своей теме
            </h2>
            <p className="text-[16px] text-teal-200 mb-8">
              Первые работы бесплатно — без подписки и без карты
            </p>
            <Link
              to="/app/text"
              search={{ topic: "" }}
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-orange-500 px-8 text-[16px] font-bold text-navy-900 transition-opacity hover:opacity-90"
            >
              Написать реферат
            </Link>
          </div>
        </Section>

        {/* Neighbors Section */}
        <Section className="mt-[56px] px-6 md:px-0">
          <h2 className="text-[22px] font-display font-extrabold text-navy-900 mb-6">
            Другие AI-инструменты Зачёта
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {referatPage.neighbors.map((link, idx) => (
              <a
                key={idx}
                href={link.to}
                className="flex h-[38px] items-center rounded-full border border-line bg-white px-4 text-[14px] text-navy-900 transition-colors hover:border-teal-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
