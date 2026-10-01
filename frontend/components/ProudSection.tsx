"use client";

import AsSeenInLogos from "@/components/AsSeenInLogos";
import ProudGallery from "@/components/ProudGallery";
import ProudFeatureItem from "@/components/ProudFeatureItem";
import MobileCtaBlock from "@/components/MobileCtaBlock";

interface Feature {
  title?: string;
  description?: string;
  icon?: Record<string, unknown>;
}

interface ProudSectionProps {
  data: {
    proudTitle?: string;
    proudFeatures?: Feature[];
    proudGallery?: Record<string, unknown>[];
    asSeenIn?: Record<string, unknown>[];
    buttonText?: string;
    buttonLink?: string;
    reviewsText?: string;
  };
}

export default function ProudSection({ data }: ProudSectionProps) {
  if (!data) return null;

  return (
    <section
      className="w-full pt-9 pb-8"
      style={{
        background:
          "linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)",
      }}
    >

      <AsSeenInLogos asSeenIn={data.asSeenIn} />


      <div className="max-w-6xl mx-auto px-6 block md:hidden mb-8 text-center">
        <h2 className="text-[28px] md:text-[32px] text-[#01005B] font-normal tracking-wide">
          {data.proudTitle || "Loungewear you can be proud of."}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto md:px-12 px-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <ProudGallery proudGallery={data.proudGallery} />


        <div className="flex flex-col items-start order-2 md:order-1">
          <h2 className="hidden md:block text-[36px] text-[#01005B] font-normal mb-8 tracking-wide">
            {data.proudTitle || "Loungewear you can be proud of."}
          </h2>

 
          <div className="flex md:hidden flex-col w-full space-y-8">
            {data.proudFeatures?.map((feature, index) => (
              <ProudFeatureItem key={index} feature={feature} isMobile />
            ))}
          </div>


          <ul className="hidden md:flex flex-col space-y-6 w-full">
            {data.proudFeatures?.map((feature, index) => (
              <ProudFeatureItem key={index} feature={feature} />
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