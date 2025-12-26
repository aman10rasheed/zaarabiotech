'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Leaf, Wind, TreeDeciduous, Droplets, Sun } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Living Buildings',
        description: 'Algae-integrated facades that actively capture CO2 and produce oxygen.',
    },
    {
        icon: Wind,
        title: 'Air Purification',
        description: 'Bio-reactor systems that clean and purify indoor and outdoor air.',
    },
    {
        icon: TreeDeciduous,
        title: 'Carbon Capture',
        description: 'Urban installations that sequester carbon while beautifying spaces.',
    },
    {
        icon: Droplets,
        title: 'Water Treatment',
        description: 'Algae-based water purification for sustainable building operations.',
    },
    {
        icon: Sun,
        title: 'Bio-Energy',
        description: 'Renewable energy generation from algae biomass production.',
    },
    {
        icon: Building2,
        title: 'Smart Integration',
        description: 'IoT-enabled monitoring and control for optimal performance.',
    },
];

const projects = [
    {
        name: 'Obelia Urban Tower',
        location: 'Dubai, UAE',
        description: 'A 50-story commercial building with integrated algae bioreactor facade',
        image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=500',
    },
    {
        name: 'Green Campus Initiative',
        location: 'Kerala, India',
        description: 'Educational campus with living walls and carbon-neutral operations',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500',
    },
    {
        name: 'EcoStation Hub',
        location: 'California, USA',
        description: 'Transportation hub featuring bio-architecture for air purification',
        image: 'https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=500',
    },
];

export default function BioArchitecturePage() {
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
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0c4a6e]/20"
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
                            <Building2 className="w-4 h-4" />
                            Green Innovations
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Zaara Biotech{' '}
                            <span className="text-[#166534]">Bio-Architecture</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Transforming the built environment with living, breathing buildings.
                            Our bio-architecture solutions integrate algae technology into structures
                            that actively heal the environment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Obelia Section */}
            <SectionWrapper background="white">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 text-[#166534] text-sm font-medium mb-4">
                            <Leaf className="w-4 h-4" />
                            Flagship Technology
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
                            Obelia: The Future of Sustainable Buildings
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Obelia is our revolutionary bio-architecture system that transforms
                            conventional buildings into living ecosystems. By integrating advanced
                            algae bioreactors into building facades, we create structures that
                            actively capture carbon dioxide, produce oxygen, and generate renewable
                            bio-energy.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Each Obelia installation can capture up to 200 tons of CO2 annually
                            while producing valuable biomass for nutrition and energy applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-[#dcfce7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#166534]">200</div>
                                <div className="text-sm text-gray-600">Tons CO2/Year</div>
                            </div>
                            <div className="bg-[#dbeafe] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#1e40af]">50%</div>
                                <div className="text-sm text-gray-600">Energy Reduction</div>
                            </div>
                            <div className="bg-[#fef3c7] rounded-xl px-4 py-3">
                                <div className="text-2xl font-bold text-[#92400e]">10x</div>
                                <div className="text-sm text-gray-600">Air Quality Improvement</div>
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
                                src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&w=1000"
                                alt="Bio-architecture innovation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -left-6 bg-[#166534] rounded-xl p-4 shadow-xl text-white"
                        >
                            <div className="text-3xl font-bold">Obelia</div>
                            <div className="text-white/80">Living Architecture</div>
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
                        Bio-Architecture Features
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
                            <div className="w-14 h-14 rounded-xl bg-[#dcfce7] flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-[#166534]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Projects */}
            <SectionWrapper background="white">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Featured Projects
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{project.name}</h3>
                                <p className="text-[#166534] text-sm mb-2">{project.location}</p>
                                <p className="text-gray-600">{project.description}</p>
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
                        <Building2 className="w-16 h-16 text-[#4ade80] mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Transform Your Building
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Ready to make your building part of the solution?
                            Contact us to explore bio-architecture possibilities.
                        </p>
                        <Button asChild size="lg" className="bg-white text-[#166534] hover:bg-white/90 rounded-xl">
                            <Link href="/contact">
                                Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
