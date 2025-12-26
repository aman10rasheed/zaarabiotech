'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, Linkedin, Mail, MapPin, Globe, ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// Team data
const teamMembers = [
    {
        id: 1,
        name: 'Najeeb Bin Haneef',
        role: 'Founder & CEO',
        location: 'India',
        image: '/IMG_0739-qofqvnaq8rpc3ohhry5z1x6ipl8iujgwxed5eu3w2w.jpg',
        linkedin: '#',
        email: 'ceo@zaarabiotech.com',
        quote: 'Innovation should not just advance science, but create real-world impact. At Zaara Biotech, we\'re committed to using micro-algae technology to address the world\'s most pressing challenges.',
    },
    {
        id: 2,
        name: 'Arun Joy',
        role: 'Vice President R&D',
        location: 'India',
        initials: 'AJ',
        linkedin: '#',
        email: 'arun@zaarabiotech.com',
        quote: 'Our research in micro-algae biotechnology is opening new frontiers in sustainable food production and environmental solutions.',
    },
    {
        id: 3,
        name: 'Mohammed Riya Suneeb',
        role: 'Operations Head',
        location: 'India',
        initials: 'MR',
        linkedin: '#',
        email: 'operations@zaarabiotech.com',
        quote: 'Streamlining operations to bring innovative biotech products from lab to market efficiently and sustainably.',
    },
    {
        id: 4,
        name: 'Aditya Ganesh',
        role: 'Chief Finance Officer',
        location: 'India',
        initials: 'AG',
        linkedin: '#',
        email: 'finance@zaarabiotech.com',
        quote: 'Building financial strategies that support our mission of sustainable innovation and global expansion.',
    },
    {
        id: 5,
        name: 'Chippy Joy',
        role: 'Research Lead - Feed & Fertilizers',
        location: 'Canada',
        initials: 'CJ',
        linkedin: '#',
        email: 'chippy@zaarabiotech.com',
        quote: 'Developing algae-based solutions that revolutionize agriculture and animal nutrition across North America.',
    },
    {
        id: 6,
        name: 'Laxmi',
        role: 'Research Lead - Bioinformatics',
        location: 'UK',
        initials: 'L',
        linkedin: '#',
        email: 'laxmi@zaarabiotech.com',
        quote: 'Leveraging computational biology to accelerate our understanding of algae genetics and optimize production.',
    },
    {
        id: 7,
        name: 'Britto Lorence',
        role: 'Research Lead - FMCG',
        location: 'UK',
        initials: 'BL',
        linkedin: '#',
        email: 'britto@zaarabiotech.com',
        quote: 'Creating consumer products that bring the benefits of micro-algae to everyday life.',
    },
    {
        id: 8,
        name: 'Amjaddudheen',
        role: 'Research Lead - Bioreactor',
        location: 'India',
        initials: 'A',
        linkedin: '#',
        email: 'amjad@zaarabiotech.com',
        quote: 'Engineering bioreactor systems that maximize algae cultivation efficiency and scalability.',
    },
    {
        id: 9,
        name: 'Mohammed Hassan Siyali',
        role: 'Marketing & Finance UAE',
        location: 'UAE',
        initials: 'MH',
        linkedin: '#',
        email: 'uae@zaarabiotech.com',
        quote: 'Expanding Zaara Biotech\'s presence across the Middle East with strategic partnerships.',
    },
    {
        id: 10,
        name: 'Nelson',
        role: 'Managing Director USA',
        location: 'USA',
        initials: 'N',
        linkedin: '#',
        email: 'usa@zaarabiotech.com',
        quote: 'Leading Zaara Biotech Inc. to bring sustainable biotech solutions to the American market.',
    },
];

const regions = [
    { name: 'India', count: 9, color: 'bg-[#166534]' },
    { name: 'UK', count: 2, color: 'bg-[#0c4a6e]' },
    { name: 'UAE', count: 1, color: 'bg-[#92400e]' },
    { name: 'USA', count: 1, color: 'bg-[#7c3aed]' },
    { name: 'Canada', count: 1, color: 'bg-[#dc2626]' },
];

