import { setRequestLocale } from "next-intl/server";

import Navbar from "@/components/navigation/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import type { AppLocale } from "@/i18n/routing";

type HomePageProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
        <NewsletterSection />
        <FaqSection />
      </main>

      <Footer />
    </>
  );
}