'use client';

import { motion } from 'framer-motion';
import { ThermometerSun, BrainCircuit, Wallet, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const impacts = [
    {
        icon: ThermometerSun,
        title: "Outside Impact",
        description: "Rising CO2 levels fuel extreme heat, unpredictable weather, and higher cooling costs. It also puts your business under pressure to meet new environmental rules and prove you’re sustainable.",
        color: "text-[#ef4444]",
        bg: "bg-[#fef2f2]"
    },
    {
        icon: BrainCircuit,
        title: "Inside Impact",
        description: "Poor ventilation traps CO2 indoors, making employees feel tired, unfocused, and less productive. Over time, it can lead to headaches, poor decision-making, and more sick days.",
        color: "text-[#f59e0b]",
        bg: "bg-[#fffbeb]"
    },
    {
        icon: Wallet,
        title: "The Real Cost",
        description: "High CO2 means lower output, more health complaints, higher energy bills, and missed opportunities for carbon credits, green certifications, and sustainability branding.",
        color: "text-[#8b5cf6]",
        bg: "bg-[#f5f3ff]"
    }
];

export const ObeliaImpact = () => {
    return (
        <section className="py-14 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-4 border border-red-100">
                            <AlertTriangle size={16} />
                            The Silent Threat
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                            How CO2 Hurts Your Business
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Carbon emissions aren&apos;t just an environmental statistic—they are an operational risk impacting health, productivity, and profitability.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/obelia/OB2.jpg"
                            alt="Impact of CO2 on business"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/70 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 ${impact.bg} rounded-xl flex items-center justify-center mb-6 ${impact.color} transition-transform group-hover:scale-110`}>
                                <impact.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{impact.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {impact.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
