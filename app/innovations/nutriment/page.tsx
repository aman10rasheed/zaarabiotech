'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Apple, Wheat, FlaskConical, HeartPulse, Package } from 'lucide-react';

const services = [
    {
        icon: FlaskConical,
        title: 'Nutritional Research',
        description: 'Advanced research in micro-algae based nutrition solutions for enhanced health outcomes.',
    },
    {
        icon: Apple,
        title: 'Functional Foods',
        description: 'Development of nutrient-rich food products using sustainable algae technology.',
    },
    {
        icon: HeartPulse,
        title: 'Health Supplements',
        description: 'Premium dietary supplements powered by natural algae-derived compounds.',
    },
    {
        icon: Wheat,
        title: 'Agricultural Nutrition',
        description: 'Algae-based fertilizers and plant nutrition solutions for sustainable farming.',
    },
    {
        icon: Package,
        title: 'B2B Solutions',
        description: 'White-label nutrition ingredients for food manufacturers and supplement brands.',
    },
    {
        icon: Leaf,
        title: 'Sustainable Sourcing',
        description: 'Eco-friendly ingredient sourcing with minimal environmental footprint.',
    },
];

const products = [
    {
        name: 'NutriAlgae Plus',
        description: 'Complete nutritional supplement with essential amino acids and vitamins',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=500',
    },
    {
        name: 'GreenProtein Powder',
        description: 'Plant-based protein powder from spirulina and chlorella',
        image: 'https://images.unsplash.com/photo-1622485831122-e89e6ec48e75?q=80&w=500',
    },
    {
        name: 'AlgaeOmega-3',
        description: 'Sustainable omega-3 fatty acids from marine microalgae',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500',
    },
];

export default function NutrimentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-white to-[#fef3c7]" />
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
                            <Apple className="w-4 h-4" />
                            Green Innovations
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Zaara Biotech{' '}
                            <span className="text-[#166534]">Nutriment Private Limited</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Pioneering nutrition innovation through sustainable micro-algae technology.
                            We develop cutting-edge nutritional solutions that nourish people while
                            protecting our planet.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <SectionWrapper background="white">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
                            Nutrition Innovation for a Better Tomorrow
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Zaara Biotech Nutriment Private Limited is our dedicated nutrition research
                            and development arm. We harness the power of micro-algae to create
                            sustainable, nutrient-dense products that address global nutrition challenges.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our proprietary algae cultivation technology allows us to produce
                            high-quality proteins, omega-3 fatty acids, vitamins, and minerals
                            with a fraction of the environmental impact of traditional sources.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-[#dcfce7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#166534]">50+</div>
                                <div className="text-sm text-gray-600">Nutrition Products</div>
                            </div>
                            <div className="bg-[#fef3c7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#92400e]">100%</div>
                                <div className="text-sm text-gray-600">Plant-Based</div>
                            </div>
                            <div className="bg-[#dbeafe] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#1e40af]">15+</div>
                                <div className="text-sm text-gray-600">Countries Served</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1622485831122-e89e6ec48e75?q=80&w=1000"
                                alt="Nutrition innovation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Services Grid */}
            <SectionWrapper background="mint">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Our Nutrition Solutions
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#dcfce7] flex items-center justify-center mb-4">
                                <service.icon className="w-7 h-7 text-[#166534]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Featured Products */}
            <SectionWrapper background="white">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Featured Products
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{product.name}</h3>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#166534] to-[#0c4a6e] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Partner With Us
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Looking for sustainable nutrition solutions for your products?
                            Let&apos;s discuss how we can work together.
                        </p>
                        <Button asChild size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-xl">
                            <Link href="/contact">
                                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
