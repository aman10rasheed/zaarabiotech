'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, BookOpen, Users, Award, Briefcase, FlaskConical } from 'lucide-react';

const programs = [
    {
        icon: FlaskConical,
        title: 'Product Development',
        duration: '12 Weeks',
        description: 'Master the art and science of developing innovative biotech products from concept to market.',
    },
    {
        icon: BookOpen,
        title: 'Quality Control',
        duration: '8 Weeks',
        description: 'Learn industry-standard quality assurance and control methodologies.',
    },
    {
        icon: Briefcase,
        title: 'Business of Biotech',
        duration: '10 Weeks',
        description: 'Understand the commercial aspects of biotechnology entrepreneurship.',
    },
    {
        icon: Users,
        title: 'Leadership Program',
        duration: '6 Weeks',
        description: 'Develop leadership skills specific to biotech and life sciences industries.',
    },
];

const benefits = [
    'Hands-on laboratory experience',
    'Industry expert mentorship',
    'Real-world project work',
    'Placement assistance',
    'Certification recognized globally',
    'Networking opportunities',
];

const stats = [
    { number: '500+', label: 'Graduates' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Industry Partners' },
    { number: '4.9', label: 'Student Rating' },
];

export default function ProductSchoolPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-white to-[#f0fdf4]" />
                <div className="absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/20"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4" />
                            Green Innovations
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-6">
                            Zaara{' '}
                            <span className="text-[#7c3aed]">Product School</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Empowering the next generation of biotech innovators with world-class
                            education, hands-on training, and industry-ready skills.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-[#7c3aed]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <SectionWrapper background="white">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
                            Learn from Industry Leaders
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Zaara Product School is our educational initiative designed to bridge
                            the gap between academic knowledge and industry requirements in
                            biotechnology and product development.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our programs are crafted by industry experts and delivered through
                            a blend of theoretical learning, practical lab work, and real-world
                            project experience.
                        </p>
                        <ul className="grid grid-cols-2 gap-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-600">
                                    <Award className="w-5 h-5 text-[#7c3aed] flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
                                alt="Product School education"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 bg-[#7c3aed] rounded-xl p-4 shadow-xl text-white"
                        >
                            <div className="text-3xl font-bold">2024</div>
                            <div className="text-white/80">Admissions Open</div>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Programs Grid */}
            <SectionWrapper background="mint">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-[#1a1a1a]"
                    >
                        Our Programs
                    </motion.h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Choose from our range of specialized programs designed to launch your career in biotechnology.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#f3e8ff] flex items-center justify-center flex-shrink-0">
                                    <program.icon className="w-7 h-7 text-[#7c3aed]" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-[#1a1a1a]">{program.title}</h3>
                                        <span className="px-3 py-1 bg-[#dcfce7] text-[#166534] text-xs font-medium rounded-full">
                                            {program.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600">{program.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#7c3aed] to-[#0c4a6e] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="w-16 h-16 text-white/80 mx-auto mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Start Your Journey Today
                        </h2>
                        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful graduates who have launched their careers
                            in biotechnology through Zaara Product School.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="bg-white text-[#7c3aed] hover:bg-white/90 rounded-xl">
                                <Link href="/contact">
                                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-2 border-white text-[#7c3aed] hover:bg-white rounded-xl">
                                <Link href="/contact">
                                    Request Brochure
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
