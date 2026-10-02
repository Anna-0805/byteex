"use client";

import Link from "next/link";
import { urlFor } from "@/app/lib/sanityClient";
import MobileCtaBlock from "@/components/MobileCtaBlock";
import PerkItem from "@/components/PerkItem"; 

interface Perk {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface FinalCtaSectionProps {
  data?: {
    finalCtaSection?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
      buttonLink?: string;
      reviewsText?: string;
      perks?: Perk[];
      imageLeft?: Record<string, unknown>;
      imageCenter?: Record<string, unknown>;
      imageRight?: Record<string, unknown>;
      paymentIcons?: Record<string, unknown>;
    };
  };
}

const imageStyles = [
  "absolute top-[30px] left-[50px] md:left-[72px] w-[97px] md:w-[209px] h-[147px] md:h-[316px] object-cover border border-[#EDEDED] shadow-[0px_3px_10px_1px_#00000014] md:border-0 md:shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-10",
  "absolute top-0 left-1/2 -translate-x-1/2 w-[139px] md:w-[246px] h-[211px] md:h-[373px] object-cover border-[2px] border-[#EDEDED] md:border-0 shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-20",
  "absolute top-[30px] right-[50px] md:right-[72px] w-[97px] md:w-[209px] h-[147px] md:h-[316px] object-cover border-[#EDEDED] shadow-[0px_3px_10px_1px_#00000014] md:border-[#F0EEEF] md:shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-10",
];

export default function FinalCtaSection({ data }: FinalCtaSectionProps) {
  const ctaSection = data?.finalCtaSection;

  const title = ctaSection?.title || "Find something you love.";
  const subtitle =
    ctaSection?.subtitle ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const buttonText = ctaSection?.buttonText || "Customize Your Outfit";
  const buttonLink = ctaSection?.buttonLink || "#";
  const reviewsText =
    ctaSection?.reviewsText || "Over 500+ 5 Star Reviews Online";

  const perks = ctaSection?.perks || [];

  const collageImages = [
    ctaSection?.imageLeft,
    ctaSection?.imageCenter,
    ctaSection?.imageRight,
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <section className="w-full bg-[linear-gradient(180deg,_rgba(249,240,229,0)_50%,_rgba(249,240,229,0.18)_78.5%,_#F9F0E5_100%)] pt-12 pb-8 px-6 relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[26px] md:text-[32px] font-normal text-[#01005B] mb-[18px] md:mb-[35px] tracking-wide">
          {title}
        </h2>

        <p className="text-[15px] text-[#676869] max-w-lg mb-6 leading-relaxed block md:hidden">
          Click below to browse our collection!
        </p>
        <p className="text-[15px] text-[#676869] max-w-lg mb-0 md:mb-12 leading-relaxed hidden md:block">
          {subtitle}
        </p>

        <div className="relative w-full max-w-[420px] md:max-w-[815px] md:h-[373px] h-[215px] mx-auto mb-12 select-none">
          <div className="absolute top-1/2 -left-[1px] md:-left-[30px] -translate-y-1/2 w-[67px] md:w-[139px] h-[95px] md:h-[196px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] z-0 pointer-events-none block" />
          <div className="absolute top-1/2 -right-[1px] md:-right-[30px] -translate-y-1/2 w-[67px] md:w-[139px] h-[95px] md:h-[196px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] z-0 pointer-events-none block" />

          {collageImages.length > 0 ? (
            collageImages.map((img: Record<string, unknown>, idx: number) => (
              <img
                key={(img._key as string) || idx}
                src={urlFor(img).url()}
                alt={`Collage image ${idx + 1}`}
                className={imageStyles[idx % imageStyles.length]}
              />
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
              Loading images...
            </div>
          )}
        </div>

        <Link
          href={buttonLink}
          className="bg-[#01005B] hover:bg-[#02017a] w-[376px] h-[56px] rounded-[5px] text-white text-[16px] md:text-[18px] font-medium tracking-[0.03em] items-center justify-center gap-3 transition-all mb-2 group z-30 hidden md:flex relative"
        >
          <span>{buttonText}</span>
          <svg
            className="w-5 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        <div className="hidden md:flex w-full max-w-full px-4 flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] tracking-[0.04em] font-normal text-[#1FAD40] py-2 z-30 relative">
          <div className="flex items-center gap-1.5 font-medium">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>Ships in 1-2 Days</span>
          </div>

          {ctaSection?.paymentIcons ? (
            <img
              src={urlFor(ctaSection.paymentIcons).url()}
              alt="Payment methods"
              className="h-[22px] w-auto object-contain opacity-90 mix-blend-multiply"
            />
          ) : (
            <span className="text-gray-400 text-xs">
              Add payment system images to Sanity.
            </span>
          )}
        </div>

        <div className="block md:hidden w-[calc(100%+48px)] -mx-6">
          <MobileCtaBlock
            buttonText={buttonText}
            buttonLink={buttonLink}
            reviewsText={reviewsText}
          />
        </div>

        <div className="hidden md:flex flex-col items-center mt-[24px] w-full">
          <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-[700px] text-left">
            {perks.map((perk: Perk, index: number) => (
              <PerkItem key={index} perk={perk} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}