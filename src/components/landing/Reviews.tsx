import { Star } from "lucide-react";
import { DEMO_DATA, demoReviews } from "@/data/demo";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Reviews = () => {
  if (!DEMO_DATA) return null;

  return (
    <Section className="px-6 md:px-0">
      <SectionTitle>
        Что говорят студенты
      </SectionTitle>
      
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {demoReviews.map((review, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-[16px] md:rounded-[24px] p-6 flex flex-col gap-6 shadow-sm border border-orange-50/50 ${idx === 1 ? 'md:rotate-[1.5deg] md:z-10' : ''}`}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.stars ? 'text-pink-500 fill-pink-500' : 'text-[#E8E2D8]'}`} 
                />
              ))}
            </div>
            
            <p className="text-sm text-navy-900 leading-relaxed min-h-[4.5rem]">
              {review.text}
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-navy-900 font-bold text-sm shrink-0">
                {review.name[0]}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-navy-950">{review.name}</span>
                <span className="text-xs text-muted">
                  {review.place} • {review.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
