"use client";

import { useState } from "react";
import { urlFor } from "@/app/lib/sanityClient";

interface AsSeenInLogosProps {
  asSeenIn?: Record<string, unknown>[];
}

export default function AsSeenInLogos({ asSeenIn = [] }: AsSeenInLogosProps) {
  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);

  if (!asSeenIn || asSeenIn.length === 0) return null;


  const chunkedLogos: Record<string, unknown>[][] = [];
  for (let i = 0; i < asSeenIn.length; i += 2) {
    chunkedLogos.push(asSeenIn.slice(i, i + 3));
  }

  return (
    <div className="w-full max-w-[1300px] mx-auto pb-12 flex flex-col items-center px-6 md:px-[104px]">
      <span className="text-[20px] tracking-[0.15em] text-[#868787] mt-4 md:mt-6 mb-2">
        as seen in
      </span>

  
      <div className="flex md:hidden flex-col items-center w-full">
        <div className="flex items-center justify-between w-full min-h-[40px]">
          {chunkedLogos[currentLogoSlide]?.map((logoItem: Record<string, unknown>, idx: number) => (
            <div
              key={idx}
              className="flex-1 flex items-center justify-center px-1"
            >
              <img
                src={urlFor(logoItem).url()}
                alt={`Press logo ${idx + 1}`}
                className="h-[22px] w-full object-contain opacity-70 max-w-full"
              />
            </div>
          ))}
        </div>

        {chunkedLogos.length > 1 && (
          <div className="flex items-center gap-2 mt-5">
            {chunkedLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLogoSlide(index)}
                className={`rounded-full transition-all ${
                  currentLogoSlide === index
                    ? "w-2 h-2 bg-stone-900"
                    : "w-2 h-2 bg-stone-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:flex flex-nowrap items-center justify-between w-full mx-auto overflow-x-auto">
        {asSeenIn.map((logoItem: Record<string, unknown>, idx: number) => (
          <img
            key={idx}
            src={urlFor(logoItem).url()}
            alt={`Press logo ${idx + 1}`}
            className="h-[24px] lg:h-[30px] w-auto object-contain opacity-70 shrink-0"
          />
        ))}
      </div>
    </div>
  );
}