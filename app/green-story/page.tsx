'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, TreeDeciduous, Droplets, Sun, Wind, Recycle } from 'lucide-react';

const greenInitiatives = [
    {
        icon: Leaf,
        title: 'Micro-Algae Technology',
        description: 'Harnessing the power of micro-algae for sustainable protein production and carbon capture.',
    },
    {
        icon: TreeDeciduous,
        title: 'Carbon Neutral Operations',
        description: 'Committed to achieving carbon neutrality across all our manufacturing and research facilities.',
    },
    {
        icon: Droplets,
        title: 'Water Conservation',
        description: 'Advanced water recycling systems that reduce consumption by up to 80% in our processes.',
    },
    {
        icon: Sun,
        title: 'Renewable Energy',
        description: 'Solar and bio-energy power our facilities, reducing dependency on fossil fuels.',
    },
    {
        icon: Wind,
        title: 'Clean Air Commitment',
        description: 'Our algae systems actively purify air and produce oxygen while creating valuable products.',
    },
    {
        icon: Recycle,
        title: 'Zero Waste Philosophy',
        description: 'Every byproduct is repurposed, ensuring nothing goes to waste in our circular economy model.',
    },
];

const timeline = [
    {
        year: '2016',
        title: 'The Green Seed',
        description: 'Founded with a vision to revolutionize biotechnology through sustainable micro-algae solutions.',
    },
    {
        year: '2018',
        title: 'First Carbon Capture Project',
        description: 'Launched our pioneering Obelia bio-architecture system for urban carbon capture.',
    },
    {
        year: '2020',
        title: 'Global Green Expansion',
        description: 'Expanded operations to UAE and USA with sustainability at the core of every initiative.',
    },
    {
        year: '2022',
        title: 'Carbon Neutral Milestone',
        description: 'Achieved carbon neutrality in our primary research and production facilities.',
    },
    {
        year: '2024',
        title: 'Sustainable Future',
        description: 'Continuing to innovate with bio-based solutions that heal our planet.',
    },
];

export default function GreenStoryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]" />
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#22c55e]/20"
                    />
                    <motion.div
                        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
                        transition={{ duration: 12, repeat: Infinity }}
                        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#166534]/10"
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
                            <Leaf className="w-4 h-4" />
                            Our Green Story
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Engineering a{' '}
                            <span className="text-[#166534]">Sustainable Future</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            At Zaara Biotech, sustainability isn&apos;t just a goal—it&apos;s the foundation of everything we do.
                            Our journey is driven by a commitment to create technologies that heal our planet while
                            nourishing its people.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Mission */}
            <SectionWrapper background="white">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
                            The Heart of Our Green Journey
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            From a college project to a global biotechnology leader, Zaara Biotech has always
                            been guided by one principle: that innovation should work in harmony with nature,
                            not against it.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our micro-algae technology represents the pinnacle of this philosophy. These
                            microscopic organisms are nature&apos;s most efficient producers of protein, oxygen,
                            and renewable energy compounds—and we&apos;ve learned to harness their potential for
                            the benefit of both people and planet.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-[#166534]" />
                            </div>
                            <div>
                                <div className="font-semibold text-[#1a1a1a]">100% Committed</div>
                                <div className="text-gray-500 text-sm">to sustainable innovation</div>
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
                                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000"
                                alt="Green sustainable technology"
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
                            <div className="text-3xl font-bold">8+</div>
                            <div className="text-white/80">Years of Green Innovation</div>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Green Initiatives Grid */}
            <SectionWrapper background="mint">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-white text-[#166534] text-sm font-medium mb-4"
                    >
                        Our Initiatives
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Pillars of Sustainability
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {greenInitiatives.map((initiative, index) => (
                        <motion.div
                            key={initiative.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#dcfce7] flex items-center justify-center mb-4">
                                <initiative.icon className="w-7 h-7 text-[#166534]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{initiative.title}</h3>
                            <p className="text-gray-600">{initiative.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper background="white">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-[#dcfce7] text-[#166534] text-sm font-medium mb-4"
                    >
                        Our Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Green Milestones
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#166534] via-[#22c55e] to-[#0c4a6e] hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 inline-block">
                                        <div className="text-2xl font-bold text-[#166534] mb-2">{item.year}</div>
                                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>

                                <div className="w-4 h-4 rounded-full bg-[#166534] border-4 border-white shadow-lg z-10 hidden md:block" />

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
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
                        <Leaf className="w-16 h-16 text-[#4ade80] mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                            Join Our Green Mission
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Together, we can create a sustainable future powered by biotechnology and innovation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-xl">
                                <Link href="/green-team">
                                    Meet The Green Team <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-xl">
                                <Link href="/contact">
                                    Get in Touch
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
