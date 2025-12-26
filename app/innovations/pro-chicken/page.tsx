'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bird, Leaf, ShieldCheck, Truck, Award, Heart } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Algae-Based Feed',
        description: 'Our chickens are raised on proprietary algae-enriched feed for superior nutrition.',
    },
    {
        icon: ShieldCheck,
        title: 'Antibiotic Free',
        description: '100% antibiotic-free raising practices for healthier poultry products.',
    },
    {
        icon: Heart,
        title: 'Omega-3 Enriched',
        description: 'Naturally high in omega-3 fatty acids from algae-based supplementation.',
    },
    {
        icon: Award,
        title: 'Premium Quality',
        description: 'Certified premium quality meeting international food safety standards.',
    },
    {
        icon: Truck,
        title: 'Farm Fresh Delivery',
        description: 'Direct from farm to your table ensuring maximum freshness.',
    },
    {
        icon: Bird,
        title: 'Ethical Farming',
        description: 'Humanely raised in stress-free, natural environments.',
    },
];

const products = [
    {
        name: 'PRO Chicken Breast',
        description: 'Premium boneless breast with 30% more protein',
        weight: '500g',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=500',
    },
    {
        name: 'PRO Whole Chicken',
        description: 'Farm-fresh whole chicken, antibiotic-free',
        weight: '1.5kg',
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=500',
    },
    {
        name: 'PRO Chicken Drumsticks',
        description: 'Omega-3 enriched drumsticks for healthy meals',
        weight: '750g',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=500',
    },
];

const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100%', label: 'Antibiotic Free' },
    { number: '30%', label: 'More Protein' },
    { number: '5x', label: 'More Omega-3' },
];

export default function ProChickenPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fef3c7] via-white to-[#f0fdf4]" />
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#f59e0b]/20"
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
                            <Bird className="w-4 h-4" />
                            Green Innovations
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Zaara{' '}
                            <span className="text-[#f59e0b]">PRO Chicken</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Premium poultry powered by biotechnology. Our algae-fed chickens deliver
                            superior nutrition, exceptional taste, and sustainable farming practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#f59e0b]">
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
                            The Science Behind PRO Chicken
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Zaara PRO Chicken represents a revolution in poultry farming. By
                            incorporating our proprietary algae-based feed supplements, we&apos;ve
                            created chickens that are not only healthier but also more nutritious
                            for consumers.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our algae feed enriches the chicken with natural omega-3 fatty acids,
                            essential vitamins, and antioxidants—without any antibiotics or
                            artificial additives.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-[#fef3c7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#92400e]">100%</div>
                                <div className="text-sm text-gray-600">Natural Feed</div>
                            </div>
                            <div className="bg-[#dcfce7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#166534]">Zero</div>
                                <div className="text-sm text-gray-600">Antibiotics</div>
                            </div>
                            <div className="bg-[#dbeafe] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#1e40af]">Premium</div>
                                <div className="text-sm text-gray-600">Quality</div>
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
                                src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000"
                                alt="PRO Chicken farming"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -left-6 bg-[#f59e0b] rounded-xl p-4 shadow-xl text-white"
                        >
                            <div className="text-3xl font-bold">PRO</div>
                            <div className="text-white/80">Premium Quality</div>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Features Grid */}
            <SectionWrapper background="mint">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Why Choose PRO Chicken
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-[#f59e0b]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
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
                        Our Products
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
                                <div className="absolute top-4 right-4 bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {product.weight}
                                </div>
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
            <section className="bg-gradient-to-r from-[#f59e0b] to-[#166534] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Bird className="w-16 h-16 text-white/80 mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Order PRO Chicken Today
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Experience the difference of algae-fed, antibiotic-free premium poultry.
                            Available for home delivery and B2B partnerships.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-[#f59e0b] hover:bg-white/90 rounded-xl">
                                <Link href="/contact">
                                    Order Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-xl">
                                <Link href="/contact">
                                    Become a Partner
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
