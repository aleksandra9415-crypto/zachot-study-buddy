import { topicExamples, topicLevels } from "@/data/topic";

type Props = {
  topic: string;
  onTopic: (value: string) => void;
  level: string;
  onLevel: (value: string) => void;
  onStart: () => void;
};

export function TopicStart({ topic, onTopic, level, onLevel, onStart }: Props) {
  return (
    <div>
      <h1 className="font-display text-[28px] font-extrabold text-navy-900">Разберём тему</h1>
      <p className="mt-1 text-[14px] text-muted">
        Составим программу под то, сколько у тебя времени
      </p>

      <textarea
        rows={2}
        value={topic}
        onChange={(e) => onTopic(e.target.value)}
        placeholder="Например: Инфляция: причины и виды"
        className="mt-6 w-full resize-none rounded-[12px] border border-[#E6E9EC] p-[14px] text-[15px] text-navy-900 outline-none placeholder:text-muted focus:border-teal-500"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {topicExamples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => onTopic(example)}
            className="h-[34px] rounded-full border border-[#E6E9EC] px-4 text-[13px] text-navy-900 transition hover:border-navy-900"
          >
            {example}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 max-[899px]:grid-cols-1">
        {topicLevels.map((item) => {
          const on = level === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onLevel(item.id)}
              className={[
                "rounded-[14px] p-4 text-left transition",
                on
                  ? "border-2 border-orange-500 bg-orange-100"
                  : "border border-[#E6E9EC] bg-white hover:border-navy-900",
              ].join(" ")}
            >
              <span className="block text-[15px] font-bold text-navy-900">{item.label}</span>
              <span className="mt-1 block text-[13px] text-muted">{item.hint}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!topic.trim()}
        onClick={onStart}
        className="mt-6 h-[52px] w-full rounded-full bg-orange-500 text-[15px] font-bold text-navy-900 transition disabled:cursor-not-allowed disabled:opacity-40"
      >
        Составить программу
      </button>
    </div>
  );
}
