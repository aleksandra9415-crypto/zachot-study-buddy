import { Star } from "lucide-react";
import { DEMO_DATA, demoReviews } from "@/data/demo";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Marker from "@/components/decor/Marker";
import avatarAnya from "@/assets/avatar-anya.jpg";
import avatarTimur from "@/assets/avatar-timur.jpg";
import avatarLiza from "@/assets/avatar-liza.jpg";
import avatarMark from "@/assets/avatar-mark.jpg";
import avatarDasha from "@/assets/avatar-dasha.jpg";
import avatarIgor from "@/assets/avatar-igor.jpg";

const avatars = [avatarAnya, avatarTimur, avatarLiza, avatarMark, avatarDasha, avatarIgor];

export const Reviews = () => {
  if (!DEMO_DATA) return null;

  return (
    <Section className="px-6 md:px-0">
      <SectionTitle>
        <Marker className="text-orange-500">Что говорят</Marker> студенты
      </SectionTitle>
      
      <div className="mt-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {demoReviews.map((review, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-[16px] md:rounded-[24px] p-6 flex flex-col gap-6 shadow-sm border border-[#E6E9EC] ${idx === 1 ? 'md:rotate-[1.5deg] md:z-10' : ''}`}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.stars ? 'text-orange-500 fill-orange-500' : 'text-[#E6E9EC]'}`} 
                />
              ))}
            </div>
            
            <p className="text-sm text-navy-900 leading-relaxed min-h-[4.5rem]">
              {review.text}
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={avatars[idx % avatars.length]}
                alt={`Фото ${review.name}`}
                loading="lazy"
                width={512}
                height={512}
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
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
