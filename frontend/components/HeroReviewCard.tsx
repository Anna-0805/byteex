"use client";

interface HeroReviewCardProps {
  reviewTextMobile?: string;
  desktopComment?: string;
}

export default function HeroReviewCard({
  reviewTextMobile,
  desktopComment,
}: HeroReviewCardProps) {
  const defaultMobileText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.";
    
  const defaultDesktopText =
    "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.";

  return (
    <div className="w-full md:w-[416px] p-4 bg-white border border-stone-200 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden flex-shrink-0">
          <img
            src="/avatar.png"
            alt="Jane, S."
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm">Jane, S.</span>
          </div>
          <div className="text-yellow-500 text-xs">
            ★★★★★{" "}
            <span className="text-stone-500 text-[11px] ml-1">
              One of 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </div>

      <p className="block md:hidden text-xs text-stone-600 leading-relaxed">
        {reviewTextMobile || defaultMobileText}
      </p>

      <p className="hidden md:block text-xs text-stone-600 leading-relaxed">
        {desktopComment || defaultDesktopText}
      </p>
    </div>
  );
}