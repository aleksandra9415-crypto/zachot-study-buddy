import { useState } from "react";
import {
  Copy,
  Check,
  Users,
  CreditCard,
  Coins,
  Gift,
  Smartphone,
  Flame,
  Send,
  QrCode,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { referral, soon, channel, bot } from "@/data/bonus";

const icons: Record<string, LucideIcon> = {
  Users,
  CreditCard,
  Coins,
  Gift,
  Smartphone,
  Flame,
};

export function BonusBoard() {
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const copy = () => {
    void navigator.clipboard?.writeText(referral.link).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const demo = (text: string) => {
    setNotice(text);
    setTimeout(() => setNotice(null), 2500);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Referral + soon */}
      <div className="grid grid-cols-1 gap-4 min-[1000px]:grid-cols-[1.6fr_1fr]">
        <div className="rounded-[24px] border border-[#E6E9EC] bg-white p-6 md:p-8">
          <h2 className="font-display text-[24px] font-extrabold leading-tight text-navy-900 md:text-[28px]">
            {referral.title}
          </h2>
          <p className="mt-2 text-[14px] text-muted">{referral.subtitle}</p>

          <div className="mt-5 flex h-[52px] items-center rounded-[14px] bg-bg px-5 text-[15px] text-navy-900">
            <span className="truncate">{referral.link}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            <button
              onClick={copy}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-orange-500 px-8 text-[15px] font-bold text-navy-900 transition-opacity hover:opacity-90"
            >
              {copied ? <Check className="h-[18px] w-[18px]" /> : <Copy className="h-[18px] w-[18px]" />}
              {copied ? "Скопировано" : "Скопировать"}
            </button>
            <button
              onClick={() => demo("Правила программы — в прототипе не открываются")}
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#E6E9EC] px-7 text-[15px] text-navy-900 transition-colors hover:border-navy-900"
            >
              Правила
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 rounded-[18px] border border-[#E6E9EC] p-5 sm:grid-cols-3">
            {referral.stats.map((s) => {
              const Icon = icons[s.icon] ?? Users;
              return (
                <div key={s.label}>
                  <div className="flex items-center gap-2">
                    <span className="text-[24px] font-bold leading-none text-navy-900">{s.value}</span>
                    <Icon className="h-[18px] w-[18px] text-teal-500" />
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-muted">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between overflow-hidden rounded-[24px] bg-navy-900 p-6 md:p-8">
          <div className="flex h-[120px] items-center justify-center">
            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-navy-700">
              <Sparkles className="h-10 w-10 text-orange-500" />
            </div>
          </div>
          <div>
            <h2 className="font-display text-[22px] font-extrabold leading-tight text-white">{soon.title}</h2>
            <p className="mt-2 text-[14px] text-[#8FA6AA]">{soon.text}</p>
          </div>
        </div>
      </div>

      {/* Channel banner */}
      <div className="flex flex-col gap-4 rounded-[24px] bg-teal-500 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="font-display text-[22px] font-extrabold text-white">{channel.title}</h2>
          <p className="mt-1.5 text-[14px] text-white/85">{channel.text}</p>
        </div>
        <button
          onClick={() => demo("Ссылка на канал появится в рабочей версии")}
          className="inline-flex h-[52px] w-fit items-center gap-2 rounded-full bg-white px-7 text-[15px] font-bold text-navy-900 transition-opacity hover:opacity-90"
        >
          {channel.cta}
          <Send className="h-[18px] w-[18px]" />
        </button>
      </div>

      {/* Bot */}
      <div className="grid grid-cols-1 gap-6 rounded-[24px] border border-[#E6E9EC] bg-white p-6 md:p-8 min-[1000px]:grid-cols-[1.4fr_1fr] min-[1000px]:items-center">
        <div>
          <h2 className="font-display text-[24px] font-extrabold text-navy-900 md:text-[28px]">{bot.title}</h2>
          <p className="mt-2 text-[14px] text-muted">{bot.text}</p>

          <div className="mt-5 flex flex-col gap-3 rounded-[18px] border border-[#E6E9EC] p-5">
            {bot.items.map((i) => {
              const Icon = icons[i.icon] ?? Gift;
              return (
                <div key={i.text} className="flex items-center gap-3">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-orange-500" />
                  <span className="text-[14px] text-navy-900">{i.text}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => demo("Бот подключается в рабочей версии сервиса")}
            className="mt-5 inline-flex h-[52px] items-center gap-2 rounded-full bg-navy-900 px-8 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
          >
            {bot.cta}
            <Send className="h-[18px] w-[18px] text-orange-500" />
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-[240px] rounded-[32px] border-[6px] border-navy-900 bg-bg p-5 pt-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-teal-500">
              <Send className="h-6 w-6 text-white" />
            </div>
            <p className="mt-3 text-[16px] font-bold text-navy-900">{bot.phone.title}</p>
            <p className="mt-1 whitespace-pre-line text-[12px] leading-snug text-muted">{bot.phone.text}</p>
            <div className="mx-auto mt-4 flex h-[120px] w-[120px] items-center justify-center rounded-[14px] bg-white">
              <QrCode className="h-16 w-16 text-navy-900" />
            </div>
          </div>
        </div>
      </div>

      {notice && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy-900 px-6 py-3 text-[14px] text-white shadow-lg">
          {notice}
        </div>
      )}
    </div>
  );
}
