import { useState } from "react";
import { Check } from "lucide-react";
import { DEMO_DATA, demoPlans } from "@/data/demo";
import { periods } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

type PeriodId = "m1" | "m3" | "m12";

export const Pricing = () => {
  const [activePeriod, setActivePeriod] = useState<PeriodId>("m3");

  return (
    <Section id="pricing" className="px-6 md:px-0">
      <SectionTitle>
        Выбери, сколько тебе нужно
      </SectionTitle>

      {/* Period Switcher */}
      <div className="flex justify-center mt-[24px] mb-8 md:mb-16">
        <div className="inline-flex p-1 bg-white border border-[#E6E9EC] rounded-full overflow-x-auto no-scrollbar max-w-full">
          {periods.map((period: any) => (
            <button
              key={period.id}
              onClick={() => setActivePeriod(period.id as PeriodId)}
              className={`relative px-4 md:px-6 py-2 rounded-full text-[13px] md:text-sm font-medium transition-all flex items-center gap-2 shrink-0 ${
                activePeriod === period.id 
                ? 'bg-navy-900 text-white shadow-md' 
                : 'text-muted hover:text-navy-900'
              }`}
            >
              {period.label}
              {period.discount && (
                <span className="bg-pink-500 text-navy-900 text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
                  {period.discount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Grid */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_1.25fr_1fr] gap-4 items-stretch">
        {demoPlans.map((plan) => {
          const price = DEMO_DATA ? plan.price[activePeriod] : "——";
          
          return (
            <div 
              key={plan.id}
              className={`rounded-[20px] md:rounded-[24px] p-5 md:p-8 flex flex-col gap-8 transition-all duration-300 border ${
                plan.featured 
                ? 'bg-navy-900 text-white border-navy-900 shadow-xl z-10 md:-my-4' 
                : 'bg-white text-navy-900 border-[#E6E9EC]'
              }`}
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-display">{plan.name}</h3>
                <p className={`text-[13px] ${plan.featured ? 'text-teal-200' : 'text-muted'}`}>
                  {plan.caption}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{price}</span>
                  <span className="text-sm font-medium opacity-70">₽/мес.</span>
                </div>
                <p className={`text-[13px] ${plan.featured ? 'text-teal-100/70' : 'text-muted'}`}>
                  {plan.volume}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.featured ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-50 text-teal-500'
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full h-[52px] rounded-full font-bold mt-auto transition-all ${
                plan.featured 
                ? 'bg-orange-500 text-navy-900 hover:opacity-90 shadow-lg shadow-orange-500/20' 
                : 'border border-navy-900 text-navy-900 hover:bg-navy-50'
              }`}>
                Выбрать
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
