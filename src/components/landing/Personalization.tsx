import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { copy } from "@/data/content";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Shape from "@/components/decor/Shape";
import student1 from "@/assets/student-1.jpg.asset.json";
import student2 from "@/assets/student-2.jpg.asset.json";
import student3 from "@/assets/student-3.jpg.asset.json";

const IMAGES = [
  student1.url,
  student2.url,
  student3.url
];

export function Personalization() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <Section className="px-6 md:px-0">
      <div className="rounded-[32px] bg-white p-[40px] border border-[#E6E9EC]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[40px] items-center min-[901px]:grid-cols-2">
          {/* Left Column: Card Stacking Slider */}
          <div className="relative aspect-[3/2] md:aspect-[4/5] flex items-center justify-center">
            {/* The persistent yellow/orange base */}
            <Shape 
              kind="square" 
              className="bg-orange-500" 
              style={{ 
                width: "100%", 
                height: "100%", 
                bottom: -12, 
                left: -12,
                ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? { bottom: -24, left: -24 } : {})
              }} 
            />
            
            <div className="relative z-10 w-full h-full perspective-1000">
              {IMAGES.map((src, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % IMAGES.length;
                const isPrev = index === (currentIndex - 1 + IMAGES.length) % IMAGES.length;
                
                let transform = "scale(0.8) opacity-0 translate-y-4";
                let zIndex = 0;
                
                if (isActive) {
                  transform = "scale(1) opacity-100 translate-y-0 rotate-[-1deg] md:rotate-[-2deg]";
                  zIndex = 30;
                } else if (isNext) {
                  transform = "scale(0.95) opacity-100 translate-y-2 rotate-[1deg]";
                  zIndex = 20;
                } else if (isPrev) {
                  transform = "scale(0.9) opacity-100 translate-y-4 rotate-[2deg]";
                  zIndex = 10;
                }

                return (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${transform}`}
                    style={{ zIndex }}
                  >
                    <img 
                      src={src} 
                      alt={`Workspace ${index + 1}`}
                      className="h-full w-full object-cover rounded-[24px] shadow-lg"
                    />
                  </div>
                );
              })}
              
              {/* Controls */}
              <div className="absolute -bottom-6 right-0 z-40 flex gap-2">
                <button 
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#E6E9EC] text-navy-900 shadow-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#E6E9EC] text-navy-900 shadow-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <SectionTitle className="text-left">
              {copy.personalization.h2}
            </SectionTitle>
            <p className="mt-[24px] md:mt-[32px] max-w-[480px] text-[16px] text-muted">
              {copy.personalization.text}
            </p>

            <Link
              to="/app"
              className="mt-8 flex h-[52px] w-fit items-center justify-center gap-2 rounded-full border border-navy-900 bg-transparent px-[28px] text-[16px] font-medium text-navy-900 transition-colors hover:bg-bg"
            >
              Попробовать
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
