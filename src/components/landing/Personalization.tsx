import { ArrowRight, Play } from "lucide-react";
import { copy } from "@/data/content";

export function Personalization() {
  return (
    <section className="container-page">
      <div className="rounded-[32px] bg-white p-6 md:p-12">
        <div className="flex justify-center">
          <div className="relative flex h-[400px] w-[280px] items-center justify-center rounded-[24px] bg-teal-200">
            <button
              type="button"
              aria-label="Смотреть видео"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-900"
            >
              <Play className="h-5 w-5" />
            </button>
          </div>
        </div>

        <h2 className="mt-10 text-center text-[28px] md:text-[40px]">
          {copy.personalization.h2}
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] text-muted">
          {copy.personalization.text}
        </p>

        <button
          type="button"
          className="mt-8 flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-navy-900 bg-transparent px-7 text-[16px] font-medium text-navy-900 transition-colors hover:bg-bg"
        >
          {copy.personalization.cta}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
