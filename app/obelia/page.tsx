import { ObeliaHero } from '@/components/obelia-page/obelia-hero';
import { ObeliaIntro } from '@/components/obelia-page/obelia-intro';
import { ObeliaArchitecture } from '@/components/obelia-page/obelia-architecture';
import { ObeliaImpact } from '@/components/obelia-page/obelia-impact';
import { ObeliaFeatures } from '@/components/obelia-page/obelia-features';
import { ObeliaProducts } from '@/components/obelia-page/obelia-products';
import { ObeliaProjects } from '@/components/obelia-page/obelia-projects';
import { ObeliaCTA } from '@/components/obelia-page/obelia-cta';
import { ObeliaVideos } from '@/components/obelia-page/obelia-videos';
import { ObeliaClients } from '@/components/obelia-page/obelia-clients';
import { ObeliaFAQ } from '@/components/obelia-page/obelia-faq';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ObeliaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ObeliaHero />
            <ObeliaArchitecture />
            <ObeliaFeatures />
            <ObeliaIntro />
            <ObeliaImpact />
            <ObeliaProducts />
            <ObeliaVideos />
            <ObeliaProjects />
            <ObeliaClients />
            <ObeliaFAQ />
            <ObeliaCTA />
            <Footer />
        </main>
    );
}
