"use client";

import { useState } from "react";
import { urlFor } from "@/app/lib/sanityClient";
import MobileCtaBlock from "@/components/MobileCtaBlock";

interface Feature {
  title?: string;
  description?: string;
  icon?: any;
}

interface ProudSectionProps {
  data: {
    proudTitle?: string;
    proudFeatures?: Feature[];
    proudGallery?: any[];
    asSeenIn?: any[];
    buttonText?: string;
    buttonLink?: string;
    reviewsText?: string;
  };
}

export default function ProudSection({ data }: ProudSectionProps) {
  if (!data) return null;


  const [currentLogoSlide, setCurrentLogoSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryLength = data.proudGallery?.length || 0;


  const handlePrev = () => {
    if (galleryLength === 0) return;
    setCurrentImageIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  };

  const handleNext = () => {
    if (galleryLength === 0) return;
    setCurrentImageIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  };


  const chunkedLogos = data.asSeenIn ? ([] as any[][]) : [];
  if (data.asSeenIn) {
    for (let i = 0; i < data.asSeenIn.length; i += 2) {
      chunkedLogos.push(data.asSeenIn.slice(i, i + 3));
    }
  }

  return (
    <section
      className="w-full py-8 max-w-7xl mx-auto px-8 md:px-20"
      style={{
        background:
          "linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)",
      }}
    >
      {data?.asSeenIn && data.asSeenIn.length > 0 && (
        <div className="w-full pb-12 flex flex-col items-center justify-center">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#888888] mb-6 font-sans">
            as seen in
          </span>

          <div className="flex md:hidden flex-col items-center w-full">
            <div className="flex items-center justify-between w-full min-h-[40px]">
              {chunkedLogos[currentLogoSlide]?.map(
                (logoItem: any, idx: number) => (
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
                ),
              )}
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

          <div className="hidden md:flex flex-nowrap items-center justify-center gap-8 lg:gap-16 max-w-7xl overflow-x-auto">
            {data.asSeenIn.map((logoItem: any, idx: number) => (
              <img
                key={idx}
                src={urlFor(logoItem).url()}
                alt={`Press logo ${idx + 1}`}
                className="h-[24px] lg:h-[30px] w-auto object-contain opacity-70 shrink-0"
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 block md:hidden mb-8 text-center">
        <h2 className="text-[28px] md:text-[32px] text-[#01005B] font-normal tracking-wide">
          {data.proudTitle || "Loungewear you can be proud of."}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto md:px-12 px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center order-1 md:order-2 w-full">
          <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-stone-600 hover:text-black transition-colors shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="relative w-full min-w-[303px] max-w-[433px] h-[453px] md:h-[648px] overflow-hidden shadow-md bg-stone-200">
              <div className="w-full h-full flex items-center justify-center bg-stone-300">
                {data.proudGallery && data.proudGallery.length > 0 ? (
                  <img
                    src={urlFor(data.proudGallery[currentImageIndex]).url()}
                    alt="White Robe"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-stone-500 font-medium">
                    White Robe Image
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-4 overflow-x-auto">
                {data.proudGallery?.map((image: any, i: number) => {
                  const isSelected = i === currentImageIndex;

                  return (
                    <div
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`overflow-hidden bg-stone-200 shrink-0 cursor-pointer shadow-sm transition-all w-[30px] h-[32px] ${
                        isSelected
                          ? "border-[2px] border-white box-border"
                          : "opacity-70 hover:opacity-100 border-0"
                      }`}
                    >
                      <img
                        src={urlFor(image).url()}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-stone-600 hover:text-black transition-colors shrink-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <span className="mt-4 text-[13px] text-[#676869] font-medium">
            White Robe
          </span>
        </div>

        <div className="flex flex-col items-start order-2 md:order-1">
          <h2 className="hidden md:block text-[36px] text-[#01005B] font-normal mb-8 tracking-wide">
            {data.proudTitle || "Loungewear you can be proud of."}
          </h2>

          <div className="flex md:hidden flex-col w-full space-y-8 ">
            {data.proudFeatures?.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full pb-8 border-b last:border-b-0 last:pb-0"
                style={{ borderColor: "#C4C4C480" }}
              >
                <div className="w-12 h-12 rounded-full bg-[#F9F0E5] flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                  {feature.icon && (
                    <img
                      src={urlFor(feature.icon).url()}
                      alt={feature.title || "Icon"}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-[#01005B] text-[20px] font-normal mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#676869] max-w-md leading-relaxed ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <ul className="hidden md:flex flex-col space-y-6 w-full">
            {data.proudFeatures?.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#F9F0E5] flex items-center justify-center shrink-0 mt-1 overflow-hidden shadow-sm">
                  {feature.icon && (
                    <img
                      src={urlFor(feature.icon).url()}
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
            ))}
          </ul>

          <div className="w-full md:hidden block mt-8 mx-0">
            <MobileCtaBlock
              buttonText={data?.buttonText}
              buttonLink={data?.buttonLink}
              reviewsText={data?.reviewsText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
