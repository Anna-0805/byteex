import Link from 'next/link';

interface MobileCtaBlockProps {
  buttonText?: string;
  buttonLink?: string;
  reviewsText?: string;
}

export default function MobileCtaBlock({
  buttonText = "Customize Your Outfit",
  buttonLink = "/customize",
  reviewsText = "Over 500+ 5 Star Reviews Online",
}: MobileCtaBlockProps) {
  return (
    <div className="flex flex-col items-center mt-8 w-full px-4">
      <Link 
        href={buttonLink} 
        className="bg-[#01005B] hover:bg-[#02017a] w-full md:w-[376px] h-[56px] rounded-[5px] text-white font-normal relative flex items-center justify-center transition-all mb-3 group"
      >
        <span className="font-sans font-normal text-[18px] leading-[100%] tracking-[0.03em] text-center">
          {buttonText}
        </span>
        <img src="/arrow.svg" alt="arrow" className="absolute right-6 w-[24px] h-[16px] object-contain" />
      </Link>
      
      <div className="flex items-center gap-2 text-[12px] text-[#828282]">
        <span className="text-yellow-500 text-sm">★★★★★</span>
        <span>{reviewsText}</span>
      </div>
    </div>
  );
}