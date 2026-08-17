import { useEffect, useState } from "react";
import { Presentation } from "lucide-react";
import { deckStages } from "@/data/presentation";

export function DeckGenerating() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(100));
    const t1 = setTimeout(() => setStage(1), 850);
    const t2 = setTimeout(() => setStage(2), 1700);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex h-[320px] flex-col items-center justify-center rounded-[20px] border border-[#E6E9EC] bg-white px-8 text-center max-[899px]:px-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
        <Presentation className="h-[26px] w-[26px] text-orange-500" />
      </div>
      <h2 className="mt-4 font-display text-[20px] font-extrabold text-navy-900">Собираем слайды</h2>
      <div className="mt-5 h-[6px] w-full max-w-[420px] overflow-hidden rounded-full bg-[#EAEEF2]">
        <div
          className="h-full rounded-full bg-orange-500 transition-[width] duration-[2500ms] ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-[14px] text-muted">{deckStages[stage]}</p>
    </div>
  );
}
