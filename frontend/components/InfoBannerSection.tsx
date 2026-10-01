"use client";

import ImpactCard from "@/components/ImpactCard";

interface ImpactItem {
  value?: string;
  label?: string;
  icon?: Record<string, unknown>;
}

interface InfoBannerProps {
  data?: {
    impactTitle?: string;
    impactItems?: ImpactItem[];
  };
}

export default function InfoBannerSection({ data }: InfoBannerProps) {
  const defaultItems: ImpactItem[] = [
    { value: "3,927 kg", label: "of CO2 saved" },
    { value: "2,546,167 days", label: "of drinking water saved" },
    { value: "7,321 kWh", label: "of energy saved" },
  ];

  const items = data?.impactItems?.length ? data.impactItems : defaultItems;

  return (
    <section className="w-full bg-[#F0EEEF] pt-9 pb-8 px-7">
      <div className="max-w-[700px] mx-auto flex flex-col items-center">
        <h3 className="text-[25px] font-normal text-[#01005B] mb-4 tracking-wide text-center">
          {data?.impactTitle || "Our total green impact"}
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 relative">
          {items.map((item: ImpactItem, index: number) => (
            <ImpactCard
              key={index}
              item={item}
              index={index}
              isLastOnMobile={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}