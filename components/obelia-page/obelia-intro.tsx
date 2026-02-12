'use client';

import { motion } from 'framer-motion';

export const ObeliaIntro = () => {
    return (
        <section className="py-14 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-1 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0c4a6e] mb-6">
                            Can CO2 Be Gold?
                        </h2>
                        <h3 className="text-xl md:text-2xl text-[#166534] mb-6 font-medium">
                            From airborne threat to sustainable treasure
                        </h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
                            Envision a future where urban landscapes thrive on fresh, pure air instead of smog.
                            Picture a world where carbon dioxide isn&apos;t a lingering threat in our atmosphere but a
                            resource transformed into valuable biomass, driving a sustainable tomorrow.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
