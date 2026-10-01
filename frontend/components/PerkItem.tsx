import { urlFor } from "@/app/lib/sanityClient";

interface Perk {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface PerkItemProps {
  perk: Perk;
  index: number;
}

export default function PerkItem({ perk, index }: PerkItemProps) {
  const iconUrl = perk.icon ? urlFor(perk.icon).url() : null;

  return (
    <div className="flex items-start gap-3 relative">
      {index < 2 && (
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-[1px] h-[51px] bg-[#C4C4C4]/40" />
      )}
      {iconUrl && (
        <div className="w-[33px] h-[33px] flex-shrink-0 flex items-center justify-center bg-[#6666661A] rounded-full">
          <img
            src={iconUrl}
            alt={perk.title || "Perk icon"}
            className="w-5 h-5 object-contain grayscale opacity-70"
          />
        </div>
      )}
      <div>
        <h4 className="text-xs font-semibold text-[#01005B] mb-1">
          {perk.title}
        </h4>
        <p className="text-[14px] leading-[20px] text-[#676869]">
          {perk.description}
        </p>
      </div>
    </div>
  );
}