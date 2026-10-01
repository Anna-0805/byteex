"use client";
import { useRef, useState, useEffect } from "react";
import { urlFor } from "@/app/lib/sanityClient";
import MobileCtaBlock from "@/components/MobileCtaBlock";

export default function ReviewsSection({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Стейт для рандомних 8 карток на мобільці
  const [randomMobilePhotos, setRandomMobilePhotos] = useState<any[]>([]);

  useEffect(() => {
    if (data?.fansPhotos && data.fansPhotos.length > 0) {
      const shuffled = [...data.fansPhotos].sort(() => 0.5 - Math.random());
      setRandomMobilePhotos(shuffled.slice(0, 8));
    }
  }, [data?.fansPhotos]);

  const scrollReviews = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth > 768 ? 400 : clientWidth;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;

      const cards = Array.from(container.children) as HTMLElement[];
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(
          card.offsetLeft - container.offsetLeft - scrollLeft,
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  const desktopPhotos = data?.fansPhotos?.slice(0, 22) || [];
  const mobilePhotos =
    randomMobilePhotos.length > 0
      ? randomMobilePhotos
      : desktopPhotos.slice(0, 8);

  return (
    <section className="w-full py-8 bg-white flex flex-col items-center overflow-hidden">
      {/* Заголовок і опис */}
      <div className="max-w-2xl mx-auto text-center mb-10 px-8 md:px-20">
        <h2 className="text-[26px] md:text-[32px] font-normal text-[#01005B] mb-4 tracking-wide">
          What are our fans saying?
        </h2>
        <p className="text-[15px] md:text-base text-[#676869] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <div className="w-full mb-14">
        <div className="grid grid-cols-4 gap-[5px] w-full md:hidden">
          {mobilePhotos.map((img: any, idx: number) => (
            <div
              key={img._key || idx}
              className="w-full aspect-square overflow-hidden bg-stone-200"
            >
              <img
                src={urlFor(img).url()}
                alt={`Fan photo ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:grid gap-[5px] grid-cols-11 gap-0 w-full">
          {desktopPhotos.length > 0 ? (
            desktopPhotos.map((img: any, idx: number) => (
              <div
                key={img._key || idx}
                className="w-full aspect-square overflow-hidden bg-stone-200"
              >
                <img
                  src={urlFor(img).url()}
                  alt={`Fan photo ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-stone-400 text-sm py-8">
              Завантаження галереї...
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-6xl px-4 relative flex flex-col items-center mb-10 px-8 md:px-20">
        <div className="w-full relative flex items-center justify-center px-8 md:px-12">
  
          <button
            onClick={() => scrollReviews("left")}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 text-[#676869] hover:text-stone-900 p-2 transition-colors cursor-pointer select-none flex items-center justify-center"
            aria-label="Previous review"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L1 9L9 17"
                stroke="#676869"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

    
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide scroll-smooth w-full py-2 items-start"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data?.reviews?.length > 0 ? (
              data.reviews.map((review: any, index: number) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start p-6 md:p-8 bg-white border border-[#EAEAEA] rounded-[8px] shadow-[0px_3px_10px_1px_#00000014] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-[39px] h-[39px] rounded-full bg-[#1C2E58] shrink-0 flex items-center justify-center text-white font-bold text-sm"></div>
                      <div>
                        <div className="text-yellow-500 text-xs tracking-widest mb-0.5">
                          {"★".repeat(review.rating || 5)}
                        </div>
                        <span className="text-[15px] font-medium text-[#676869]">
                          {review.author || "Jane, S."}
                        </span>
                      </div>
                    </div>
                    <p className="font-sans font-normal text-[12px] leading-[22px] text-[#676869]">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center text-stone-400 text-sm py-8">
                Відгуки відсутні
              </div>
            )}
          </div>


          <button
            onClick={() => scrollReviews("right")}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 text-[#676869] hover:text-stone-900 p-2 transition-colors cursor-pointer select-none flex items-center justify-center"
            aria-label="Next review"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L9 9L1 17"
                stroke="#676869"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>


        <div className="flex items-center gap-2 mt-6 md:hidden">
          {data?.reviews?.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (container) {
                  const card = container.children[idx] as HTMLElement;
                  if (card) {
                    container.scrollTo({
                      left: card.offsetLeft - container.offsetLeft,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "bg-stone-900" : "bg-stone-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>



      <div className="block w-full px-8 ">
        <MobileCtaBlock
          buttonText={data?.buttonText}
          buttonLink={data?.buttonLink}
          reviewsText={data?.reviewsText}
        />
      </div>
    </section>
  );
}
