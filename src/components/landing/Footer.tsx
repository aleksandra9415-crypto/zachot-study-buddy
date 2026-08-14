import { Section } from "@/components/layout/Section";
import { BRAND } from "@/config/brand";
import { footerLinks } from "@/data/content";

export const Footer = () => {
  return (
    <Section className="px-6 md:px-0">
      <div className="gradient-dark rounded-[32px] p-[48px] w-full text-white">
        {/* Top Area */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-[12px] flex items-center justify-center text-ink-900 font-bold text-xl">
                {BRAND.name[0]}
              </div>
              <span className="text-[18px] font-nunito font-extrabold tracking-[-0.01em]">{BRAND.name}</span>
            </div>
            <div className="space-y-1">
              <p className="text-[13px] text-teal-100/60 leading-relaxed">
                Поддержка отвечает по будням с 10:00 до 19:00 по МСК
              </p>
              <p className="text-[13px] text-teal-100/60">
                support@——
              </p>
            </div>
          </div>

          {/* Nav Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="text-[14px] font-bold text-teal-100 uppercase tracking-wider">{column.title}</h4>
              <ul className="flex flex-col gap-[10px]">
                {column.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-[14px] text-teal-100/60 hover:text-white transition-colors"
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
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[13px] text-teal-100/40">
            © {new Date().getFullYear()} · {BRAND.name}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-[13px] text-teal-100/40 hover:text-white transition-colors">
              Политика обработки персональных данных
            </a>
            <a href="#" className="text-[13px] text-teal-100/40 hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
