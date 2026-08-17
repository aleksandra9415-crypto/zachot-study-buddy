import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import { Section } from "@/components/layout/Section";
import { BRAND } from "@/config/brand";
import { footerLinks } from "@/data/content";

export const Footer = () => {
  return (
    <Section className="bg-bg">
      <div className="bg-navy-900 rounded-[20px] md:rounded-[32px] p-6 md:p-[48px] w-full text-white">
        {/* Top Area */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
          {/* Brand Info */}
          <div className="space-y-6">
            <img
              src={logo}
              alt={BRAND.name}
              className="h-9 w-auto brightness-0 invert"
            />
            <div className="space-y-1">
              <p className="text-[13px] text-[#8FA6AA] leading-relaxed">
                Поддержка отвечает по будням с 10:00 до 19:00 по МСК
              </p>
              <p className="text-[13px] text-[#8FA6AA]">
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
                    {item === "Тарифы" ? (
                      <Link
                        to="/pricing"
                        className="text-[14px] text-[#8FA6AA] hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-[14px] text-[#8FA6AA] hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}

              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-8 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[13px] text-[#6A8189]">
            © 2026 · Реквизиты появятся после регистрации юрлица
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-[13px] text-[#6A8189] hover:text-white transition-colors">
              Политика обработки персональных данных
            </a>
            <a href="#" className="text-[13px] text-[#6A8189] hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
