'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Box, Cpu, ShoppingBag, Sun, Monitor, Armchair } from 'lucide-react';
import Image from 'next/image';

const data = [
    {
        title: "Circular Economy",
        description: "Obelia closes the loop by drawing in ambient air and channeling it into the algae chamber. There, the algae grow by absorbing CO₂ from the air. The entire system is continuously monitored through IoT technology to ensure it operates at peak efficiency. Once the algae reach optimal growth, the biomass is harvested and transferred to our laboratory for quality assurance. After verification, the biomass is repurposed into valuable products such as B-Lite cookies and Zara Pro poultry feed.",
        image: "/image003.jpeg",
        tags: ["Sustainability", "Food Security", "Zero Waste"]
    },
];

const products = [
    {
        title: "Portable 30L Indoor Unit",
        description: "Compact algae-based bio-reactor for executive rooms. Features Android-integrated IoT monitoring for real-time AQI.",
        icon: Box,
        capacity: "30L"
    },
    {
        title: "Park Benches (Public)",
        description: "Functional outdoor seating purifying air. IoT-enabled AQI monitoring with IP-rated public display.",
        icon: Armchair,
        capacity: "300L"
    },
    {
        title: "Warehouse Direction Boards",
        description: "Algae-based air purification + smart direction-guided display. IoT-linked guidance for navigation and safety.",
        icon: Monitor,
        capacity: "Custom"
    },
    {
        title: "Solar Pwd Green Ad Panel",
        description: "Merges outdoor advertising with carbon-offsetting. Solar powered, autonomous operation with AQI display.",
        icon: Sun,
        capacity: "200L"
    },
    {
        title: "Smart Bus Stop",
        description: "Integrates bioreactor with public seating and digital display panels. Solar powered clean air for commuters.",
        icon: Cpu,
        capacity: "300L"
    },
    {
        title: "Indoor Seating Spaces",
        description: "Combines comfort with sustainability. Ideal for lobbies, lounges, and co-working spaces with real-time insights.",
        icon: Armchair,
        capacity: "Custom"
    }
];

export const ObeliaProducts = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Circular Economy Splash */}
                <div className="mb-12">
                    <div className="bg-[#0c4a6e] rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-[60%_40%]">
                        <div className="p-10 md:p-16 flex flex-col justify-center text-white">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Keystone of our <span className="text-[#4ade80]">Circular Economy</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                {data[0].description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {data[0].tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full flex items-center justify-center">
                            <Image
                                src={data[0].image}
                                alt="Circular Economy"
                                width={1024}
                                height={1700}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Our Standard Design Profile</h2>
                    <p className="text-xl text-gray-600">Innovative solutions for every space</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#f0fdf4] rounded-2xl p-8 border border-[#dcfce7] hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative h-full px-8 py-4 lg:px-12 lg:py-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <product.icon size={24} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-xs font-bold uppercase tracking-wider">
                                    {product.capacity}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-[#0c4a6e] mb-3 group-hover:text-[#166534] transition-colors">{product.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <div className="flex items-center text-[#166534] font-medium text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                                View Details <ArrowRight size={16} className="ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
