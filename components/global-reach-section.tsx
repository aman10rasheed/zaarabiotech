'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Globe, MapPin, Users, Leaf } from 'lucide-react';

// Dynamic import to avoid SSR issues with amCharts
const WorldMap3D = dynamic(() => import('./world-map-3d'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#0a1f15] rounded-2xl">
            <div className="w-10 h-10 border-2 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
        </div>
    ),
});

const regions = [
    { name: 'India', flag: '🇮🇳', description: 'Headquarters & R&D Hub' },
    { name: 'UAE', flag: '🇦🇪', description: 'Middle East Operations' },
    { name: 'United Kingdom', flag: '🇬🇧', description: 'European Research' },
    { name: 'United States', flag: '🇺🇸', description: 'Zaara Biotech Inc.' },
    { name: 'Canada', flag: '🇨🇦', description: 'Feed & Fertilizers R&D' },
];

export const GlobalReachSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-20 md:py-32 bg-[#0a1f15] overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#22c55e]/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0c4a6e]/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Map on Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative h-[400px] md:h-[500px] lg:h-[550px] order-2 lg:order-1"
                    >
                        <WorldMap3D className="w-full h-full" />
                        {/* Legend */}
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-xs text-white/70">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                                <span>Zaara Biotech Presence</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content on Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                            <Globe className="w-4 h-4 text-[#22c55e]" />
                            <span className="text-white/90 font-medium text-sm">
                                Global Presence
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Engineering Nature&apos;s Intelligence,{' '}
                            <span className="text-[#22c55e]">Worldwide</span>
                        </h2>

                        <p className="text-base md:text-lg text-white/70 leading-relaxed">
                            From our headquarters in Kerala, India, Zaara Biotech has expanded across
                            five countries, bringing sustainable biotechnology solutions to global markets.
                            Our diverse team spans continents, united by a mission to address the world&apos;s
                            food and energy challenges through micro-algae innovation.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-[#22c55e]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">5 Countries</h3>
                                </div>
                                <p className="text-sm text-white/60">
                                    Operations spanning India, UAE, UK, USA, and Canada with dedicated teams
                                    in each region.
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#22c55e]/20 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#22c55e]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">15+ Experts</h3>
                                </div>
                                <p className="text-sm text-white/60">
                                    A multidisciplinary team of scientists, engineers, and innovators
                                    driving biotechnology forward.
                                </p>
                            </div>
                        </div>

                        {/* Country Presence */}
                        <div className="pt-4">
                            <p className="text-sm font-medium text-white/80 mb-4">Our Global Offices:</p>
                            <div className="flex flex-wrap gap-3">
                                {regions.map((region) => (
                                    <div
                                        key={region.name}
                                        className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2"
                                    >
                                        <span className="text-lg">{region.flag}</span>
                                        <div>
                                            <span className="text-sm font-medium text-white">{region.name}</span>
                                            <p className="text-xs text-white/50">{region.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Points */}
                        <div className="pt-4">
                            <div className="flex flex-wrap gap-4 text-sm text-white/60">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                    <span>24/7 Global Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                                    <span>Cross-border R&D</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Leaf className="w-4 h-4 text-[#22c55e]" />
                                    <span>Sustainable Solutions</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReachSection;
