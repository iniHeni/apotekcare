"use client";

import Hero from '@/components/Hero';
import CompanyOverview from '@/components/CompanyOverview';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyOverview />
      <Products/>
      <Testimonials/>
    </div>
  );
}
