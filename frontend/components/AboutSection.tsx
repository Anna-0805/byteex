import { urlFor } from "@/app/lib/sanityClient";
import Link from "next/link";

interface AboutSectionProps {
  data: {
    aboutImages?: any[];
    aboutTitle?: string;
    storyTitle?: string;
    storyText?: string;
    aboutButtonText?: string;
    aboutButtonLink?: string;
  };
}

export default function AboutSection({ data }: AboutSectionProps) {
  const buttonText = data?.aboutButtonText || "Customize Your Outfit";
  const buttonLink = data?.aboutButtonLink || "#";
  const titleText = data.aboutTitle || data.storyTitle || "Be your best self.";

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl bg-[#F0EEEF] mx-auto w-full">
      <h2 className="text-[26px] font-normal text-[#2A2996] mb-8 block xl:hidden text-center w-full">
        {titleText}
      </h2>

      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 xl:gap-16 items-center">
        <div className="relative flex justify-center items-center w-full xl:py-0 py-8">
          <div className="relative w-full max-w-[381.64px] h-[380px] sm:h-[410px] xl:h-[570px] mx-auto">
            <div className="absolute top-0 xl:top-[-45px] left-0 xl:left-[-80px] w-[28%] h-[24%] xl:w-[165px] xl:h-[175px] overflow-hidden shadow-lg bg-stone-200 border-[4px] border-[#F0EEEF] z-10">
              {data?.aboutImages && data.aboutImages[0] ? (
                <img
                  src={urlFor(data.aboutImages[0]).url()}
                  alt="About 1"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-200" />
              )}
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[238px] sm:w-[280px] xl:w-[381.64px] h-[300px] sm:h-[330px] xl:h-[570px] overflow-hidden shadow-xl bg-stone-300 z-0 border border-[#EDEDED]">
              {data?.aboutImages && data.aboutImages[1] ? (
                <img
                  src={urlFor(data.aboutImages[1]).url()}
                  alt="About 2"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-300" />
              )}
            </div>

            <div className="absolute bottom-[-30px] xl:bottom-[-65px] right-0 xl:right-[-80px] w-[30%] h-[24%] xl:w-[128.91px] xl:h-[175px] overflow-hidden shadow-lg bg-stone-200 border-[4px] border-[#F0EEEF] z-20">
              {data?.aboutImages && data.aboutImages[2] ? (
                <img
                  src={urlFor(data.aboutImages[2]).url()}
                  alt="About 3"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-200" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start text-left w-full ">
       
            <h2 className="hidden xl:block text-[32px] font-normal text-[#2A2996] mb-6">
              {titleText}
            </h2>

            <div className="[&>p]:mb-3 text-[15px] text-[#6C6C6C] md:px-[16px] py-[16px] md:py-[0px] leading-normal">
              {data?.storyText ? (
                <p className="whitespace-pre-line">{data.storyText}</p>
              ) : (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              )}
     
          </div>

          <Link
            href={buttonLink}
            className="bg-[#01005B] hover:bg-[#020080] w-full md:w-[376px] h-[56px] rounded-[5px] text-white font-normal relative hidden md:flex items-center justify-center transition-all mt-6 group"
          >
            <span className="font-sans font-normal text-[18px] leading-[100%] tracking-[0.03em] text-center">
              {buttonText}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
