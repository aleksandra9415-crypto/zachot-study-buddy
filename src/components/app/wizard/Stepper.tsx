import { Check } from "lucide-react";
import { wizardSteps } from "@/data/wizard";

type Props = {
  current: number;
  onGo: (step: number) => void;
  steps?: string[];
};

export function Stepper({ current, onGo, steps }: Props) {
  const labels = steps ?? wizardSteps;
  return (
    <div className="mt-6 flex items-start">
      {labels.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                disabled={i > current}
                onClick={() => onGo(i)}
                className={[
                  "flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-semibold transition max-[899px]:h-7 max-[899px]:w-7",
                  done ? "bg-teal-500 text-white" : "",
                  active ? "bg-orange-500 text-navy-900" : "",
                  !done && !active ? "bg-[#EAEEF2] text-muted" : "",
                  i > current ? "cursor-default" : "cursor-pointer",
                ].join(" ")}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
              </button>
              <span
                className={[
                  "text-[13px] max-[899px]:hidden",
                  active ? "font-bold text-navy-900" : "text-muted",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div
                className={[
                  "mt-4 h-[2px] flex-1 max-[899px]:mt-[14px] max-[899px]:max-w-[48px]",
                  i < current ? "bg-teal-500" : "bg-[#EAEEF2]",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
