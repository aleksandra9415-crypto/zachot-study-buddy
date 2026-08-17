import { useState } from "react";
import { Sparkles, Receipt } from "lucide-react";
import { DEMO_DATA, demoPlans } from "@/data/demo";
import { periods } from "@/data/content";

type PeriodId = "m1" | "m3" | "m12";

const DEMO_NOTICE = "Демо-версия: оплата пока не подключена";

export function SubscriptionBoard() {
  const [activePeriod, setActivePeriod] = useState<PeriodId>("m3");
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (key: string) => {
    setNotice(key);
    setTimeout(() => setNotice(null), 4000);
  };

  const noticeBox = (
    <p className="mt-3 rounded-[10px] bg-[#EAEEF2] p-3 text-[13px] text-muted">{DEMO_NOTICE}</p>
  );

  return (
    <div>
      {/* Current status */}
      <div className="mt-5 rounded-[16px] bg-[#EAEEF2] p-5">
        <div className="flex flex-col gap-4 min-[900px]:flex-row min-[900px]:items-center">
          <div className="flex flex-1 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-orange-500">
              <Sparkles className="h-[22px] w-[22px] text-navy-900" />
            </div>
            <div>
              <p className="text-[16px] font-bold text-navy-900">Бесплатный доступ</p>
              <p className="text-[14px] text-muted">Осталось 2 работы из 3</p>
            </div>
          </div>
          <button
            onClick={() => showNotice("top")}
            className="hidden h-11 items-center justify-center rounded-full bg-navy-900 px-6 text-[15px] font-bold text-white transition-opacity hover:opacity-90 min-[900px]:inline-flex"
          >
            Подключить подписку
          </button>
        </div>

        <div className="mt-3.5 h-[6px] w-full overflow-hidden rounded-full bg-white">
          <div className="h-full w-1/3 rounded-full bg-orange-500" />
        </div>

        <button
          onClick={() => showNotice("top")}
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-navy-900 px-6 text-[15px] font-bold text-white transition-opacity hover:opacity-90 min-[900px]:hidden"
        >
          Подключить подписку
        </button>

        {notice === "top" && noticeBox}
      </div>

      {/* Plans */}
      <h2 className="mt-8 font-display text-[20px] font-extrabold text-navy-900">Выбери тариф</h2>

      <div className="mt-4 flex">
        <div className="no-scrollbar inline-flex max-w-full overflow-x-auto rounded-full border border-[#E6E9EC] bg-white p-1">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setActivePeriod(period.id as PeriodId)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                activePeriod === period.id ? "bg-navy-900 text-white shadow-md" : "text-muted hover:text-navy-900"
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

      <div className="mt-4 grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
        {demoPlans.map((plan) => {
          const price = DEMO_DATA ? plan.price[activePeriod as keyof typeof plan.price] : "——";
          return (
            <div
              key={plan.id}
              className={`flex flex-col gap-6 rounded-[24px] p-6 ${
                plan.featured
                  ? "border border-navy-900 bg-navy-900 text-white"
                  : "border border-[#E6E9EC] bg-white text-navy-900"
              }`}
            >
              <div>
                <h3 className="font-display text-xl">{plan.name}</h3>
                <p className={`text-[13px] ${plan.featured ? "text-teal-200" : "text-muted"}`}>{plan.caption}</p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{price}</span>
                  <span className="text-sm font-medium opacity-70">₽/мес.</span>
                </div>
                <p className={`mt-1 text-[13px] ${plan.featured ? "text-teal-200" : "text-muted"}`}>{plan.volume}</p>
              </div>

              <div className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <span key={f} className="text-sm leading-snug">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => showNotice(plan.id)}
                  className={`h-[52px] w-full rounded-full font-bold transition-all ${
                    plan.featured
                      ? "bg-orange-500 text-navy-900 hover:opacity-90"
                      : "border border-navy-900 text-navy-900 hover:bg-bg"
                  }`}
                >
                  Выбрать
                </button>
                {notice === plan.id && noticeBox}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 text-[15px] text-teal-500 hover:underline"
        >
          Сравнить тарифы подробно
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>


      {/* Payments history */}
      <h2 className="mt-8 font-display text-[20px] font-extrabold text-navy-900">История платежей</h2>
      <div className="mt-4 flex flex-col items-center rounded-[16px] border border-[#E6E9EC] bg-white p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAEEF2]">
          <Receipt className="h-6 w-6 text-muted" />
        </div>
        <p className="mt-4 text-[15px] text-navy-900">Платежей пока не было</p>
        <p className="mt-1 text-[14px] text-muted">Здесь появятся чеки и даты списаний</p>
      </div>
    </div>
  );
}