export default function GreenTeamPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const activeMember = teamMembers[currentIndex];

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    };

    const handleThumbnailClick = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    // Get thumbnails excluding current
    const thumbnailMembers = teamMembers
        .filter((_, i) => i !== currentIndex)
        .slice(0, 4);

    // Animation variants
    const imageVariants = {
        enter: (direction: 'left' | 'right') => ({
            y: direction === 'right' ? '100%' : '-100%',
            opacity: 0,
        }),
        center: { y: 0, opacity: 1 },
        exit: (direction: 'left' | 'right') => ({
            y: direction === 'right' ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    const textVariants = {
        enter: (direction: 'left' | 'right') => ({
            x: direction === 'right' ? 50 : -50,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: 'left' | 'right') => ({
            x: direction === 'right' ? -50 : 50,
            opacity: 0,
        }),
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-24">
                {/* Hero Section */}
                <section className="relative py-16 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff] overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#22c55e]/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0c4a6e]/10 blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-[#166534] text-sm font-medium mb-6">
                                <Leaf className="w-4 h-4 inline mr-2" />
                                The Green Team
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Meet Our{' '}
                                <span className="text-[#166534]">Green Innovators</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                A diverse team of scientists, engineers, and innovators united by a common mission:
                                engineering nature&apos;s intelligence for a sustainable future.
                            </p>
                        </motion.div>

                        {/* Global Presence Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-10 flex flex-wrap justify-center gap-3"
                        >
                            {regions.map((region) => (
                                <div
                                    key={region.name}
                                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
                                >
                                    <div className={`w-3 h-3 rounded-full ${region.color}`} />
                                    <span className="text-sm font-medium text-gray-700">{region.name}</span>
                                    <span className="text-xs text-gray-400">({region.count})</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Team Slider Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative w-full min-h-[600px] md:min-h-[550px] overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
                                {/* Left Column: Meta and Thumbnails */}
                                <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
                                    <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
                                        {/* Pagination */}
                                        <span className="text-sm text-gray-400 font-mono">
                                            {String(currentIndex + 1).padStart(2, '0')} /{' '}
                                            {String(teamMembers.length).padStart(2, '0')}
                                        </span>
                                        {/* Vertical Text */}
                                        <h2 className="text-sm font-medium tracking-widest uppercase text-[#166534] [writing-mode:vertical-rl] md:rotate-180 hidden md:block">
                                            Green Team
                                        </h2>
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    <div className="flex space-x-2 mt-8 md:mt-0">
                                        {thumbnailMembers.map((member) => {
                                            const originalIndex = teamMembers.findIndex((m) => m.id === member.id);
                                            return (
                                                <button
                                                    key={member.id}
                                                    onClick={() => handleThumbnailClick(originalIndex)}
                                                    className="overflow-hidden rounded-lg w-14 h-16 md:w-16 md:h-20 opacity-60 hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#166534] focus:ring-offset-2 border-2 border-transparent hover:border-[#22c55e]"
                                                    aria-label={`View ${member.name}`}
                                                >
                                                    {member.image ? (
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={64}
                                                            height={80}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-[#166534] to-[#22c55e] flex items-center justify-center text-white text-sm font-bold">
                                                            {member.initials}
                                                        </div>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Center Column: Main Image */}
                                <div className="md:col-span-4 relative h-80 min-h-[350px] md:min-h-[450px] order-1 md:order-2">
                                    <AnimatePresence initial={false} custom={direction}>
                                        <motion.div
                                            key={currentIndex}
                                            custom={direction}
                                            variants={imageVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl"
                                        >
                                            {activeMember.image ? (
                                                <Image
                                                    src={activeMember.image}
                                                    alt={activeMember.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-[#166534] to-[#0c4a6e] flex items-center justify-center">
                                                    <span className="text-8xl font-bold text-white/30">
                                                        {activeMember.initials}
                                                    </span>
                                                </div>
                                            )}
                                            {/* Overlay with location */}
                                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5">
                                                <MapPin className="w-4 h-4 text-[#22c55e]" />
                                                <span className="text-white text-sm">{activeMember.location}</span>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Right Column: Text and Navigation */}
                                <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3">
                                    {/* Text Content */}
                                    <div className="relative overflow-hidden pt-4 md:pt-12 min-h-[200px]">
                                        <AnimatePresence initial={false} custom={direction} mode="wait">
                                            <motion.div
                                                key={currentIndex}
                                                custom={direction}
                                                variants={textVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                            >
                                                <p className="text-sm font-medium text-[#166534] uppercase tracking-wider">
                                                    {activeMember.role}
                                                </p>
                                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                                                    {activeMember.name}
                                                </h3>
                                                <blockquote className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed italic">
                                                    &ldquo;{activeMember.quote}&rdquo;
                                                </blockquote>

                                                {/* Social Links */}
                                                <div className="flex items-center gap-3 mt-6">
                                                    <a
                                                        href={activeMember.linkedin}
                                                        className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#166534] hover:bg-[#166534] hover:text-white transition-colors"
                                                    >
                                                        <Linkedin className="w-5 h-5" />
                                                    </a>
                                                    <a
                                                        href={`mailto:${activeMember.email}`}
                                                        className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#166534] hover:bg-[#166534] hover:text-white transition-colors"
                                                    >
                                                        <Mail className="w-5 h-5" />
                                                    </a>
                                                    <div className="flex items-center gap-2 text-gray-400 ml-2">
                                                        <Globe className="w-4 h-4" />
                                                        <span className="text-sm">{activeMember.location}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex items-center space-x-3 mt-8 md:mt-0">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full w-12 h-12 border-gray-300 hover:border-[#166534] hover:bg-[#f0fdf4]"
                                            onClick={handlePrev}
                                            aria-label="Previous team member"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            className="rounded-full w-12 h-12 bg-[#166534] text-white hover:bg-[#14532d]"
                                            onClick={handleNext}
                                            aria-label="Next team member"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                        <span className="text-sm text-gray-400 ml-4">
                                            Swipe through our team
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Team Grid - Compact */}
                <section className="py-16 bg-[#f9fafb]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                Meet Everyone
                            </h2>
                            <p className="text-gray-600">
                                Click on any team member above or browse everyone below
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {teamMembers.map((member, index) => (
                                <motion.button
                                    key={member.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        window.scrollTo({ top: 400, behavior: 'smooth' });
                                    }}
                                    className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border-2 ${currentIndex === index ? 'border-[#22c55e]' : 'border-transparent'
                                        }`}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {member.image ? (
                                            <div className="w-14 h-14 rounded-full overflow-hidden mb-3">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={56}
                                                    height={56}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#166534] to-[#22c55e] flex items-center justify-center text-white text-lg font-bold mb-3">
                                                {member.initials}
                                            </div>
                                        )}
                                        <h3 className="font-medium text-gray-900 text-sm leading-tight">{member.name}</h3>
                                        <p className="text-xs text-[#166534] mt-1 line-clamp-1">{member.role}</p>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                            <MapPin className="w-3 h-3" />
                                            <span>{member.location}</span>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Us CTA */}
                <section className="py-20 bg-gradient-to-r from-[#166534] to-[#0c4a6e] text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Join Our Green Team
                            </h2>
                            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                                We&apos;re always looking for talented individuals who are passionate about
                                biotechnology and sustainability. Be part of our mission to create a better future.
                            </p>
                            <a
                                href="mailto:careers@zaarabiotech.com"
                                className="inline-flex items-center gap-2 bg-white text-[#166534] px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                careers@zaarabiotech.com
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
