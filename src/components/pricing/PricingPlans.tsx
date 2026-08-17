import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { DEMO_DATA, demoPlans } from "@/data/demo";
import { periods } from "@/data/content";

type PeriodId = "m1" | "m3" | "m12";

export function PricingPlans() {
  const [activePeriod, setActivePeriod] = useState<PeriodId>("m3");

  return (
    <div>
      <div className="flex justify-center">
        <div className="no-scrollbar inline-flex max-w-full overflow-x-auto rounded-full border border-[#E6E9EC] bg-white p-1">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setActivePeriod(period.id as PeriodId)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all md:px-6 md:text-sm ${
                activePeriod === period.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "text-muted hover:text-navy-900"
              }`}
            >
              {period.label}
              {period.discount && (
                <span className="rounded-sm bg-pink-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {period.discount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 min-[900px]:grid min-[900px]:grid-cols-3 min-[900px]:items-stretch">
        {demoPlans.map((plan) => {
          const price = DEMO_DATA ? plan.price[activePeriod] : "——";
          return (
            <div
              key={plan.id}
              className={`flex flex-col gap-8 rounded-[24px] border p-5 md:p-8 ${
                plan.featured
                  ? "border-navy-900 bg-navy-900 text-white shadow-xl"
                  : "border-[#E6E9EC] bg-white text-navy-900"
              }`}
            >
              <div className="flex flex-col gap-1">
                {plan.featured && (
                  <span className="mb-2 self-start rounded-[999px] bg-orange-500 px-3 py-1 text-[12px] font-medium text-navy-900">
                    Выбирают чаще всего
                  </span>
                )}
                <h3 className="font-display text-xl">{plan.name}</h3>
                <p className={`text-[13px] ${plan.featured ? "text-teal-200" : "text-muted"}`}>
                  {plan.caption}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{price}</span>
                  <span className="text-sm font-medium opacity-70">₽/мес.</span>
                </div>
                <p className={`text-[13px] ${plan.featured ? "text-teal-200" : "text-muted"}`}>
                  {plan.volume}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? "text-white" : "text-navy-900"}`}
                    />
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/app/subscription"
                className={`mt-auto flex h-[52px] w-full items-center justify-center rounded-full font-bold transition-all ${
                  plan.featured
                    ? "bg-orange-500 text-navy-900 hover:opacity-90"
                    : "border border-navy-900 text-navy-900 hover:bg-bg"
                }`}
              >
                Выбрать
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
