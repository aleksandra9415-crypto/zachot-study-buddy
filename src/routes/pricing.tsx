import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FAQ } from "@/components/landing/FAQ";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PlanMatrix } from "@/components/pricing/PlanMatrix";
import { payFaq } from "@/data/pricing";
import { BRAND } from "@/config/brand";

const title = `Тарифы ${BRAND.name} — сколько стоит подписка`;
const description =
  "Первые три работы бесплатно. Дальше — подписка с понятным лимитом: тексты, презентации, задачи и разбор темы.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg">
      <Header />
      <main>
        <Section className="bg-bg">
          <div className="mt-[32px] flex flex-col items-center text-center">
            <h1 className="font-display font-800 text-[26px] leading-tight tracking-[-0.01em] text-navy-900 md:text-[40px]">
              Сколько это стоит
            </h1>
            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-muted">
              Первые три работы бесплатно. Дальше — подписка с понятным лимитом, без доплат за каждую
              кнопку
            </p>
          </div>

          <div className="mt-[32px]">
            <PricingPlans />
          </div>

          <div className="mt-[64px]">
            <SectionTitle>Что входит в каждый тариф</SectionTitle>
            <div className="mt-[32px]">
              <PlanMatrix />
            </div>
          </div>
        </Section>

        <div className="mx-auto max-w-[1200px] px-4 md:px-0">
          <FAQ items={payFaq} title="Вопросы об оплате" id="pay-faq" className="" />
        </div>

        <Section className="bg-bg pb-[80px]">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#0B2831_0%,#12333C_100%)] p-6 text-center md:p-[48px]">
            <h2 className="font-display font-800 text-[26px] leading-tight tracking-[-0.01em] text-white md:text-[40px]">
              Начни с бесплатных работ
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.6] text-teal-200">
              Три работы без подписки — посмотришь на своей теме и решишь
            </p>
            <Link
              to="/app"
              className="mt-6 inline-flex h-[52px] items-center rounded-full bg-orange-500 px-7 text-[16px] font-medium text-navy-900 transition-opacity hover:opacity-90"
            >
              Попробовать
            </Link>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}
