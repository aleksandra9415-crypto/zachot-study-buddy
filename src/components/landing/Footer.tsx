import { Section } from "@/components/layout/Section";
import { BRAND } from "@/config/brand";
import { footerLinks } from "@/data/content";

export const Footer = () => {
  return (
    <Section className="bg-paper">

      <div className="bg-ink-900 rounded-[32px] p-[48px] w-full text-surface">

        {/* Top Area */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-[12px] flex items-center justify-center text-ink-900 font-bold text-xl">
                З
              </div>

              <span className="text-[18px] font-bold">{BRAND.name}</span>
            </div>
            <div className="space-y-1">
              <p className="text-[13px] text-muted leading-relaxed opacity-70">
                Поддержка отвечает по будням с 10:00 до 19:00 по МСК
              </p>
              <p className="text-[13px] text-muted opacity-70">
                support@——
              </p>

            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="text-[14px] font-bold">{column.title}</h4>
              <ul className="flex flex-col gap-[10px]">
                {column.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-[14px] text-muted opacity-70 hover:text-surface transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-8 pt-8 border-t border-ink-950 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

          <p className="text-[13px] text-muted opacity-60">
            © 2026 · Реквизиты появятся после регистрации юрлица
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-[13px] text-muted opacity-60 hover:text-surface transition-colors">
              Политика обработки персональных данных
            </a>
            <a href="#" className="text-[13px] text-muted opacity-60 hover:text-surface transition-colors">
              Пользовательское соглашение
            </a>
          </div>

        </div>
      </div>
    </Section>
  );
};
