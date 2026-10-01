"use client";

import { useState } from "react";
import { urlFor } from "@/app/lib/sanityClient";
import MobileCtaBlock from "@/components/MobileCtaBlock";

interface FaqItem {
  question?: string;
  answer?: string;
}

interface FaqSectionProps {
  data: {
    faq?: FaqItem[];
    faqImages?: Array<Record<string, unknown>>;
    buttonText?: string;
    buttonLink?: string;
    reviewsText?: string;
  };
}

export default function FAQSection({ data }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = data?.faq || [];
  const faqImages = data?.faqImages || [];

  return (
    <section className="w-full pt-9 pb-8">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="w-full">
          <h2 className="text-[26px] font-normal text-[#01005B] text-center md:text-left mb-8 tracking-wide block md:hidden lowercase">
            Frequently asked questions.
          </h2>

          <h2 className="hidden md:block text-[32px] font-normal text-[#01005B] mb-8 tracking-wide">
            Frequently asked questions.
          </h2>

          <div className="border-t border-stone-200">
            {faqList.length > 0 ? (
              faqList.map((item: FaqItem, index: number) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-stone-200 px-2 md:px-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full py-5 flex items-center justify-between text-left text-[#01005B] font-medium text-base md:text-lg focus:outline-none transition-colors"
                    >
                      <span className="text-[18px]">{item.question}</span>
                      <span className="text-[42px] font-light ml-4 leading-none">
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-5 md:text-[15px] text-[14px] text-[#676869] leading-relaxed pr-8">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-6 text-stone-400 text-sm">
                Loading questions and answers...
              </div>
            )}
          </div>
        </div>

        <div className="relative w-full h-[520px] items-center justify-center hidden md:flex">
          <div className="relative w-full max-w-[440px] h-full">
            <div className="absolute top-[67px] left-[30px] w-[149px] h-[187px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] z-0" />
            <div className="absolute top-[330px] left-[238px] w-[149px] h-[187px] bg-gradient-to-b from-[#F9F0E5]/[0.217] to-[#F9F0E5]/[0.7] z-0" />

            {faqImages.length > 0 ? (
              faqImages.map((img: Record<string, unknown>, idx: number) => {
                const imageStyles = [
                  "absolute top-[1px] left-[221px] w-[167px] h-[253px] object-cover border-[2.5px] border-white z-20",
                  "absolute top-[129px] left-[80px] w-[227px] h-[355px] object-cover border border-[#F0EEEF] z-30",
                  "absolute top-[440px] w-[216px] h-[159px] object-cover border border-[#E6E6E6] z-10",
                ];

                const currentIdx = idx % imageStyles.length;

                const customShadow =
                  currentIdx === 0 || currentIdx === 2
                    ? { boxShadow: "0px 3px 10px 1px #00000014" }
                    : undefined;

                return (
                  <img
                    key={(img._key as string) || idx}
                    src={urlFor(img).url()}
                    alt={`FAQ Collage image ${idx + 1}`}
                    className={imageStyles[currentIdx]}
                    style={customShadow}
                  />
                );
              })
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm bg-stone-50">
                Loading collage images..
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="block md:hidden mt-8 w-full">
        <MobileCtaBlock
          buttonText={data?.buttonText}
          buttonLink={data?.buttonLink}
          reviewsText={data?.reviewsText}
        />
      </div>
    </section>
  );
}