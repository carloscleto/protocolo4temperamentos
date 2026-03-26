import { useEffect, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import HeadVoicesSection from "@/components/sections/HeadVoicesSection";
import WhySection from "@/components/sections/WhySection";
import StepsSection from "@/components/sections/StepsSection";
import TemperamentsSection from "@/components/sections/TemperamentsSection";
import ContentSection from "@/components/sections/ContentSection";
import ForYouSection from "@/components/sections/ForYouSection";
import PricingSummarySection from "@/components/sections/PricingSummarySection";
import PricingCtaSection from "@/components/sections/PricingCtaSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CreatorSection from "@/components/sections/CreatorSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingCta from "@/components/sections/FloatingCta";

const Index = () => {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      [25, 50, 75, 100].forEach((threshold) => {
        if (percent >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engajamento',
              event_label: `${threshold}%`,
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <div className="font-sans bg-offWhite text-nightBlue antialiased">
    <HeroSection />
    <HeadVoicesSection />
    <WhySection />
    <StepsSection />
    <TemperamentsSection />
    <ContentSection />
    <ForYouSection />
    <PricingSummarySection />
    <PricingCtaSection />
    <TestimonialSection />
    <CreatorSection />
    <FaqSection />
    <FinalCtaSection />
    <FooterSection />
    <FloatingCta />
  </div>
);

export default Index;
