import { useEffect, useState } from "react";
import { copy, steps } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Marker from "@/components/decor/Marker";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const STEP_DURATION = 4000;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setProgress(0);
      return;
    }

    let interval: ReturnType<typeof setInterval>;
    
    if (!isPaused) {
      const startTime = Date.now() - (progress / 100) * STEP_DURATION;
      interval = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const newProgress = (elapsed / STEP_DURATION) * 100;
        
        if (newProgress >= 100) {
          setProgress(0);
          setActiveStep((prev) => (prev + 1) % steps.length);
        } else {
          setProgress(newProgress);
        }
      }, 16);
    }
    
    return () => clearInterval(interval);
  }, [isPaused, activeStep, isMobile]);

  const handleStepClick = (index: number) => {
    if (isMobile) return;
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <Section id="how" className="px-6 md:px-0">
      <SectionTitle>Ты <Marker className="text-orange-500">ведёшь</Marker> процесс</SectionTitle>

      <div 
        className="mt-[24px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        {steps.map((step, i) => {
          const isActive = !isMobile && activeStep === i;
          return (
            <div
              key={step.n}
              onClick={() => handleStepClick(i)}
              className={`relative flex flex-col overflow-hidden rounded-[20px] md:rounded-[24px] p-5 md:p-6 transition-all duration-250 ${
                isActive ? "bg-navy-900 text-white" : "bg-white border border-[#E6E9EC] text-navy-900"
              } ${isMobile ? "cursor-default" : "cursor-pointer"}`}
            >
              {isActive && (
                <div 
                  className="absolute top-0 left-0 h-[3px] bg-orange-500 transition-none hidden md:block" 
                  style={{ width: `${progress}%` }}
                />
              )}
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[14px] font-bold transition-all duration-250 ${
                  isActive ? "bg-orange-500 text-navy-900" : "bg-[#F4F6F7] md:bg-[#F4F6F7] text-navy-900"
                }`}
              >
                {step.n}
              </span>
              <h3 className={`mt-4 font-display transition-all duration-250 ${isActive ? "text-white" : "text-navy-900"}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-[15px] md:text-[14px] transition-all duration-250 ${isActive ? "text-teal-200" : "text-muted"}`}>
                {step.text}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-[32px] flex justify-center">
        <button
          type="button"
          className="inline-flex h-[52px] items-center justify-center rounded-full bg-orange-500 px-10 text-[16px] font-bold text-navy-900 transition-opacity hover:opacity-90"
        >
          Начать бесплатно
        </button>
      </div>
    </Section>
  );
}
