"use client";

import Image from "next/image";
import { urlFor } from "@/app/lib/sanityClient";

export default function InfoBannerSection({ data }: { data?: any }) {
  const defaultItems = [
    { value: "3,927 kg", label: "of CO2 saved" },
    { value: "2,546,167 days", label: "of drinking water saved" },
    { value: "7,321 kWh", label: "of energy saved" },
  ];

  const items = data?.impactItems?.length ? data.impactItems : defaultItems;

  return (
    <section className="w-full bg-[#F0EEEF] py-16 px-6">
      <div className="max-w-[700px] mx-auto flex flex-col items-center">
        {/* Заголовок секції */}
        <h3 className="text-[25px] font-normal text-[#01005B] mb-4 tracking-wide text-center">
          {data?.impactTitle || "Our total green impact"}
        </h3>

        <div className="w-full flex flex-col max-w-[300px] md:hidden">
          {items.slice(0, 2).map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center py-6 px-6 text-center w-full"
            >
              <div className="w-[42px] h-[42px] bg-[#E4E4E4] rounded-full flex items-center justify-center text-[#01005B] mb-4 shadow-sm overflow-hidden relative">
                {item.icon ? (
                  <Image
                    src={urlFor(item.icon).url()}
                    alt={item.label || "icon"}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6"
                  />
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h10a4 4 0 001.5-7.7A5 5 0 0012 6a5 5 0 00-9 4.3A3.99 3.99 0 003 15z"
                    />
                  </svg>
                )}
              </div>

              <span className="text-[22px] font-semibold leading-[20px] tracking-[0.02em] text-[#15005B] mb-1">
                {item.value}
              </span>

              {/* Підпис */}
              <span className="text-[14px] font-normal leading-[20px] tracking-[0.03em] text-[#2A2996]">
                {item.label}
              </span>

              <div className="w-full border-t border-[#C4C4C4]/50 mt-6" />
            </div>
          ))}
        </div>

        <div className="w-full hidden md:grid grid-cols-3 bg-transparent relative">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center py-8 px-6 text-center relative"
            >
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[122px] bg-[#C4C4C4]/50" />
              )}

              <div className="w-[42px] h-[42px] bg-[#E4E4E4] rounded-full flex items-center justify-center text-[#01005B] mb-4 shadow-sm overflow-hidden relative">
                {item.icon ? (
                  <Image
                    src={urlFor(item.icon).url()}
                    alt={item.label || "icon"}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6"
                  />
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h10a4 4 0 001.5-7.7A5 5 0 0012 6a5 5 0 00-9 4.3A3.99 3.99 0 003 15z"
                    />
                  </svg>
                )}
              </div>

              <span className="text-[22px] font-semibold leading-[20px] tracking-[0.02em] text-[#15005B] mb-1">
                {item.value}
              </span>

              <span className="text-[14px] font-normal leading-[20px] tracking-[0.03em] text-[#2A2996]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
