import { useState } from "react";
import { topicDrill } from "@/data/topic";

export function TopicDrill() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [done, setDone] = useState(false);

  const item = topicDrill[index]!;

  return (
    <div className="mt-8">
      <h2 className="font-display text-[20px] font-extrabold text-navy-900">
        Тренировка перед экзаменом
      </h2>
      <p className="mt-1 text-[14px] text-muted">
        Пять вопросов по теме — ответь про себя и проверь
      </p>

      <div className="mt-4 min-h-[200px] rounded-[16px] border border-[#E6E9EC] bg-white p-6">
        <p className="text-[13px] text-muted">Вопрос {index + 1} из {topicDrill.length}</p>
        <p className="mt-3 text-[18px] text-navy-900">{item.q}</p>

        {!shown && !done && (
          <button
            type="button"
            onClick={() => setShown(true)}
            className="mt-5 h-10 rounded-full border border-navy-900 px-5 text-[14px] font-bold text-navy-900"
          >
            Показать ответ
          </button>
        )}

        {shown && (
          <>
            <p className="mt-5 rounded-[10px] bg-[#EAEEF2] p-[14px] text-[15px] text-muted">
              {item.a}
            </p>
            {index < topicDrill.length - 1 ? (
              <button
                type="button"
                onClick={() => {
                  setIndex(index + 1);
                  setShown(false);
                }}
                className="mt-4 h-10 rounded-full bg-orange-500 px-5 text-[14px] font-bold text-navy-900"
              >
                Следующий вопрос
              </button>
            ) : (
              <div className="mt-4">
                <p className="text-[15px] text-navy-900">Все вопросы пройдены</p>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(0);
                    setShown(false);
                    setDone(false);
                  }}
                  className="mt-3 h-10 rounded-full border border-[#E6E9EC] px-5 text-[14px] font-bold text-navy-900"
                >
                  Пройти заново
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
