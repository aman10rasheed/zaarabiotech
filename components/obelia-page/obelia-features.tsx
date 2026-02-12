'use client';

import { motion, Variants } from 'framer-motion';
import {
    Leaf,
    Target,
    TrendingUp,
    Smile,
    Recycle,
    Palette,
    Award,
    FileText
} from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "Efficient Carbon Absorption",
        description: "Using microalgae, Obelia captures carbon dioxide in the presence of sunlight and releases oxygen, enabling natural, on-site carbon capture.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: Target,
        title: "Support for Carbon Neutrality Goals",
        description: "Continuous CO₂ capture helps organizations lower their operational carbon footprint and progress toward carbon neutrality and net-zero commitments.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: TrendingUp,
        title: "Enable ESG & CSR Impact",
        description: "Obelia supports Environmental, Social, and Governance goals by delivering measurable carbon capture, improving employee wellbeing, and verified data for reporting.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: Smile,
        title: "Mental Wellbeing",
        description: "Obelia improves indoor air quality, helping reduce issues linked to Sick Building Syndrome such as headaches, fatigue, and poor concentration.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: Recycle,
        title: "Resource Recovery",
        description: "Carbon captured by Obelia is converted into valuable biomass, which is repurposed for products such as Spirulina-based cookies and poultry feed.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: Palette,
        title: "Customized Design & Aesthetic Integration",
        description: "Multiple Obelia models are tailored to match the aesthetics of each space, ensuring seamless integration into interiors, façades, and public areas.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: Award,
        title: "Support for Green Building Certification",
        description: "Obelia contributes to green building standards by improving indoor environmental quality and reducing carbon emissions.",
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        icon: FileText,
        title: "Personalized, Data-Driven Projects",
        description: "Each installation is based on an Environmental Impact Study to assess CO₂ levels, identify optimal placement, and determine the right volume.",
        color: "bg-emerald-100 text-emerald-600"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const ObeliaFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
                <div className="absolute -bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-100/30 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-2xl md:text-6xl font-extrabold text-[#0c4a6e] mb-6 tracking-tight">
                        Why Your Space Needs <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">OBELIA</span>
                    </h2>
                    <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Transforming environment with the power of nature and technology                     </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all group h-full flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-700 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
