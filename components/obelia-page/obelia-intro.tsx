'use client';

import { motion } from 'framer-motion';

export const ObeliaIntro = () => {
    return (
        <section className="py-14 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-6">
                            Can CO2 Be Gold?
                        </h2>
                        <h3 className="text-2xl text-[#166534] mb-6 font-medium">
                            From airborne threat to sustainable treasure
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Envision a future where urban landscapes thrive on fresh, pure air instead of smog.
                            Picture a world where carbon dioxide isn&apos;t a lingering threat in our atmosphere but a
                            resource transformed into valuable biomass, driving a sustainable tomorrow.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] flex items-center justify-center border border-[#166534]/10"
                    >
                        {/* Placeholder for an evocative image or abstract graphic */}
                        <div className="absolute inset-0 bg-[url('/obelia/OB1.PNG')] bg-cover bg-center opacity-80 hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="text-white text-3xl font-bold mb-2">ZAARA BIOTECH</div>
                            <div className="text-[#4ade80] text-xl">Seating Space</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
