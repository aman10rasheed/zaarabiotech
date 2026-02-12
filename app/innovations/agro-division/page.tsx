'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wheat, Leaf, Droplets, Sun, Sprout, TreeDeciduous } from 'lucide-react';

const services = [
    {
        icon: Sprout,
        title: 'Bio-Fertilizers',
        description: 'Algae-based fertilizers that enhance soil health and crop yield naturally.',
    },
    {
        icon: Leaf,
        title: 'Plant Growth Promoters',
        description: 'Natural growth stimulants derived from micro-algae extracts.',
    },
    {
        icon: Droplets,
        title: 'Soil Conditioners',
        description: 'Organic soil amendments that improve water retention and nutrient availability.',
    },
    {
        icon: Sun,
        title: 'Crop Protection',
        description: 'Bio-based solutions for sustainable pest and disease management.',
    },
    {
        icon: Wheat,
        title: 'Animal Feed Supplements',
        description: 'Algae-enriched feed additives for livestock and poultry.',
    },
    {
        icon: TreeDeciduous,
        title: 'Carbon Farming',
        description: 'Solutions for agricultural carbon sequestration and credits.',
    },
];

const products = [
    {
        name: 'AlgaFert Plus',
        description: 'Premium bio-fertilizer for enhanced crop productivity',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=500',
    },
    {
        name: 'GrowMax Solution',
        description: 'Liquid plant growth promoter for foliar application',
        image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=500',
    },
    {
        name: 'SoilLife Organic',
        description: 'Soil conditioner for organic farming operations',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=500',
    },
];

const stats = [
    { number: '10K+', label: 'Farmers Served' },
    { number: '50%', label: 'Yield Increase' },
    { number: '100%', label: 'Organic' },
    { number: '20+', label: 'States Covered' },
];

export default function AgroDivisionPage() {
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
                            <Wheat className="w-4 h-4" />
                            Green Innovations
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Zaara Biotech{' '}
                            <span className="text-[#166534]">Agro Division</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Revolutionizing agriculture with sustainable bio-solutions. Our algae-based
                            products help farmers achieve higher yields while protecting the environment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#166534]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
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
                            Sustainable Agriculture for a Growing World
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            The Agro Division of Zaara Biotech is dedicated to transforming
                            agricultural practices through innovative bio-solutions. We leverage
                            our expertise in micro-algae technology to create products that
                            enhance soil health, boost crop yields, and reduce environmental impact.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our range of bio-fertilizers, growth promoters, and soil conditioners
                            are designed to work in harmony with nature, providing farmers with
                            sustainable alternatives to chemical inputs.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-[#dcfce7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#166534]">50%</div>
                                <div className="text-sm text-gray-600">Yield Boost</div>
                            </div>
                            <div className="bg-[#fef3c7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#92400e]">30%</div>
                                <div className="text-sm text-gray-600">Water Saved</div>
                            </div>
                            <div className="bg-[#dbeafe] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#1e40af]">100%</div>
                                <div className="text-sm text-gray-600">Organic</div>
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
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000"
                                alt="Sustainable agriculture"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 bg-[#166534] rounded-xl p-4 shadow-xl text-white"
                        >
                            <div className="text-3xl font-bold">10K+</div>
                            <div className="text-white/80">Farmers Empowered</div>
                        </motion.div>
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
                        Our Agricultural Solutions
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

            {/* Products */}
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
                        <Wheat className="w-16 h-16 text-[#4ade80] mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Partner With Us for Sustainable Farming
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Join thousands of farmers who have transformed their agricultural
                            practices with our bio-solutions. Contact us for dealer inquiries
                            and bulk orders.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-xl">
                                <Link href="/contact">
                                    Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-2 border-white text-[#166534] hover:bg-white rounded-xl">
                                <Link href="/contact">
                                    Become a Dealer
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
