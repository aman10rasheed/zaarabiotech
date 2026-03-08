'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Box, Cpu, Sun, Monitor, Armchair } from 'lucide-react';
import Image from 'next/image';

const data = [
    {
        title: "Circular Economy",
        description: "Obelia closes the loop by drawing in ambient air and channeling it into the algae chamber. There, the algae grow by absorbing CO₂ from the air. The entire system is continuously monitored through IoT technology to ensure it operates at peak efficiency. Once the algae reach optimal growth, the biomass is harvested and transferred to our laboratory for quality assurance. After verification, the biomass is repurposed into valuable products such as B-Lite cookies and Zara Pro poultry feed.",
        image: "/image003.png",
        tags: ["Sustainability", "Food Security", "Zero Waste"]
    },
];

const products = [
    {
        title: "Portable 30L / Indoor Unit",
        description: "Compact algae-based bio-reactor for executive rooms. Features Android-integrated IoT monitoring for real-time AQI.",
        icon: Box,
        capacity: "30L",
        image: "/products/Product01.png"
    },
    {
        title: "Modular Seating 100L / Indoor Unit",
        description: "Flexible indoor seating purifying air. Integrated IoT monitoring for air quality and system health.",
        icon: Armchair,
        capacity: "100L",
        image: "/products/Product02.png"
    },
    {
        title: "Solar Pwd Green Ad Board 300L / Outdoor Unit",
        description: "Merges outdoor advertising with carbon-offsetting. Solar powered, autonomous operation with AQI display.",
        icon: Sun,
        capacity: "300L",
        image: "/products/Product03.png"
    },
    {
        title: "Warehouse Direction Board 100L / Indoor Unit",
        description: "Algae-based air purification + smart direction-guided display. IoT-linked guidance for navigation and safety.",
        icon: Monitor,
        capacity: "100L",
        image: "/products/Product04.png"
    },
    {
        title: "Smart Bus Stop / Outdoor Unit",
        description: "Integrates bioreactor with public seating and digital display panels. Solar powered clean air for commuters.",
        icon: Cpu,
        capacity: "300L",
        image: "/products/Product05.png"
    },
    {
        title: "Public Seating 100L / Outdoor Unit",
        description: "Functional outdoor seating purifying air. IoT-enabled AQI monitoring with IP-rated public display.",
        icon: Armchair,
        capacity: "100L",
        image: "/products/Product06.jpg"
    }
];

export const ObeliaProducts = () => {
    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Circular Economy Splash */}
                <div className="mb-26">
                    <div className="bg-[#0c4a6e] rounded-xl overflow-hidden shadow-2xl grid lg:grid-cols-[50%_50%]">
                        <div className="px-10 py-10 flex flex-col justify-center text-white">
                            <h2 className="text-2xl md:text-5xl font-bold mb-6">The Keystone of our <span className="text-[#4ade80]">Circular Economy</span></h2>
                            <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-8">
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
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* Product Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c4a6e] to-[#166534] pb-4 mb-6">Our Standard Design Profile</h2>
                    <p className="text-sm md:text-lg text-gray-600">Innovative solutions for every space</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#f0fdf4] rounded-2xl overflow-hidden border border-[#dcfce7] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-black/50 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider border border-white/20">
                                        {product.capacity}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-4 gap-4">
                                    <h3 className="text-xl font-bold text-[#0c4a6e] group-hover:text-[#166534] transition-colors line-clamp-2">
                                        {product.title.split(' / ')[0]}
                                    </h3>
                                    <div className="flex-shrink-0 flex items-center bg-[#166534] rounded-full px-3 py-1 text-white shadow-lg shadow-[#166534]/20 gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap opacity-90">
                                            {product.title.split(' / ')[1]}
                                        </span>
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <product.icon size={14} />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex items-center text-[#166534] font-medium text-sm group-hover:translate-x-2 transition-transform cursor-pointer mt-auto">
                                    View Details <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
