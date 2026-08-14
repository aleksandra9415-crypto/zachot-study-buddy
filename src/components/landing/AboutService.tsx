import { Section } from "@/components/layout/Section";
import { FileCheck, ListOrdered, SlidersHorizontal, Wallet } from "lucide-react";

export const AboutService = () => {
  return (
    <Section className="px-6 md:px-0">
      <div className="bg-surface rounded-[32px] p-[40px] max-w-full border border-line shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[40px] items-start">
          {/* Left Column: Text */}
          <div className="text-[16px] text-muted leading-[1.7] space-y-6">
            <h2 className="text-[28px] md:text-[40px] font-nunito font-extrabold text-ink-900 tracking-[-0.01em] text-left mb-[24px] md:mb-[32px]">
              Что такое Зачёт и чем он помогает
            </h2>
            
            <p>
              Зачёт — образовательный сервис, который помогает студентам вузов и ссузов справляться с учебной нагрузкой: писать текстовые работы, решать задачи, готовить презентации и разбираться в темах перед экзаменом.
            </p>
            
            <p>
              Главная идея простая: рутину забирает на себя AI, а понимание остаётся за тобой. Поэтому в сервисе есть не только режим готового результата, но и режим пошагового разбора — когда важнее не сдать, а разобраться.
            </p>
            
            <p>
              Сервис подходит студентам очной и заочной формы, а также старшеклассникам, которым нужно разобраться в теме самостоятельно.
            </p>
          </div>

          {/* Right Column: Comparison Card */}
          <div className="bg-line/30 rounded-[32px] p-8 border border-line">
            <h3 className="text-[20px] font-nunito font-extrabold text-ink-900 mb-6">
              В чём разница
            </h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Понимает формат учебных работ: структура, объём, оформление
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <ListOrdered className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Показывает ход решения, а не только ответ
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Собирает работу по шагам, каждый можно поправить
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Работает из России и принимает оплату рублями
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
