'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const ObeliaHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background - matching homepage hero gradient */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: [0.42, 0, 0.58, 1],
                    }}
                    className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#22c55e]/20 via-[#0c4a6e]/10 to-transparent"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: [0.42, 0, 0.58, 1],
                    }}
                    className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#166534]/20 to-[#0c4a6e]/10"
                />

                {/* Bubbles / Algae Particles */}
                {/* Copied pattern from shared styles for consistency */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-[#166534]"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c4a6e] to-[#166534] mb-6 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">OBELIA</span>, Designed For Space and Engineered For Air
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Revolutionizing Carbon Capture and Redefining Sustainability
                    </p>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center"
                    >
                        <ArrowDown className="w-8 h-8 text-[#166534]/50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
