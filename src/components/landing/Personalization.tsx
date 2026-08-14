import { ArrowRight } from "lucide-react";
import { copy } from "@/data/content";
const deskImg = "data:image/svg+xml,%3Csvg width='280' height='400' viewBox='0 0 280 400' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='280' height='400' fill='%23F1F4F6'/%3E%3Crect x='40' y='150' width='200' height='120' rx='4' fill='%23132A3F'/%3E%3Crect x='60' y='170' width='160' height='80' rx='2' fill='%231E3D57'/%3E%3Crect x='80' y='100' width='40' height='60' rx='2' fill='%2356AFB1'/%3E%3Ccircle cx='200' cy='120' r='15' fill='%23FC6116'/%3E%3C/svg%3E";

export function Personalization() {
  return (
    <section className="container-page">
      <div className="rounded-[32px] bg-white p-6 md:p-12">
        <div className="flex justify-center">
          <div className="relative h-[400px] w-[280px] overflow-hidden rounded-[24px]">
            <img
              src={deskImg}
              alt="Иллюстрация: рабочий стол студента"
              className="h-full w-full object-cover"
            />
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
