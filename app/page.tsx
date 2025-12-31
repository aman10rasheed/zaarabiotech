import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ServicesPreview from '@/components/services-preview';
import BliteShowcase from '@/components/blite-showcase';
import ObeliaBanner from '@/components/obelia-banner';
import CeoMessage from '@/components/ceo-message';
import PartnersSection from '@/components/partners-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ObeliaBanner />
      <BliteShowcase />
      <ServicesPreview />
      <CeoMessage />
      <PartnersSection />
      <Footer />
    </main>
  );
}
