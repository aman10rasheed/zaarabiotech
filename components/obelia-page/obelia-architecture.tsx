'use client';

import { motion } from 'framer-motion';
import { Activity, Leaf, Gauge } from 'lucide-react';
import Image from 'next/image';

const carouselImages = [
    "/Obelia- Bio.jpeg",
    "/Obelia- Bio2.jpeg",
    "/Obelia- Bio3.jpg",
];

const features = [
    {
        icon: Gauge,
        title: "AQI Monitoring",
        description: "Real-time Air Quality Index monitoring providing actionable data."
    },
    {
        icon: Leaf,
        title: "Carbon Offset",
        description: "Track carbon offsetting capabilities transparently and accurately."
    },
    {
        icon: Activity,
        title: "Public Engagement",
        description: "Client-accessible digital dashboards enabling full transparency."
    }
];

export const ObeliaArchitecture = () => {
    return (
        <section className="py-24 bg-[#f0fdf4] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-[#0c4a6e] mb-6"
                    >
                        Obelia- Bio Architecture Carbon Offset Platform
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        OBELIA pioneers the fusion of biotechnology and architecture through sustainable
                        infrastructure systems that actively purify urban air and offset carbon emissions.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-[#e5e7eb] hover:border-[#22c55e]/50 transition-colors"
                        >
                            <div className="w-14 h-14 bg-[#dcfce7] rounded-xl flex items-center justify-center mb-6 text-[#166534]">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-[#0c4a6e] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-[#4ade80]">Core Technology</h3>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                At its core, Obelia integrates an algae-based bioreactor powered by a precision pressure motor
                                that draws in ambient air. Through photosynthesis, the microalgae capture CO₂ and airborne
                                pollutants, converting them into biomass rich in proteins and Omega-3s.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Operating in 45–60 day cycles, the system is frequently maintained with automated checks where
                                the algae are harvested and the nutrient media replenished for continuous operation.
                            </p>
                        </div>
                        <div className="relative h-[300px] lg:h-[400px] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center">
                            <div className="absolute inset-0 flex items-center">
                                <motion.div
                                    className="flex gap-4 px-4"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{ width: "max-content" }}
                                >
                                    {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((src, index) => (
                                        <div key={index} className="relative w-[280px] h-[200px] md:w-[350px] md:h-[250px] flex-shrink-0 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                                            <Image
                                                src={src}
                                                alt={`Obelia Installation ${index}`}
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                </div>

            </div>
        </section>
    );
};
