import { useState } from "react";
import { Check } from "lucide-react";
import { memoryMock, profileMock, years } from "@/data/profile";

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] text-muted">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-12 w-full rounded-[12px] border border-[#E6E9EC] bg-white px-[14px] text-[15px] text-navy-900 outline-none focus:border-teal-500"
      />
    </label>
  );
}

function Toggle({
  on,
  onToggle,
  label,
}: {
  on: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button type="button" onClick={onToggle} className="flex items-center gap-3 text-left">
      <span
        className={[
          "flex h-[22px] w-10 shrink-0 items-center rounded-full px-[3px] transition",
          on ? "justify-end bg-teal-500" : "justify-start bg-[#EAEEF2]",
        ].join(" ")}
      >
        <span className="h-4 w-4 rounded-full bg-white" />
      </span>
      <span className="text-[14px] text-navy-900">{label}</span>
    </button>
  );
}

export function ProfileForm() {
  const [name, setName] = useState(profileMock.name);
  const [email, setEmail] = useState(profileMock.email);
  const [university, setUniversity] = useState(profileMock.university);
  const [faculty, setFaculty] = useState(profileMock.faculty);
  const [year, setYear] = useState(profileMock.year);
  const [formatting, setFormatting] = useState(memoryMock.formatting);
  const [style, setStyle] = useState(memoryMock.style);
  const [autoRefs, setAutoRefs] = useState(true);
  const [checkFormat, setCheckFormat] = useState(true);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Профиль</h1>

      <div className="mt-5 flex flex-col gap-4">
        <section className="rounded-[20px] border border-[#E6E9EC] bg-white p-6">
          <h2 className="text-[18px] font-bold text-navy-900">О тебе</h2>

          <div className="mt-4 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-[26px] font-bold text-navy-900">
              {name.trim().charAt(0) || "К"}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[18px] font-bold text-navy-900">{name}</p>
              <p className="truncate text-[14px] text-muted">{email}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 max-[899px]:grid-cols-1">
            <Field label="Имя и фамилия" value={name} onChange={setName} />
            <Field label="Электронная почта" value={email} onChange={setEmail} />
            <Field label="Вуз" value={university} onChange={setUniversity} />
            <Field label="Факультет или специальность" value={faculty} onChange={setFaculty} />
            <label className="block">
              <span className="block text-[13px] text-muted">Курс</span>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="mt-1 h-12 w-full rounded-[12px] border border-[#E6E9EC] bg-white px-[14px] text-[15px] text-navy-900 outline-none focus:border-teal-500"
              >
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-[20px] border border-[#E6E9EC] bg-white p-6">
          <h2 className="text-[18px] font-bold text-navy-900">Что Зачёт помнит</h2>
          <p className="mt-1 text-[14px] text-muted">
            Эти настройки применяются ко всем новым работам — не придётся повторять их каждый раз.
          </p>

          <label className="mt-5 block">
            <span className="block text-[13px] text-muted">Требования к оформлению</span>
            <textarea
              rows={3}
              value={formatting}
              onChange={(e) => setFormatting(e.target.value)}
              className="mt-1 w-full resize-none rounded-[12px] border border-[#E6E9EC] bg-white p-[14px] text-[15px] text-navy-900 outline-none focus:border-teal-500"
            />
          </label>

          <label className="mt-4 block">
            <span className="block text-[13px] text-muted">Как писать</span>
            <textarea
              rows={3}
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="mt-1 w-full resize-none rounded-[12px] border border-[#E6E9EC] bg-white p-[14px] text-[15px] text-navy-900 outline-none focus:border-teal-500"
            />
          </label>

          <div className="mt-4 flex flex-col gap-3">
            <Toggle
              on={autoRefs}
              onToggle={() => setAutoRefs(!autoRefs)}
              label="Добавлять список литературы автоматически"
            />
            <Toggle
              on={checkFormat}
              onToggle={() => setCheckFormat(!checkFormat)}
              label="Проверять оформление перед выгрузкой"
            />
          </div>
        </section>

        <section className="rounded-[20px] border border-[#E6E9EC] bg-white p-6">
          <h2 className="text-[18px] font-bold text-navy-900">Данные</h2>
          <p className="mt-2 text-[14px] text-navy-900">
            Твои темы, тексты и файлы не передаются вузам и преподавателям. Историю работ видишь
            только ты.
          </p>
          <div className="mt-4 flex flex-wrap gap-5">
            <a href="#" className="text-[14px] text-teal-500">
              Политика обработки данных
            </a>
            <a href="#" className="text-[14px] text-teal-500">
              Пользовательское соглашение
            </a>
          </div>
        </section>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={save}
          className="h-12 rounded-full bg-orange-500 px-6 text-[15px] font-bold text-navy-900"
        >
          Сохранить изменения
        </button>
        {saved && (
          <span className="flex items-center gap-2 text-[14px] text-muted">
            <Check className="h-4 w-4 text-teal-500" />
            Сохранено локально — данные не переживут перезагрузку страницы
          </span>
        )}
      </div>
    </div>
  );
}
