import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { bonusRules, bonusStats, bonusInvited, referralLink } from "@/data/bonus";

export function BonusBoard() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    void navigator.clipboard?.writeText(referralLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Referral link */}
      <div className="mt-5 rounded-[20px] bg-navy-900 p-6">
        <p className="text-[13px] text-[#8FA6AA]">Твоя ссылка</p>
        <div className="mt-3 flex flex-col gap-3 min-[900px]:flex-row">
          <input
            readOnly
            value={referralLink}
            className="h-12 flex-1 rounded-[12px] bg-navy-700 px-4 text-[15px] text-white outline-none"
          />
          <button
            onClick={copy}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] bg-orange-500 px-6 text-[15px] font-bold text-navy-900 transition-opacity hover:opacity-90 min-[900px]:w-auto"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Скопировано" : "Скопировать"}
          </button>
        </div>
      </div>

      {/* How it works */}
      <h2 className="mt-8 font-display text-[20px] font-extrabold text-navy-900">Как это работает</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
        {bonusRules.map((rule, i) => (
          <div key={rule.id} className="rounded-[16px] border border-[#E6E9EC] bg-white p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[14px] font-bold text-navy-900">
              {i + 1}
            </div>
            <p className="mt-3.5 text-[16px] font-bold text-navy-900">{rule.title}</p>
            <p className="mt-1.5 text-[14px] text-muted">{rule.text}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <h2 className="mt-8 font-display text-[20px] font-extrabold text-navy-900">Твои результаты</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 min-[900px]:grid-cols-3">
        {bonusStats.map((s) => (
          <div key={s.id} className="rounded-[16px] border border-[#E6E9EC] bg-white p-5 text-center">
            <p className="text-[32px] font-bold leading-none text-teal-500">{s.value}</p>
            <p className="mt-2 text-[13px] text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Invited */}
      <h2 className="mt-8 font-display text-[20px] font-extrabold text-navy-900">Кто перешёл</h2>
      <div className="mt-4 flex flex-col gap-2.5">
        {bonusInvited.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 rounded-[12px] border border-[#E6E9EC] bg-white px-4 py-3.5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[15px] font-bold text-navy-900">
              {p.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] text-navy-900">{p.name}</p>
              <p className="text-[13px] text-muted">{p.date}</p>
            </div>
            {p.status === "paid" ? (
              <span className="rounded-full bg-teal-200 px-2.5 py-[3px] text-[12px] text-navy-900">Подключил</span>
            ) : (
              <span className="rounded-full bg-[#EAEEF2] px-2.5 py-[3px] text-[12px] text-muted">Пока смотрит</span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-[12px] text-muted">
        Неделя начисляется после первой оплаты приглашённого. Условия программы уточняются.
      </p>
    </div>
  );
}
