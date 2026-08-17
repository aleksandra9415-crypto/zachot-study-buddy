import { useState } from "react";

const demoAnswer =
  "Инфляция измеряется по изменению индекса цен за период. Для потребительских товаров берут ИПЦ, для экономики в целом — дефлятор ВВП. Если нужно сравнить периоды разной длины, темп приводят к годовому выражению.";

export function TopicAsk() {
  const [value, setValue] = useState("");
  const [asked, setAsked] = useState(false);

  return (
    <div className="mt-8">
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">Остались вопросы?</h2>

      <textarea
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Спроси что угодно по этой теме"
        className="mt-4 w-full resize-none rounded-[12px] border border-[#E6E9EC] p-[14px] text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
      />

      <div className="mt-3 flex justify-end max-[899px]:justify-stretch">
        <button
          type="button"
          onClick={() => setAsked(true)}
          className="h-11 rounded-full bg-navy-900 px-6 text-[14px] font-bold text-white max-[899px]:w-full"
        >
          Спросить
        </button>
      </div>

      {asked && (
        <div className="mt-4">
          <div className="rounded-[12px] bg-[#EAEEF2] p-4 text-[15px] text-navy-900">
            {demoAnswer}
          </div>
          <p className="mt-2 text-[12px] text-muted">Демо-ответ: чат по теме подключим позже</p>
        </div>
      )}
    </div>
  );
}
