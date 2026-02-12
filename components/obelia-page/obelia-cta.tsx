'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ObeliaCTA = () => {
    return (
        <section className="py-14 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-5xl font-bold text-[#0c4a6e] mb-8 leading-tight"
                >
                    Jont The <span className="text-[#166534]">ALGAE REVOLUTION</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm md:text-xl text-gray-600 mb-10 leading-relaxed uppercase"
                >
                    EMBRACE THE POWER OF NATURE&apos;S UNSUNG HEROES. CHOOSE OBELIA AND BE A PART OF THE SOLUTION,
                    ONE LIQUID TREE AT A TIME. BREATHE EASY KNOWING YOU&apos;RE MAKING A DIFFERENCE FOR OUR PLANET.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button asChild size="lg" className="bg-[#166534] hover:bg-[#14532d] text-white rounded-full px-10 py-8 text-sm md:text-xl shadow-xl shadow-[#166534]/20 group uppercase">
                        <Link href="/contact">
                            GET STARTED NOW
                            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Background blobs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#dcfce7] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 opacity-50"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e0f2fe] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-50"
            />
        </section>
    );
};
