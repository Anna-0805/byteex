"use client";

import { useState } from "react";
import MobileCtaBlock from "@/components/MobileCtaBlock";
import ComfortCard from "@/components/ComfortCard";

export default function ComfortSection({ data }: { data: Record<string, unknown> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = (data?.comfortFeatures as Array<Record<string, unknown>>) || [];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full pt-12 pb-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-[26px] md:text-[32px] font-normal text-[#01005B] mb-12 tracking-wide text-center">
          Comfort made easy
        </h2>

        {features.length > 0 ? (
          <>

            <div className="flex md:hidden items-center justify-between w-full mb-10 relative">
              <button
                onClick={handlePrev}
                className="p-1 focus:outline-none z-10 shrink-0"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#676869"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex-1 flex justify-center px-2">
                <ComfortCard
                  feature={features[currentIndex]}
                  index={currentIndex}
                  isMobile={true}
                />
              </div>

              <button
                onClick={handleNext}
                className="p-1 focus:outline-none z-10 shrink-0"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#676869"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-8 w-full mb-10">
              {features.map((feature: Record<string, unknown>, index: number) => (
                <ComfortCard
                  key={index}
                  feature={feature}
                  index={index}
                  isMobile={false}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="col-span-3 text-center text-stone-400 text-sm mb-10">
            Loading cards or data missing...
          </div>
        )}
      </div>

      <div className="block w-full">
        <MobileCtaBlock
          buttonText={data?.buttonText}
          buttonLink={data?.buttonLink}
          reviewsText={data?.reviewsText}
        />
      </div>
    </section>
  );
}