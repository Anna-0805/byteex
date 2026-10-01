"use client";

import Image from "next/image";
import { urlFor } from "@/app/lib/sanityClient";

interface ImpactItem {
  value?: string;
  label?: string;
  icon?: Record<string, unknown>;
}

interface ImpactCardProps {
  item: ImpactItem;
  index: number;
  isLastOnMobile: boolean;
}

export default function ImpactCard({ item, index, isLastOnMobile }: ImpactCardProps) {
  const hideOnMobile = isLastOnMobile ? "hidden md:flex" : "flex";

  return (
    <div
      className={`${hideOnMobile} flex-col items-center py-6 md:py-8 px-6 text-center relative`}
    >
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[122px] bg-[#C4C4C4]/50" />
      )}

      <div className="w-[42px] h-[42px] bg-[#E4E4E4] rounded-full flex items-center justify-center text-[#01005B] mb-4 shadow-sm overflow-hidden relative">
        {item.icon ? (
          <Image
            src={urlFor(item.icon).url()}
            alt={item.label || "icon"}
            width={24}
            height={24}
            className="object-contain w-6 h-6"
          />
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 15a4 4 0 004 4h10a4 4 0 001.5-7.7A5 5 0 0012 6a5 5 0 00-9 4.3A3.99 3.99 0 003 15z"
            />
          </svg>
        )}
      </div>

      <span className="text-[22px] font-semibold leading-[20px] tracking-[0.02em] text-[#15005B] mb-1">
        {item.value}
      </span>

      <span className="text-[14px] font-normal leading-[20px] tracking-[0.03em] text-[#2A2996]">
        {item.label}
      </span>

      <div className="w-full border-t border-[#C4C4C4]/50 mt-6 block md:hidden" />
    </div>
  );
}