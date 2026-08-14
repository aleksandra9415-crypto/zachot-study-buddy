import { Section } from "@/components/layout/Section";
import { FileCheck, ListOrdered, SlidersHorizontal, Wallet } from "lucide-react";

export const AboutService = () => {
  return (
    <Section className="bg-paper">
      <div className="bg-surface relative overflow-hidden rounded-[24px] p-[40px] max-w-full">
        {/* Notebook Margins and Ruling */}
        <div className="absolute left-[32px] top-0 bottom-0 w-[1px] bg-pink-500 z-10" />
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, #F0EBE1 1px, transparent 1px)',
            backgroundSize: '100% 32px'
          }}
        />

        <div className="relative z-20 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[40px] items-start min-[901px]:grid-cols-[1.4fr_1fr]">
          {/* Left Column: Text */}
          <div className="text-[15px] text-ink-900 leading-[1.7] space-y-6 max-w-[640px] pl-10">
            <h2 className="text-[32px] font-heading font-extrabold text-ink-900 text-left mb-[24px] md:mb-[32px]">
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
          <div className="bg-teal-100 rounded-[24px] p-[24px]">
            <h3 className="text-[15px] font-heading font-extrabold text-ink-900 mb-5">
              Чем отличается от чат-бота
            </h3>

            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Понимает формат учебных работ: структура, объём, оформление
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <ListOrdered className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Показывает ход решения, а не только ответ
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <SlidersHorizontal className="w-5 h-5 text-amber-500" />
                </div>
                <span className="text-[14px] text-ink-900 leading-snug">
                  Собирает работу по шагам, каждый можно поправить
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-[12px] flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-amber-500" />
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
