import { useEffect, useState } from "react";
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
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-orange-500 text-[18px] font-bold text-white">
            З
          </span>
          <span className="text-[18px] font-bold tracking-[-0.02em] text-navy-900">
            {BRAND.name}
          </span>
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
          className="inline-flex h-[52px] items-center rounded-full bg-navy-900 px-7 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {copy.ctaPrimary}
        </a>
      </div>
    </header>
  );
}
