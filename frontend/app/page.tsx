import { client } from "@/app/lib/sanityClient";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import InfoBannerSection from "@/components/InfoBannerSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import ReviewsSection from "@/components/ReviewsSection";
import ComfortSection from "@/components/ComfortSection";
import AboutSection from "@/components/AboutSection";
import ProudSection from '@/components/ProudSection';

async function getLandingData() {
  const query = `*[_type == "landingPage"][0] {
    announcementDesktop,
    announcementMobile,
    logo {
      asset->
    },
    heroTitle,
    heroImages[] {
      _key,
      asset->
    },
    features[]{
      title,
      description,
      icon {
        asset->
      }
    },
    asSeenInTitle,
    asSeenIn[] {
      asset->
    },
    proudTitle,
    proudFeatures[]{
      icon {
        asset->
      },
      title,
      description
    },
    proudGallery[] {
      asset->
    },
    aboutImages[] {
      _key,
      asset->
    },
    storyTitle,
    storyText,
    comfortFeatures[]{
      title,
      description,
      icon {
        asset->
      }
    },
    fansPhotos[] {
      _key,
      asset->
    },
    reviews[] {
      author,
      comment,
      rating
    },
    faq[] {
      question,
      answer
    },
    faqImages[] {
      _key,
      asset->
    },
    "impactTitle": impactSection.title,
    "impactItems": impactSection.items[] {
      value,
      label,
      icon {
        asset->
      }
    },
    finalCtaSection {
      title,
      subtitle,
      buttonText,
      buttonLink,
      imageLeft {
        asset->
      },
      imageCenter {
        asset->
      },
      imageRight {
        asset->
      },
      reviewsText,
      shipsText,
      paymentIcons { // Чистый запрос для ОДНОЙ картинки (без [])
        asset->
      },
      perks[] {
        title,
        description,
        icon {
          asset->
        }
      }
    }
  }`;
  
  return await client.fetch(query, {}, { cache: 'no-store' });
}

export default async function Home() {
  const data = await getLandingData();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans text-slate-500">
        Failed to load content or landing page document is missing in Sanity.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col items-center">
      <main className="w-full flex flex-col items-center">
  
        <HeroSection data={data} />
        

        <ProudSection data={data} />


        <AboutSection data={data} />
        

        <ComfortSection data={data} />
        

        <ReviewsSection data={data} />
        

        <FAQSection data={data} />

        <InfoBannerSection data={data} />


        <FinalCtaSection data={data} />
      </main>
    </div>
  );
}
