import { useState } from "react";
import {
  Calculator,
  Download,
  FileText,
  Lightbulb,
  Presentation,
  Search,
  SearchX,
  Trash2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { historyFilters, historyMock } from "@/data/history";

const icons = {
  text: FileText,
  task: Calculator,
  deck: Presentation,
  topic: Lightbulb,
} as const;

export function HistoryList() {
  const [items, setItems] = useState(historyMock);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [notice, setNotice] = useState<string | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);

  const visible = items.filter((item) => {
    const byFilter = filter === "all" || item.kind === filter;
    const byQuery = item.title.toLowerCase().includes(query.trim().toLowerCase());
    return byFilter && byQuery;
  });

  const showDownloadNotice = (id: string) => {
    setNotice(id);
    setTimeout(() => setNotice((current) => (current === id ? null : current)), 3000);
  };

  const reset = () => {
    setQuery("");
    setFilter("all");
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-[28px] font-extrabold text-navy-900">Мои задания</h1>
        <span className="text-[14px] whitespace-nowrap text-muted">{visible.length} работ</span>
      </div>

      <div className="relative mt-5">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Найти по названию"
          className="h-11 w-full rounded-[12px] border border-[#E6E9EC] bg-white pr-4 pl-11 text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {historyFilters.map((item) => {
          const on = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={[
                "h-[34px] rounded-full px-4 text-[13px] transition",
                on
                  ? "bg-navy-900 text-white"
                  : "border border-[#E6E9EC] text-navy-900 hover:border-navy-900",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <div className="mt-10 flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAEEF2]">
            <SearchX className="h-7 w-7 text-muted" />
          </span>
          <p className="mt-4 text-[16px] text-navy-900">Здесь появятся твои работы</p>
          <Link
            to="/app"
            className="mt-4 flex h-10 items-center rounded-full bg-orange-500 px-5 text-[14px] font-bold text-navy-900"
          >
            Создать работу
          </Link>
        </div>
      ) : visible.length === 0 ? (
        <div className="mt-10 flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAEEF2]">
            <SearchX className="h-7 w-7 text-muted" />
          </span>
          <p className="mt-4 text-[16px] text-navy-900">Ничего не нашлось</p>
          <p className="mt-1 text-[14px] text-muted">Попробуй другой запрос или сбрось фильтр</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 h-10 rounded-full border border-[#E6E9EC] px-5 text-[14px] font-bold text-navy-900"
          >
            Сбросить
          </button>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-[10px]">
          {visible.map((item) => {
            const Icon = icons[item.kind as keyof typeof icons] ?? FileText;
            const metaLine = [item.subject, item.meta, item.date].filter(Boolean).join(" · ");
            return (
              <div key={item.id}>
                <div className="group flex items-center gap-4 rounded-[14px] border border-[#E6E9EC] bg-white px-5 py-4 transition hover:border-teal-500 max-[899px]:flex-wrap">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-teal-200">
                    <Icon className="h-[18px] w-[18px] text-navy-900" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] text-navy-900">{item.title}</p>
                    <p className="mt-1 truncate text-[13px] text-muted">{metaLine}</p>
                  </div>

                  <div className="flex items-center gap-4 max-[899px]:w-full max-[899px]:justify-between">
                    <span
                      className={[
                        "rounded-full px-[10px] py-[3px] text-[12px] text-navy-900",
                        item.status === "done" ? "bg-teal-200" : "bg-orange-100",
                      ].join(" ")}
                    >
                      {item.status === "done" ? "Готово" : "Черновик"}
                    </span>

                    <div className="flex items-center gap-3 opacity-0 transition group-hover:opacity-100 max-[899px]:opacity-100">
                      <button
                        type="button"
                        aria-label="Скачать"
                        onClick={() => showDownloadNotice(item.id)}
                      >
                        <Download className="h-[18px] w-[18px] text-muted transition hover:text-navy-900" />
                      </button>
                      <button
                        type="button"
                        aria-label="Удалить"
                        onClick={() => setToDelete(item.id)}
                      >
                        <Trash2 className="h-[18px] w-[18px] text-muted transition hover:text-navy-900" />
                      </button>
                    </div>
                  </div>
                </div>

                {notice === item.id && (
                  <p className="mt-2 rounded-[8px] bg-[#EAEEF2] p-[10px] text-[13px] text-muted">
                    Демо-версия: файл пока не формируется
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {toDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(11, 40, 49, 0.6)" }}
        >
          <div className="w-[400px] rounded-[16px] bg-white p-6 max-[899px]:w-[calc(100%-32px)]">
            <p className="text-[18px] font-bold text-navy-900">Удалить работу?</p>
            <p className="mt-1 text-[14px] text-muted">Восстановить не получится</p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setToDelete(null)}
                className="h-11 flex-1 rounded-full border border-[#E6E9EC] text-[14px] font-bold text-navy-900"
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={() => {
                  setItems((prev) => prev.filter((row) => row.id !== toDelete));
                  setToDelete(null);
                }}
                className="h-11 flex-1 rounded-full bg-pink-500 text-[14px] font-bold text-navy-900"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
