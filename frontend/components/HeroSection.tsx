"use client";

import { urlFor } from "@/app/lib/sanityClient";
import HeroFeatures from "./HeroFeatures";
import HeroReviewCard from "./HeroReviewCard";

interface Feature {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface LandingData {
  announcementDesktop?: string;
  announcementMobile?: string;
  logo?: Record<string, unknown>;
  heroTitle?: string;
  heroImages?: Record<string, unknown>[];
  features?: Feature[];
  heroReviewTextMobile?: string;
  reviews?: Array<{ comment?: string }>;
}

interface HeroSectionProps {
  data: LandingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;

  const collageImages = data?.heroImages || [];

  return (
    <>
      {data?.announcementDesktop && (
        <div className="hidden md:block w-full bg-[#F9F0E5] text-center text-[#565656] font-normal text-[11px] leading-[35px] tracking-[0.08em] uppercase">
          {data.announcementDesktop}
        </div>
      )}

      {data?.announcementMobile && (
        <div className="block md:hidden w-full bg-[#F9F0E5] text-center text-[#565656] font-normal text-[11px] leading-[35px] tracking-[0.08em] uppercase px-4">
          {data.announcementMobile}
        </div>
      )}

      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-20 flex flex-col">
        <div className="flex justify-center md:justify-start pt-[14px] md:pt-[33px] pb-2 md:pb-6">
          {data?.logo ? (
            <img
              src={urlFor(data.logo).url()}
              alt="BYTEEX Logo"
              className="h-[35px] w-auto object-contain"
            />
          ) : (
            <span className="text-xl md:text-2xl font-extrabold tracking-wider uppercase text-black">
              BYTEEX
            </span>
          )}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-x-8 md:gap-x-12 pb-12 md:pt-6 pt-2 items-start">
          <div className="order-1 flex flex-col items-center md:items-start w-full">
            <h1 className="font-sans font-normal text-[26px] md:text-[38px] leading-[34px] md:leading-[45px] tracking-[0.04em] text-[#01005B] max-w-[592px] text-center md:text-left">
              {data?.heroTitle || "Don't apologize for being comfortable."}
            </h1>
          </div>

          <div className="order-2 md:col-start-2 md:col-end-3 md:row-span-4 relative flex items-center justify-center w-full max-w-[725px] md:h-[422px] h-[225px] mx-auto my-6 md:my-0 isolate">
            {collageImages.length > 0 ? (
              collageImages.slice(0, 3).map((img: any, idx: number) => {
                const wrapperStyles = [
                  "absolute top-[10%] left-1/2 -translate-x-1/2 -ml-[105px] md:-ml-[120px] lg:-ml-[170px] xl:-ml-[225px] bg-white border border-[#E6E6E6] shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-10 w-[109px] lg:w-[160px] xl:w-[209px] h-[165px] lg:h-[240px] xl:h-[316px]",
                  "absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-20 w-[136px] lg:w-[200px] xl:w-[260px] h-[221px] lg:h-[320px] xl:h-[422px] border-[2.5px] border-[#EDEDED]",
                  "absolute top-[10%] left-1/2 -translate-x-1/2 ml-[105px] md:ml-[120px] lg:ml-[170px] xl:ml-[225px] bg-white border border-[#E6E6E6] shadow-[0px_3px_10px_1px_rgba(0,0,0,0.08)] z-10 w-[109px] lg:w-[160px] xl:w-[209px] h-[165px] lg:h-[240px] xl:h-[316px]"
                ];

                const leftGradientTranslate = "translate-x-[25px] lg:translate-x-[30px] xl:translate-x-[57px]";
                const rightGradientTranslate = "-translate-x-[25px] lg:-translate-x-[30px] xl:-translate-x-[57px]";

                return (
                  <div key={img._key || idx} className={wrapperStyles[idx % wrapperStyles.length]}>
                    {idx === 0 && (
                      <div className={`absolute top-1/2 right-full -translate-y-1/2 ${leftGradientTranslate} w-[70px] lg:w-[100px] xl:w-[134px] h-[99px] lg:h-[140px] xl:h-[189px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] -z-10 pointer-events-none hidden md:block`} />
                    )}
                    <div className="w-full h-full overflow-hidden relative z-10">
                      <img
                        src={urlFor(img).url()}
                        alt={`Collage image ${idx + 1}`}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    </div>
                    {idx === 2 && (
                      <div className={`absolute top-1/2 left-full -translate-y-1/2 ${rightGradientTranslate} w-[70px] lg:w-[100px] xl:w-[134px] h-[99px] lg:h-[140px] xl:h-[189px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] -z-10 pointer-events-none hidden md:block`} />
                    )}
                  </div>
                );
              })
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
                Upload photos in the Sanity panel....
              </div>
            )}
          </div>

          <div className="order-3 md:col-start-1 md:col-end-2 w-full flex flex-col items-start px-4 md:px-0">
            <HeroFeatures features={data?.features} />
          </div>

          <div className="order-4 md:col-start-1 md:col-end-2 w-full flex flex-col items-start mt-6 md:mt-[39px]">
            <a
              href="#customize"
              className="w-full md:w-[356px] h-[56px] rounded-[5px] bg-[#01005B] hover:bg-[#02017a] text-white text-[18px] font-normal tracking-[3%] leading-[100%] relative flex items-center justify-center transition-colors shadow-sm"
              style={{ fontFamily: "Suisse Int'l, sans-serif" }}
            >
              <span>Customize Your Outfit</span>
              <img
                src="/arrow.svg"
                alt="arrow"
                className="absolute right-6 w-[24px] h-[16px] translate-y-[12px] object-contain"
              />
            </a>
          </div>
      
          <div className="order-5 w-full flex flex-col items-start mt-8 md:mt-10 -mb-16 md:-mb-24 relative z-40">
            <HeroReviewCard
              reviewTextMobile={data?.heroReviewTextMobile}
              desktopComment={data?.reviews?.[0]?.comment}
            />
          </div>
        </div>
      </div>
    </>
  );
}