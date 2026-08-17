import { Check, Minus } from "lucide-react";
import { demoPlans } from "@/data/demo";
import { planMatrix } from "@/data/pricing";

type Key = "start" | "active" | "max";

const keys: Key[] = ["start", "active", "max"];

function Value({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-[18px] w-[18px] text-teal-500" />;
  if (value === false) return <Minus className="mx-auto h-[18px] w-[18px] text-[#C4CDD3]" />;
  return <span className="text-[14px] text-navy-900">{value}</span>;
}

export function PlanMatrix() {
  const names = keys.map((k, i) => demoPlans[i]?.name ?? k);

  return (
    <>
      {/* Desktop table */}
      <div className="hidden rounded-[20px] border border-[#E6E9EC] bg-white p-2 min-[900px]:block">
        <div className="relative">
          {/* highlighted middle column */}
          <div className="pointer-events-none absolute inset-y-0 left-[56.52%] w-[21.74%] bg-[#EAEEF2]" />

          <div className="relative grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-[#E6E9EC]">
            <div className="h-[56px]" />
            {names.map((name) => (
              <div
                key={name}
                className="flex h-[56px] items-center justify-center text-center text-[15px] font-bold text-navy-900"
              >
                {name}
              </div>
            ))}
          </div>

          {planMatrix.map((row, i) => (
            <div
              key={row.feature}
              className={`group relative grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center ${
                i === planMatrix.length - 1 ? "" : "border-b border-[#E6E9EC]"
              }`}
            >
              <div className="absolute inset-0 hidden bg-[#EAEEF2] group-hover:block" />
              <div className="relative flex h-[56px] items-center pl-4 text-left text-[14px] text-navy-900">
                {row.feature}
              </div>
              {keys.map((k) => (
                <div key={k} className="relative flex h-[56px] items-center justify-center text-center">
                  <Value value={row[k]} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: one block per plan */}
      <div className="flex flex-col gap-4 min-[900px]:hidden">
        {keys.map((k, i) => (
          <div key={k} className="rounded-[20px] border border-[#E6E9EC] bg-white p-2">
            <div className="flex h-[56px] items-center border-b border-[#E6E9EC] pl-4 text-[15px] font-bold text-navy-900">
              {names[i]}
            </div>
            {planMatrix.map((row, j) => (
              <div
                key={row.feature}
                className={`grid grid-cols-2 items-center gap-3 px-4 py-3 ${
                  j === planMatrix.length - 1 ? "" : "border-b border-[#E6E9EC]"
                }`}
              >
                <span className="text-[14px] text-navy-900">{row.feature}</span>
                <span className="text-right">
                  {typeof row[k] === "boolean" ? (
                    row[k] === true ? (
                      <Check className="ml-auto h-[18px] w-[18px] text-teal-500" />
                    ) : (
                      <Minus className="ml-auto h-[18px] w-[18px] text-[#C4CDD3]" />
                    )
                  ) : (
                    <span className="text-[14px] text-navy-900">{row[k] as string}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
