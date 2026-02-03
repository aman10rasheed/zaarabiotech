'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Kerala State Disaster Management",
        location: "India",
        type: "Indoor Standalone",
        desc: "Wooden Teak Finish - 220L Capacity Algae Carbon Sink",
        image: "/1.png"
    },
    {
        title: "Allianz - Embassy Tower",
        location: "Technopark, India",
        type: "Indoor Customised",
        desc: "100L Capacity Algae Carbon Sink",
        image: "/4.png"
    },
    {
        title: "Kerala Technology Innovation Zone",
        location: "India",
        type: "Outdoor Seating",
        desc: "300L Space with Recycled Plastic Waste Material",
        image: "/3.png"
    },
    {
        title: "Infopark - Kochi",
        location: "India",
        type: "Outdoor Photo Booth",
        desc: "300L with Real-time LED Public Display for AQI",
        image: "/5.png"
    },
    {
        title: "Disaster Management Authority",
        location: "India",
        type: "Reception Desk",
        desc: "Customised 300L Carbon Sink with Real Time monitoring",
        image: "/6.png"
    },
    {
        title: "i2D Interiors",
        location: "Dubai, UAE",
        type: "Portable Table Top",
        desc: "20L Table top 3D printed models",
        image: "/Obelia- Bio.jpeg"
    }
];

export const ObeliaProjects = () => {
    return (
        <section className="py-24 bg-[#0c4a6e] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22c55e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#166534]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h2>
                        <p className="text-[#4ade80] text-lg">Deploying sustainability across the globe</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-8 text-white/80"
                    >
                        <div>
                            <div className="text-3xl font-bold text-white">21</div>
                            <div className="text-sm">Commercial (India)</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">01</div>
                            <div className="text-sm">Commercial (UAE)</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] to-transparent opacity-80" />

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
                                    {project.type}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-[#4ade80] text-sm mb-2">
                                    <MapPin size={14} className="mr-1" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ade80] transition-colors">{project.title}</h3>
                                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                                    {project.desc}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                    View Case Study <ArrowUpRight size={16} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
