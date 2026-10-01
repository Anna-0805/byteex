"use client";

import { useState } from "react";
import { urlFor } from "@/app/lib/sanityClient";
import MobileCtaBlock from "@/components/MobileCtaBlock";

export default function ComfortSection({ data }: { data: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = data?.comfortFeatures || [];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-8 flex flex-col items-center mx-auto px-8 md:px-20">
      <div className="w-full max-w-6xl mx-auto px-0 md:px-12 flex flex-col items-center">
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
                {(() => {
                  const feature = features[currentIndex];
                  const bgClass =
                    currentIndex === 1 ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]";
                  return (
                    <div
                      className={`flex flex-col justify-center items-center text-center p-8 rounded-[12px] ${bgClass} shadow-sm border border-stone-100 w-full aspect-square max-w-[321px]`}
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
                })()}
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
              {features.map((feature: any, index: number) => {
                const bgClasses = index === 1 ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]";
                return (
                  <div
                    key={index}
                    className={`flex flex-col justify-center items-center text-center p-8 rounded-[12px] ${bgClasses} shadow-sm border border-stone-100 h-[321px]`}
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
              })}
            </div>
          </>
        ) : (
          <div className="col-span-3 text-center text-stone-400 text-sm mb-10">
            Завантаження карток або дані відсутні...
          </div>
        )}
      </div>

      {/* Кнопка */}
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
