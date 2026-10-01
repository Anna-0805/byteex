"use client";

import { urlFor } from "@/app/lib/sanityClient";

interface Feature {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface HeroFeaturesProps {
  features?: Feature[];
}

export default function HeroFeatures({ features }: HeroFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <ul className="mt-[4px] md:mt-[32px] space-y-[26px] md:space-y-[18px] w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-4">
          <div className="w-[31px] h-[31px] rounded-full bg-[#F9F0E5] flex items-center justify-center shrink-0 mt-0.5">
            {feature.icon ? (
              <div className="w-[14px] h-[14px] flex items-center justify-center">
                <img
                  src={urlFor(feature.icon).url()}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <svg
                className="w-4 h-4 text-[#01005B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>

          <div className="flex flex-col justify-center">
            {feature.title && (
              <strong className="text-slate-900 block font-sans">
                {feature.title}
              </strong>
            )}
            {feature.description && (
              <p className="font-sans font-normal text-[13px] md:text-[15px] leading-[18px] md:leading-[23px] tracking-[0.03em] text-[#676869]">
                {feature.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}