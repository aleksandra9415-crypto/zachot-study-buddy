import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Examples } from "@/components/landing/Examples";
import { Stats } from "@/components/landing/Stats";
import { Personalization } from "@/components/landing/Personalization";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ResultDemo } from "@/components/landing/ResultDemo";
import { Privacy } from "@/components/landing/Privacy";
import { Comparison } from "@/components/landing/Comparison";
import { Reviews } from "@/components/landing/Reviews";
import { Pricing } from "@/components/landing/Pricing";
import { BRAND } from "@/config/brand";

const title = `${BRAND.name} — ${BRAND.tagline}`;
const description =
  "Пиши работы, решай задачи, собирай презентации и разбирайся в сложных темах — по шагам и с объяснениями.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="flex flex-col gap-14 py-14 md:gap-24 md:py-24">
        <Hero />
        <Examples />
        <Stats />
        <Personalization />
        <HowItWorks />
        <ResultDemo />
        <Privacy />
        <Comparison />
        <Reviews />
        <Pricing />
      </main>
    </div>
  );
}
