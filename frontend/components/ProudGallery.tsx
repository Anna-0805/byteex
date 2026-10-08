"use client";

import { useState } from "react";
import { urlFor } from "@/app/lib/sanityClient";

interface ProudGalleryProps {
  proudGallery?: Record<string, unknown>[];
}

export default function ProudGallery({ proudGallery = [] }: ProudGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryLength = proudGallery.length;

  const handlePrev = () => {
    if (galleryLength === 0) return;
    setCurrentImageIndex((prev) => (prev === 0 ? galleryLength - 1 : prev - 1));
  };

  const handleNext = () => {
    if (galleryLength === 0) return;
    setCurrentImageIndex((prev) => (prev === galleryLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center order-1 md:order-2 w-full">
      <div className="flex items-center justify-center gap-2 md:gap-4 w-full">
        <button
          onClick={handlePrev}
          className="w-8 h-8 flex items-center justify-center cursor-pointer text-stone-600 hover:text-black transition-colors shrink-0"
          aria-label="Previous image"
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

        <div className="relative w-full min-w-[250px] max-w-[433px] h-[453px] md:h-[648px] overflow-hidden shadow-md bg-stone-200">
          <div className="w-full h-full flex items-center justify-center bg-stone-300">
            {galleryLength > 0 ? (
              <img
                src={urlFor(proudGallery[currentImageIndex]).url()}
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
            {proudGallery.map((image: Record<string, unknown>, i: number) => {
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
          aria-label="Next image"
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
  );
}