import { createFileRoute, Outlet, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.svg";
import { BRAND } from "@/config/brand";
import { AppSidebar } from "@/components/app/AppSidebar";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: `Личный кабинет — ${BRAND.name}` },
      { name: "description", content: "Рабочее пространство Зачёта: тексты, задачи, презентации и разбор тем." },
      { property: "og:title", content: `Личный кабинет — ${BRAND.name}` },
      { property: "og:description", content: "Рабочее пространство Зачёта: тексты, задачи, презентации и разбор тем." },
    ],
  }),
  component: AppLayout,
});

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen min-[900px]:block">
        <AppSidebar />
      </aside>

      {/* Mobile top bar */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between bg-navy-900 px-4 min-[900px]:hidden">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt={BRAND.name} className="h-7 w-auto brightness-0 invert" />
        </Link>
        <button type="button" aria-label="Меню" onClick={() => setOpen(true)} className="text-white">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 min-[900px]:hidden">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(11, 40, 49, 0.5)" }}
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full">
            <AppSidebar onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}

      <main className="px-4 pb-8 pt-[calc(56px+32px)] min-[900px]:pl-[calc(260px+40px)] min-[900px]:pr-10 min-[900px]:py-8">
        <div className="max-w-[1040px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
