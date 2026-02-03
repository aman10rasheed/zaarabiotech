'use client';

import { motion } from 'framer-motion';
import { Fingerprint, Leaf, Palette, Recycle, Smile, Wrench } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: Leaf,
        title: "Reducing Carbon Footprint",
        description: "Obelia uses algae-based bioreactors integrated into architectural structures to actively capture CO₂ and air pollutants. Through photosynthesis, the algae convert carbon dioxide into oxygen and biomass. The captured carbon is then transformed into value-added products, creating a closed-loop carbon cycle.",
        image: "/image001.jpeg"
    },
    {
        icon: Smile,
        title: "Mental Wellbeing",
        description: "Obelia’s bio-architecture systems continuously purify indoor air through algae-based bioreactors, enriching environments with oxygen and natural aesthetics. This improves air quality, cognitive function, and mood, creating healthier, more uplifting spaces that support mental well-being and productivity.",
    },
    {
        icon: Recycle,
        title: "Resource Recovery",
        description: "Direct carbon offsetting captures atmospheric CO₂ via photosynthesis, converting it into biomass. This biomass is utilized in Zaara’s value-added products like functional foods and bio-based materials, creating indirect carbon offsetting through sustainable production cycles.",
    },
    {
        icon: Palette,
        title: "Customized Designs & Aesthetic Integration",
        description: "Obelia systems are modular and customizable, designed to seamlessly blend biotechnology with modern architecture. Each unit can be tailored in form, scale, and finish to complement its environment—whether integrated into interiors, façades, public furniture, or green billboards.",
    },
    {
        icon: Wrench,
        title: "Ease of Maintenance",
        description: "Engineered for low-maintenance operation with automated monitoring and modular components. Each bioreactor runs in 45–60 day growth cycles, after which algae are harvested. The integrated IoT dashboard alerts users to system status.",
    },
    {
        icon: Fingerprint,
        title: "Personalised Projects",
        description: "Every Obelia project is developed through a data-driven Environmental Impact Assessment (EIA). We design custom mitigation strategies and deploy tailored Obelia systems to maximize carbon capture and ecological benefits.",
    },
    {
        icon: Fingerprint,
        title: "Personalised Projects",
        description: "Every Obelia project is developed through a data-driven Environmental Impact Assessment (EIA). We design custom mitigation strategies and deploy tailored Obelia systems to maximize carbon capture and ecological benefits.",
    }
];

export const ObeliaFeatures = () => {
    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-6">
                        Why Your Space Needs OBS
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Experience the synergy of nature and technology.
                    </p>
                </motion.div>

                <div>
                    {features
                        .filter(f => f.image === '/image001.jpeg')
                        .map((feature, index) => (
                            <MainFeature key={`main-${index}`} feature={feature} />
                        ))}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features
                            .filter(f => f.image !== '/image001.jpeg')
                            .map((feature, index) => (
                                <GridFeature key={`grid-${index}`} feature={feature} index={index} />
                            ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const MainFeature = ({ feature }: { feature: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
    >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#dcfce7] text-[#166534] mb-4">
                    <feature.icon size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#166534] to-[#22c55e] rounded-full mt-8" />
            </div>
            <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 to-transparent" />
                </div>
            </div>
        </div>
    </motion.div>
);

const GridFeature = ({ feature, index }: { feature: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group"
    >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#f0fdf4] text-[#166534] mb-6 group-hover:scale-110 transition-transform">
            <feature.icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
            {feature.description}
        </p>
    </motion.div>
);
