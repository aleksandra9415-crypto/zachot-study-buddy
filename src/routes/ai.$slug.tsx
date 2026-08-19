import { useState } from "react";
import { createFileRoute, Link, useNavigate, useParams, redirect } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Section } from "@/components/layout/Section";
import { ResultDemo } from "@/components/landing/ResultDemo";
import { Reviews } from "@/components/landing/Reviews";
import { Pricing } from "@/components/landing/Pricing";
import { BRAND } from "@/config/brand";
import { seoToolStubs } from "@/data/seoToolStubs";
import { comparison, examples } from "@/data/content";
import { Sparkles, Check, ArrowRight, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import Shape from "@/components/decor/Shape";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SeoToolPage as SeoToolPageType } from "@/types/seoTool";

export const Route = createFileRoute("/ai/$slug")({
  beforeLoad: ({ params }) => {
    const page = seoToolStubs.find((p) => p.slug === params.slug);
    if (!page) {
      throw redirect({ to: "/" });
    }
  },
  head: ({ params }) => {
    const page = seoToolStubs.find((p) => p.slug === params.slug)!;
    return {
      meta: [
        { title: page.metaTitle },
        { name: "description", content: page.metaDescription },
        { property: "og:title", content: page.metaTitle },
        { property: "og:description", content: page.metaDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `https://zachot-study-buddy.lovable.app/ai/${page.slug}` }
      ]
    };
  },
  component: SeoToolStubPage,
});

function SeoToolStubPage() {
  const { slug } = useParams({ from: "/ai/$slug" });
  const page = seoToolStubs.find((p) => p.slug === slug)!;
  return <SeoToolLayout page={page} />;
}

