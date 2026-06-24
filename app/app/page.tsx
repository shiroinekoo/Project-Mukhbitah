"use client";

import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <CTASection />
    </div>
  );
}
