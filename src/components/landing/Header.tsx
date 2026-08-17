import { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { BRAND } from "@/config/brand";
import { nav, copy } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(6,33,50,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex h-[72px] items-center justify-between gap-4">
        <a href="#" className="flex items-center" aria-label={BRAND.name}>
          <img src={logo} alt={BRAND.name} className="h-8 w-auto md:h-10" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[16px] text-muted transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex h-[44px] md:h-[52px] items-center rounded-full bg-navy-900 px-[18px] md:px-7 text-[14px] md:text-[16px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {copy.ctaPrimary}
        </a>
      </div>
    </header>
  );
}
