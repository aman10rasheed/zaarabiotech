'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is Obelia all about?",
        answer: "Obelia is a living air-purification system that uses naturally occurring microalgae to capture carbon dioxide and other harmful pollutants from the air and release oxygen. It is designed to improve air quality where exposure is highest."
    },
    {
        question: "How does a biological system purify urban air?",
        answer: "Within Obelia’s transparent chamber, microalgae continuously take in polluted air. Supported by water, nutrients, light, and gentle air movement, they naturally convert carbon dioxide into oxygen working silently without filters, chemicals, or noise."
    },
    {
        question: "Is Obelia focused only on carbon capture?",
        answer: "Not at all. Along with absorbing carbon dioxide (CO₂), Obelia also helps reduce particulate matter such as PM2.5 , VOC commonly produced by vehicle emissions."
    },
    {
        question: "What makes microalgae suitable for this role?",
        answer: "Microalgae are silent climate heroes, responsible for nearly 40–50% of the planet’s biological CO₂ fixation. Despite their microscopic size, they absorb as much carbon as all the world’s land plants combined making them some of the most powerful natural tools for carbon capture on Earth."
    },
    {
        question: "Why choose microalgae over conventional greenery?",
        answer: "Microalgae work continuously, day and night, grow rapidly, and require no soil. This makes them ideal for dense urban spaces where land is limited but the need for clean air is urgent."
    },
    {
        question: "Are these microalgae safe to be around?",
        answer: "Yes. The microalgae used in Obelia are non-toxic, non-allergenic, and completely safe for people, pets, and the environment. They remain securely contained and are continuously monitored within the system."
    },
    {
        question: "What gives Obelia its distinctive green glow?",
        answer: "The green illumination reflects active, healthy microalgae inside the system. It also ensures Obelia remains visible in busy urban surroundings, helping people recognize clean-air infrastructure as part of the cityscape."
    },
    {
        question: "Does the colour of Obelia stay the same over time?",
        answer: "Not always and that’s natural. As the microalgae mature, their colour may gradually shift from green to yellow. This change is part of their life cycle and is closely monitored, indicating biological activity rather than a malfunction."
    },
    {
        question: "How much energy does Obelia consume?",
        answer: "Obelia operates on minimal electricity, used only for lighting, air circulation, and sensors. The core air-cleaning function absorbing carbon dioxide and releasing oxygen is carried out naturally by the microalgae."
    },
    {
        question: "Why are lights necessary in the system?",
        answer: "The lights act as a replacement for sunlight, allowing the microalgae to remain active even at night or in shaded environments. This ensures continuous air purification throughout the day."
    },
    {
        question: "Can a compact system like this really have an impact?",
        answer: "Yes. A single 300L Obelia installation can absorb carbon dioxide equivalent to two mature trees bringing the benefits of green spaces into areas where planting of trees is not feasible."
    }
];

export const ObeliaFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dcfce7]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e0f2fe]/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c4a6e] to-[#166534] mb-2">Frequently Asked Questions</h2>
                    <p className="text-sm md:text-lg text-gray-600">Everything you need to know about OBELIA</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-sm md:text-lg font-semibold transition-colors ${activeIndex === index ? 'text-[#166534]' : 'text-gray-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`text-sm md:text-lg ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-[#166534] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
