import { useEffect, useState, useRef } from "react";
import { copy, steps } from "@/data/content";
import { Section } from "@/components/layout/Section";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [progress, setProgress] = useState(0);
  const STEP_DURATION = 4000;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const startTime = Date.now();
    
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - (isPaused ? 0 : 0); // Logic will handle pause elsewhere
      // Actually simpler: just use a step-based interval and a separate animation state?
      // No, for a progress bar we need frequent updates.
    }, 16);
  };

  // Improved timer logic
  useEffect(() => {
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
  }, [isPaused, activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <Section id="how" className="px-6 md:px-0">
      <h2 className="text-center text-[28px] md:text-[40px] font-display">{copy.how.h2}</h2>

      <div 
        className="mt-[24px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={step.n}
              onClick={() => handleStepClick(i)}
              className={`relative flex cursor-pointer flex-col overflow-hidden rounded-[24px] p-6 transition-all duration-250 ${
                isActive ? "bg-navy-900 text-white" : "bg-bg text-navy-900"
              }`}
            >
              {isActive && (
                <div 
                  className="absolute top-0 left-0 h-[3px] bg-orange-500 transition-none" 
                  style={{ width: `${progress}%` }}
                />
              )}
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-[8px] text-[14px] font-bold transition-all duration-250 ${
                  isActive ? "bg-orange-500 text-navy-900" : "bg-[#EFEAE1] text-navy-900"
                }`}
              >
                {step.n}
              </span>
              <h3 className={`mt-4 text-[18px] font-display transition-all duration-250 ${isActive ? "text-white" : "text-navy-900"}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-[14px] transition-all duration-250 ${isActive ? "text-teal-200" : "text-muted"}`}>
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
