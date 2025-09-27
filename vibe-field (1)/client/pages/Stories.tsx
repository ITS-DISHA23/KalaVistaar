import React from "react";
import { HeroStories } from "@/components/HeroStories";
import { ArtisanShowcase } from "@/components/ArtisanShowcase";
import ProductCta from "@/components/ProductCta";

export default function Stories() {
  return (
    <div className="pb-24">
      <HeroStories />
      <section id="stories-grid" className="container py-12">
        <ArtisanShowcase />
      </section>
      <ProductCta />
    </div>
  );
}