export function SeoToolLayout({ page }: { page: SeoToolPageType }) {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const handleCta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    navigate({ to: page.targetApp as any, search: { topic } as any });
  };

  const handlePreset = (preset: string) => {
    setTopic(preset);
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
            "name": page.h1
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": page.faq.map(item => ({
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
    <div className="min-h-screen bg-bg font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="flex flex-col gap-[56px] md:gap-[96px] pb-[96px]">
        {/* Hero Section */}
        <Section outerClassName="pt-6 pb-0" className="px-6 md:px-0">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[13px] text-muted overflow-x-auto whitespace-nowrap no-scrollbar mb-6">
            <Link to="/" className="hover:text-navy-900 transition-colors">Главная</Link>
            <span className="text-line">/</span>
            <span className="text-muted">{page.h1}</span>
          </div>

          <div className="relative">
            {/* Background Shapes */}
            <Shape 
              kind="circle" 
              size={280} 
              className="bg-teal-500 shape-float-1 max-[900px]:scale-50" 
              style={{ top: -60, right: -60, zIndex: 0 }} 
            />
            <Shape 
              kind="triangle" 
              size={140} 
              className="text-orange-500 shape-float-2 max-[900px]:scale-50" 
              style={{ bottom: -50, left: -40, transform: "rotate(-15deg)", zIndex: 0 }} 
            />

            {/* Dark Card */}
            <div 
              className="relative z-[1] rounded-[32px] p-6 md:p-[48px] overflow-hidden"
              style={{ 
                background: "linear-gradient(135deg, rgba(11,40,49,0.94) 0%, rgba(18,51,60,0.94) 100%)",
              }}
            >
              <div className="grid grid-cols-1 min-[901px]:grid-cols-[1.1fr_1fr] gap-10 items-center">
                {/* Left Column: Text content */}
                <div>
                  <h1 className="text-[28px] min-[901px]:text-[40px] font-display font-extrabold text-white leading-tight">
                    {page.h1}
                  </h1>
                  <p className="mt-4 text-[16px] text-teal-200 max-w-[460px] leading-relaxed">
                    {page.subtitle}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    {page.bullets.map((bullet, idx) => (
                      <a
                        key={idx}
                        href={bullet.anchor}
                        className="flex items-center gap-3 text-[15px] text-white hover:underline group"
                      >
                        <Check className="h-4.5 w-4.5 text-teal-500 shrink-0" />
                        <span>{bullet.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column: Generator form */}
                <div className="bg-white rounded-[20px] p-5 shadow-[0_16px_40px_rgba(6,26,36,0.35)]">
                  <div className="text-[13px] font-bold text-muted mb-2 uppercase tracking-wider">
                    Тема работы
                  </div>
                  <form onSubmit={handleCta} className="space-y-4">
                    <textarea
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder={page.inputPlaceholder}
                      rows={4}
                      className="w-full resize-none border-0 bg-transparent p-0 text-[16px] text-navy-900 placeholder:text-muted focus:ring-0 min-h-[100px]"
                    />
                    
                    {page.presets && (
                      <div className="flex flex-wrap gap-2">
                        {page.presets.map((preset, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handlePreset(preset)}
                            className="h-[34px] px-3 rounded-full border border-line text-[13px] text-navy-900 hover:bg-bg transition-colors truncate max-w-[220px] md:max-w-none"
                            title={preset}
                          >
                            {preset.length > 45 ? preset.slice(0, 42) + '...' : preset}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!topic.trim()}
                      className="w-full flex h-[52px] items-center justify-center gap-2 rounded-full bg-orange-500 px-8 text-[16px] font-bold text-navy-900 transition-opacity hover:opacity-90 disabled:opacity-45 disabled:cursor-not-allowed"
                    >
                      <Sparkles className="h-4.5 w-4.5" />
                      {page.inputCta}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Comparison Section */}
        <Section id="compare" className="px-6 md:px-0">
          <h2 className="text-[28px] font-display font-extrabold text-navy-900 text-center">
            Чем отличается от обычного чат-бота
          </h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr_1.4fr] gap-4 items-stretch">
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

        {/* Result Demo */}
        {page.showResultDemo !== false && <ResultDemo />}

        {/* Examples Section */}
        <Section className="px-6 md:px-0">
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

        {/* Reviews */}
        <Reviews />

        {/* Pricing */}
        <Pricing />

        {/* SEO Text Section */}
        <Section id="how" className="px-6 md:px-0">
          <div className="bg-white border border-line rounded-[24px] p-10 max-[899px]:p-5">
            <div className="max-w-[720px]">
              {page.seo.map((block, idx) => (
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
                          {item.toString()}
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
        <Section id="faq" className="px-6 md:px-0">
          <h2 className="text-[28px] font-display font-extrabold text-navy-900 text-center mb-8">
            Частые вопросы
          </h2>
          <div className="w-full max-w-[1200px] mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {page.faq.map((item, idx) => (
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

        {/* Final CTA Section */}
        <Section className="relative px-6 md:px-0">
          <Shape kind="triangle" size={120} className="text-pink-500 shape-float-3" style={{ top: -40, left: 30, transform: "rotate(12deg)", zIndex: 0 }} />
          <Shape kind="circle" size={180} className="bg-orange-500 shape-float-4" style={{ bottom: -60, right: -30, zIndex: 0 }} />
          
          <div className="gradient-dark-soft rounded-[20px] md:rounded-[32px] p-8 md:p-[48px] text-center flex flex-col items-center relative z-[1] overflow-hidden">
            <div className="relative z-[2] flex flex-col items-center">
              <h2 className="text-[32px] font-display font-extrabold text-white mb-3">
                Попробуй на своей теме
              </h2>
              <p className="text-[15px] md:text-base text-teal-200 max-w-[560px] leading-[1.6] mb-10">
                Первые работы бесплатно — без подписки и без карты
              </p>
              <Link
                to={page.targetApp as any}
                search={{ topic: "" } as any}
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-orange-500 px-10 text-[16px] font-bold text-navy-900 transition-opacity hover:opacity-90"
              >
                {page.inputCta}
              </Link>
            </div>
          </div>
        </Section>

        {/* Neighbors Section */}
        <Section className="px-6 md:px-0">
          <h2 className="text-[22px] font-display font-extrabold text-navy-900 mb-6">
            Другие AI-инструменты Зачёта
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {page.neighbors.map((link, idx) => (
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
