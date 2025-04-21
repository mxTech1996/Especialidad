'use client';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import ServicesOverview from '@/components/organisms/Services';
import TestimonialCarousel from '@/components/organisms/Testimonials';
import Values from '@/components/organisms/Values';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <Hero />

      <ServicesOverview />
      <Values />
      <Products />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
