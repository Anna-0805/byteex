import { urlFor } from "@/app/lib/sanityClient";

interface ComfortCardProps {
  feature: {
    title?: string;
    description?: string;
    icon?: Record<string, unknown>;
  };
  index: number;
  isMobile?: boolean;
}

export default function ComfortCard({ feature, index, isMobile = false }: ComfortCardProps) {
  const bgClass = index === 1 ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]";
  const sizeClass = isMobile ? "w-full aspect-square max-w-[321px]" : "h-[321px]";

  return (
    <div
      className={`flex flex-col justify-center items-center text-center p-8 rounded-[12px] ${bgClass} shadow-sm border border-stone-100 ${sizeClass}`}
    >
      <div className="w-[51px] h-[51px] flex items-center justify-center mb-6 text-[#01005B]">
        {feature.icon ? (
          <img
            src={urlFor(feature.icon).url()}
            alt={feature.title || "Feature Icon"}
            className="w-[51px] h-[51px] object-contain"
          />
        ) : (
          <svg
            className="w-[51px] h-[51px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </div>
      <h3 className="text-[22px] font-medium text-[#01005B] mb-3">
        {feature.title}
      </h3>
      <p className="text-[15px] text-[#676869] leading-relaxed max-w-[280px]">
        {feature.description}
      </p>
    </div>
  );
}