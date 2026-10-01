"use client";

import { urlFor } from "@/app/lib/sanityClient";

interface Feature {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface ProudFeatureItemProps {
  feature: Feature;
  isMobile?: boolean;
}

export default function ProudFeatureItem({ feature, isMobile = false }: ProudFeatureItemProps) {
  const iconUrl = feature.icon ? urlFor(feature.icon).url() : null;

  if (isMobile) {
    return (
      <div
        className="flex flex-col items-center text-center w-full pb-8 border-b last:border-b-0 last:pb-0"
        style={{ borderColor: "#C4C4C480" }}
      >
        <div className="w-12 h-12 rounded-full bg-[#F9F0E5] flex items-center justify-center mb-4 overflow-hidden shadow-sm">
          {iconUrl && (
            <img
              src={iconUrl}
              alt={feature.title || "Icon"}
              className="w-6 h-6 object-contain"
            />
          )}
        </div>
        <h3 className="text-[#01005B] text-[20px] font-normal mb-2 tracking-wide">
          {feature.title}
        </h3>
        <p className="text-[14px] text-[#676869] max-w-md leading-relaxed">
          {feature.description}
        </p>
      </div>
    );
  }

  return (
    <li className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-[#F9F0E5] flex items-center justify-center shrink-0 mt-1 overflow-hidden shadow-sm">
        {iconUrl && (
          <img
            src={iconUrl}
            alt={feature.title || "Icon"}
            className="w-5 h-5 object-contain"
          />
        )}
      </div>
      <div>
        <strong className="text-slate-900 block text-base font-medium">
          {feature.title}
        </strong>
        <p className="text-sm text-stone-600 mt-1">
          {feature.description}
        </p>
      </div>
    </li>
  );
}