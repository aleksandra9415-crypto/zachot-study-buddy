import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { generationStages } from "@/data/wizard";

export function GeneratingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(100));
    const timers = generationStages.map((_, i) =>
      setTimeout(() => setDone(i + 1), (i + 1) * 600),
    );
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center rounded-[20px] border border-[#E6E9EC] bg-white p-10 text-center max-[899px]:p-6">
      <h2 className="font-display text-[22px] font-extrabold text-navy-900">Пишем работу</h2>
      <p className="mt-2 text-[14px] text-muted">Обычно занимает пару минут</p>

      <div className="mt-6 h-[6px] w-full max-w-[520px] overflow-hidden rounded-full bg-[#EAEEF2]">
        <div
          className="h-full rounded-full bg-orange-500 transition-[width] duration-[2500ms] ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="mt-6 flex flex-col gap-3 text-left">
        {generationStages.map((stage, i) => {
          const ready = i < done;
          return (
            <li key={stage} className="flex items-center gap-3">
              <span
                className={
                  ready
                    ? "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500"
                    : "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#E6E9EC]"
                }
              >
                {ready && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
              </span>
              <span className={ready ? "text-[14px] text-navy-900" : "text-[14px] text-muted"}>
                {stage}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
