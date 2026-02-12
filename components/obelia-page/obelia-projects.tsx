'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Obelia Photobooth",
        location: "Infopark, Kochi, India",
        type: "Outdoor",
        desc: "300L capacity Photobooth deployed in the public interaction zone of Infopark.",
        image: "/obelia/1.png"
    },
    {
        title: "Obelia Corner Seating",
        location: "Kerala State Disaster Management, Trivandrum, India",
        type: "Indoor",
        desc: "200L capacity corner seating deployed in the Directors office of KSDMA.",
        image: "/obelia/6.png"
    },
    {
        title: "Obelia Living Seat",
        location: "Kerala Startup Mission, Kochi, India",
        type: "Outdoor",
        desc: "300L capacity Outdoor seating deployed in the food court zone of the campus.",
        image: "/obelia/3.png"
    },
    {
        title: "Obelia Brand Pod",
        location: "Allianz Office, Embassy Tower, India",
        type: "Indoor",
        desc: "100L capacity indoor standalone unit deployed in the meeting lobby of the office.",
        image: "/obelia/5.png"
    },
    {
        title: "Obelia Reception Desk",
        location: "Kerala State Disaster Management, Trivandrum, India",
        type: "Indoor",
        desc: "300L capacity reception desk deployed in the front office of KSDMA.",
        image: "/obelia/4.png"
    },
    {
        title: "Obelia Algaport (Portable)",
        location: "Park Center, Technopark, India",
        type: "Indoor",
        desc: "30L capacity portable units deployed in multiple conference halls and office in Park Center building.",
        image: "/obelia/04.jpeg"
    }
];

export const ObeliaProjects = () => {
    return (
        <section className="py-20 bg-[#0c4a6e] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#22c55e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#166534]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Our Success Stories
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 min-w-[200px]"
                    >
                        <div className="text-sm font-semibold text-[#4ade80] uppercase tracking-wider mb-2">Our Reach</div>
                        <div className="flex gap-8 text-white/80 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div>
                                <div className="text-4xl font-bold text-white">21</div>
                                <div className="text-xs mt-1 text-white/60">Commercial (India)</div>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div>
                                <div className="text-4xl font-bold text-white">01</div>
                                <div className="text-xs mt-1 text-white/60">Commercial (UAE)</div>
                            </div>
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
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors h-full flex flex-col"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20">
                                    {project.type}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start text-[#4ade80] text-xs mb-3 font-medium uppercase tracking-wide">
                                    <MapPin size={14} className="mr-1.5 mt-0.5 flex-shrink-0" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4ade80] transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-white/70 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.desc}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between group/link cursor-pointer">
                                    <span className="text-sm font-medium text-white/90 group-hover/link:text-[#4ade80] transition-colors">View Details</span>
                                    <span className="p-2 bg-white/5 rounded-full group-hover/link:bg-[#4ade80] group-hover/link:text-[#0c4a6e] transition-all">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
