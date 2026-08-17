import { useState } from "react";
import { Check, Download } from "lucide-react";

type Props = {
  workType: string;
  sectionsCount: number;
  onBackToText: () => void;
};

const formats = [".docx", ".pdf"];

export function StepDone({ workType, sectionsCount, onBackToText }: Props) {
  const [format, setFormat] = useState(".docx");
  const [options, setOptions] = useState({ title: true, gost: true, pages: true });
  const [titleData, setTitleData] = useState("");
  const [notice, setNotice] = useState(false);

  const metrics = [
    { label: "Тип работы", value: workType },
    { label: "Разделов", value: String(sectionsCount) },
    { label: "Знаков", value: "42 180" },
    { label: "Страниц", value: "24" },
  ];

  const checkboxes = [
    { key: "title" as const, label: "Титульный лист" },
    { key: "gost" as const, label: "Оформить по ГОСТу" },
    { key: "pages" as const, label: "Нумерация страниц" },
  ];

  return (
    <div>
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Работа готова</h2>

      <div className="mt-6 grid grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-6 max-[899px]:grid-cols-1">
        <div>
          <div className="aspect-[3/4] w-full rounded-[12px] border border-[#E6E9EC] bg-white p-5">
            <div className="flex flex-col items-center gap-2">
              <span className="h-2 w-3/5 rounded-full bg-[#EAEEF2]" />
              <span className="h-2 w-4/5 rounded-full bg-[#EAEEF2]" />
              <span className="h-2 w-2/5 rounded-full bg-[#EAEEF2]" />
            </div>
            <div className="mt-6 flex flex-col items-center gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="h-1.5 w-full rounded-full bg-[#EAEEF2]" />
              ))}
            </div>
          </div>
          <p className="mt-3 text-[13px] text-muted">Титульный лист и оформление по ГОСТу</p>
        </div>

        <div>
          <ul>
            {metrics.map((m, i) => (
              <li
                key={m.label}
                className={`flex items-center justify-between py-3 ${
                  i > 0 ? "border-t border-[#E6E9EC]" : ""
                }`}
              >
                <span className="text-[14px] text-muted">{m.label}</span>
                <span className="text-[14px] font-bold text-navy-900">{m.value}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[13px] font-bold text-muted">Формат</p>
          <div className="mt-2 flex gap-2">
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormat(f)}
                className={`h-11 rounded-full px-5 text-[14px] transition ${
                  format === f
                    ? "bg-navy-900 font-bold text-white"
                    : "border border-[#E6E9EC] text-navy-900 hover:bg-[#EAEEF2]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-bold text-muted">Оформление</p>
          <div className="mt-2 flex flex-col gap-2">
            {checkboxes.map((c) => (
              <label key={c.key} className="flex cursor-pointer items-center gap-3 text-[14px] text-navy-900">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-[6px] ${
                    options[c.key] ? "bg-teal-500" : "border border-[#E6E9EC]"
                  }`}
                >
                  {options[c.key] && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={options[c.key]}
                  onChange={() => setOptions((p) => ({ ...p, [c.key]: !p[c.key] }))}
                />
                {c.label}
              </label>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-bold text-muted">Данные для титульного листа</p>
          <input
            value={titleData}
            onChange={(e) => setTitleData(e.target.value)}
            placeholder="Фамилия И. О., группа, вуз"
            className="mt-2 h-12 w-full rounded-[12px] border border-[#E6E9EC] bg-white px-4 text-[14px] text-navy-900 outline-none placeholder:text-muted"
          />

          <button
            type="button"
            onClick={() => setNotice(true)}
            className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition hover:opacity-90"
          >
            <Download className="h-[18px] w-[18px]" />
            Скачать работу
          </button>

          {notice && (
            <p className="mt-3 rounded-[10px] bg-[#EAEEF2] p-3 text-[13px] text-muted">
              Демо-версия: файл пока не формируется. Экспорт появится после подключения генерации.
            </p>
          )}

          <p className="mt-4 text-[14px]">
            <button type="button" onClick={onBackToText} className="text-teal-500 underline">
              Вернуться к тексту
            </button>
            <span className="text-muted"> · Работа сохранена в Мои задания</span>
          </p>
        </div>
      </div>
    </div>
  );
}
