import { Star } from "lucide-react";
import { DEMO_DATA, demoReviews } from "@/data/demo";

export const Reviews = () => {
  if (!DEMO_DATA) return null;

  return (
    <section className="container-1200 px-4 md:px-0 py-12 md:py-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-navy-950">
        Что говорят студенты
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {demoReviews.map((review, idx) => (
          <div key={idx} className="bg-white rounded-[24px] p-6 flex flex-col gap-6 shadow-sm border border-orange-50/50">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.stars ? 'text-orange-500 fill-orange-500' : 'text-[#E3E8EC]'}`} 
                />
              ))}
            </div>
            
            <p className="text-sm text-navy-900 leading-relaxed min-h-[4.5rem]">
              {review.text}
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0">
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
    </section>
  );
};
