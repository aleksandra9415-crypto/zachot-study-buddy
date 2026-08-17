import { Link, useRouterState } from "@tanstack/react-router";
import {
  FileText,
  Calculator,
  Presentation,
  Lightbulb,
  ListChecks,
  Gift,
  User,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { BRAND } from "@/config/brand";
import { appNav, appNavSecondary } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  FileText,
  Calculator,
  Presentation,
  Lightbulb,
  ListChecks,
  Gift,
  User,
  CreditCard,
};

function NavItem({
  item,
  onNavigate,
}: {
  item: { id: string; label: string; to: string; icon: string };
  onNavigate?: (() => void) | undefined;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === item.to;
  const Icon = icons[item.icon] ?? FileText;

  return (
    <Link
      to={item.to as "/app"}
      onClick={onNavigate}
      className={`group flex h-11 items-center gap-3 rounded-[10px] px-3 text-[15px] transition-colors ${
        active ? "bg-navy-700 text-white" : "text-[#8FA6AA] hover:bg-navy-700 hover:text-white"
      }`}
    >
      <Icon
        className={`h-[18px] w-[18px] shrink-0 ${
          active ? "text-orange-500" : "text-[#8FA6AA] group-hover:text-white"
        }`}
      />
      <span>{item.label}</span>
    </Link>
  );
}

export function AppSidebar({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full w-[260px] flex-col bg-navy-900 p-5">
      <Link to="/" onClick={onNavigate} className="block cursor-pointer">
        <img src={logo} alt={BRAND.name} className="h-9 w-auto brightness-0 invert" />
      </Link>

      <nav className="mt-8 flex flex-col gap-1">
        {appNav.map((item) => (
          <NavItem key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="my-5 h-px bg-navy-700" />

      <nav className="flex flex-col gap-1">
        {appNavSecondary.map((item) => (
          <NavItem key={item.id} item={item} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="mt-auto rounded-[16px] bg-orange-500 p-4">
        <p className="text-[14px] font-bold text-navy-900">Осталось 2 бесплатные работы</p>
        <p className="mt-1 text-[12px] text-navy-900">Дальше — по подписке</p>
        <Link
          to="/app/subscription"
          onClick={onNavigate}
          className="mt-3 flex h-9 w-full items-center justify-center rounded-[10px] bg-navy-900 text-[13px] text-white"
        >
          Подключить
        </Link>
      </div>
    </div>
  );
}
